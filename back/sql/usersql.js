let UserSQL = {}

// 操作 users 表
UserSQL.users = {
  insert: 'INSERT INTO users(username,password)  VALUES(?,?)',
  check: 'SELECT username FROM users', //注册
  login: 'SELECT * FROM users WHERE username=? AND password=?',
  // update: 'UPDATE User SET USERNAME=?, NAME=?, AGE=?, SEX=?, TELEPHONE=?, EMAIL=?, OTHER=? WHERE id=? ',
  queryAll: 'SELECT * FROM users',
  delete: 'DELETE FROM users WHERE id=?',
  queryById: 'SELECT * FROM users WHERE username=?',
}

// 操作 article 表
UserSQL.article = {
  insert: 'INSERT INTO article(title,author_name,date,paragraph)  VALUES(?,?,?,?)',
  queryAll: 'SELECT * FROM article',
  update: 'UPDATE article SET USERNAME=?, NAME=?, AGE=?, SEX=?, TELEPHONE=?, EMAIL=?, OTHER=? WHERE id=? ',
  delete: 'DELETE FROM article WHERE id=?',
  queryById: 'SELECT * FROM article WHERE id=?',
}

module.exports = UserSQL;