const firstTenPrimeNums = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

/**
 * 
 * @param {*} primeArr
 * returns an object with each prime number as a key and value as an array of its multiplication with other primes 
 */
function primeProducts(primeArr) {

    let table = {}

    for (let index = 0; index < primeArr.length; index++) {
        //initialize the prime as a key with an empty array
        table[primeArr[index]] = []

        for (let i = 0; i < primeArr.length; i++) {
            let sum = primeArr[index] * primeArr[i];
            table[primeArr[index]].push(sum)
        }
    }

    return table;
}
primeProducts(firstTenPrimeNums)