const prefixRegex = /^RSS_/g;

const parseEnv = () => {
    const { env, stdout } = process;

    const keysWithPrefix = Object.keys(env).filter((key) => key.match(prefixRegex));

    stdout.write(`${keysWithPrefix.join('; ')}\n`);
};

parseEnv();
