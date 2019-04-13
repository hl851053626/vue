var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var sql = require('../mysql.js')

/* GET home page. */

var client = mysql.createConnection({
  host: "122.152.199.244",           //这是数据库的地址
  user: "root",                  //需要用户的名字
  password: "root",            //用户密码 ，如果你没有密码，直接双引号就是
  database: "vueblog",          //数据库名字
  port: 3306
});
router.get('/', function (req, res, next) {
  console.log(req.query)
  // console.log(client)
  console.log(1)
  client.query('INSERT INTO users(username, password) VALUES("'+ req.query.username +'", "'+ req.query.password + '")', function (err, res) {
    if (err) {
      console.log('err:', err)
    } else {
      console.log('res:', res)
    }
  })
  res.send('123')
})




module.exports = router;
