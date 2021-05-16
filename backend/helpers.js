/**
 * 
 * @param {*} primeArr
 * returns an object with each prime number as a key and value as an array of its multiplication with other primes 
 */
async function primeProducts (primeArr) {
    if(!Array.isArray(primeArr)){ 
        throw new Error(`${primeArr} is not an array`)
    }

    let table = {}
    for (let index = 0; index < primeArr.length; index++) {
        //initialize the prime as a key with an empty array
        table[primeArr[index]] = [];

        for (let i = 0; i < primeArr.length; i++) {
            let sum = primeArr[index] * primeArr[i];
            table[primeArr[index]].push(sum)
        }
    }
    return table;
}

function isPrime(num) {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
    return num > 1;
}

async function filterPrimeArray(primeArr) {
    if(!Array.isArray(primeArr)){ 
        throw new Error(`${primeArr} is not an array`)
    }
    return primeArr.filter(isPrime)
}

module.exports = {
    filterPrimeArray,
    isPrime,
    primeProducts,
    catchErrors(fn){
        return function (req, res, next) {
          return fn(req, res, next).catch(next);
        };
      }
}