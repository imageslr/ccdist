webpackJsonp([2],{"0ryo":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r("XyMi"),n=r("fZjL"),o=r.n(n),s=r("Dd8w"),a=r.n(s),l=r("lHA8"),c=r.n(l),u=r("yC2x"),d=r("EMlb"),f=r("vjYN"),p={components:{PreviewDialog:u.a},data:function(){var e=this,t=function(t){return function(r,i,n){var o=e.formOthers[t];i.length||o.checked?o.checked&&!o.input?n(new Error(e.$t("输入框不能为空"))):n():n(new Error(e.$t("请选择此项")))}},r=function(t){return function(r,i,n){var o=e.formOthers[t];i?"other"!==i||o.input?n():n(new Error(e.$t("输入框不能为空"))):n(new Error(e.$t("请选择此项")))}};return{formOthers:{types:{checked:!1,input:""},features:{checked:!1,input:""},delivery_time:{input:""},find_time:{input:""}},form:{title:"",types:[],features:[],keywords:[],depth:"",description:"",project_file_url:null,delivery_time:"",payment:"",find_time:"",remark:"",re_review:!1},rules:{title:{required:!0,message:this.$t("请填写此项")},types:{required:!0,validator:t("types")},features:{required:!0,validator:t("features")},keywords:[{type:"array",max:10,message:this.$t("最多可以添加10个关键字"),defaultField:{required:!0,type:"string",max:50,message:this.$t("输入框不能为空")}},{validator:function(t,r,i){new c.a(r).size!==r.length?i(new Error(e.$t("不能有相同的关键字"))):i()}}],depth:{required:!0,message:this.$t("请选择此项")},description:{required:!0,message:this.$t("请填写此项"),whitespace:!0},delivery_time:{required:!0,validator:r("delivery_time")},payment:{required:!0,message:this.$t("请填写此项")},find_time:{required:!0,validator:r("find_time")}},project:{mode:"",status:null},uploading:!1,loading:!0,submitting:!1}},computed:{id:function(){return this.$route.params.id},editable:function(){var e=this.project;return e.user_id==this.$uid()&&(e.status==f.a.STATUS_REVIEW_FAILED||e.status==f.a.STATUS_REVIEWING)},rereviewable:function(){return this.project.status===f.a.STATUS_REVIEW_FAILED},language:function(){return this.$store.getters.language}},watch:{language:function(){this.form.types=[],this.form.features=[]},"form.keywords":function(){this.$refs.form.validateField("keywords")}},created:function(){var e=this;Object(d.m)(this.id).then(function(t){var r=t.data;e.loading=!1,e.project=r,e.setFormData(),r.user.id!=e.$uid()&&e.$router.replace("/403"),e.editable||e.$message.error(e.$t("该项目无法修改"))}).catch(function(t){t.statusCode;e.loading=!1})},methods:{onSubmit:function(){var e=this;if(this.uploading)return this.$message.warning(this.$t("正在上传附件，请稍后"));this.$refs.form.validate(function(t){t?(e.submitting=!0,Object(d.t)(e.id,e.getFormData()).then(function(){e.$message.success(e.$t("修改项目信息成功")),e.$router.push("/project/"+e.id)}).catch(function(){e.submitting=!1})):e.$notify.error({title:e.$t("错误"),message:e.$t("请您按照规定格式填写所有必填表单项")})})},getFormData:function(){var e=this.$_.cloneDeep(this.form),t=this.formOthers;return t.types.checked&&e.types.push(t.types.input),t.features.checked&&e.features.push(t.features.input),"other"===e.delivery_time&&(e.delivery_time=t.delivery_time.input),"other"===e.find_time&&(e.find_time=t.find_time.input),e},setFormData:function(){var e=this,t=this.project,r=t.title,i=t.depth,n=t.description,s=t.project_file_url,l=t.payment,c=t.remark;this.form=a()({},this.form,{title:r,depth:i,description:n,project_file_url:s,payment:l,remark:c});var u=function(e){return o()(e).map(function(t){return e[t]})},d=function(t){var r=e.project[t];-1===u(e.$t(t)).indexOf(r)?(e.form[t]="other",e.formOthers[t]={input:r}):e.form[t]=r};["types","features","keywords"].forEach(function(t){var r;r=t,e.project[r].forEach(function(t){-1===u(e.$t(r)).indexOf(t)?e.formOthers[r]={checked:!0,input:t}:e.form[r].push(t)})}),d("delivery_time"),d("find_time")},addKeyword:function(){this.form.keywords.push("")},removeKeyword:function(e){this.form.keywords.splice(e,1)},onUploadStart:function(){this.uploading=!0},onUploadSuccess:function(e){this.uploading=!1,this.form.project_file_url=e.path},onUploadError:function(){this.uploading=!1},onUploadRemove:function(){this.form.project_file_url=null}}},m={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"main-container"},[r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"card"},[r("div",{staticClass:"border-bottom center p-24"},[r("h1",{directives:[{name:"t",rawName:"v-t",value:"编辑项目",expression:"'编辑项目'"}],staticClass:"m0 color-primary"}),e._v(" "),r("p",{directives:[{name:"t",rawName:"v-t",value:"完善详实的项目信息，是精准匹配设计师、得到理想成果的必要条件。",expression:"'完善详实的项目信息，是精准匹配设计师、得到理想成果的必要条件。'"}],staticClass:"m0 pt1 black-45 f-12"})]),e._v(" "),r("el-form",{ref:"form",staticClass:"form",attrs:{model:e.form,rules:e.rules,disabled:!e.editable,"label-position":"top",size:"small"}},[r("el-form-item",{attrs:{label:e.$t("给项目起一个标题吧"),prop:"title"}},[r("el-input",{attrs:{placeholder:e.$t("最多200字"),maxlength:"200"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),e._v(" "),r("el-form-item",{attrs:{label:e.$t("项目的类型是？"),prop:"types"}},[e._l(e.$t("types"),function(t){return r("el-checkbox",{key:t,attrs:{label:t},model:{value:e.form.types,callback:function(t){e.$set(e.form,"types",t)},expression:"form.types"}})}),r("el-checkbox",{model:{value:e.formOthers.types.checked,callback:function(t){e.$set(e.formOthers.types,"checked",t)},expression:"formOthers.types.checked"}},[e._v("\n            "+e._s(e.$t("其他"))+"\n            "),e.formOthers.types.checked?r("el-input",{attrs:{placeholder:e.$t("最多50字"),maxlength:"50"},model:{value:e.formOthers.types.input,callback:function(t){e.$set(e.formOthers.types,"input",t)},expression:"formOthers.types.input"}}):e._e()],1)],2),e._v(" "),r("el-form-item",{attrs:{label:e.$t("项目的功能是？"),prop:"features"}},[e._l(e.$t("features"),function(t){return r("el-checkbox",{key:t,attrs:{label:t},model:{value:e.form.features,callback:function(t){e.$set(e.form,"features",t)},expression:"form.features"}})}),r("el-checkbox",{model:{value:e.formOthers.features.checked,callback:function(t){e.$set(e.formOthers.features,"checked",t)},expression:"formOthers.features.checked"}},[e._v("\n            "+e._s(e.$t("其他"))+"\n            "),e.formOthers.features.checked?r("el-input",{attrs:{placeholder:e.$t("最多50字"),maxlength:"50"},model:{value:e.formOthers.features.input,callback:function(t){e.$set(e.formOthers.features,"input",t)},expression:"formOthers.features.input"}}):e._e()],1)],2),e._v(" "),r("el-form-item",{attrs:{label:e.$t("项目关键字"),prop:"keywords"}},[e._l(e.form.keywords,function(t,i){return r("div",{key:i,staticClass:"keyword-item"},[r("el-input",{attrs:{placeholder:e.$t("最多50字"),maxlength:"50"},model:{value:e.form.keywords[i],callback:function(t){e.$set(e.form.keywords,i,t)},expression:"form.keywords[index]"}}),e._v(" "),r("el-button",{on:{click:function(t){t.preventDefault(),e.removeKeyword(i)}}},[e._v(e._s(e.$t("g.delete")))])],1)}),e._v(" "),e.form.keywords.length<10?r("el-button",{on:{click:e.addKeyword}},[e._v(e._s(e.$t("添加关键字")))]):e._e()],2),e._v(" "),r("el-form-item",{attrs:{label:e.$t("项目描述"),prop:"description"}},[r("el-input",{attrs:{rows:7,placeholder:e.$t("比如项目的面积、施工预算、动工时间、您倾向的风格和色彩等等"),type:"textarea"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}}),e._v(" "),r("my-upload",{ref:"upload",attrs:{"max-size":50,type:"project_file"},on:{start:e.onUploadStart,success:e.onUploadSuccess,error:e.onUploadError,remove:e.onUploadRemove}}),e._v(" "),e.form.project_file_url?r("my-alert",{staticClass:"mt-12"},[r("a",{attrs:{href:e.form.project_file_url,target:"_blank"}},[e._v(e._s(e.$t("已上传，点击下载文件")))]),e._v(" "),r("a",{staticClass:"ml1",on:{click:function(t){e.form.project_file_url=null}}},[e._v(e._s(e.$t("删除")))])]):e._e()],1),e._v(" "),r("el-form-item",{attrs:{label:e.$t("项目设计深度要求"),prop:"depth"}},[r("el-radio-group",{model:{value:e.form.depth,callback:function(t){e.$set(e.form,"depth",t)},expression:"form.depth"}},e._l(e.$t("designDepthes"),function(e){return r("el-radio",{key:e,attrs:{label:e}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:e.$t("项目的交付时间"),prop:"delivery_time"}},[r("el-radio-group",{model:{value:e.form.delivery_time,callback:function(t){e.$set(e.form,"delivery_time",t)},expression:"form.delivery_time"}},[e._l(e.$t("deliveryTimes"),function(e){return r("el-radio",{key:e,attrs:{label:e}})}),r("el-radio",{attrs:{label:"other"}},[e._v("\n              "+e._s(e.$t("其他"))+"\n              "),"other"===e.form.delivery_time?r("el-input",{attrs:{placeholder:e.$t("最多50字"),maxlength:"50"},model:{value:e.formOthers.delivery_time.input,callback:function(t){e.$set(e.formOthers.delivery_time,"input",t)},expression:"formOthers.delivery_time.input"}}):e._e()],1)],2)],1),e._v(" "),r("el-form-item",{attrs:{label:e.$t("希望用多长时间找设计师？"),prop:"find_time"}},[r("el-radio-group",{model:{value:e.form.find_time,callback:function(t){e.$set(e.form,"find_time",t)},expression:"form.find_time"}},[e._l(e.$t("findTimes"),function(e){return r("el-radio",{key:e,attrs:{label:e}})}),r("el-radio",{attrs:{label:"other"}},[e._v("\n              "+e._s(e.$t("其他"))+"\n              "),"other"===e.form.find_time?r("el-input",{attrs:{placeholder:e.$t("最多50字"),maxlength:"50"},model:{value:e.formOthers.find_time.input,callback:function(t){e.$set(e.formOthers.find_time,"input",t)},expression:"formOthers.find_time.input"}}):e._e()],1)],2)],1),e._v(" "),r("el-form-item",{attrs:{label:e.$t("希望付给设计师的费用是多少？"),prop:"payment"}},[r("el-input",{attrs:{placeholder:e.$t("paymentPlaceholder"),maxlength:"200"},model:{value:e.form.payment,callback:function(t){e.$set(e.form,"payment",t)},expression:"form.payment"}})],1),e._v(" "),r("el-form-item",{attrs:{label:e.$t("招标模式"),prop:"mode"}},[r("el-radio-group",{model:{value:e.project.mode,callback:function(t){e.$set(e.project,"mode",t)},expression:"project.mode"}},e._l(e.$t("designModes"),function(t){return r("el-radio",{key:t.value,attrs:{label:t.value,disabled:""}},[r("el-tooltip",{attrs:{content:t.description,effect:"dark",placement:"top-start"}},[r("span",[e._v("\n                "+e._s(t.label)+"\n                "),r("i",{staticClass:"el-icon-info"})])])],1)}))],1),e._v(" "),r("el-form-item",{attrs:{label:e.$t("申请备注"),prop:"remark"}},[r("el-input",{attrs:{rows:7,placeholder:e.$t("向管理员留言，说明一些重要信息"),type:"textarea"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1),e._v(" "),e.rereviewable?r("el-form-item",{attrs:{label:e.$t("是否申请重新审核")}},[r("el-checkbox",{model:{value:e.form.re_review,callback:function(t){e.$set(e.form,"re_review",t)},expression:"form.re_review"}},[e._v(e._s(e.$t("申请重新审核")))])],1):e._e()],1),e._v(" "),r("p",{directives:[{name:"t",rawName:"v-t",value:"项目通过审核后设计师才可以查看与报名此项目",expression:"'项目通过审核后设计师才可以查看与报名此项目'"}],staticClass:"m0 pb-24 center f-14 black-45"})],1),e._v(" "),r("el-button",{staticClass:"block w-100 shadow mt-24",attrs:{disabled:e.loading||!e.editable,loading:e.submitting,type:"primary"},on:{click:e.onSubmit}},[e._v(e._s(e.$t("g.submitBtn")))])],1)},staticRenderFns:[]};var v=function(e){r("jcOo")},h=Object(i.a)(p,m,!1,v,"data-v-b5e16742",null),_=r("uVj0");_&&_.__esModule&&(_=_.default),"function"==typeof _&&_(h);t.default=h.exports},"4WTo":function(e,t,r){var i=r("NWt+");e.exports=function(e,t){var r=[];return i(e,!1,r.push,r,t),r}},"7Doy":function(e,t,r){var i=r("EqjI"),n=r("7UMu"),o=r("dSzd")("species");e.exports=function(e){var t;return n(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!n(t.prototype)||(t=void 0),i(t)&&null===(t=t[o])&&(t=void 0)),void 0===t?Array:t}},"7Eui":function(e,t){},"9Bbf":function(e,t,r){"use strict";var i=r("kM2E");e.exports=function(e){i(i.S,e,{of:function(){for(var e=arguments.length,t=new Array(e);e--;)t[e]=arguments[e];return new this(t)}})}},"9C8M":function(e,t,r){"use strict";var i=r("evD5").f,n=r("Yobk"),o=r("xH/j"),s=r("+ZMJ"),a=r("2KxR"),l=r("NWt+"),c=r("vIB/"),u=r("EGZi"),d=r("bRrM"),f=r("+E39"),p=r("06OY").fastKey,m=r("LIJb"),v=f?"_s":"size",h=function(e,t){var r,i=p(t);if("F"!==i)return e._i[i];for(r=e._f;r;r=r.n)if(r.k==t)return r};e.exports={getConstructor:function(e,t,r,c){var u=e(function(e,i){a(e,u,t,"_i"),e._t=t,e._i=n(null),e._f=void 0,e._l=void 0,e[v]=0,void 0!=i&&l(i,r,e[c],e)});return o(u.prototype,{clear:function(){for(var e=m(this,t),r=e._i,i=e._f;i;i=i.n)i.r=!0,i.p&&(i.p=i.p.n=void 0),delete r[i.i];e._f=e._l=void 0,e[v]=0},delete:function(e){var r=m(this,t),i=h(r,e);if(i){var n=i.n,o=i.p;delete r._i[i.i],i.r=!0,o&&(o.n=n),n&&(n.p=o),r._f==i&&(r._f=n),r._l==i&&(r._l=o),r[v]--}return!!i},forEach:function(e){m(this,t);for(var r,i=s(e,arguments.length>1?arguments[1]:void 0,3);r=r?r.n:this._f;)for(i(r.v,r.k,this);r&&r.r;)r=r.p},has:function(e){return!!h(m(this,t),e)}}),f&&i(u.prototype,"size",{get:function(){return m(this,t)[v]}}),u},def:function(e,t,r){var i,n,o=h(e,t);return o?o.v=r:(e._l=o={i:n=p(t,!0),k:t,v:r,p:i=e._l,n:void 0,r:!1},e._f||(e._f=o),i&&(i.n=o),e[v]++,"F"!==n&&(e._i[n]=o)),e},getEntry:h,setStrong:function(e,t,r){c(e,t,function(e,r){this._t=m(e,t),this._k=r,this._l=void 0},function(){for(var e=this._k,t=this._l;t&&t.r;)t=t.p;return this._t&&(this._l=t=t?t.n:this._t._f)?u(0,"keys"==e?t.k:"values"==e?t.v:[t.k,t.v]):(this._t=void 0,u(1))},r?"entries":"values",!r,!0),d(t)}}},ALrJ:function(e,t,r){var i=r("+ZMJ"),n=r("MU5D"),o=r("sB3e"),s=r("QRG4"),a=r("oeOm");e.exports=function(e,t){var r=1==e,l=2==e,c=3==e,u=4==e,d=6==e,f=5==e||d,p=t||a;return function(t,a,m){for(var v,h,_=o(t),y=n(_),g=i(a,m,3),b=s(y.length),k=0,$=r?p(t,b):l?p(t,0):void 0;b>k;k++)if((f||k in y)&&(h=g(v=y[k],k,_),e))if(r)$[k]=h;else if(h)switch(e){case 3:return!0;case 5:return v;case 6:return k;case 2:$.push(v)}else if(u)return!1;return d?-1:c||u?u:$}}},BDhv:function(e,t,r){var i=r("kM2E");i(i.P+i.R,"Set",{toJSON:r("m9gC")("Set")})},HpRW:function(e,t,r){"use strict";var i=r("kM2E"),n=r("lOnJ"),o=r("+ZMJ"),s=r("NWt+");e.exports=function(e){i(i.S,e,{from:function(e){var t,r,i,a,l=arguments[1];return n(this),(t=void 0!==l)&&n(l),void 0==e?new this:(r=[],t?(i=0,a=o(l,arguments[2],2),s(e,!1,function(e){r.push(a(e,i++))})):s(e,!1,r.push,r),new this(r))}})}},LIJb:function(e,t,r){var i=r("EqjI");e.exports=function(e,t){if(!i(e)||e._t!==t)throw TypeError("Incompatible receiver, "+t+" required!");return e}},ioQ5:function(e,t,r){r("HpRW")("Set")},j8jX:function(e,t){},jcOo:function(e,t){},lHA8:function(e,t,r){e.exports={default:r("pPW7"),__esModule:!0}},m9gC:function(e,t,r){var i=r("RY/4"),n=r("4WTo");e.exports=function(e){return function(){if(i(this)!=e)throw TypeError(e+"#toJSON isn't generic");return n(this)}}},oNmr:function(e,t,r){r("9Bbf")("Set")},oeOm:function(e,t,r){var i=r("7Doy");e.exports=function(e,t){return new(i(e))(t)}},pPW7:function(e,t,r){r("M6a0"),r("zQR9"),r("+tPU"),r("ttyz"),r("BDhv"),r("oNmr"),r("ioQ5"),e.exports=r("FeBl").Set},qo66:function(e,t,r){"use strict";var i=r("7KvD"),n=r("kM2E"),o=r("06OY"),s=r("S82l"),a=r("hJx8"),l=r("xH/j"),c=r("NWt+"),u=r("2KxR"),d=r("EqjI"),f=r("e6n0"),p=r("evD5").f,m=r("ALrJ")(0),v=r("+E39");e.exports=function(e,t,r,h,_,y){var g=i[e],b=g,k=_?"set":"add",$=b&&b.prototype,w={};return v&&"function"==typeof b&&(y||$.forEach&&!s(function(){(new b).entries().next()}))?(b=t(function(t,r){u(t,b,e,"_c"),t._c=new g,void 0!=r&&c(r,_,t[k],t)}),m("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","),function(e){var t="add"==e||"set"==e;e in $&&(!y||"clear"!=e)&&a(b.prototype,e,function(r,i){if(u(this,b,e),!t&&y&&!d(r))return"get"==e&&void 0;var n=this._c[e](0===r?0:r,i);return t?this:n})}),y||p(b.prototype,"size",{get:function(){return this._c.size}})):(b=h.getConstructor(t,e,_,k),l(b.prototype,r),o.NEED=!0),f(b,e),w[e]=b,n(n.G+n.W+n.F,w),y||h.setStrong(b,e,_),b}},ttyz:function(e,t,r){"use strict";var i=r("9C8M"),n=r("LIJb");e.exports=r("qo66")("Set",function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},{add:function(e){return i.def(n(this,"Set"),e=0===e?0:e,e)}},i)},uVj0:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"zh":{"paymentPlaceholder":"请按照如下格式填写设计费：单位 金额。如：“RMB 1,000,000.00” 或 “USD 144,306.40”","types":["概念规划","城市设计","建筑设计","景观设计","室内设计"],"features":["住宅","商业","办公","公共空间","学校","零售","餐厅","酒店","会所","花园广场"],"deliveryTimes":["一个月后","三个月后","六个月后"],"findTimes":["9~12天","12~20天","一个月内"],"designDepthes":["概念方案","方案设计","方案设计+初步设计"],"designModes":[{"value":"free","label":"自由式","description":"所有设计师均可报名参与该项目"},{"value":"invite","label":"邀请设计师","description":"只有收到邀请的设计师可以参与项目；设计师可以接受或拒绝邀请；可以将设计费以不同份额发放给多名设计师"},{"value":"specify","label":"指定设计师","description":"只有被指定的设计师可以参与项目；设计师可以接受或拒绝；每名设计师都会获得设计费"}]},"en":{"paymentPlaceholder":"Please fill in the consulting fee as follows: Unit Amount. For example: “RMB 1,000,000.00” or “USD 144,306.40”","编辑项目":"Edit project","完善详实的项目信息，是精准匹配设计师、得到理想成果的必要条件。":"Perfecting detailed project information is a necessary condition for accurately matching designers and achieving ideal results.","给项目起一个标题吧":"Project title","最多50字":"50 characters at most","最多200字":"200 characters at most","项目的类型是？":"Project types","项目的功能是？":"Project features","项目关键字":"Project keywords","添加关键字":"Add keywords","项目设计深度要求":"Design depth","项目描述":"Project description","比如项目的面积、施工预算、动工时间、您倾向的风格和色彩等等":"Such as the project area, construction budget, start time, your preferred style and color, etc.","项目的交付时间":"Delivery time","希望用多长时间找设计师？":"How long do you want to find a designer?","希望付给设计师的费用是多少？":"How much would you want to pay for the designer?","上传附件":"Upload file","已上传，点击下载文件":"Click to download the file","删除":"Delete","招标模式":"Bidding mode","申请备注":"Application remark","向管理员留言，说明一些重要信息":"Leave a message to the administrator explaining some important information","项目通过审核后设计师才可以查看与报名此项目":"After the project is approved, the designer can view and register this project.","其他":"Other","是否申请重新审核":"To apply for re-review?","申请重新审核":"Yes","编辑项目信息":"Edit the project","只能上传一个文件，最大不得超过50MB":"Allow upload only one file of which size is less than 50MB","只能上传一个文件":"Allow upload only one file","上传文件大小不能超过50MB！":"File max size is 50MB","正在上传附件，请稍后":"File uploading, please wait","请填写此项":"Please enter this field","请选择此项":"Please select this field","输入框不能为空":"Please enter the input field","最多可以添加10个关键字":"Can only add 10 keywords","不能有相同的关键字":"Each keyword must be distinct","您的招标模式为“邀请设计师”，您必须邀请至少一名设计师参与项目":"Your bidding mode is \\"Invite Designers\\". You have to invite at least one designer to participate the project.","您的招标模式为“指定设计师”，您必须邀请至少一名设计师参与项目":"Your bidding mode is \\"Specify Designers\\". You have to invite at least one designer to participate the project.","错误":"Error","请您按照规定格式填写所有必填表单项":"Please fill in all required form items in the prescribed format","修改项目信息成功":"Successfully update the project information","该项目无法修改":"The project cannot be edited","types":["Concept Planning","City Design","Architectural Design","Landscape Design","Interior Design"],"features":["Residence","Business","Office","Public Space","School","Retail","Restaurant","Hotel","Club","Garden Square"],"deliveryTimes":["After one month","After three month","After six month"],"findTimes":["9~12 days","12~20 days","In one month"],"designDepthes":["Conceptual scheme","Scheme design","Scheme design + Preliminary design"],"designModes":[{"value":"free","label":"Free","description":"All designers can apply for the project"},{"value":"invite","label":"Invite designers","description":"Only the designer who receives the invitation can participate in the project; the designer can accept or reject the invitation; the payment can be distributed to multiple designers in different shares."},{"value":"specify","label":"Specify designers","description":"Only designated designers can participate in the project; designers can accept or reject; each designer receives payment"}]}}'),delete e.options._Ctor}},xonR:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"zh":{"modes":{"free":"自由式","invite":"邀请设计师","specify":"指定设计师"}},"en":{"确认并提交":"Preview and submit","确认项目信息":"Confirm project information","同意平台协议":"Agree platform agreement","发布项目成功":"Successfully post project","项目标题":"Project title","项目的类型是？":"Project types","项目的功能是？":"Project features","项目描述":"Project description","项目关键字":"Project keywords","项目设计深度要求":"Design depth","项目的交付时间":"Delivery time","希望用多长时间找设计师？":"How long do you want to find a designer?","希望付给设计师的费用是多少？":"How much would you want to pay for the designer?","下载附件":"Download file","招标模式":"Bidding mode","申请备注":"Application remark","邀请设计师":"Invited designers","无":" ","我同意上述平台协议":"I agree the above agreement","下一步":"Next","提 交":"Submit","上一步":"Back","modes":{"free":"Free","invite":"Invite designers","specify":"Specify designers"}}}'),delete e.options._Ctor}},yC2x:function(e,t,r){"use strict";var i=r("XyMi"),n=r("Dd8w"),o=r.n(n),s=r("woOf"),a=r.n(s),l=r("EMlb"),c={data:function(){return{step:0,form:{types:[],features:[],keywords:[]},invitedDesigners:[],agree:!1,publishing:!1,visible:!1}},computed:{agreement:function(){return"\nThe agreement is coming soon.\n"}},methods:{show:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];a()(this.$data,this.$options.data(),{form:e,invitedDesigners:t,visible:!0})},onSubmit:function(){var e=this;if(!this.agree)return this.$message.warning(this.$t("您必须同意平台协议，才能发布项目"));var t=this.form;"free"!==this.form.mode&&(t=o()({},t,{invited_designer_ids:this.invitedDesigners.map(function(e){return e.id})})),this.publishing=!0,Object(l.p)(t).then(function(t){var r=t.data.id;e.publishing=!1,e.$router.push("/publish/result?id="+r)}).catch(function(){e.publishing=!1})}}},u={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{staticClass:"project-preview-dialog",attrs:{title:e.$t("确认并提交"),"close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[r("el-steps",{attrs:{active:e.step,simple:"","finish-status":"success"}},[r("el-step",{attrs:{title:e.$t("确认项目信息")}}),e._v(" "),r("el-step",{attrs:{title:e.$t("同意平台协议")}}),e._v(" "),r("el-step",{attrs:{title:e.$t("发布项目成功")}})],1),e._v(" "),0===e.step?[r("div",{staticClass:"project-info"},[r("h3",{directives:[{name:"t",rawName:"v-t",value:"项目标题",expression:"'项目标题'"}]}),e._v(" "),r("p",[e._v(e._s(e.form.title))]),e._v(" "),r("h3",{directives:[{name:"t",rawName:"v-t",value:"项目的类型是？",expression:"'项目的类型是？'"}]}),e._v(" "),r("p",[e._v(e._s(e.form.types.join("/")))]),e._v(" "),r("h3",{directives:[{name:"t",rawName:"v-t",value:"项目的功能是？",expression:"'项目的功能是？'"}]}),e._v(" "),r("p",[e._v(e._s(e.form.features.join("/")))]),e._v(" "),r("h3",{directives:[{name:"t",rawName:"v-t",value:"项目关键字",expression:"'项目关键字'"}]}),e._v(" "),e.form.keywords.length?e._l(e.form.keywords,function(t){return r("el-tag",{key:t,staticClass:"mr1",attrs:{type:"info"}},[e._v(e._s(t))])}):r("p",{directives:[{name:"t",rawName:"v-t",value:"无",expression:"'无'"}]}),e._v(" "),r("h3",{directives:[{name:"t",rawName:"v-t",value:"项目描述",expression:"'项目描述'"}]}),e._v(" "),r("p",{staticClass:"pre-wrap",domProps:{textContent:e._s(e.form.description)}}),e._v(" "),e.form.project_file_url?r("my-alert",{staticClass:"mt-12"},[r("a",{attrs:{href:e.form.project_file_url,target:"_blank"}},[e._v(e._s(e.$t("下载附件")))])]):e._e(),e._v(" "),r("h3",{directives:[{name:"t",rawName:"v-t",value:"项目设计深度要求",expression:"'项目设计深度要求'"}]}),e._v(" "),r("p",{domProps:{textContent:e._s(e.form.depth)}}),e._v(" "),r("h3",{directives:[{name:"t",rawName:"v-t",value:"项目的交付时间",expression:"'项目的交付时间'"}]}),e._v(" "),r("p",{domProps:{textContent:e._s(e.form.delivery_time)}}),e._v(" "),r("h3",{directives:[{name:"t",rawName:"v-t",value:"希望用多长时间找设计师？",expression:"'希望用多长时间找设计师？'"}]}),e._v(" "),r("p",{domProps:{textContent:e._s(e.form.find_time)}}),e._v(" "),r("h3",{directives:[{name:"t",rawName:"v-t",value:"希望付给设计师的费用是多少？",expression:"'希望付给设计师的费用是多少？'"}]}),e._v(" "),r("p",{domProps:{textContent:e._s(e.form.payment)}}),e._v(" "),r("h3",{directives:[{name:"t",rawName:"v-t",value:"招标模式",expression:"'招标模式'"}]}),e._v(" "),r("p",{domProps:{textContent:e._s(e.$t("modes."+e.form.mode))}}),e._v(" "),r("h3",{directives:[{name:"t",rawName:"v-t",value:"申请备注",expression:"'申请备注'"}]}),e._v(" "),r("p",{domProps:{textContent:e._s(e.form.remark||e.$t("无"))}}),e._v(" "),e.invitedDesigners.length?[r("h3",{directives:[{name:"t",rawName:"v-t",value:"邀请设计师",expression:"'邀请设计师'"}]}),e._v(" "),e._l(e.invitedDesigners,function(e){return r("router-link",{key:e.id,attrs:{to:"/profile?uid="+e.id,target:"_blank"}},[r("my-avatar",{staticClass:"avatar",attrs:{"avatar-url":e.avatar_url}})],1)})]:e._e()],2)]:[r("div",{staticClass:"center"},[r("p",{staticClass:"pre-wrap m0"},[e._v(" "+e._s(e.agreement))]),e._v(" "),r("el-checkbox",{staticClass:"m1",model:{value:e.agree,callback:function(t){e.agree=t},expression:"agree"}},[e._v(e._s(e.$t("我同意上述平台协议")))])],1)],e._v(" "),r("div",{staticClass:"center pt1"},[0===e.step?r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.step=1}}},[e._v(e._s(e.$t("下一步")))]):e._e(),e._v(" "),1===e.step?r("el-button",{attrs:{loading:e.publishing,type:"primary"},on:{click:e.onSubmit}},[e._v(e._s(e.$t("提 交")))]):e._e(),e._v(" "),1===e.step?r("el-button",{on:{click:function(t){e.step=0}}},[e._v(e._s(e.$t("上一步")))]):e._e()],1)],2)},staticRenderFns:[]};var d=function(e){r("7Eui"),r("j8jX")},f=Object(i.a)(c,u,!1,d,"data-v-50970a62",null),p=r("xonR");p&&p.__esModule&&(p=p.default),"function"==typeof p&&p(f);t.a=f.exports}});
//# sourceMappingURL=2.f727b5ee119d9a88f8b6.js.map