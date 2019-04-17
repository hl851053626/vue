var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var connect = require('../sql/mysqlConfig.js')
var usersql = require('../sql/usersql.js')

var client = mysql.createConnection(connect.config)

router.post('/', function (req, res, next) {
  console.log(req.body)
  sql = usersql.users.insert
  client.query(sql, [req.body.username, req.body.password], function (err, result) {
    if (err) {
      console.log('err:', err)
    } else {
      console.log('res:', result)
    }
  })
  res.json('注册成功---来自服务端')
})

router.post('/check', function (req, res, next) {
  var username = req.body.username
  var msg = '',code = 0
  sql = usersql.users.check
  client.query(sql, [req.body.username], function (err, result) {
    if (err) {
      console.log('err:', err)
    } else {
      for(let i = 0;i < result.length;i++){
        if (result[i].username == username){
          msg = '用户已存在'
          code = 1
          break
        }
      }
    }
    res.json({
      code: code,
      msg: msg
    })
  })
  
})




module.exports = router;
