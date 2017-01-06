var express = require('express');
var ejs = require('ejs');
var app = express();


// 设置视图文件的位置
app.set('views', './');
// 设置视图加载引擎
app.set('view engine', 'ejs');
// 设置视图后缀
app.engine('html', ejs.renderFile);
// 访问静态资源的规则
app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
  	res.render('index.html', function(err, html) {
  	res.send(html);
});
});

app.get('/iphone', function (req, res) {
  	res.render('iphone.html', function(err, html) {
  	res.send(html);
});
});

var server = app.listen(3000, function () {});