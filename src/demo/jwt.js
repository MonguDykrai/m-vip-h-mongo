const jwt = require('jsonwebtoken')
const express = require('express')
const app = express()

app.get('/', function (req, res, next) {
  jwt.sign({ phoneNumber: 18521447714, captcha: 577784 }, 'secretkey', { expiresIn: 60 }, function (err, token) {
    if (err) throw err

    res.json({token})
  })
})


app.listen(8080, function () {
  console.log('http://localhost:8080')
})