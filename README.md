aipgcore P2P
=======

`aipgcore-p2p` adds [aipgcoin protocol](https://en.bitcoin.it/wiki/Protocol_documentation) support for aipgcore.

See [the main aipgcore repo](https://github.com/underdarkskies/aipgcore) for more information.

## Getting Started

```sh
npm install aipgcore-p2p
```
In order to connect to the aipgcoin network, you'll need to know the IP address of at least one node of the network, or use [Pool](/docs/pool.md) to discover peers using a DNS seed.

```javascript
var Peer = require('aipgcore-p2p').Peer;

var peer = new Peer({host: '127.0.0.1'});

peer.on('ready', function() {
  // peer info
  console.log(peer.version, peer.subversion, peer.bestHeight);
});
peer.on('disconnect', function() {
  console.log('connection closed');
});
peer.connect();
```

Then, you can get information from other peers by using:

```javascript
// handle events
peer.on('inv', function(message) {
  // message.inventory[]
});
peer.on('tx', function(message) {
  // message.transaction
});
```


## Contributing

See [CONTRIBUTING.md](https://github.com/underdarkskies/aipgcore/blob/master/CONTRIBUTING.md) on the main aipgcore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/underdarkskies/aipgcore/blob/master/LICENSE).

Copyright 2018-2019 UnderDarkSkies

Copyright 2013-2015 BitPay, Inc. 