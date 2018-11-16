var axios = require('axios')
var tools = require('../assets/js/tools')

function toRegUser(req, res, next) {
  let captcha = tools.generateCaptcha()

  const { phoneNumber } = req.body

  console.log(captcha, phoneNumber)

  // console.log(req, res, next)

  const param = {
    'apikey': '577ea3ee6e6449afb7756c6fbf1e915a',
    'tpl_id': '246',
    'content': `您的验证码是${captcha}，在1分钟内有效。如非本人操作请忽略本短信。【织梦】`,
    'mobile': `${phoneNumber}`,
    'extNo': '',
    'sendTime': tools.getCurrTime()
  }

  axios.post('http://yun.movek.net:83/api/sms/send.json', param)
    .then(function (response) {
      const { code } = response.data

      console.log('Registered user')
      console.log(code)
      console.log(response.data)

      if (code === 0) {

        const message = {
          code: 1,
          msg: '短信验证码发送成功，请注意查收',
          data: {
            interval: 60,
            captcha
          }
        }

        console.log(res.cache.keys()) // 作为中间件，所有请求都可访问

        res.cache.put(phoneNumber, {registeredUser: true, captcha: captcha})

        console.log(res.cache.keys())
        
        console.log(res.cache.get(phoneNumber))

        res.json(message)
      }

      return
    })

  // res.json({ msg: 'registered user' })

  return
}

module.exports = toRegUser