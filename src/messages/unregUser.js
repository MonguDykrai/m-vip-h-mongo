var axios = require('axios')
var tools = require('../assets/js/tools')

function toUnregUser(req, res, next) {
  let captcha = tools.generateCaptcha()

  const { phoneNumber } = req.body

  console.log(captcha, phoneNumber)

  // console.log(req, res, next)
}

module.exports = toUnregUser