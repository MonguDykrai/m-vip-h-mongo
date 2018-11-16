var findOne = require('../query/find-one')

var sendMessage = require('../messages')

function getCaptcha(req, res, next) {

  const { phoneNumber } = req.body

  findOne(phoneNumber, function (item) {

    console.log(item)

    const isRegistered = !!item // {} || null

    console.log(`isRegistered: ${isRegistered}`)

    if (isRegistered) {
      // 注册用户
      sendMessage.toRegUser(req, res, next)

      return
    }

    // 未注册用户
    sendMessage.toUnregUser(req, res, next)

    return
  })
}

module.exports = getCaptcha