'use strict';

const { Transform } = require('stream');

module.exports = new Transform({
    readableObjectMode: true,
    objectMode        : true,
    async transform(chunk, encoding, callback) {
        console.log('---c')
        console.log(chunk)
        // console.log(encoding)
        // let payload = ''
        // // const couple = chunk;
        // // const coupleUrl = getCoupleUrl(couple);
        // for await (const body of chunk) {
        //     payload += body;
        // }
        // console.log(payload.toString())

        callback(null, chunk);
    },
    final() {
        console.log('======C finally')
    }
});
