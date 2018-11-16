
function login(req, res, next) {
  const { phoneNumber, captcha } = req.body

  console.log(phoneNumber, captcha)

  const cachedObj = res.cache.get(phoneNumber)

  console.log(cachedObj)

  const captchaHasBeenRequested = !!cachedObj

  console.log(captchaHasBeenRequested)

  const isMatched = !!cachedObj ? (captcha == cachedObj.captcha) : false

  console.log(isMatched)
}

module.exports = login