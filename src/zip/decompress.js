import { createUnzip }  from 'zlib';
import { createReadStream, createWriteStream }  from 'fs';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const filePath = `${__dirname}/files/archive.gz`;
const resultFilePath = `${__dirname}/files/fileToCompress.txt`

const decompress = async () => {
    const gzip = createUnzip();
    const readStream = createReadStream(filePath);
    const writeStream = createWriteStream(resultFilePath);

    readStream.pipe(gzip).pipe(writeStream);
};

await decompress();
