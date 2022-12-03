import { readdir } from 'fs/promises';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const sourcePath = `${__dirname}/files`;
const errorMessage = 'FS operation failed';

const list = async () => {
    readdir(sourcePath).then((files) => {
        files.forEach((file) => {
            console.log(file);
        })
    }).catch(() => {
        throw new Error(errorMessage);
    })
};

await list();
