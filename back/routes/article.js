var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var connect = require('../sql/mysqlConfig.js')
var usersql = require('../sql/usersql.js')


var client = mysql.createConnection(connect.config)



router.get('/', function( req, res, next){
  console.log(req)
  var id = req.query.id
  console.log(id)
  var sql = usersql.article.queryById
  client.query(sql,[id], function(err, result){
    if(err){
      console.log('err:', err) 
    }else{
      console.log('res:', result)
      jsonWrite(res,result)
    }
  })
})

router.post('/edit', function( req, res, next){
  console.log(req.body)
  var time = new Date()
  var title = req.body.params.title
  var author = req.body.params.author
  var date = time.getFullYear() + '-' + ( time.getMonth() + 1) + '-' + time.getDate()
  var content = escape(req.body.params.content)
  // var id = req.query.id
  // console.log(id)
  var sql = usersql.article.insert
  client.query(sql, [title, author, date, content], function(err, result){
    if(err){
      console.log('err:', err) 
    }else{
      console.log('res:', result)
      // jsonWrite(res,result)
    }
  })
})

var jsonWrite = function (res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    });
  } else {
    res.json({
      list: ret
    });
  }
};

module.exports = router;
