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
  console.log(req)
  var id = req.query.id
  console.log(id)
  client.query('SELECT * FROM article WHERE id=' + id, function(err, result){
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
  console.log(11111111)
  // var id = req.query.id
  // console.log(id)
  var sql = 'INSERT INTO article(title,author_name,date,paragraph)  VALUES("' + title + '","' + author + '","' + date + '","' + content +'")'
  client.query(sql, function(err, result){
    if(err){
      console.log('err:', err) 
    }else{
      console.log('res:', result)
      // jsonWrite(res,result)
    }
  })
})


module.exports = router;
