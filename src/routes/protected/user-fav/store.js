const jwt = require('jsonwebtoken')
const findOne = require('../../../query/users/find-one')
const tools = require('../../../assets/js/tools')

function userFavStore(req, res, next) {
  console.log('userFavStore')

  const token = req.headers.authorization
  jwt.verify(token, 'secretkey', function (err, decoded) {
    if (err) throw err

    console.log(decoded)

    let { phoneNumber } = decoded
    phoneNumber = Number(phoneNumber)

    const query = { phoneNumber, userFavStore: { $not: { $size: 0 } } }
    const prejection = { _id: 0, userFavBrand: 0, userFavProduct: 0, phoneNumber: 0 }

    // findOne(query, prejection, callback)
    findOne(query, prejection, function (item) {
      let datas = []
      if (!(tools.toString.call(item) === '[object Null]')) {
        datas = item.userFavStore
      }

      console.log(item)

      res.json({
        msg: 'API user fav store',
        datas
      })
    })
  })
}

module.exports = userFavStore