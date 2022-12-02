import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const filePath = `${__dirname}/files/fileToRead.txt`;
const errorMessage = 'FS operation failed';

const read = async () => {
    readFile(filePath, { encoding: 'utf8' }).then((content) => {
        console.log(content);
    }).catch(() => {
        throw new Error(errorMessage);
    })
};

await read();
