var tools = require('../assets/js/tools')
var findOne = require('../query')

function getCaptcha(req, res, next) {

  let captcha = tools.generateCaptcha()

  const { phoneNumber } = req.body

  findOne(phoneNumber, function (item) {
    console.log(item)
  }) // {} || null

  res.json({ msg: 'hello' })
}

module.exports = getCaptcha