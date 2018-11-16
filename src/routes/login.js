const insertOne = require('../query/insert-one')

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

  const { registeredUser } = cachedObj

  if (!registeredUser) {
    insertOne(phoneNumber, function (item) {
      const success = !!item

      if (success) {
        console.log('新用户信息保存成功')
      }
    })

  }

  res.cookie('login', 'true') // 临时代替 JSON Web Token
  res.cache.del(phoneNumber) // 清除临时缓存

  res.json({
    code: 1,
    msg: '登陆成功'
  })
}

module.exports = login