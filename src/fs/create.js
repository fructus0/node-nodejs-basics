import { writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const file = `${__dirname}/files/fresh.txt`;
const fileContent = 'I am fresh and young';
const errorMessage = 'FS operation failed';

const create = async () => {
    writeFile(file, fileContent, {
        flag: 'ax'
    }).catch(() => {
        throw new Error(errorMessage);
    })
};

await create();
