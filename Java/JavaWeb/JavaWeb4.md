# Mysql

```
mysql -u root -proot
mysql -h192...101 -P3306 -u root -proot
```

基于二维表来存储的数据库被称为关系型数据库

DBMS

![img](./newimg/JavaWeb4_IMG/sql1.png)

## DDL

```
//database可以换成schema
show databases;
create database if not exists db01;
use db01;
select database();//当前正在使用的数据库
drop database if exists db01;

create table tableName(
    field1 fieldType [约束] [comment field1Comment],
    id int primary key auto_increment,
    name varchar(10) not null unique,
    gender char(1) default "男"
)[comment 表注释]

表操作
show tables;
desc tableName;
show create table tb_emp;//查看建表语句

修改
修改字段：alter table user add 字段名 类型 [comment "xx"] [约束];
修改字段类型:alter table user modify 字段名 新数据类型;
修改字段名和字段类型:alter table 表名 change 旧字段名 新字段名 类型[comment "xx"] [约束];
删除字段：alter table user drop column 字段名;
修改表名:rename table user to New_user;
```

## DML

data manipulate ..

### INSERT

![img](./newimg/JavaWeb4_IMG/insert.png)

### UPDATE

![img](./newimg/JavaWeb4_IMG/update.png)

### DELETE

delete from user where id=1;

## DQL

data query ...

![img](./newimg/JavaWeb4_IMG/select1.png)

### 基本查询

![img](./newimg/JavaWeb4_IMG/select2.png)

### 条件查询

![img](./newimg/JavaWeb4_IMG/select3.png)
![img](./newimg/JavaWeb4_IMG/select5.png)

### 分组查询

![img](./newimg/JavaWeb4_IMG/select6.png)

### 分页 limit 查询

![img](./newimg/JavaWeb4_IMG/select7.png)

### 聚合函数

![img](./newimg/JavaWeb4_IMG/select4.png)

## 约束

![img](./newimg/JavaWeb4_IMG/sql2.png)

## 常见数据类型

```
数值类型
tinyint unsigned smallint mediumint
int bigint float double(5,2) decimal
字符类型
char varchar tinyblob tinytext blob
text mediumblob mediumtext longblob longtext

phone char(11)
username(varchar(20))
日期类型
date time year datetime timestamp

birthday date
update_time datetime
```

![img](./newimg/JavaWeb4_IMG/sql3.png)
![img](./newimg/JavaWeb4_IMG/sql4.png)
![img](./newimg/JavaWeb4_IMG/sql5.png)
