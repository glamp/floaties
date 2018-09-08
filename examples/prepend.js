const floaties = require('node-floaties');
process.stdin.pipe(floaties.prepend('[INFO]: ')).pipe(process.stdout);
