/*mysql数据库操作
 *
 *
**/
//初始化数据库链接
var mysql = require('mysql');
var con;
function dbinit(){
	con=mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'qqqqqq',
		database: 'db_blog',
		port: '3306'
	});
	con.connect();
}
//关闭数据库链接
function disconnect(){
	con.end();
}

//获取用户信息
function getUser(response){
	var sql='select * from user';
	con.query(sql,function(err,res){
		if(err){
			console.log(err);
			res.sendStatus(400);
		}
		response.send(res[0]);
	});
}

//更新用户信息
function updateUser(param,response){
	var sql='update user set name=?,sex=?,age=?,thin=? where id=?';
	con.query(sql,param,function(err,res){
		var result;
		if(err){
			console.log(err.message);
			result={"result":"err"};
		}else{
			result={"result":"ok"};
		}
		response.send(result);
	});
}

//获取aboutme数据
function getAboutme(param,response){
	var sql='select id,title,chapter,content,contentPath,dtime from article where id=?';
	con.query(sql,param,function(err,res){
		if(err){
			console.log(err);
			res.sendStatus(400);
		}
		response.send(res[0]);
	});
}


module.exports.dbinit = dbinit;
module.exports.disconnect = disconnect;
module.exports.getUser = getUser;
module.exports.updateUser = updateUser;
module.exports.getAboutme = getAboutme;

