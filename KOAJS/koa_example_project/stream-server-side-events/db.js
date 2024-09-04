var Readable = require("stream").Readable;
var inherits = require("util").inherits;
exports.subscribe = function (event, options) {
  return Subcription(options);
};
inherits(Subcription, Readable);
function Subcription(options) {
  if (!(this instanceof Subcription)) {
    return new Subcription(options);
  }
  options = options || {};
  Readable.call(this, options);
  this.value = 0;
}
Subcription.prototype._read = function () {
  while (this.push(String(this.value++))) {}
};
