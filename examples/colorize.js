const floaties = require('node-floaties');
process.stdin.pipe(floaties.colorize()).pipe(process.stdout);
