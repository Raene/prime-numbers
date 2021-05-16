# prime-numbers

A simple service that calculates and displays a multiplication table of prime numbers, by default it calculates the first 10 prime numbers. There is a route that takes in custom values and evaluates them for you, if they're prime numbers

Functions that make this work include:

### Prime Filter

This function found in the helpers file, helps filter out the non prime values from the array including strings and any datatype that isn't an integer, int strings would get parsed to ints and be evaluated

### Prime Product

This function calculates the products of an array that has been passed through the prime filter

## How to run

### Backend

> [!IMPORTANT]
> please make sure you have a .env matching the sampleEnv file, before you run tests set the NODE_ENV=test

To run the backend, simply clone this repo and then cd into the backend folder and
`npm install` then `node index.js` this would start a server on your localhost:3000
or if you have Docker installed, simply run `docker-compose up`

to run tests simply run `npm run test`

Available routes include:

1. Get: '/' this is the default route and it always returns the multiplication table of the first ten Prime numbers

2. Post: '/' this takes in a payload `{primeNumbers: [<primenumbers>] }` it returns the multiplication table based on the payload
