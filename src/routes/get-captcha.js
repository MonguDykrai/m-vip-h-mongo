var tools = require('../assets/js/tools')
var findOne = require('../query')

function getCaptcha(req, res, next) {

  let captcha = tools.generateCaptcha()

  const { phoneNumber } = req.body

  findOne(phoneNumber, function (item) {
    
    console.log(item)

    const isRegistered = !!item // {} || null

    console.log(`isRegistered: ${isRegistered}`)
  })

  res.json({ msg: 'hello' })
}

module.exports = getCaptcha