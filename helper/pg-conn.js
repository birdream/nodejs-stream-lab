'use strict';

const Promise  = require('bluebird');
const postgres = require('pg');

module.exports = (configs, database) => {
    return new Promise(function callback(resolve, reject) {
        if (typeof configs[database] === 'undefined') {
            throw new Error('There is no configuration for database: ' + database);
        }
        /* Validate if there is a valid connection string for database */
        postgres.connect(configs[database], function callback(error, client, done) {
            if (error) {
                return reject(new Error(error));
            }

            const response = {
                client: client,
                done  : done
            };

            return resolve(response);
        });
    });
}