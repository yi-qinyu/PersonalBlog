//数据库对象
var sqlQuery = require('./logic/mysql.js');
sqlQuery.dbinit();

var express = require('express');
var app = express();
var handlebars = require('express-handlebars').create({
	defaultLayout: 'main'
});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));

//获取request数据
var bodyParser = require('body-parser');
//var multer = require('multer'); 
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded,post method
//app.use(multer()); // for parsing multipart/form-data

//实现映射指定地址
app.get('/',function(req,res){
	res.render('default');
});
app.get('/Home', function(req, res) {
	res.render('home',{layout:null}); //handlebars实现
	//res.render('home'); 
});
//下面还可以使用/about*,表示所有的about下的子路径
app.get('/Aboutme', function(req, res) {
	 res.render('aboutme',{layout:null});
	//res.render('aboutme');
});
//
app.get('/Fiction',function(req,res){
	 res.render('fiction',{layout:null});
	//res.render('fiction');
});
//
app.get('/Jianshang',function(req,res){
	 res.render('jianshang',{layout:null});
	//res.render('jianshang');
});
//
app.get('/Suibi',function(req,res){
	 res.render('suibi',{layout:null});
	//res.render('suibi');
});
//
app.get('/Bowen',function(req,res){
	 res.render('bowen',{layout:null});
	//res.render('bowen');
});

/*数据库操作*/
/*获取user信息*/
app.post('/getUser',function(req,res){
	sqlQuery.getUser(res);
});
/*更新指定用户数据*/
app.post('/updateUser',function(req,res){
	var data = req.body;
	var updateParam = new Array(data.name,data.sex,data.age,data.thin,data.id);
	sqlQuery.updateUser(updateParam,res);
});
//获取Aboutme数据
app.post('/getAboutme',function(req,res){
	var data = req.body;
	var param = new Array(data.id);
	console.log(data.id);
	sqlQuery.getAboutme(param,res);
});







//定制404页面
app.use(function(req, res, next) {
	res.status(404);
	res.render('404');
});
//定制500页面,根据错误参数个数确定错误路由类型
app.use(function(err, req, res, next) {
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

//启动项目
app.listen(app.get('port'), function() {
	console.log('Express start on http://localhost:' + app.get('port'));
});