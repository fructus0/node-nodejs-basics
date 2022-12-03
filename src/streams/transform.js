import { Transform }  from 'stream';

const transform = async () => {
    const reverse = new Transform({
        transform(chunk, enc, callback) {
            callback(null, `${chunk.reverse().toString().trim()}\n`);
        }
    })

    process.stdin.pipe(reverse).pipe(process.stdout);
};

await transform();
