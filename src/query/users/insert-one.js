const insertOne = function (phoneNumber, callback) {

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

    collection.insertOne({ phoneNumber: Number(phoneNumber), userFavProduct: [{id: 1, price: 3000, imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542607653776&di=9df790503b7b3ff4e5e778b51c163a61&imgtype=0&src=http%3A%2F%2Fimg1.juimg.com%2F180211%2F355815-1P211211S799.jpg'}], userFavBrand: [], userFavStore: [] }, function (err, item) {
      assert.strictEqual(null, err)

      callback(item)

      client.close(function (err) {
        assert.strictEqual(null, err)

        console.log('db has been closed.')
      })

    })
  })

}

module.exports = insertOne