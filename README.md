
Large Prime Number Geneator
=========

A very simple library to generate prime number with expected bit size.

## Installation

`npm install get-large-prime`

## Usage


```
const getlargePrime = require('get-large-parime');
```

getlargePrime(bitsize, timeout=5000) return a promise.

```
let largePrime = await getlargePrime(1024);
console.log(largePrime.toString())
```

or 
```
getlargePrime(1024).then((largePrime) => {
    console.log(largePrime.toString())
}).catch((error) => {
    console.log(error)
})
```

largePrime is a `forge.jsbn.BigInteger`

## Test

`npm test`