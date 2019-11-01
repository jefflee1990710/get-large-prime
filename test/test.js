'use strict';

var expect = require('chai').expect;
let getlargePrime = require('../index')

describe('#get-large-prime', function() {
    it('Geneate 100 1024bit prime numbers', async function() {
        let n = 100
        let totalTimeMs = 0
        for(let i = 0 ; i < n; i++ ){
            let now = new Date()
            let largePrime = await getlargePrime(1024)
            let ts = new Date().getTime() - now.getTime()
            console.log(`${i} - Done in ${ts}ms`)
            totalTimeMs += ts
            // console.log(`${largePrime.toString()}`)
            expect(largePrime.isProbablePrime())
        }
        console.log("Average generation time per prime is " + (totalTimeMs/n) + "ms")

    }).timeout(200000);
});