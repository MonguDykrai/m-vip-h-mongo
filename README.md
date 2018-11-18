# Mongo Version

## 技术栈

memory-cache、express、moment、axios、cors

## Vue Router mode: 'history' refresh 404

统一定向到 index.html

```js
const history = require('connect-history-api-fallback')
const express = require('express')
const app = express()

app.use(history())
```

![](https://upload-images.jianshu.io/upload_images/12334242-576afd35b0aaee78.gif?imageMogr2/auto-orient/strip)

## structure

```
└── src ·······································
    ├── assets ································ 公共资源
    ├── demo ·································· 案例
    ├── dist ·································· 前端
    ├── messages ······························ 短信验证码
    ├── middlewares ··························· 中间件
    ├── query ································· 数据库查询语句
    ├── routes ································ 路由
    └── app.js ································ 入口
```

## 受保护的路由

待收货 <https://m.vip.com/user-order-list-unreceive.html>

待付款 <https://m.vip.com/user-order-list-unpay.html>

全部订单 <https://m.vip.com/user-order-list-more.html>

申请售后 <https://m.vip.com/user-order-list-return.html>

我的收藏 <https://m.vip.com/user-fav-brand.html>

修改登录密码 <https://m.vip.com/user-updatepwd.html>