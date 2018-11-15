var tools = require('../assets/js/tools')
var findOne = require('../query')

function getCaptcha(req, res, next) {

  let captcha = tools.generateCaptcha()

  const { phoneNumber } = req.body

  const isRegistered = findOne(phoneNumber) // {} || null

  console.log(isRegistered)

  res.json({msg: 'hello'})
}

module.exports = getCaptcha