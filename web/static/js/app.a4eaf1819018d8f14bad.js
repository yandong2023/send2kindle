webpackJsonp([1],{"+skl":function(t,e){},"0jLO":function(t,e){},"9pfM":function(t,e){},N4dg:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),o=s("mvHQ"),i=s.n(o),l=s("mtWM"),n=s.n(l),r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal",class:[t.isFade?"show":"fade"],attrs:{id:"myModal",tabindex:"-1",role:"dialog"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:t.closeModal}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),t._v(" "),s("h4",{staticClass:"modal-title",attrs:{id:"myModalLabel"}},[t._v(t._s(t.modalTitle))])]),t._v(" "),s("div",{staticClass:"modal-body"},[t._t("default",[t._v("\n          内容加载失败...\n        ")])],2),t._v(" "),t._t("footer")],2)])])},staticRenderFns:[]},c=s("VU/8")({name:"basic-small-modal",props:["book","isFade","modalTitle"],methods:{closeModal:function(){this.$emit("closeModal")}}},r,!1,function(t){s("ybj9")},"data-v-519e7d16",null).exports,d={name:"edit-book",props:["book","type"],methods:{save:function(t){t.preventDefault(),"update"==this.type?this.updateBook():this.addBook()},addBook:function(){n.a.post("/api/book/add",this.book).then(function(t){console.log(t.data)}).catch(function(t){return alert("保存失败")}),this.$emit("closeModal"),this.$emit("updateBook")},updateBook:function(){n.a.post("/api/book/update/"+this.book.id,this.book).then(function(t){console.log(t.data)}).catch(function(t){return alert("保存失败")}),this.$emit("closeModal"),this.$emit("updateBook")}}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{staticClass:"form-horizontal"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"col-sm-2 control-label",attrs:{for:"bookName"}},[t._v("书名")]),t._v(" "),s("div",{staticClass:"col-sm-10"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.book.name,expression:"book.name"}],staticClass:"form-control",attrs:{type:"text",id:"bookName",placeholder:"书名",name:"book"},domProps:{value:t.book.name},on:{input:function(e){e.target.composing||t.$set(t.book,"name",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{staticClass:"col-sm-2 control-label",attrs:{for:"url"}},[t._v("目录页地址")]),t._v(" "),s("div",{staticClass:"col-sm-10"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.book.url,expression:"book.url"}],staticClass:"form-control",attrs:{type:"url",id:"url",placeholder:"例如http://www.book.com",name:"url"},domProps:{value:t.book.url},on:{input:function(e){e.target.composing||t.$set(t.book,"url",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{staticClass:"col-sm-2 control-label",attrs:{for:"limit"}},[t._v("发送章节数")]),t._v(" "),s("div",{staticClass:"col-sm-10"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.book.limit,expression:"book.limit"}],staticClass:"form-control",attrs:{type:"text",id:"limit",placeholder:"例如3",name:"limit"},domProps:{value:t.book.limit},on:{input:function(e){e.target.composing||t.$set(t.book,"limit",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"form-group"},[s("div",{staticClass:"col-sm-offset-2 col-sm-10"},[s("button",{staticClass:"btn btn-default",attrs:{type:"submit"},on:{click:t.save}},[t._v("保存")])])])])},staticRenderFns:[]},m=s("VU/8")(d,u,!1,function(t){s("hFek")},"data-v-6d10b3f4",null).exports,v={components:{EditBook:m},name:"add-book",data:function(){return{book:{name:"",url:"",limit:""},isShow:!1}},methods:{finish:function(){this.isShow=!1,this.$emit("updateBook")},start:function(){this.isShow=!0}}},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"panel-body"},[this.isShow?e("button",{staticClass:"btn btn-success",on:{click:this.finish}},[this._v("关闭")]):e("button",{staticClass:"btn btn-success",on:{click:this.start}},[this._v("添加")]),this._v(" "),e("edit-book",{directives:[{name:"show",rawName:"v-show",value:this.isShow,expression:"this.isShow"}],attrs:{book:this.book},on:{closeModal:this.finish}})],1)},staticRenderFns:[]},p={components:{AddBook:s("VU/8")(v,h,!1,function(t){s("ez0f")},"data-v-2068a9c1",null).exports,EditBook:m,modal:c},name:"book-list",data:function(){return{books:[],modalBook:null,isFade:!1,modalTitle:"编辑书籍信息",isHideDeleteCheck:!1,bookToDelete:{id:-1,name:"",url:"",limit:0}}},created:function(){this.refreshBook()},watch:{books:function(){this.modalBook=this.books[0]}},methods:{showModal:function(t){this.modalBook=JSON.parse(i()(t)),this.isFade=!0},closeModal:function(){this.isFade=!1},refreshBook:function(){var t=this;n.a.get("/api/book/all").then(function(e){return t.books=e.data})},deleteBook:function(){n.a.get("/api/book/delete/"+this.bookToDelete.id).then(function(t){return console.log("success")}).catch(function(t){return console.log(t)}),this.isHideDeleteCheck=!1,this.refreshBook()},showDelete:function(t){this.bookToDelete=t,this.isHideDeleteCheck=!0}}},f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"panel panel-default"},[s("div",{staticClass:"panel-heading"},[t._v("内容管理")]),t._v(" "),s("table",{staticClass:"table table-hover"},[t._m(0),t._v(" "),s("tbody",t._l(t.books,function(e){return s("tr",[s("td",[t._v(t._s(e.name))]),t._v(" "),s("td",[s("a",{attrs:{href:e.url}},[t._v(t._s(e.url))])]),t._v(" "),s("td",[t._v(t._s(e.read_at))]),t._v(" "),s("td",[t._v(t._s(e.limit)+"章")]),t._v(" "),s("td",[s("a",{staticClass:"btn btn-default",attrs:{role:"button"},on:{click:function(s){t.showModal(e)}}},[t._v("编辑")]),t._v(" "),s("a",{staticClass:"btn btn-default",attrs:{role:"button"},on:{click:function(s){t.showDelete(e)}}},[t._v("删除")])])])}))]),t._v(" "),s("add-book",{on:{updateBook:t.refreshBook}}),t._v(" "),s("modal",{attrs:{isFade:t.isFade,modalTitle:t.modalTitle},on:{closeModal:t.closeModal}},[s("edit-book",{attrs:{book:t.modalBook,type:t.update},on:{updateBook:t.refreshBook,closeModal:t.closeModal}})],1),t._v(" "),s("modal",{attrs:{isFade:t.isHideDeleteCheck,modalTitle:"请确认操作"},on:{closeModal:function(e){t.isHideDeleteCheck=!1}}},[s("p",[t._v("你确定要删除"+t._s(this.bookToDelete.name)+"么?")]),t._v(" "),s("div",{staticClass:"modal-footer",attrs:{slot:"footer"},slot:"footer"},[s("button",{staticClass:"btn btn-default",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){t.isHideDeleteCheck=!1}}},[t._v("关闭\n      ")]),t._v(" "),s("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:t.deleteBook}},[t._v("确认删除")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("td",[this._v("书名")]),this._v(" "),e("td",[this._v("目录链接")]),this._v(" "),e("td",[this._v("已推送至")]),this._v(" "),e("td",[this._v("推送频率")]),this._v(" "),e("td",[this._v("操作")])])])}]},_=s("VU/8")(p,f,!1,null,null,null).exports,b={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("ul",{staticClass:"nav nav-tabs navbar-fixed-top"},[e("li",{staticClass:"active",attrs:{role:"presentation"}},[e("a",{attrs:{href:"#"}},[this._v("Home")])]),this._v(" "),e("li",{attrs:{role:"presentation"}},[e("a",{attrs:{href:"#"}},[this._v("Profile")])]),this._v(" "),e("li",{attrs:{role:"presentation"}},[e("a",{attrs:{href:"#"}},[this._v("Messages")])])])])}]},k=s("VU/8")({name:"nav-bar"},b,!1,function(t){s("9pfM")},"data-v-478e1e3c",null).exports,C={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",[e("p",{attrs:{id:"text"}},[this._v("powered by palexu | "),e("a",{attrs:{href:"http://www.github.com/palexu/send2kindle"}},[this._v("GitHub")])])])}]},g=s("VU/8")({name:"plain-footer"},C,!1,function(t){s("N4dg")},"data-v-e4797a72",null).exports,w={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"panel panel-default"},[s("div",{staticClass:"panel-heading"},[t._v("\n    日志\n  ")]),t._v(" "),s("div",{staticClass:"panel-body"},t._l(t.logs,function(e){return s("p",[t._v("\n      "+t._s(e)+"\n    ")])}))])},staticRenderFns:[]},y=s("VU/8")({name:"log-panel",data:function(){return{logs:["2017-12-18 23:29:18,481 - root - INFO - 正在访问小说目录链接:http://www.biqudao.com/bqge7946","2017-12-18 23:29:27,210 - root - INFO - 小说标题:修真四万年","2017-12-18 23:29:27,210 - root - INFO - 当前已读到第2784章 异端审问局","2017-12-18 23:29:27,210 - root - INFO - 最新章节为第2793章 迷雾中的动机","2017-12-18 23:29:27,210 - root - INFO - [暂不发送]:当前小说更新了9章...[9/10]","2017-12-18 23:29:27,211 - root - INFO - 正在访问小说目录链接:http://www.biqudao.com/bqge11388","2017-12-18 23:29:28,891 - root - INFO - 小说标题:走进修仙","2017-12-18 23:29:28,891 - root - INFO - 当前已读到第一百一十七章 俺寻思啊","2017-12-18 23:29:28,891 - root - INFO - 最新章节为第一百一十八章 神州最前沿","2017-12-18 23:29:28,891 - root - INFO - [暂不发送]:当前小说更新了1章...[1/5]","2017-12-18 23:29:28,892 - root - INFO - 正在访问小说目录链接:http://www.biqudao.com/bqge1081"]}}},w,!1,function(t){s("ahTH")},"data-v-525af61a",null).exports,F={name:"mail-panel",data:function(){return{mail:null}},created:function(){this.refreshData()},methods:{refreshData:function(){var t=this;n.a.get("/api/mail").then(function(e){return t.mail=e.data}).catch(function(t){console.log(t)})},updateMailConfig:function(t){t.preventDefault(),console.log(this.mail);var e=n.a.create();e.defaults.headers.post["Content-Type"]="application/json",e.post("/api/mail/update",this.mail).then(function(t){return console.log(t.data)}).catch(function(t){console.log(t)})}}},N={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"panel panel-default"},[s("div",{staticClass:"panel-heading"},[t._v("邮箱设置")]),t._v(" "),s("div",{staticClass:"panel-body"},[s("form",{staticClass:"form-horizontal"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"col-sm-2 control-label",attrs:{for:"inputEmail3"}},[t._v("收件Kindle Email")]),t._v(" "),s("div",{staticClass:"col-sm-10"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.mail.receiver,expression:"mail.receiver"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail3",placeholder:"kindle邮箱"},domProps:{value:t.mail.receiver},on:{input:function(e){e.target.composing||t.$set(t.mail,"receiver",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{staticClass:"col-sm-2 control-label",attrs:{for:"send_email"}},[t._v("发件Email")]),t._v(" "),s("div",{staticClass:"col-sm-10"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.mail.hostconf.sender,expression:"mail.hostconf.sender"}],staticClass:"form-control",attrs:{type:"email",id:"send_email",placeholder:"你的发件地址"},domProps:{value:t.mail.hostconf.sender},on:{input:function(e){e.target.composing||t.$set(t.mail.hostconf,"sender",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{staticClass:"col-sm-2 control-label",attrs:{for:"pd"}},[t._v("Password")]),t._v(" "),s("div",{staticClass:"col-sm-10"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.mail.hostconf.password,expression:"mail.hostconf.password"}],staticClass:"form-control",attrs:{type:"password",id:"pd",placeholder:"Password"},domProps:{value:t.mail.hostconf.password},on:{input:function(e){e.target.composing||t.$set(t.mail.hostconf,"password",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{staticClass:"col-sm-2 control-label",attrs:{for:"test_email"}},[t._v("测试用的邮箱地址")]),t._v(" "),s("div",{staticClass:"col-sm-10"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.mail.testReceiver,expression:"mail.testReceiver"}],staticClass:"form-control",attrs:{type:"email",id:"test_email",placeholder:"测试用的邮箱地址"},domProps:{value:t.mail.testReceiver},on:{input:function(e){e.target.composing||t.$set(t.mail,"testReceiver",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"form-group"},[s("div",{staticClass:"col-sm-offset-2 col-sm-10"},[s("button",{staticClass:"btn btn-default",attrs:{type:"submit"},on:{click:t.updateMailConfig}},[t._v("保存")]),t._v(" "),s("a",{attrs:{href:"/api/mail/test/"+t.mail.testReceiver}},[t._v("发送测试邮件")])])])])])])},staticRenderFns:[]},$=s("VU/8")(F,N,!1,function(t){s("gzuW")},"data-v-a37ea4cc",null).exports,B={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"panel panel-default"},[e("div",{staticClass:"panel-heading"},[this._v("统计")]),this._v(" "),e("div",{staticClass:"panel-body"},[e("p",[this._v("今日已推送"+this._s(this.today_push)+"次")]),this._v(" "),e("p",[this._v("本周已推送"+this._s(this.today_push)+"次")]),this._v(" "),e("p",[this._v("本月已推送"+this._s(this.today_push)+"次")]),this._v(" "),e("p",[this._v("你已使用本项目1年4月3天4小时")]),this._v(" "),e("p",[this._v("版本 v0.0.1 RELEASE ")])])])},staticRenderFns:[]},x={name:"app",components:{DataGraph:s("VU/8")({name:"data-graph",data:function(){return{today_push:4}}},B,!1,function(t){s("0jLO")},"data-v-f3fee9d2",null).exports,MailPanel:$,LogPanel:y,PlainFooter:g,NavBar:k,BookList:_}},E={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container",attrs:{id:"app"}},[e("nav-bar"),this._v(" "),e("book-list"),this._v(" "),this._m(0),this._v(" "),e("log-panel"),this._v(" "),e("mail-panel"),this._v(" "),e("data-graph"),this._v(" "),e("plain-footer")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"panel panel-default"},[e("div",{staticClass:"panel-body"},[e("button",{staticClass:"btn btn-info"},[this._v("立即发送")])])])}]},M=s("VU/8")(x,E,!1,function(t){s("X7iE")},null,null).exports,D=s("BTaQ"),R=s.n(D);s("+skl");a.default.use(R.a),a.default.config.productionTip=!1,new a.default({el:"#app",template:"<App/>",components:{App:M}})},X7iE:function(t,e){},ahTH:function(t,e){},ez0f:function(t,e){},gzuW:function(t,e){},hFek:function(t,e){},ybj9:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a4eaf1819018d8f14bad.js.map