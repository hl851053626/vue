var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var sql = require('../mysql.js')

/* GET home page. */

var client = mysql.createConnection({
  host: "127.0.0.1",           //这是数据库的地址
  user: "root",                  //需要用户的名字
  password: "",            //用户密码 ，如果你没有密码，直接双引号就是
  database: "vueblog",          //数据库名字
  port: 3306
});

var jsonWrite = function(res, ret) {
  if (typeof ret === 'undefined') {
      res.json({
          code: '1',
          msg: '操作失败'
      });
  } else {
      res.json({
        list:ret
      });
  }
};

router.get('/', function( req, res, next){
  client.query('SELECT * FROM article', function(err, result){
    if(err){
      console.log('err:', err) 
    }else{
      console.log('res:', result)
      jsonWrite(res,result)
    }
  })
})

module.exports = router;
