const findOne = function (phoneNumber) {

  const MongoClient = require('mongodb').MongoClient
  const assert = require('assert').strict

  const url = 'mongodb://47.98.145.59:27017'

  const dbName = 'vip'

  const client = new MongoClient(url)

  client.connect(function (err) {
    assert.strictEqual(undefined, err)

    console.log('Connected successfully to server')

    const db = client.db(dbName)

    const collection = db.collection('users')

    collection.findOne({ phoneNumber: phoneNumber }, function (err, item) {
      assert.strictEqual(undefined, err)

      console.log(item)
    })

    client.close()
  })
}

module.exports = findOne