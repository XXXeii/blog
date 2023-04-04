(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{460:function(s,a,e){"use strict";e.r(a);var t=e(2),n=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-连接到-linux-centos8-的服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-连接到-linux-centos8-的服务器"}},[s._v("#")]),s._v(" 1.连接到 Linux CentOS8 的服务器")]),s._v(" "),a("hr"),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" root@ip\n//输入完之后会要输入密码，密码是不显示的，输入完回车就行\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"_2-安装编译器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装编译器"}},[s._v("#")]),s._v(" 2.安装编译器")]),s._v(" "),a("hr"),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gcc pcre-devel zlib-devel openssl openssl-devel\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_3-建立存放的文件夹"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-建立存放的文件夹"}},[s._v("#")]),s._v(" 3.建立存放的文件夹")]),s._v(" "),a("hr"),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" /www/nginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_4-移动到文件夹"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-移动到文件夹"}},[s._v("#")]),s._v(" 4.移动到文件夹")]),s._v(" "),a("hr"),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /www/nginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_5-下载-nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-下载-nginx"}},[s._v("#")]),s._v(" 5.下载 nginx")]),s._v(" "),a("hr"),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://nginx.org/download/nginx-1.20.2.tar.gz\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_6-解压-nginx-tar-gz"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-解压-nginx-tar-gz"}},[s._v("#")]),s._v(" 6.解压 nginx.tar.gz")]),s._v(" "),a("hr"),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-zxvf")]),s._v(" nginx-1.20.2.tar.gz\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_7-移动到解压的文件夹"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-移动到解压的文件夹"}},[s._v("#")]),s._v(" 7.移动到解压的文件夹")]),s._v(" "),a("hr"),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" nginx-1.20.2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_8-配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-配置文件"}},[s._v("#")]),s._v(" 8.配置文件")]),s._v(" "),a("hr"),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("./configure "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--prefix")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/nginx --with-http_ssl_module --with-http_v2_module\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_9-编译和安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-编译和安装"}},[s._v("#")]),s._v(" 9.编译和安装")]),s._v(" "),a("hr"),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"_10-查找安装路径和移动到文件夹"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-查找安装路径和移动到文件夹"}},[s._v("#")]),s._v(" 10.查找安装路径和移动到文件夹")]),s._v(" "),a("hr"),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("whereis")]),s._v(" nginx\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/nginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"_11-启动-nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11-启动-nginx"}},[s._v("#")]),s._v(" 11.启动 nginx")]),s._v(" "),a("hr"),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("./sbin/nginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_12-重新加载配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12-重新加载配置"}},[s._v("#")]),s._v(" 12.重新加载配置")]),s._v(" "),a("hr"),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("./sbin/nginx "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" reload\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);