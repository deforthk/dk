(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{711:function(t,a,s){"use strict";s.r(a);var e=s(3),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"spring-中常用的依赖注入方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spring-中常用的依赖注入方式"}},[t._v("#")]),t._v(" Spring 中常用的依赖注入方式")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("通过 setter 方法注入")])]),t._v(" "),s("li",[s("p",[t._v("通过构造方法注入")])])]),t._v(" "),s("h2",{attrs:{id:"spring-中ioc-容器常用的接口和具体的实现类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spring-中ioc-容器常用的接口和具体的实现类"}},[t._v("#")]),t._v(" Spring 中IOC 容器常用的接口和具体的实现类")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("BeanFactory SpringIOC 容器的基本设置，是最底层的实现，面向框架本身的.")])]),t._v(" "),s("li",[s("p",[t._v("ApplicationContext BeanFactory 的子接口, 提供了更多高级的特定. 面向开发者的.")])]),t._v(" "),s("li",[s("p",[t._v("ConfigurableApplicationContext, ApplicationContext 的子接口，扩展出了 close 和 refresh 等关闭刷新容器的方法.")])]),t._v(" "),s("li",[s("p",[t._v("ClassPathXmlApplicationContext：从 classpath 的XML 配置文件中读取上下文，并生成上下文定义。应用程序上下文从程序环境变量中取得。")])]),t._v(" "),s("li",[s("p",[t._v("FileSystemXmlApplicationContext ：由文件系统中的XML 配置文件读取上下文。")])]),t._v(" "),s("li",[s("p",[t._v("XmlWebApplicationContext：由Web 应用的 XML 文件读取上下文。")])])]),t._v(" "),s("h2",{attrs:{id:"spring-中如何基于注解配置-bean-和装配-bean"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spring-中如何基于注解配置-bean-和装配-bean"}},[t._v("#")]),t._v(" Spring 中如何基于注解配置 Bean 和装配 Bean")]),t._v(" "),s("p",[t._v("（1） 首先要在 Spring中配置开启注解扫描")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("context:")]),t._v("component-scan")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("base-package")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("”")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("”")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("</ context:component-scan>\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("（2） 在具体的类上加上具体的注解")]),t._v(" "),s("p",[t._v("（3） Spring 中通常使用@Autowired 或者是@Resource 等注解进行 bean 的装配")]),t._v(" "),s("h2",{attrs:{id:"spring-mvc-中常用注解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spring-mvc-中常用注解"}},[t._v("#")]),t._v(" Spring MVC 中常用注解")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("注解")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("@Component")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("基本注解，标识一个受 Spring 管理的组件")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("@Controller")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("标识为一个表示层的组件")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("@Service")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("标识为一个业务层的组件")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("@Repository")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("标识为一个持久层的组件")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("@Autowired")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("自动装配")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("@Qualifier(“”)")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("具体指定要装配的组件的 id 值")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("@RequestMapping()")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("完成请求映射")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("@PathVariable")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("映射请求 URL 中占位符到请求处理方法的形参")])])])]),t._v(" "),s("h2",{attrs:{id:"spring-bean-的生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spring-bean-的生命周期"}},[t._v("#")]),t._v(" Spring Bean 的生命周期")]),t._v(" "),s("p",[t._v("（1） 默认情况下，IOC容器中bean的生命周期分为五个阶段:")]),t._v(" "),s("p",[t._v("调用构造器 或者是通过工厂的方式创建Bean 对象")]),t._v(" "),s("p",[t._v("给 bean 对象的属性注入值")]),t._v(" "),s("p",[t._v("调用初始化方法，进行初始化，初始化方法是通过 init-method 来指定的")]),t._v(" "),s("p",[t._v("使用")]),t._v(" "),s("p",[t._v("IOC 容器关闭时， 销毁 Bean 对象")]),t._v(" "),s("p",[t._v("（2） 当加入了Bean 的后置处理器后，IOC 容器中bean 的生命周期分为七个阶段:")]),t._v(" "),s("p",[t._v("调用构造器 或者是通过工厂的方式创建Bean 对象")]),t._v(" "),s("p",[t._v("给 bean 对象的属性注入值")]),t._v(" "),s("p",[t._v("执行Bean 后置处理器中的 postProcessBeforeInitialization")]),t._v(" "),s("p",[t._v("调用初始化方法，进行初始化， 初始化方法是通过 init-method 来指定的")]),t._v(" "),s("p",[t._v("执行Bean 的后置处理器中 postProcessAfterInitialization")]),t._v(" "),s("p",[t._v("使用")]),t._v(" "),s("p",[t._v("IOC 容器关闭时， 销毁 Bean 对象")]),t._v(" "),s("h2",{attrs:{id:"spring-mvc-的工作流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spring-mvc-的工作流程"}},[t._v("#")]),t._v(" Spring MVC 的工作流程")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("用户发送请求至前端控制器 DispatcherServlet")])]),t._v(" "),s("li",[s("p",[t._v("DispatcherServlet 收到请求调用 HandlerMapping 处理器映射器。")])]),t._v(" "),s("li",[s("p",[t._v("处理器映射器找到具体的处理器，生成处理器对象及处理器拦截器(如果有则生成)一并返回给")])]),t._v(" "),s("li",[s("p",[t._v("DispatcherServlet。")])]),t._v(" "),s("li",[s("p",[t._v("DispatcherServlet 调用 HandlerAdapter 处理器适配器")])]),t._v(" "),s("li",[s("p",[t._v("HandlerAdapter 经过适配调用具体的处理器(Controller，也叫后端控制器)。")])]),t._v(" "),s("li",[s("p",[t._v("Controller 执行完成返回 ModelAndView")])]),t._v(" "),s("li",[s("p",[t._v("HandlerAdapter 将 controller 执行结果 ModelAndView 返回给 DispatcherServlet")])]),t._v(" "),s("li",[s("p",[t._v("DispatcherServlet 将 ModelAndView 传给 ViewReslover 视图解析器")])]),t._v(" "),s("li",[s("p",[t._v("ViewReslover 解析后返回具体 View")])]),t._v(" "),s("li",[s("p",[t._v("DispatcherServlet 根据 View 进行渲染视图（即将模型数据填充至视图中）。")])]),t._v(" "),s("li",[s("p",[t._v("DispatcherServlet 响应用户")])])]),t._v(" "),s("h2",{attrs:{id:"spring-mvc-中拦截器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spring-mvc-中拦截器"}},[t._v("#")]),t._v(" Spring MVC 中拦截器")]),t._v(" "),s("ul",[s("li",[t._v("定义：有两种方式")])]),t._v(" "),s("p",[t._v("实现HandlerInterceptor 接口")]),t._v(" "),s("p",[t._v("继承HandlerInterceptorAdapter")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("mvc:")]),t._v("interceptors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("bean")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("myFirstInterceptor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("com.atguigu.interceptor.MyFirstInterceptor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 只针对部分请求拦截或者不拦截 --\x3e")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("mvc:")]),t._v("interceptor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("mvc:")]),t._v("mapping")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("!—指定拦截--")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("mvc:")]),t._v("exclude-mapping")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("””/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("!—指定不拦截--")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("bean")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v(" com.atguigu.interceptor.MySecondInterceptor "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("mvc:")]),t._v("interceptor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("ul",[s("li",[t._v("拦截器中三个重要的方法：")])]),t._v(" "),s("p",[t._v("preHandle 控制器执行前调用此方法")]),t._v(" "),s("p",[t._v("postHandle 控制器执行后未返回视图调用")]),t._v(" "),s("p",[t._v("afterCompletion 控制器执行后返回视图后调用")]),t._v(" "),s("h2",{attrs:{id:"mybatis-相关"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-相关"}},[t._v("#")]),t._v(" MyBatis 相关")]),t._v(" "),s("ul",[s("li",[t._v("MyBatis 中 #{}和${}")])]),t._v(" "),s("p",[t._v("#{}是预编译处理，${}是字符串替换；")]),t._v(" "),s("p",[t._v("Mybatis 在处理#{}时，会将 sql 中的#{}替换为?号，调用 PreparedStatement 的 set 方法来赋值；")]),t._v(" "),s("p",[t._v("Mybatis 在处理${}时，就是把${}替换成变量的值；")]),t._v(" "),s("p",[t._v("使用#{}可以有效的防止 SQL 注入，提高系统安全性。")]),t._v(" "),s("ul",[s("li",[t._v("Mybatis 结果集的映射方式")])]),t._v(" "),s("p",[t._v("自动映射，通过 resultType 来指定要映射的类型即可。")]),t._v(" "),s("p",[t._v("自定义映射，通过 resultMap 来完成具体的映射规则，指定将结果集中的哪个列映射到对象的哪个属性。")]),t._v(" "),s("ul",[s("li",[t._v("MyBatis 如何获取自动生成的(主)键值")])]),t._v(" "),s("p",[t._v("在标签中使用 useGeneratedKeys 和 keyProperty 两个属性来获取自动生成的主键值。")]),t._v(" "),s("p",[t._v("示例：")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("insert")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("”insertname”")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("usegeneratedkeys")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("”true”")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("keyproperty")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("”id”")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" \n    insert into names (name) values (#{name}) \n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("insert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("ul",[s("li",[t._v("Mybatis 的动态 SQL")])]),t._v(" "),s("p",[t._v("动态 SQL 是 MyBatis 的强大特性之一 基于功能强大的 OGNL 表达式。")]),t._v(" "),s("p",[t._v("动态 SQL 主要是来解决查询条件不确定的情况，在程序运行期间，根据提交的条件动态的完成查询。")]),t._v(" "),s("p",[t._v("常用的标签:")]),t._v(" "),s("p",[t._v('"if" : 进行条件的判断')]),t._v(" "),s("p",[t._v('"where"：在"if"判断后的 SQL 语句前面添加 WHERE 关键字，并处理 SQL 语句开始位置的 AND 或者 OR 的问题')]),t._v(" "),s("p",[t._v('"trim"：可以在 SQL 语句前后进行添加指定字符 或者去掉指定字符.')]),t._v(" "),s("p",[t._v('"set": 主要用于修改操作时出现的逗号问题')]),t._v(" "),s("p",[t._v('"choose" "when" "otherwise"：类似于 java 中的 switch 语句.在所有的条件中选择其一')]),t._v(" "),s("p",[t._v('"foreach"：迭代操作')]),t._v(" "),s("ul",[s("li",[t._v("Mybatis 如何完成 MySQL 的批量操作")])]),t._v(" "),s("p",[t._v("MyBatis 完成 MySQL 的批量操作主要是通过标签来拼装相应的SQL语句。")]),t._v(" "),s("p",[t._v("例如:")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("insert")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("insertBatch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("foreach")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("collection")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("emps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("curr_emp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("separator")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" \n        insert into tbl_employee(last_name,email,gender,d_id) values \n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("foreach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("insert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h2",{attrs:{id:"spring-中-bean-的作用域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spring-中-bean-的作用域"}},[t._v("#")]),t._v(" Spring 中 bean 的作用域")]),t._v(" "),s("p",[t._v("总共有四种作用域:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Singleton 单例的")])]),t._v(" "),s("li",[s("p",[t._v("Prototype 原型的")])]),t._v(" "),s("li",[s("p",[t._v("Request")])]),t._v(" "),s("li",[s("p",[t._v("Session")])])]),t._v(" "),s("h2",{attrs:{id:"spring-中自动装配常"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spring-中自动装配常"}},[t._v("#")]),t._v(" Spring 中自动装配常")]),t._v(" "),s("p",[t._v("byName: 根据 bean 对象的属性名进行装配")]),t._v(" "),s("p",[t._v("byType： 根据 bean 对象的属性的类型进行装配,需要注意匹配到多个兼容类型的 bean 对象时，会抛出异常。")]),t._v(" "),s("h2",{attrs:{id:"autowired及required属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#autowired及required属性"}},[t._v("#")]),t._v(" @Autowired及required属性")]),t._v(" "),s("p",[t._v("（1） 首先会使用 byType 的方式进行自动装配，如果能唯一匹配，则装配成功， 如果匹配到多个兼容类型的 bean, 还会尝试使用 byName 的方式进行唯一确定. 如果能唯一确定，则装配成功，如果不能唯\n一确定，则装配失败，抛出异常.")]),t._v(" "),s("p",[t._v("（2） 默认情况下，使用@Autowired 标注的属性必须被装配，如果装配不了，也会抛出异常. 可以使用 required=false 来设置不是必须要被装配.")]),t._v(" "),s("h2",{attrs:{id:"springmvc-中-contextloaderlistener-的作用以及实现原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#springmvc-中-contextloaderlistener-的作用以及实现原理"}},[t._v("#")]),t._v(" Springmvc 中 ContextLoaderListener 的作用以及实现原理")]),t._v(" "),s("p",[t._v("作用：")]),t._v(" "),s("p",[t._v("ContextLoaderListener 的作用是通过监听的方式在 WEB 应用服务器启动时将 Spring 的容器对象进行初始化.")]),t._v(" "),s("p",[t._v("原理：")]),t._v(" "),s("p",[t._v("ContextLoaderListener 实现了 ServletContextListener 接口，用于监听")]),t._v(" "),s("p",[t._v("ServletContext 的创建，当监听到 ServletContext 创建时，在对应contextInitialized方法中，将 Spring 的容器对象进行创建，并将创建好的容器对象设置到ServletContext 域对象中， 目\n的是让各个组件可以通过 ServletContext 共享到Spring的容器对象")]),t._v(" "),s("h2",{attrs:{id:"mybatis-提供的两级缓存，以及缓存的查找顺序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-提供的两级缓存，以及缓存的查找顺序"}},[t._v("#")]),t._v(" Mybatis 提供的两级缓存，以及缓存的查找顺序")]),t._v(" "),s("p",[t._v("（1）MyBatis 的缓存分为一级缓存和 二级缓存。一级缓存是 SqlSession 级别的缓存，默认开启。二级缓存是 NameSpace 级别(Mapper)的缓存，多个 SqlSession 可以共享，使用时需要进行配置开\n启。")]),t._v(" "),s("p",[t._v("（2）缓存的查找顺序：二级缓存 => 一级缓存 => 数据库")]),t._v(" "),s("h2",{attrs:{id:"spring-与-mybatis-整合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spring-与-mybatis-整合"}},[t._v("#")]),t._v(" Spring 与 Mybatis 整合")]),t._v(" "),s("p",[t._v("（1） SqlSession 创建的问题，通过 SqlSessionFactoryBean 来配置用于创建 SqlSession 的信息。例如: Mybatis 的核心配置文件、Mapper 映射文件、数据源等")]),t._v(" "),s("p",[t._v("（2） Mapper 接口创建的问题， 使用 MapperScannerConŨgurer 批量为 MyBatis 的 Mapper 接口生成代理实现类并将具体的对象交给 Spring 容器管理")]),t._v(" "),s("h2",{attrs:{id:"spring-声明式事务中-transaction-中常用的两种事务传播行为"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spring-声明式事务中-transaction-中常用的两种事务传播行为"}},[t._v("#")]),t._v(" Spring 声明式事务中@Transaction 中常用的两种事务传播行为")]),t._v(" "),s("p",[t._v("通过 propagation 来执行事务的传播行为")]),t._v(" "),s("p",[t._v("REQUIRED：使用调用者的事务，如果调用者没有事务，则启动新的事务运行")]),t._v(" "),s("p",[t._v("REQUIRES_NEW：将调用者的事务挂起，开启新的事务运行。")]),t._v(" "),s("h2",{attrs:{id:"requestmapping-注解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#requestmapping-注解"}},[t._v("#")]),t._v(" @RequestMapping 注解")]),t._v(" "),s("p",[t._v("（1） 该注解的作用是用来完成请求 与 请求处理方法的映射")]),t._v(" "),s("p",[t._v("（2） 该注解可以标注在类上或者是方法上")]),t._v(" "),s("p",[t._v("（3） 常用的属性:")]),t._v(" "),s("p",[t._v("value: 默认属性， 用于指定映射的请求URL")]),t._v(" "),s("p",[t._v("method: 指定映射的请求方式")]),t._v(" "),s("p",[t._v("params: 指定映射的请求参数")]),t._v(" "),s("p",[t._v("headers: 指定映射的请求头信息")]),t._v(" "),s("h2",{attrs:{id:"springmvc-中处理模型数据的两种方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#springmvc-中处理模型数据的两种方式"}},[t._v("#")]),t._v(" Springmvc 中处理模型数据的两种方式")]),t._v(" "),s("p",[t._v("使用 ModelAndView 作为方法的返回值，将模型数据和视图信息封装到 ModelAndView 中")]),t._v(" "),s("p",[t._v("使用 Map 或者是 Model 作为方法的形参，将模型数据添加到 Map 或者是 Model 中")]),t._v(" "),s("h2",{attrs:{id:"rest-中的四种请求方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rest-中的四种请求方式"}},[t._v("#")]),t._v(" REST 中的四种请求方式")]),t._v(" "),s("p",[t._v("GET 查询操作")]),t._v(" "),s("p",[t._v("POST 添加操作")]),t._v(" "),s("p",[t._v("DELETE 删除操作")]),t._v(" "),s("p",[t._v("PUT 修改操作")]),t._v(" "),s("h2",{attrs:{id:"视图和视图解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#视图和视图解析"}},[t._v("#")]),t._v(" 视图和视图解析")]),t._v(" "),s("p",[t._v("视图是由视图解析器解析得到的")]),t._v(" "),s("p",[t._v("视图解析器的作用是根据 ModelAndView 中的信息解析得到具体的视图对象")]),t._v(" "),s("p",[t._v("视图的作用是完成模型数据的渲染工作，最终完成转发或者是重定向的操作")]),t._v(" "),s("h2",{attrs:{id:"springmvc-中如何返回-json-数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#springmvc-中如何返回-json-数据"}},[t._v("#")]),t._v(" Springmvc 中如何返回 JSON 数据")]),t._v(" "),s("p",[t._v("1：在项目中加入 json 转换的依赖，例如 jackson，fastjson，gson 等")]),t._v(" "),s("p",[t._v("2：在请求处理方法中将返回值改为具体返回的数据的类型， 例如数据的集合类 List等")]),t._v(" "),s("p",[t._v("3：在请求处理方法上使用@ResponseBody 注解")]),t._v(" "),s("h2",{attrs:{id:"spring-中切面中常用的几种通知"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spring-中切面中常用的几种通知"}},[t._v("#")]),t._v(" Spring 中切面中常用的几种通知")]),t._v(" "),s("p",[t._v("前置通知 在目标方法执行之前执行")]),t._v(" "),s("p",[t._v("后置通知 在目标方法执行之后执行，不管目标方法有没有抛出异常")]),t._v(" "),s("p",[t._v("返回通知 在目标方法成功返回之后执行， 可以获取到目标方法的返回值异常通知 在目标方法抛出异常后执行")]),t._v(" "),s("p",[t._v("环绕通知 环绕着目标方法执行")]),t._v(" "),s("h2",{attrs:{id:"springmvc-的工作原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#springmvc-的工作原理"}},[t._v("#")]),t._v(" SpringMVC 的工作原理")]),t._v(" "),s("p",[t._v("（1）用户向服务器发送请求，请求被 springMVC 前端控制器 DispatchServlet 捕获；")]),t._v(" "),s("p",[t._v("（2）DispatcherServle 对请求 URL 进行解析，得到请求资源标识符（ URL）， 然后根据该 URL 调用 HandlerMapping 将请求映射到处理器HandlerExcutionChain；")]),t._v(" "),s("p",[t._v("（3）DispatchServlet 根据获得 Handler 选择一个合适的HandlerAdapter 适配器处理；")]),t._v(" "),s("p",[t._v("（4）Handler 对数据处理完成以后将返回一个 ModelAndView（）对象给 DisPatchServlet;")]),t._v(" "),s("p",[t._v("（5）Handler 返回的 ModelAndView() 只是一个逻辑视图并不是一个正式的视图， DispatcherSevlet 通过 ViewResolver 试图解析器将逻辑视图转化为真正的视图 View;")]),t._v(" "),s("p",[t._v("（6）DispatcherServle 通过 ModelAndView()view并返回给客户端;")]),t._v(" "),s("h2",{attrs:{id:"对-spring-的理解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对-spring-的理解"}},[t._v("#")]),t._v(" 对 Spring 的理解")]),t._v(" "),s("p",[t._v("Spring 是一个开源框架，为简化企业级应用开发而生。Spring 可以是使简单的JavaBean 实现以前只有 EJB 才能实现的功能。Spring 是一个 IOC 和 AOP容器框架。")]),t._v(" "),s("p",[t._v("Spring 容器的主要核心是：")]),t._v(" "),s("ul",[s("li",[t._v("控制反转（IOC）")])]),t._v(" "),s("p",[t._v("传统的 java 开发模式中，当需要一个对象时，我们会自己使用 new 或者 getInstance 等直接或者间接调用构造方法创建一个对象。而在 spring 开发模式中，spring 容器使用了工厂模式为我们创建了所需要的对象，不需要我们自己创建了，直接调用 spring 提供的对象就可以了，这是控制反转的思想。")]),t._v(" "),s("ul",[s("li",[t._v("依赖注入（DI）")])]),t._v(" "),s("p",[t._v("spring 使用 javaBean 对象的 set 方法或者带参数的构造方法为我们在创建所需对象时将其属性自动设置所需要的值的过程，就是依赖注入的思想。")]),t._v(" "),s("ul",[s("li",[t._v("面向切面编程（AOP）")])]),t._v(" "),s("p",[t._v("在面向对象编程（oop）思想中，我们将事物纵向抽成一个个的对象。而在面向切面编程中，我们将一个个的对象某些类似的方 面横向抽成一个切面，对这个切面进行一些如权限控制、事物管理，记录日志等公用操作处理的过程就是面向切面编程的思想。AOP 底层是动态代理，如果是接口采用 JDK 动态代理，如果是类采用CGLIB 方式实现动态代理。")]),t._v(" "),s("h2",{attrs:{id:"spring-中常用的设计模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spring-中常用的设计模式"}},[t._v("#")]),t._v(" Spring 中常用的设计模式")]),t._v(" "),s("p",[t._v("（1） 代理模式——spring 中两种代理方式，若目标对象实现了若干接口，spring 使用 jdk 的java.lang.reũect.Proxy 类代理。若目标兑现没有实现任何接口，spring 使用 CGLIB 库生成目标类的子类。")]),t._v(" "),s("p",[t._v("（2） 单例模式——在 spring 的配置文件中设置 bean 默认为单例模式。")]),t._v(" "),s("p",[t._v("（3） 模板方式模式——用来解决代码重复的问题。比如：RestTemplate、JmsTemplate、JpaTemplate")]),t._v(" "),s("p",[t._v("（4） 工厂模式——在工厂模式中，我们在创建对象时不会对客户端暴露创建逻辑，并且是通过使用同一个接口来指向新创建的对象。Spring 中使用beanFactory 来创建对象的实例。")]),t._v(" "),s("h2",{attrs:{id:"spring-的事务管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spring-的事务管理"}},[t._v("#")]),t._v(" Spring 的事务管理")]),t._v(" "),s("p",[t._v("（1）声明式事务管理的定义：")]),t._v(" "),s("p",[t._v("用在 Spring 配置文件中声明式的处理事务来代替代码式的处理事务。这样的好处是，事务管理不侵入开发的组件，具体来说，业务逻辑对象就不会意识到正在事务管理之中，事实上也应该如此，因为事务管理是属于系统层面的服务，而不是业务逻辑的一部分，如果想要改变事务管理策划的话，也只需要在定义文件中重新配置即可，这样维护起来极其方便。")]),t._v(" "),s("p",[t._v("基于 TransactionInterceptor 的声明式事务管理：两个次要的属性： transactionManager，用来指定一个事务治理器，并将具体事务相关的操作请托给它；其他一个是 Properties 类型的transactionAttributes 属性，该属性的每一个键值对中，键指定的是方法名，方法名可以行使通配符，而值就是表现呼应方法的所运用的事务属性。")]),t._v(" "),s("p",[t._v("（2）基于 @Transactional 的声明式事务管理：")]),t._v(" "),s("p",[t._v("Spring 2.x 还引入了基于 Annotation 的体式格式，具体次要触及@Transactional 标注。@Transactional 可以浸染于接口、接口方法、类和类方法上。算作用于类上时，该类的一切public 方法将都具有该类型的事务属性。")]),t._v(" "),s("p",[t._v("（3）编程式事物管理的定义：")]),t._v(" "),s("p",[t._v("在代码中显式挪用 beginTransaction()、commit()、rollback()等事务治理相关的方法， 这就是编程式事务管理。Spring 对事物的编程式管理有基于底层 API 的编程式管理和基于 TransactionTemplate 的编程式事务管理两种方式。")])])}),[],!1,null,null,null);a.default=n.exports}}]);