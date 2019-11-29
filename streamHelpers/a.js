'use strict';

const { Readable } = require('stream');
const fs = require('fs');

let num = 0;

const ReadStreamAsync = function() {
    console.log('-----')
    this.firstTime = true;

    return Readable.call(this);
}

require('util').inherits(ReadStreamAsync, Readable);

ReadStreamAsync.prototype._read = async function() {
    console.log('---- in _read')

    // let payload = '';
    // const body = await fs.createReadStream('./txt.log')

    // for await (const chunk of body) {
    //     payload += chunk;
    // }
    if (this.firstTime) {
        console.log('*******FirstTime')
        this.firstTime = false
    }
    // console.log(payload)
    // console.log('-----push')
    num++
    console.log(num)
    if (num === 5) {
        this.push(null)
    } else {
        this.push('s')
    }
}

module.exports = ReadStreamAsync