const cache = require('memory-cache')

cache.put('name', 'jack')

const installMemoryCache = function (req, res, next) {
  res.cache = cache

  next()
}

module.exports = installMemoryCache