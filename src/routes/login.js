
function login(req, res, next) {
  const { phoneNumber, captcha } = req.body

  console.log(phoneNumber, captcha)

  const cachedObj = res.cache.get(phoneNumber)

  console.log(cachedObj)

  const captchaHasBeenRequested = !!cachedObj

  console.log(captchaHasBeenRequested)

  if (!captchaHasBeenRequested) {
    res.json({
      code: 0,
      msg: '参数错误，请先获取验证码'
    })

    return // 组织后续代码执行（重要）
  }

  const isMatched = !!cachedObj ? (captcha == cachedObj.captcha) : false

  console.log(isMatched)

  if (!isMatched) {
    res.json({
      code: 400,
      msg: '短信验证码错误，请重试!'
    })

    return
  }

  res.redirect('/')

  // res.json({
  //   code: 1,
  //   msg: '登陆成功'
  // })
}

module.exports = login