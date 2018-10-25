webpackJsonp([29],{"2mMk":function(e,t){},"5GC2":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("XyMi"),s=i("vMJZ"),r={data:function(){return{form:{id_number:"",id_card_id:null},uploadingIdCard:!1,submitting:!1,loading:!0,applying:!1}},computed:{user:function(){return this.$store.getters.userInfo},isReviewPassed:function(){return 1===this.$store.getters.userInfo.review_status},isReviewFailed:function(){return 2===this.$store.getters.userInfo.review_status},reviewStatusStyle:function(){return["warning","success","warning"][this.$store.getters.userInfo.review_status]},reviewStatusMessage:function(){var e=this.$store.getters.userInfo.review_status;return this.$t("reviewStatusMessages["+e+"]")}},created:function(){var e=this;this.$store.dispatch("GET_USER_INFO").then(function(){e.loading=!1;var t=e.$store.getters.userInfo;e.form.id_number=t.id_number}).catch(function(){e.loading=!1})},beforeDestroy:function(){this.$refs.upload.clear()},methods:{onSubmit:function(){var e=this,t=this.$refs.upload.getImageUrls();if(!1===t||this.uploadingIdCard)return this.$message.warning(this.$t("正在上传文件，请稍后"));this.$confirm(this.$t("身份证信息通过审核后将无法修改，确定上传吗？"),this.$t("g.notice"),{confirmButtonText:this.$t("g.confirmBtn"),cancelButtonText:this.$t("g.cancelBtn"),type:"warning"}).then(function(){e.submitting=!0;var i={},a=e.form,r=e.user;a.id_number!==r.id_number&&(i.id_number=a.id_number),a.id_card_id&&(i.id_card_id=a.id_card_id),i.qualification_urls=t,Object(s.q)(i).then(function(t){var i=t.data;e.submitting=!1,e.$store.commit("SET_USERINFO",i),e.$message.success(e.$t("提交成功"))}).catch(function(){e.submitting=!1})}).catch(function(){})},onApplyReview:function(){var e=this;this.applying=!0,Object(s.a)().then(function(t){var i=t.data;e.applying=!1,e.$store.commit("SET_USERINFO",i),e.$message.success(e.$t("申请重新审核成功"))}).catch(function(){e.applying=!1})},onUploadStart:function(){this.uploadingIdCard=!0},onUploadSuccess:function(e){this.uploadingIdCard=!1,this.form.id_card_id=e.id},onUploadError:function(){this.uploadingIdCard=!1},onUploadRemove:function(){this.form.id_card_id=null}}},n={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container"},[i("h2",{directives:[{name:"t",rawName:"v-t",value:"上传认证信息",expression:"'上传认证信息'"}],staticClass:"mt0"}),e._v(" "),e.loading?e._e():i("my-alert",{staticClass:"mb1",staticStyle:{width:"600px"},attrs:{title:e.reviewStatusMessage,type:e.reviewStatusStyle}}),e._v(" "),i("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"form",attrs:{"label-position":"top"}},[i("el-form-item",{attrs:{label:e.$t("资质证书")}},[i("my-multi-upload",{ref:"upload",attrs:{limit:20,"image-urls":e.user.qualification_urls,type:"work_photo"}}),e._v(" "),i("el-card",{staticClass:"tips-card"},[i("span",{directives:[{name:"t",rawName:"v-t",value:"您可以上传最多 20 张资历证书，如设计证书、学位证书等",expression:"'您可以上传最多 20 张资历证书，如设计证书、学位证书等'"}]})])],1),e._v(" "),i("el-form-item",{attrs:{label:e.$t("身份证号")}},[i("el-input",{attrs:{disabled:e.isReviewPassed,maxlength:"100"},model:{value:e.form.id_number,callback:function(t){e.$set(e.form,"id_number",t)},expression:"form.id_number"}}),e._v(" "),i("el-card",{staticClass:"tips-card"},[i("h4",{directives:[{name:"t",rawName:"v-t",value:"注意",expression:"'注意'"}],staticClass:"m0 mb1 f-16"}),e._v(" "),i("div",{directives:[{name:"t",rawName:"v-t",value:"身份证信息通过审核后无法修改！",expression:"'身份证信息通过审核后无法修改！'"}]}),e._v(" "),i("div",{directives:[{name:"t",rawName:"v-t",value:"身份证照片请上传人像面！",expression:"'身份证照片请上传人像面！'"}]})])],1),e._v(" "),i("el-form-item",{attrs:{label:e.$t("身份证照片")}},[e.user.id_card_url?i("my-alert",{staticClass:"mb1"},[i("a",{attrs:{href:e.user.id_card_url,target:"_blank"}},[e._v(e._s(e.$t("已提交，点击下载文件")))])]):e._e(),e._v(" "),e.isReviewPassed?e._e():i("my-upload",{attrs:{"button-text":e.$t("上传图片"),"max-size":2,type:"id_card",accept:"image/jpeg, image/jpg, image/png, image/bmp"},on:{start:e.onUploadStart,success:e.onUploadSuccess,error:e.onUploadError,remove:e.onUploadRemove}})],1),e._v(" "),i("el-form-item",[i("el-button",{attrs:{loading:e.submitting,type:"primary"},on:{click:e.onSubmit}},[e._v(e._s(e.$t("g.submitBtn")))]),e._v(" "),e.isReviewFailed?i("el-button",{attrs:{loading:e.applying},on:{click:e.onApplyReview}},[e._v(e._s(e.$t("申请重新审核")))]):e._e()],1)],1)],1)},staticRenderFns:[]};var o=function(e){i("2mMk")},c=Object(a.a)(r,n,!1,o,"data-v-09cb4a60",null),u=i("im2c");u&&u.__esModule&&(u=u.default),"function"==typeof u&&u(c);t.default=c.exports},im2c:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"zh":{"reviewStatusMessages":["您的个人信息正在审核中","您的个人信息已通过审核","您的个人信息未通过审核，您可以修改后重新申请审核"]},"en":{"reviewStatusMessages":["Your personal information is under review","Your personal information has passed the review","Your personal information has not been reviewed. You can edit it and re-apply for review."],"上传认证信息":"Upload Authentication Information","资质证书":"Qualification certificates","您可以上传最多 20 张资历证书，如设计证书、学位证书等":"You can upload up to 20 qualification certificates, such as design certificates, degree certificates, etc.","身份证号":"ID Number","身份证照片":"ID Card","上传图片":"Upload photo","申请重新审核":"Re-apply for review","已提交，点击下载文件":"Has already committed, click to download","注意":"Notice","身份证信息通过审核后无法修改！":"Once the id card information passes the review, it cannot be modified!","身份证照片请上传人像面！":"Please upload a portrait of the ID card!","提交成功":"Successful Operation","最多50个字符":"50 characters at most","正在上传文件，请稍后":"File uploading, please wait","身份证信息通过审核后将无法修改，确定上传吗？":"Once the id card information passes the review, it cannot be modified. Is it confirmed?","申请重新审核成功":"Successfully re-apply for review"}}'),delete e.options._Ctor}}});
//# sourceMappingURL=29.0dfdc72e71ce301672b4.js.map