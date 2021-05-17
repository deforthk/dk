(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{681:function(t,e,a){"use strict";a.r(e);var l=a(3),n=Object(l.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"sql-语句优化案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql-语句优化案例"}},[t._v("#")]),t._v(" SQL 语句优化案例")]),t._v(" "),a("h3",{attrs:{id:"where-子句中可以对字段进行-null-值判断吗？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#where-子句中可以对字段进行-null-值判断吗？"}},[t._v("#")]),t._v(" where 子句中可以对字段进行 null 值判断吗？")]),t._v(" "),a("p",[t._v("可以，比如 select id from t where num is null 这样的 sql 也是可以的。")]),t._v(" "),a("p",[t._v("但是最好不要给数据库留 NULL，尽可能的使用 NOT NULL 填充数据库。")]),t._v(" "),a("p",[t._v("不要以为 NULL 不需要空间，比如：char(100) 型，在字段建立时，空间就固定了。")]),t._v(" "),a("p",[t._v("不管是否插入值（NULL 也包含在内），都是占用 100 个字符的空间的，如果是 varchar 这样的变长字段，null 不占用空间。")]),t._v(" "),a("p",[t._v("可以在 num 上设置默认值 0，确保表中 num 列没有 null 值，然后这样查询： select id from t where num= 0。")]),t._v(" "),a("h3",{attrs:{id:"如何优化语句？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何优化语句？"}},[t._v("#")]),t._v(" 如何优化语句？")]),t._v(" "),a("p",[t._v("select * from admin left join log on admin.admin_id = log.admin_id where log.admin_id>10")]),t._v(" "),a("p",[t._v("优化为：")]),t._v(" "),a("p",[t._v("select * from (select * from admin where admin_id>10) T1 lef join log on T1.admin_id = log.admin_id")]),t._v(" "),a("p",[t._v("使用 JOIN 时候，应该用小的结果驱动大的结果（left join 左边表结果尽量小如果有条件应该放到左边先处理，right join 同理反向），同时尽量把牵涉到多表联合的查询拆分多个 query（多个连表查询效率低，容易到之后锁表和阻塞）。")]),t._v(" "),a("h3",{attrs:{id:"limit-的基数比较大时使用-between"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#limit-的基数比较大时使用-between"}},[t._v("#")]),t._v(" limit 的基数比较大时使用 between")]),t._v(" "),a("p",[t._v("例如：select * from admin order by admin_id limit 100000,10")]),t._v(" "),a("p",[t._v("优化为：select * from admin where admin_id between 100000 and 100010 order by admin_id")]),t._v(" "),a("h3",{attrs:{id:"尽量避免在列上做运算，这样导致索引失效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#尽量避免在列上做运算，这样导致索引失效"}},[t._v("#")]),t._v(" 尽量避免在列上做运算，这样导致索引失效")]),t._v(" "),a("p",[t._v("例如：select * from admin where year(admin_time)>2018")]),t._v(" "),a("p",[t._v("优化为：select * from admin where admin_time> '2018-01-01ʹ")]),t._v(" "),a("h2",{attrs:{id:"常见面试-sql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见面试-sql"}},[t._v("#")]),t._v(" 常见面试 sql")]),t._v(" "),a("h3",{attrs:{id:"案例1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#案例1"}},[t._v("#")]),t._v(" 案例1")]),t._v(" "),a("p",[t._v("用一条 SQL 语句查询出每门课都大于 80 分的学生姓名")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("name")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("kecheng")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("fenshu")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("张三")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("语文")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("81")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("张三")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("数学")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("75")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("李四")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("语文")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("76")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("李四")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("数学")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("90")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("王五")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("语文")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("81")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("王五")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("数学")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("100")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("王五")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("英语")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("90")])])])]),t._v(" "),a("p",[t._v("答：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("select distinct name from table where name not in (select distinct name from table where fenshu<=80)\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("select name from table group by name having min(fenshu)>80\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"案例2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#案例2"}},[t._v("#")]),t._v(" 案例2")]),t._v(" "),a("p",[t._v("学生表如下，删除除了自动编号不同，其他都相同的学生冗余信息")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("编号")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("学号")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("姓名")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("课程编号")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("课程名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("分数")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2005001")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("张三")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0001")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("数学")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("69")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2005002")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("李四")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0001")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("数学")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("89")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("3")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2005001")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("张三")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0001")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("数学")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("69")])])])]),t._v(" "),a("p",[t._v("答：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("delete tablename where 自动编号 not in (select min(自动编号) from tablename group by 学号, 姓名, 课程编号, 课程名称, 分数)\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"案例3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#案例3"}},[t._v("#")]),t._v(" 案例3")]),t._v(" "),a("p",[t._v("一个叫 team 的表，里面只有一个字段name,一共有 4 条纪录，分别是 a,b,c,d,对应四个球队，现在四个球队进行比赛，用一条 sql 语句显示所有可能的比赛组合.")]),t._v(" "),a("p",[t._v("答：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("select a.name, b.name from team a, team b where a.name < b.name\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"案例4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#案例4"}},[t._v("#")]),t._v(" 案例4")]),t._v(" "),a("p",[t._v("将第一个表查成第二个表的结果")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("year")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("month")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("amount")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("1991")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1.1")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("1991")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1.2")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("1991")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1.3")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("1991")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1.4")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("1992")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2.1")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("1992")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2.2")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("1992")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2.3")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("1992")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2.4")])])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("year")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("m1")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("m2")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("m3")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("m4")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("1991")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1.1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1.2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1.3")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1.4")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("1992")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2.1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2.2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2.3")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2.4")])])])]),t._v(" "),a("p",[t._v("答：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("select year, \n    (select amount from aaa m where month=1 and m.year=aaa.year) as m1, \n    (select amount from aaa m where month=2 and m.year=aaa.year) as m2, \n    (select amount from aaa m where month=3 and m.year=aaa.year) as m3, \n    (select amount from aaa m where month=4 and m.year=aaa.year) as m4 \nfrom aaa group by year\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("说明：复制表(只复制结构,源表名：a 新表名：b)")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("SQL: \nselect * into b from a where 1<>1 (where1=1，拷贝表结构和数据内容)\n\nORACLE: \ncreate table b As Select * from a where 1=2\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("<>（不等于）(SQL Server Compact)比较两个表达式。 当使用此运算符比较非空表达式时，如果左操作数不等于右操作数，则结果为 TRUE。否则，结果为 FALSE。")]),t._v(" "),a("h3",{attrs:{id:"案例5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#案例5"}},[t._v("#")]),t._v(" 案例5")]),t._v(" "),a("p",[t._v("原表：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("courseid")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("coursename")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("score")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("java")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("70")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("oracle")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("90")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("3")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("xml")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("30")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("4")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("jsp")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("40")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("5")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("servlet")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("80")])])])]),t._v(" "),a("p",[t._v("为了便于阅读,查询此表后的结果显式如下(及格分数为 60):")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("courseid")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("coursename")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("score")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("mark")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("java")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("70")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("pass")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("oracle")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("90")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("pass")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("3")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("xml")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("30")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("fail")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("4")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("jsp")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("40")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("fail")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("5")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("servlet")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("80")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("pass")])])])]),t._v(" "),a("p",[t._v("答：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('select courseid, coursename ,score ,if(score>=60, "pass","fail") as mark from course\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"案例6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#案例6"}},[t._v("#")]),t._v(" 案例6")]),t._v(" "),a("p",[t._v("表名：购物信息")]),t._v(" "),a("p",[t._v("给出所有购入商品为两种或两种以上的购物人记录")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("购物人")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("商品名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("数量")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("A")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("甲")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("B")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("乙")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("4")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("C")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("丙")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("A")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("丁")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("B")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("丙")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("5")])])])]),t._v(" "),a("p",[t._v("答：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("select * from 购物信息 where 购物人 in (select 购物人 from 购物信息 group by 购物人 having count(*) >= 2);\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"案例7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#案例7"}},[t._v("#")]),t._v(" 案例7")]),t._v(" "),a("p",[t._v("info 表")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("date")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("result")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("2005-05-09")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("win")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("2005-05-09")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("lose")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("2005-05-09")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("win")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("2005-05-09")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("lose")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("2005-05-10")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("win")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("2005-05-10")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("lose")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("2005-05-10")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("lose")])])])]),t._v(" "),a("p",[t._v("生成下列结果")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("date")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("win")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("lose")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("2005-05-09")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("2005-05-10")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")])])])]),t._v(" "),a("p",[t._v("答：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('select date,\nsum(case when result = "win" then 1 else 0 end) as "win", \nsum(case when result = "lose" then 1 else 0 end) as "lose" \nfrom info group by date;\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('select a.date, a.result as win, b.result as lose \nfrom (select date, count(result) as result from info where result = "win" group by date) as a \njoin (select date, count(result) as result from info where result = "lose" group by date) as b \non a.date = b.date;\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);