var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var connect = require('../sql/mysqlConfig.js')
var usersql = require('../sql/usersql.js')

var client = mysql.createConnection(connect.config)
/* GET home page. */
router.post('/', function (req, res, next) {
  var sql = usersql.users.login
  var username = req.body.username
  var password = req.body.password
  var msg = ''
  var code = 0
  client.query(sql, [username, password], function (err, result){
    if(err){
      console.log('err', err)
      throw err
    }
    if(result.length == 1){
      res.json({
        code: 0,
        msg: '登陆成功'
      })
    }else{
      res.json({
        code: 1,
        msg: '账号或密码错误'
      })
    }
   
  })
});

module.exports = router;
