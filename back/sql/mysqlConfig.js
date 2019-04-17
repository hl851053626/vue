var connction = {};

connction.config = {
  host: "127.0.0.1",           //这是数据库的地址
  user: "root",                  //需要用户的名字
  password: "",            //用户密码 ，如果你没有密码，直接双引号就是
  database: "vueblog" ,          //数据库名字
  port: 3306
}                                //好了，这样我们就能连接数据库了

////////////////////当然这是不可能的

module.exports = connction;  //用module.exports暴露出这个接口， 