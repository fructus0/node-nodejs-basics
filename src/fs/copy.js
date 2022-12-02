import { readdir, constants, copyFile, mkdir } from 'fs/promises';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const sourcePath = `${__dirname}/files`;
const destinationPath = `${__dirname}/files_copy`;
const errorMessage = 'FS operation failed';

const copy = async () => {
    try {
        const files = await readdir(sourcePath);
        await mkdir(destinationPath);

        for(const file of files) {
            copyFile(`${sourcePath}/${file}`, `${destinationPath}/${file}`, constants.COPYFILE_EXCL);
        }
    } catch (error) {
        throw new Error(errorMessage);
    }

};

copy();
