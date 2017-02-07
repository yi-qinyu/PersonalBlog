--建立数据库
CREATE DATABASE db_blog DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

--创建用户信息表
create table user(
	id varchar(64) not null unique,
	name varchar(32),
	sex int(2),
	age int(5),
	thin varchar(5),
	column1 varchar(32),
	column2 varchar(32),
	column3 varchar(32),
	column4 varchar(32),
	primary key(id)
);

--插入脚本
insert into user(id,name,sex,age,thin,column1,column2,column3,column4) values('node20170001','覃雨',0,26,0,'备用','备用','备用','备用');


--创建文章表
CREATE table article(
	id varchar(64) not null unique,
	title varchar(128) not null,
	chapter varchar(128),
	content varchar(5000),
	contentPath varchar(200),
	dtime date,
	pro1 varchar(20),
	pro2 varchar(20),
	pro3 varchar(20),
	primary key(id)
);

--插入文章数据
insert into article(id,title,chapter,content,contentPath,dtime,pro1,pro2,pro3) values('20170001','知己知彼,永不懈怠','初始','自我内容，以后再补','nopath',now(),'备用','备用','备用');
insert into article(id,title,chapter,content,contentPath,dtime,pro1,pro2,pro3) values('20170002','知己知彼,永不懈怠','布局','自我内容，以后再补','nopath',now(),'备用','备用','备用');
insert into article(id,title,chapter,content,contentPath,dtime,pro1,pro2,pro3) values('20170003','知己知彼,永不懈怠','布局',"<blockquote class='center-block'><h1>About Meadowlark Travel</h1><footer>A new Life road has been loaded.</footer></blockquote><p style='margin-left:10%;margin-right:10%;'>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;your fortune for the day In my dual profession as an educator and health care provider, I have worked with numerous children infected with the virus that causes AIDS. Therelationships that I have had with these special kids have been gifts in my life. They have taught me so many things, but I have especially learned that great courage can be found in the smallest of packages. Let me tell you about Tyler.</p>
<p style='margin-left:10%;margin-right:10%;'>&nbsp;&nbsp;&nbsp;&nbsp;Tyler was born infected with HIV: his mother was also infected. From the very beginning of his life, he was dependent on medications to enable him to survive. When he was five, he had a tube surgically inserted in a vein in his chest. This tube was connected to a pump, which he carried in a small backpack on his back. Medications were hooked up to this pump and were continuously supplied through this tube to his bloodstream. At times, he also needed supplemented oxygen to support his breathing.</p>
<p style='margin-left:10%;margin-right:10%;'>&nbsp;&nbsp;Tyler wasn’t willing to give up one single moment of his childhood to this deadly disease. It was not unusual to find him playing and racing around his backyard, wearing his medicine-laden backpack and dragging his tank of oxygen behind him in his little wagon. All of us who knew Tyler marveled at his pure joy in being alive and the energy it gave him. Tyler’s mom often teased him by telling him that he moved so fast she needed to dress him in red. That way, when she peered through the window to check on him playing in the yard, she could quickly spot him.This dreaded disease eventually wore down even the likes of a little dynamo like Tyler. He grew quite ill and, unfortunately, so did his HIV-infected mother. When it became apparent that he wasn’t going to survive, Tyler’s mom talked to him about death. She comforted him by telling Tyler that she was dying too, and that she would be with him soon in heaven.</p>
<p style='margin-left:10%;margin-right:10%;'>&nbsp;&nbsp;&nbsp;&nbsp; A few days before his death, Tyler beckoned me over to his hospital bed and whispered, 'I might die soon. I'm not scared. When I die, please dress me in red. Mom promised she's coming to heaven, too. I’ll be playing when she gets there, and I want to make sure she can find me.'</p>",'nopath',now(),'备用','备用','备用');

--修改字段属性
alter table user modify column thin int(2);

--添加字段
alter table article add type int(2);

