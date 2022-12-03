const parseArgs = () => {
    const {argv, stdout} = process;

    const args = argv.slice(2);

    for (let i = 0; i < args.length; i+=2) {
        const propName = args[i].replace('--', '');
        const propValue = args[i + 1];
        const endSymbol = i + 2 !== args.length? ',' : '';

        stdout.write(`${propName} is ${propValue}${endSymbol} `)
    }

    stdout.write('\n');
};

parseArgs();
