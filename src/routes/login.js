
function login(req, res, next) {
  const { phoneNumber, captcha } = req.body

  console.log(phoneNumber, captcha)

  console.log(res.cache.get(phoneNumber))
}

module.exports = login