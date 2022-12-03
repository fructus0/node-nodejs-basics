import { rename as fsRename, access, constants } from 'fs/promises';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const sourcePath = `${__dirname}/files/wrongFilename.txt`;
const newPath = `${__dirname}/files/properFilename.md`;
const errorMessage = 'FS operation failed';

const isResultFileAlreadyCreated = async () => {
    try {
        await access(newPath, constants.F_OK);
        return true;
    } catch(err) {
        return false;
    }
}

const rename = async () => {
    if(await isResultFileAlreadyCreated()) {
        throw new Error(errorMessage)
    }

    fsRename(sourcePath, newPath).catch(() => {
        throw new Error(errorMessage)
    })
};

await rename();
