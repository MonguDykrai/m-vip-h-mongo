const jwt = require('jsonwebtoken')
const findOne = require('../../../query/users/find-one')
const tools = require('../../../assets/js/tools')

function userFavBrand(req, res, next) {
  console.log('userFavBrand')

  const token = req.headers.authorization
  jwt.verify(token, 'secretkey', function (err, decoded) {
    if (err) throw err

    console.log(decoded)

    let { phoneNumber } = decoded
    phoneNumber = Number(phoneNumber)

    const query = { phoneNumber, userFavBrand: { $not: { $size: 0 } } }
    const prejection = { _id: 0, userFavStore: 0, userFavProduct: 0, phoneNumber: 0 }

    // findOne(query, prejection, callback)
    findOne(query, prejection, function (item) {
      let datas = []
      if (!(tools.toString.call(item) === '[object Null]')) {
        datas = item.userFavBrand
      }

      console.log(item)

      res.json({
        msg: 'API user fav brand',
        datas
      })
    })
  })
}

module.exports = userFavBrand