webpackJsonp([17],{"j+mQ":function(t,e,a){"use strict";e.a=function(t){return n.b.get("/payments/"+t)},e.b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return n.b.get("/payments?page="+t)};var n=a("vLgD")},nSkz:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"设计费汇款详情":"Design fee remittance detail","查看项目详情":"View project detail","汇款信息":"Remittance information","汇款单号":"Remittance slip number","收款行":"Receive bank name","收款人姓名":"Receiver name","汇款金额":"Remittance amount","汇款日期":"Remittance date","信息录入于":"Information recorded in"}}'),delete t.options._Ctor}},rhph:function(t,e){},"unp+":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("XyMi"),i=a("j+mQ"),r={data:function(){return{loading:!0,payment:{}}},computed:{tableData:function(){var t=this.payment,e=t.number,a=t.bank,n=t.name,i=t.amount,r=t.remitted_at,o=t.created_at;return[{label:this.$t("汇款单号"),value:e},{label:this.$t("收款行"),value:a},{label:this.$t("收款人姓名"),value:n},{label:this.$t("汇款金额"),value:i},{label:this.$t("汇款日期"),value:r},{label:this.$t("信息录入于"),value:o}]}},created:function(){this.getPayment()},methods:{getPayment:function(){var t=this;Object(i.a)(this.$route.params.id).then(function(e){var a=e.data;t.payment=a,t.loading=!1}).catch(function(){t.loading=!1})}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{staticClass:"container"},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",{directives:[{name:"t",rawName:"v-t",value:"设计费汇款详情",expression:"'设计费汇款详情'"}]}),t._v(" "),a("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{disabled:t.loading,type:"text"},on:{click:function(e){t.$router.push("/project/"+t.payment.project_id)}}},[t._v(t._s(t.$t("查看项目详情")))])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{data:t.tableData,"show-header":!1,border:"",stripe:""}},[a("el-table-column",{attrs:{prop:"label",label:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"value",label:" "}})],1)],1)},staticRenderFns:[]};var l=function(t){a("rhph")},s=Object(n.a)(r,o,!1,l,"data-v-5045690a",null),c=a("nSkz");c&&c.__esModule&&(c=c.default),"function"==typeof c&&c(s);e.default=s.exports}});
//# sourceMappingURL=17.0fc711485a3d88a4f410.js.map