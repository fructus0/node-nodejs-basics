import { createGzip }  from 'zlib';
import { createReadStream, createWriteStream }  from 'fs';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const filePath = `${__dirname}/files/fileToCompress.txt`;
const resultFilePath = `${__dirname}/files/archive.gz`
const compress = async () => {
    const gzip = createGzip();
    const readStream = createReadStream(filePath);
    const writeStream = createWriteStream(resultFilePath);

    readStream.pipe(gzip).pipe(writeStream);
};

await compress();
