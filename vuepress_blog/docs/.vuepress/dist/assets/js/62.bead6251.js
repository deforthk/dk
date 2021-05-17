(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{697:function(t,e,v){"use strict";v.r(e);var _=v(3),s=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"http的长连接和短连接"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http的长连接和短连接"}},[t._v("#")]),t._v(" http的长连接和短连接")]),t._v(" "),v("p",[t._v("HTTP 协议有 HTTP/1.0 版本和 HTTP/1.1 版本。")]),t._v(" "),v("p",[t._v("HTTP1.1 默认保持长连接（HTTP persistent connection，也翻译为持久连接），数据传输完成了保持 TCP连接不断开（不发 RST 包、不四次握手），等待在同域名下继续用这个通道传输数据；相反的就是短连接。")]),t._v(" "),v("p",[t._v("在 HTTP/1.0 中，默认使用的是短连接。也就是说，浏览器和服务器每进行一次 HTTP 操作，就建立一次连接，任务结束就中断连接。")]),t._v(" "),v("p",[t._v("从 HTTP/1.1 起，默认使用的是长连接，用以保持连接特性。")]),t._v(" "),v("h2",{attrs:{id:"http常见的状态码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http常见的状态码"}},[t._v("#")]),t._v(" http常见的状态码")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"left"}},[t._v("状态码")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("状态")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("注释")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("200")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("OK")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("客户端请求成功")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("301")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Moved Permanentlyacle")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("请求的 URL 已移走。Response 中应该包含一个 Location URL, 说明资源现在所处的位置")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("302")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("found")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("重定向")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("400")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Bad Request")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("客户端请求有语法错误，不能被服务器所理解")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("401")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Unauthorized")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("请求未经授权，这个状态代码必须和 WWW-Authenticate 报头域一起使用")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("403")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Forbidden")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("服务器收到请求，但是拒绝提供服务")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("404")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Not Found")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("请求资源不存在，eg：输入了错误的 URL")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("500")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Internal Server Error")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("服务器发生不可预期的错误")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("503")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Server Unavailable")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("服务器当前不能处理客户端的请求，一段时间后可能恢复正常")])])])]),t._v(" "),v("h2",{attrs:{id:"get-和-post"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#get-和-post"}},[t._v("#")]),t._v(" GET 和 POST")]),t._v(" "),v("p",[t._v("（1） GET 请求的数据会附在 URL 之后（ 就是把数据放置在 HTTP 协议头中）， 以? 分割 URL 和传 输数据， 参数之间以& 相连。")]),t._v(" "),v("p",[t._v("如： login.action?name=zhagnsan&password=123456。")]),t._v(" "),v("p",[t._v("POST 把提交的数据则放置在是 HTTP 包的包体中。")]),t._v(" "),v("p",[t._v('（2） GET 方式提交的数据最多只能是 1024 字节，理论上 POST 没有限制，可传较大量的数据。其实这样说是错误的，不准确的：“GET 方式提交的数据最多只能是 1024 字节"，因为 GET 是通过 URL 提交数 据，那么 GET 可提交的数据量就跟URL的长度有直接关系了。而实际上，URL 不存在参数上限的问题， HTTP 协议规范没有对 URL 长度进行限制。这个限制是特定的浏览器及服务器对它的限制。IE 对 URL 长 度的限制是 2083 字节(2K+35)。对于其他浏览器，如Netscape、FireFox 等，理论上没有长度限制， 其限制取决于操作系统的支持。')]),t._v(" "),v("p",[t._v("（3） POST 的安全性要比GET 的安全性高。")]),t._v(" "),v("p",[t._v('注意：这里所说的安全性和上面 GET 提到的“安全”不是同个概念。上面“安全”的含义仅仅是不作数据修改，而这里安全的含义是真正的 Security 的含义，比如：通过 GET 提交数据，用户名和密码将明文出现在 URL 上，因为(1)登录页面有可能被浏览器缓存，(2)其他人查看浏览器的历史纪录，那么别人就可以拿到你的账号和密码了，除此之外，使用 GET 提交数据还可能会造成 Cross-site request forgery 攻击。 Get 是向服务器发索取数据的一种请求，而 Post 是向服务器提交数据的一种请求，在 FORM（表单）中， Method 默认为"GET"，实质上，GET 和 POST 只是发送机制不同，并不是一个取一个发！')]),t._v(" "),v("h2",{attrs:{id:"cookie-和-session"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cookie-和-session"}},[t._v("#")]),t._v(" Cookie 和 Session")]),t._v(" "),v("p",[t._v("Cookie 是 web 服务器发送给浏览器的一块信息，浏览器会在本地一个文件中给每个 web 服务器存储 cookie。以后浏览器再给特定的 web 服务器发送请求时，同时会发送所有为该服务器存储的 cookie。")]),t._v(" "),v("p",[t._v("Session 是存储在 web 服务器端的一块信息。session 对象存储特定用户会话所需的属性及配置信息。 当用户在应用程序的 Web 页之间跳转时，存储在Session 对象中的变量将不会丢失，而是在整个用户会话中一直存在下去。")]),t._v(" "),v("p",[t._v("Cookie 和 session 的不同点：")]),t._v(" "),v("p",[t._v("（1） 无论客户端做怎样的设置，session 都能够正常工作。当客户端禁用 cookie 时将无法使用 cookie。")]),t._v(" "),v("p",[t._v("（2） 在存储的数据量方面：session 能够存储任意的java 对象，cookie 只能存储 String 类型的对象。")]),t._v(" "),v("h2",{attrs:{id:"单点登录中，如果-cookie-被禁用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#单点登录中，如果-cookie-被禁用"}},[t._v("#")]),t._v(" 单点登录中，如果 cookie 被禁用")]),t._v(" "),v("p",[t._v("单点登录的原理是后端生成一个 session ID，然后设置到 cookie，后面的所有请求浏览器都会带上 cookie， 然后服务端从 cookie 里获取 session ID， 再查询到用户信息。")]),t._v(" "),v("p",[t._v("所以，保持登录的关键不是 cookie，而是通过 cookie 保存和传输的 session ID，其本质是能获取用户信息的数据。除了 cookie，还通常使用 HTTP 请求头来传输。但是这个请求头浏览器不会像 cookie 一样自动携带，需要手工处理。")]),t._v(" "),v("h2",{attrs:{id:"jsp-和-servlet"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#jsp-和-servlet"}},[t._v("#")]),t._v(" jsp 和 Servlet")]),t._v(" "),v("p",[t._v("sp 本质上就是一个 Servlet，它是 Servlet 的一种特殊形式（由 SUN 公司推出），每个 jsp 页面 都是一个 servlet 实例。")]),t._v(" "),v("p",[t._v("Servlet 是由 Java 提供用于开发 web 服务器应用程序的一个组件，运行在服务端，由 servlet 容器 管理，用来生成动态内容。一个 servlet 实例是实现了特殊接口 Servlet 的 Java 类，所有自定义的 servlet 均必须实现 Servlet 接口。")]),t._v(" "),v("p",[t._v("区别：")]),t._v(" "),v("p",[t._v("jsp 是 html 页面中内嵌的 Java 代码，侧重页面显示；")]),t._v(" "),v("p",[t._v("Servlet 是 html 代码和 Java 代码分离，侧重逻辑控制，mvc 设计思想中 jsp 位于视图层，servlet 位于控制层。")]),t._v(" "),v("h2",{attrs:{id:"servlet-生命周期"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#servlet-生命周期"}},[t._v("#")]),t._v(" servlet 生命周期")]),t._v(" "),v("p",[t._v("Servlet 加载—>实例化—>服务—>销毁。")]),t._v(" "),v("p",[t._v("init（）：")]),t._v(" "),v("p",[t._v("在 Servlet 的生命周期中，仅执行一次init()方法。它是在服务器装入 Servlet 时执行的，负责初始化 Servlet 对象。可以配置服务器，以在启动服务器或客户机首次访问 Servlet 时装入 Servlet。无论有 多少客户机访问 Servlet，都不会重复执行 init（）。")]),t._v(" "),v("p",[t._v("service（）：")]),t._v(" "),v("p",[t._v("它是 Servlet 的核心，负责响应客户的请求。每当一个客户请求一个 HttpServlet 对象，该对象的 Service()方法就要调用，而且传递给这个方法一个“请求” （ServletRequest）对象和一个“响应”（ServletResponse）对象作为参数。在 HttpServlet 中已 存在 Service()方法。默认的服务功能是调用与 HTTP 请求的方法相应的 do 功能。")]),t._v(" "),v("p",[t._v("destroy（）：")]),t._v(" "),v("p",[t._v("仅执行一次，在服务器端停止且卸载 Servlet 时执行该方法。当 Servlet 对象退出生命周期时，负责释 放占用的资源。一个 Servlet 在运行 service()方法时可能会产生其他的线程，因此需要确认在调用 destroy()方法时，这些线程已经终止或完成。")]),t._v(" "),v("ul",[v("li",[t._v("如何与 Tomcat 结合工作步骤")])]),t._v(" "),v("p",[t._v("（1） Web Client 向 Servlet 容器（Tomcat）发出Http 请求")]),t._v(" "),v("p",[t._v("（2） Servlet 容器接收Web Client 的请求")]),t._v(" "),v("p",[t._v("（3） Servlet 容器创建一个HttpRequest 对象，将Web Client 请求的信息封装到这个对象中")]),t._v(" "),v("p",[t._v("（4） Servlet 容器创建一个HttpResponse 对象")]),t._v(" "),v("p",[t._v("（5） Servlet 容器调用HttpServlet 对象的 service 方法，把HttpRequest 对象与 HttpResponse 对象作为参数传给HttpServlet 对象")]),t._v(" "),v("p",[t._v("（6） HttpServlet 调用 HttpRequest 对象的有关方法，获取Http 请求信息")]),t._v(" "),v("p",[t._v("（7） HttpServlet 调用 HttpResponse 对象的有关方法，生成响应数据")]),t._v(" "),v("ul",[v("li",[t._v("servlet 特性")])]),t._v(" "),v("p",[t._v("单例多线程")]),t._v(" "),v("h2",{attrs:{id:"servlet-是线程安全的吗"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#servlet-是线程安全的吗"}},[t._v("#")]),t._v(" servlet 是线程安全的吗")]),t._v(" "),v("p",[t._v("Servlet 对象并不是一个线程安全的对象。")]),t._v(" "),v("p",[t._v("Servlet 第一次被调用的时候，init()方法会被调用，然后调用 service() 方法，从第二次被请求开始，就直接调用 service()方法。 因为 servlet 是单实例的，所以后面再次请求同一个 Servlet 的时候都不会创建 Servlet 实例，而且web 容器会针对每个请求创建一个独立的线程，这样多个并发请求会导致多个线程同时调用 service() 方法，这样就会存在线程不安全的问题。")]),t._v(" "),v("ul",[v("li",[t._v("如何解决 Servlet 线程不安全的问题")])]),t._v(" "),v("p",[t._v("（1） 不要在 servlet 中使用成员变量。")]),t._v(" "),v("p",[t._v("（2） 可以给 servlet 中的方法添加同步锁，Synchronized，但是不提倡，数据并发访问会造成阻塞等待。")]),t._v(" "),v("p",[t._v("（3） 可以实现 SingleThreadModel 接口。这样可以避免使用成员变量的问题，但是也不提倡，原因同上。")]),t._v(" "),v("h2",{attrs:{id:"过滤器和拦截器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#过滤器和拦截器"}},[t._v("#")]),t._v(" 过滤器和拦截器")]),t._v(" "),v("ul",[v("li",[t._v("过滤器的作用")])]),t._v(" "),v("p",[t._v("过滤器，是在 java web 中，你传入的 request,response 提前过滤掉一些信息，或者提前设置一些参 数，然后再传入 servlet 或者 struts 的 action 进行业务逻辑，比如过滤掉非法 url（不是 login.do 的地址请求，如果用户没有登陆都过滤掉）,或者在传入 servlet 或者 struts 的action 前统一设置字符集，或者去除掉一些非法字符。")]),t._v(" "),v("ul",[v("li",[t._v("拦截器的作用")])]),t._v(" "),v("p",[t._v("拦截器，是在面向切面编程的就是在你的 service 或者一个方法，前调用一个方法，或者在方法后调用一个方法比如动态代理就是拦截器的简单实现，在你调用方法前打印出字符串（或者做其它业务逻辑的操作），也可以在你调用方法后打印出字符串，甚至在你抛出异常的时候做业务逻辑的操作。")]),t._v(" "),v("ul",[v("li",[t._v("拦截器和过滤器有什么区别")])]),t._v(" "),v("p",[t._v("1.拦截器是基于 java 的反射机制的，而过滤器是基于函数回调。")]),t._v(" "),v("p",[t._v("2.拦截器不依赖 servlet 容器，过滤器依赖与 servlet 容器。")]),t._v(" "),v("p",[t._v("3.拦截器只能对 action 请求起作用，而过滤器则可以对几乎所有的请求起作用。")]),t._v(" "),v("p",[t._v("4.拦截器可以访问 action 上下文、值栈里的对象，而过滤器不能访问。")]),t._v(" "),v("p",[t._v("5.在action 的生命周期中，拦截器可以多次被调用，而过滤器只能在容器初始化时被调用一次")]),t._v(" "),v("ul",[v("li",[t._v("拦截器和过滤器的执行顺序")])]),t._v(" "),v("p",[t._v("过滤前 – 拦截前 – Action 处理 – 拦截后 – 过滤后。")]),t._v(" "),v("p",[t._v("过滤是一个横向的过程，首先把客户端提交的内容进行过滤(例如未登录用户不能访问内部页面的处理)；")]),t._v(" "),v("p",[t._v("过滤通过后，拦截器将检查用户提交数据的验证，做一些前期的数据处理，接着把处理后的数据发给对应的 Action；Action 处理完成返回后，拦截器还可以做其他过程(还没想到要做啥)，再向上返回到过滤器的后续操作。")])])}),[],!1,null,null,null);e.default=s.exports}}]);