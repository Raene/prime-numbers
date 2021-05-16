require('dotenv').config()
const express = require("express");
const app = express();
var cors = require('cors');
const {catchErrors} = require("./helpers");
const {customPrimes,firstTenPrime} = require("./controllers");
app.disable("x-powered-by");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/',catchErrors(firstTenPrime));

app.post('/', catchErrors(customPrimes));

function logErrors (err, req, res, next) {
    console.error(err.stack)
    next(err)
}

app.use(logErrors);
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).json({
     message:err.message,
     status: false
    })
  })

if (process.env.NODE_ENV !== 'test') {
    app.listen(process.env.PORT, () =>
    console.log(`listening on ${process.env.PORT}!`)
  );
}

module.exports = app;