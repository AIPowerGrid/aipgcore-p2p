'use strict';

var should = require('chai').should();
var P2P = require('../../');
var builder = P2P.Messages.builder;
var aipgcore = require('aipgcore-lib');

describe('Messages Builder', function() {

  describe('@constructor', function() {

    it('should return commands based on default', function() {
      // instantiate
      var b = builder();
      should.exist(b);
    });

    it('should return commands with customizations', function() {
      // instantiate
      var b = builder({
        network: aipgcore.Networks.testnet,
        Block: aipgcore.Block,
        Transaction: aipgcore.Transaction
      });
      should.exist(b);
    });

  });

});
