const prepend = require('prepend-transform').default

module.exports = (text) => (
  prepend(text || ' ')
);
