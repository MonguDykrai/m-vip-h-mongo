var getCaptcha = require('./normal/get-captcha')
var login = require('./normal/login')

const normal = {
  getCaptcha,
  login
}

var userFavProduct = require('./protected/user-fav/product')
var userFavBrand = require('./protected/user-fav/brand')
var userFavStore = require('./protected/user-fav/store')

const protected = {
  userFavProduct,
  userFavBrand,
  userFavStore
}

const routes = {
  normal,
  protected // Protected routing
}

module.exports = routes