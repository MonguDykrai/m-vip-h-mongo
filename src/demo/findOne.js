
const MongoClient = require('mongodb').MongoClient
const assert = require('assert').strict

const url = 'mongodb://127.0.0.1:27017'

const dbName = 'vip'

const client = new MongoClient(url)

client.connect(function (err) {
  assert.strictEqual(null, err)

  const db = client.db(dbName)

  db.collection('users').findOne({ "phoneNumber": 18521592149 }, {projection: null}, function (err, item) {
    console.log(item)
  })
})