var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var connect = require('../sql/mysqlConfig.js')
var usersql = require('../sql/usersql.js')

var client = mysql.createConnection(connect.config)

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
  var sql = usersql.article.queryAll
  client.query(sql, function(err, result){
    if(err){
      console.log('err:', err) 
    }else{
      console.log('res:', result)
      jsonWrite(res,result)
    }
  })
})

module.exports = router;
