const {primeProducts,filterPrimeArray} = require("./helpers");

async function firstTenPrime(req, res){
    const firstTenPrimeNums = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
    let filteredArr = await filterPrimeArray(firstTenPrimeNums);
    let payload = await primeProducts(filteredArr);
    return res.status(200).json({
        status: true,
        message: "First 10 Prime Numbers Computed",
        payload
    })
}

async function customPrimes(req, res){
    if (!req.body) {
        throw new Error(`body is empty`);
    }
    const {primeNumbers} = req.body;
    if (!primeNumbers){
        throw new Error(`field required "primeNumbers" type array`)
    }
    let filteredArr = await filterPrimeArray(primeNumbers);
    let payload = await primeProducts(filteredArr);
    return res.status(200).json({
        status: true,
        message: "Prime Numbers Computed",
        payload
    })
}

module.exports = {
    firstTenPrime,
    customPrimes
}