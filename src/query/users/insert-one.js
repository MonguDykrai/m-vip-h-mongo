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

    collection.insertOne({ phoneNumber: Number(phoneNumber), userFavProduct: [{id: 1, price: 3000, imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542778675470&di=44c1de913a2c50ce65e72d65243d642f&imgtype=0&src=http%3A%2F%2Fim5.tongbu.com%2Ftbnews%2F201712%2Fb5cdd389-2.jpg%3Fw%3D600%2C382%26b%3D59'}], userFavBrand: [{id: 1, price: 4000, imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542778718968&di=10d2d4502f0f82c45d84086cb96c224e&imgtype=0&src=http%3A%2F%2Fi4.hexun.com%2F2017-11-07%2F191533870.jpg'}], userFavStore: [{id: 1, price: 5000, imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543373463&di=4ef91eceb14ba2992ed25b45e46f82cc&imgtype=jpg&er=1&src=http%3A%2F%2Fimage.yzmg.com%2F201804%2F20180414%2F20180414105358177.jpg'}] }, function (err, item) {
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