import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const filePath = `${__dirname}/files/fileToWrite.txt`;
const write = async () => {
    try {
        const { stdin } = process;
        const writableStream = createWriteStream(filePath);

        stdin.pipe(writableStream)
    } catch(error) {
        throw new Error(error);
    }

};

await write();
