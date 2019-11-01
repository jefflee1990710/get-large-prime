const forge = require('node-forge')
const BigInteger = forge.jsbn.BigInteger
const THIRTY = new BigInteger(null);
THIRTY.fromInt(30);

const generateRandom = (bits) => {
    const rng = {
        nextBytes : (x) => {
            let b = forge.random.getBytesSync(x.length)
            for(let i = 0; i < x.length; i ++){
                x[i] = b.charCodeAt(i)
            }
        }
    }
    let num = new BigInteger(bits, rng)
    var bits1 = bits - 1;
    if(!num.testBit(bits1)) {
      var op_or = function(x,y) {return x|y;};
      num.bitwiseTo(BigInteger.ONE.shiftLeft(bits1), op_or, num);
    }
  
    // align number on 30k+1 boundary
    num.dAddOffset(31 - num.mod(THIRTY).byteValue(), 0);
  
    return num;
}

module.exports = {
    generateRandom
}