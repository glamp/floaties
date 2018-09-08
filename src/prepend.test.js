const prepend  = require('./prepend');


describe('Prepend', () => {
  it('should add text to the begenning of a stream', () => {
    const Readable = require('stream').Readable;
    const s = new Readable();
    s._read = () => {}; // redundant? see update below
    s.push('your text here');

    s.pipe(prepend('foo: '))
     .on('data', data => {
       expect(data).toEqual('foo: your text here');
     });
  });
  it('should handle null values', () => {
    const Readable = require('stream').Readable;
    const s = new Readable();
    s._read = () => {}; // redundant? see update below
    s.push('your text here');

    s.pipe(prepend(null))
     .on('data', data => {
       expect(data).toEqual('your text here');
     });
  });
});
