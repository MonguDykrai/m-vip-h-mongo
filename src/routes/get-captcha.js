var axios = require('axios')
var fs = require('fs')
var path = require('path')

var tools = require('../assets/js/tools')

function getCaptcha(req, res, next) {

  console.log(req.body)

  let captcha = tools.generateCaptcha()
  console.log(captcha)

  res.json({msg: 'hello'})
}

module.exports = getCaptcha