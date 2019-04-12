var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var $mysql = require("mysql");
var sql = require("./mysql");       //   这句话是，引入当前目录的mysql模板   mysql就是我们上面创建的mysql.js

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var articleRouter = require('./routes/article');
var registerRouter = require('./routes/register');

var app = express();

var $sql = $mysql.createConnection(sql.mysql)       //创建一个连接 ,mysql是我们上面文件暴露出来的模板的方法
$sql.connect(function (err) {  //运用了这句才是真正连接
	if(err){console.log('error')}
	else{console.log('right')}
})                        

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
	extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.all('*', function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*"); //��Ŀ���ߺ�ĳ�ҳ��ĵ�ַ
	res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	next();
})
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/article', articleRouter);
app.use('/register', registerRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
