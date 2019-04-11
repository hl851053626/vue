import Mock from 'mockjs'
const Random = Mock.Random

const newData = function () {
  let articles = []
  for (let i = 0; i < 5; i++) {
    let newArticleObject = {
      id: Random.id(),
      guid: Random.guid(),
      title: Random.csentence(5, 30), //  Random.csentence( min, max )
      thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
      date: Random.date() + ' ' + Random.time(), // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
      paragraph: Random.paragraph(3, 7)
    }
    articles.push(newArticleObject)
  }
  return {
    articles: articles
  }
}
Mock.mock('/news/index', 'post', newData);