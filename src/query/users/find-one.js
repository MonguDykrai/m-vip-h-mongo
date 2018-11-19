const findOne = function (query, projection, callback) {

  const MongoClient = require('mongodb').MongoClient
  const assert = require('assert').strict

  const url = 'mongodb://127.0.0.1:27017'

  const dbName = 'vip'

  const client = new MongoClient(url)

  client.connect(function (err) {
    assert.strictEqual(null, err)

    console.log('Connected successfully to server')

    const db = client.db(dbName)

    const collection = db.collection('users')

    // findOne(query, {projection: {_id: 0, userFavStore: 0, userFavBrand: 0, phoneNumber: 0}}, callback)
    collection.findOne(query, {projection}, function (err, item) {
      assert.strictEqual(null, err)

      callback(item)

      client.close(function (err) {
        assert.strictEqual(null, err)

        console.log('db has been closed.')
      })

    })
  })

}

module.exports = findOne