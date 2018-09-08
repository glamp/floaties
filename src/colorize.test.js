const colorize = require('./colorize');


describe('Colorize', () => {

  it('Should turn text blue', () => {
    const Readable = require('stream').Readable;
    const s = new Readable();
    s._read = () => {}; // redundant? see update below
    s.push('this should be blue\n');
    s.push(null);

    s.pipe(colorize())
     .on('data', data => {
       console.log(data);
     });
  });

});



