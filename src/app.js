var express = require('express')
var app = express()

var bodyParser = require('body-parser')

var history = require('connect-history-api-fallback')

var installMemoryCache = require('./middlewares/memory-cache')

// routes
var routes = require('./routes')

app.use(history()) // 解决 history mode 404

app.use(installMemoryCache) // 将 cache 作为中间件，所有请求都可读取

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('dist')) // handle static resources

app.post('/get-captcha', function (req, res, next) {
  routes.getCaptcha(req, res, next)
})

app.post('/login', function (req, res, next) {
  routes.login(req, res, next)
})

app.listen(9090, function () {
  console.log('http://localhost:9090')
})