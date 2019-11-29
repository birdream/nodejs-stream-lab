'use strict';

const { Transform } = require('stream');

module.exports = new Transform({
    readableObjectMode: true,
    objectMode        : true,
    transform(chunk, encoding, callback) {
        console.log('---b')
        console.log(chunk)
        // const couple = chunk;
        // const coupleUrl = getCoupleUrl(couple);

        callback(null, chunk);
    },
    final() {
        console.log('======B finally')
    }
});
