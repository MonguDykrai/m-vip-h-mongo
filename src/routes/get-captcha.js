var axios = require('axios')
var fs = require('fs')
var path = require('path')

var tools = require('../assets/js/tools')

function getCaptcha(req, res, next) {

  let captcha = tools.generateCaptcha()

  const { phoneNumber } = req.body

  console.log(phoneNumber)

  res.json({msg: 'hello'})
}

module.exports = getCaptcha