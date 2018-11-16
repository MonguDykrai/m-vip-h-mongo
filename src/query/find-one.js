const findOne = function (phoneNumber, callback) {

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

    // 应该将 collection.insertOne 的返回值，作为是否查询成功的条件，当前是 item （需要改）
    collection.findOne({ phoneNumber: Number(phoneNumber) }, function (err, item) {
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