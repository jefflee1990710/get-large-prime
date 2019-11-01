'use strict'

const {generateRandom} = require('./number')
const GCD_30_DELTA = [6, 4, 2, 4, 2, 4, 6, 2];

const getLargePrime = (bitSize, timeout=5000) => {
    let num = generateRandom(bitSize)
    return new Promise((resolve, reject) => {
        let deltaIdx = 0
        let start = new Date().getTime()
        while(true){
            if((new Date().getTime() - start) > timeout){
                reject(new Error(`Can't find prime number within ${timeout}ms`))
                break;
            }
            if(num.isProbablePrime(2)) {
                return resolve(num);
            }
            // get next potential prime
            num.dAddOffset(GCD_30_DELTA[deltaIdx++ % 8], 0);
        }
    })
}

module.exports = getLargePrime