webpackJsonp([20],{"3i0a":function(t,e){},kOmb:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"添加作品成功":"Successfully add work","修改作品成功":"Successfully edit work","继续添加作品":"Continue to add work","查看个人主页":"View home page"}}'),delete t.options._Ctor}},oAQL:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("XyMi"),n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main-container"},[i("div",{staticClass:"card result"},[i("i",{staticClass:"el-icon-success result__icon"}),t._v(" "),i("h1",{directives:[{name:"t",rawName:"v-t",value:t.edit?"修改作品成功":"添加作品成功",expression:"edit ? '修改作品成功' : '添加作品成功'"}],staticClass:"result__title"}),t._v(" "),t.edit?t._e():i("el-button",{staticClass:"block w-100",attrs:{type:"primary"},on:{click:function(e){t.$router.push("/work/add")}}},[t._v(t._s(t.$t("继续添加作品")))]),t._v(" "),i("el-button",{staticClass:"block w-100",staticStyle:{margin:"16px 0 0"},attrs:{type:t.edit?"primary":"default"},on:{click:function(e){t.$router.push("/profile?uid="+t.$uid())}}},[t._v(t._s(t.$t("查看个人主页")))])],1)])},staticRenderFns:[]};var o=function(t){i("3i0a")},a=Object(s.a)({computed:{edit:function(){return this.$route.query.edit}}},n,!1,o,"data-v-2e0b21cb",null),c=i("kOmb");c&&c.__esModule&&(c=c.default),"function"==typeof c&&c(a);e.default=a.exports}});
//# sourceMappingURL=20.d7c6c3786357f90a30fb.js.map