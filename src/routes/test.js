var sendMessage = require('../messages')

console.log(sendMessage)

console.log(sendMessage.toRegUser({body: {phoneNumber: 18521592149}}, {json: {}}, {next: ''}))

console.log(sendMessage.toUnregUser({body: {phoneNumber: 18521592149}}, {json: {}}, {next: ''}))