'use strict';

const { Transform } = require('stream');

module.exports = new Transform({
    readableObjectMode: true,
    objectMode        : true,
    transform(chunk, encoding, callback) {
        console.log('---d')
        console.log(chunk)
        // const couple = chunk;
        // const coupleUrl = getCoupleUrl(couple);

        callback('norman error', null);
    },
    final() {
        console.log('======D finally')
    }
});