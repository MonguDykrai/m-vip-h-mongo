var moment = require('moment')

function generateCaptcha() {
  let code = []
  let maxLength = 6
  for (let i = 0; i < maxLength; i++) {
    let randomChar = Math.floor(Math.random() * (10 - 0) + 0)
    code.push(randomChar)
  }
  return code.join('')
}

function getCurrTime() {
  return moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
}

var tools = {
  generateCaptcha,
  getCurrTime
}

module.exports = tools