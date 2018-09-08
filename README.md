# floaties
Utilities for node.js streams.

<center>
    <img src="https://s7d1.scene7.com/is/image/BedBathandBeyond/126313261904002p?hei=350&wid=350&qlt=50,1" />
</center>


## Usage

## install
```
npm install --save node-floaties
yarn add node-floaties
```

### colorize
```js
const floaties = require('node-floaties');
process.stdin.pipe(floaties.colorize()).pipe(process.stdout);
// output is blue
process.stdin.pipe(floaties.colorize({ color: 'green' })).pipe(process.stdout);
// output is green
```

### prepend
```js
const floaties = require('node-floaties');
process.stdin.pipe(floaties.prepend('[INFO]: ')).pipe(process.stdout);
// [INFO]: your text here
```

![](./examples/screenshot.png)
