var axios = require('axios')
var tools = require('../assets/js/tools')

function toUnregUser(req, res, next) {
  let captcha = tools.generateCaptcha()

  const { phoneNumber } = req.body

  console.log(captcha, phoneNumber)

  // console.log(req, res, next)

  const param = {
    'apikey': '577ea3ee6e6449afb7756c6fbf1e915a',
    'tpl_id': '241',
    'content': `您的注册验证码是${captcha}，在1分钟内输入有效。如非本人操作请忽略此短信。【织梦】`,
    'mobile': `${phoneNumber}`,
    'extNo': '',
    'sendTime': tools.getCurrTime()
  }

  axios.post('http://yun.movek.net:83/api/sms/send.json', param)
    .then(function (response) {
      const { code } = response.data

      console.log('Unregistered user')
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

        res.json(message)
      }

      return
    })

  // res.json({ msg: 'unregistered user' })

  return
}

module.exports = toUnregUser