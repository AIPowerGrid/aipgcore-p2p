'use strict';

var Message = require('../message');
var inherits = require('util').inherits;
var aipgcore = require('aipgcore-lib');
var utils = require('../utils');
var BufferReader = aipgcore.encoding.BufferReader;
var BufferWriter = aipgcore.encoding.BufferWriter;

/**
 * @param {Object=} arg
 * @param {Buffer=} arg.payload
 * @param {Buffer=} arg.signature
 * @param {Object} options
 * @extends Message
 * @constructor
 */
function AlertMessage(arg, options) {
  Message.call(this, options);
  this.command = 'alert';
  if (!arg) {
    arg = {};
  }
  this.payload = arg.payload || Buffer.alloc(32);
  this.signature = arg.signature || Buffer.alloc(32);
}
inherits(AlertMessage, Message);

AlertMessage.prototype.setPayload = function(payload) {
  var parser = new BufferReader(payload);
  this.payload = parser.readVarLengthBuffer();
  this.signature = parser.readVarLengthBuffer();
  utils.checkFinished(parser);
};

AlertMessage.prototype.getPayload = function() {
  var bw = new BufferWriter();
  bw.writeVarintNum(this.payload.length);
  bw.write(this.payload);

  bw.writeVarintNum(this.signature.length);
  bw.write(this.signature);

  return bw.concat();
};

module.exports = AlertMessage;
