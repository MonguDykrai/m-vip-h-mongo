const express = require('express')
const app = express()

app.get('/login', function (req, res, next) {
  res.redirect('/index')
})

app.get('/index', function (req, res, next) {
  res.send('hello')
})

app.listen(3000, function () {
  console.log('http://localhost:3000')
})