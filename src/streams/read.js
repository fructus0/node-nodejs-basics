import {createReadStream} from 'fs';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const filePath = `${__dirname}/files/fileToRead.txt`

const read = async () => {
    const { stdout } = process;
    const reader = createReadStream(filePath);

    reader.on('data', (chunk) => {
        stdout.write(chunk.toString());
    });

    reader.on('end', () => {
        stdout.write('\n');
    })
};

await read();
