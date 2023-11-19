'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on aipgcore-p2p Module {0}'
};

module.exports = require('aipgcore-lib').errors.extend(spec);
