import { rm } from 'fs/promises';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const filePath = `${__dirname}/files/fileToRemove.txt`;
const errorMessage = 'FS operation failed';

const remove = async () => {
    rm(filePath).catch(() => {
        throw new Error(errorMessage)
    })
};

await remove();
