import { cpus } from 'os';
import { Worker } from 'worker_threads';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const workerPath = `${__dirname}/worker`;

const createWorker = (value) => {
    return new Promise((resolve, reject) => {
        const worker = new Worker(workerPath, {
            workerData: value
        });

        worker.on('message', (result) => {
            resolve({
                status: 'resolved',
                data: result
            });
        });

        worker.on('error', () => {
            reject({
                status: 'error',
                data: null
            });
        });
    })
}

const performCalculations = async () => {

    let currentNumber = 10;
    const workersArray = [];
    const cpuArray = cpus();

    for(const cpu of cpuArray) {
        const worker = createWorker(currentNumber++);

        workersArray.push(worker);
    }

    const workerResultArray = await Promise.allSettled(workersArray);

    console.log(workerResultArray.map((workerResult) => {
        return  workerResult.value || workerResult.reason;
    }));
};

await performCalculations();
