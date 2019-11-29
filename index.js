const { pipeline } = require('stream');
const fs = require('fs');
const ProcessA = require('./streamHelpers/a');
const processB = require('./streamHelpers/b');
const processC = require('./streamHelpers/c');
const processD = require('./streamHelpers/d')

;(async() => {
    try {
        const processA = new ProcessA();

        await pipeline(
            processA,
            // fs.createReadStream('./txt.log'),
            processB,
            processC,
            // processD,
            (err) => {
                console.log(`------in a callback with ${err}`);
            }
        );
    } catch (error) {
        console.log('Error: ', error);
    }

})();
