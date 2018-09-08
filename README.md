# floaties
Utilities for node.js streams.

![](https://s7d1.scene7.com/is/image/BedBathandBeyond/126313261904002p?hei=350&wid=350&qlt=50,1)


## Usage

### colorize
```
const floaties = require('floaties');
process.stdin.pipe(floaties.colorize()).pipe(process.stdout);
// output is blue
process.stdin.pipe(floaties.colorize({ color: 'green' })).pipe(process.stdout);
// output is green
```

### prepend
```
const floaties = require('floaties');
process.stdin.pipe(floaties.prepend('[INFO]: ')).pipe(process.stdout);
// [INFO]: your text here
```
