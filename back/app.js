var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require("mysql");
var connect = require('./sql/mysqlConfig.js')    //   这句话是，引入当前目录的mysql模板   mysql就是我们上面创建的mysql.js
var history = require('connect-history-api-fallback');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var articleRouter = require('./routes/article');
var registerRouter = require('./routes/register');
var homeRouter = require('./routes/home');
var loginRouter = require('./routes/login');

var app = express();

// 启动时测试有没有连接服务器
var client = mysql.createConnection(connect.config)       //创建一个连接 ,mysql是我们上面文件暴露出来的模板的方法
client.connect(function (err) {  //运用了这句才是真正连接
	if (err) { console.log('连接mysql失败')}
	else{console.log('连接mysql成功')}
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
// app.use(history({
// 	rewrites: [
// 		{
// 			from: /^\/about\/.*$/,
// 			to: function (context) {
// 				return context.parsedUrl.pathname;
// 			}
// 		}
// 	]
// }))
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
app.use('/home', homeRouter);
app.use('/login', loginRouter);

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
