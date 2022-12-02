import { readFile } from 'fs/promises';
import { createHash } from 'crypto';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const filePath = `${__dirname}/files/fileToCalculateHashFor.txt`

const calculateHash = async () => {
    try {
        const fileContent = await readFile(filePath, { encoding: 'utf8' });

        const hash = createHash('sha256');
        hash.update(fileContent);

        const hex = hash.digest('hex');

        console.log(hex);
    } catch (error) {
        throw new Error(error);
    }
};

await calculateHash();
