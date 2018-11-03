webpackJsonp([4],{"/YL8":function(t,e){},"/h52":function(t,e){},"5Z1k":function(t,e){},"Fe0+":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"交付列表":"Delivery list","下载附件":"Download file","交付于":"Delivered at","查看备注":"View remark","备注":"Remark"}}'),delete t.options._Ctor}},KYsC:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("XyMi"),n=i("vjYN"),s=i("EMlb"),o={props:{project:{type:Object,required:!0}},data:function(){return{visible:!1,form:{remark:"",file_url:null},uploading:!1,submitting:!1}},computed:{hasSubmitted:function(){return!!this.project.delivery}},watch:{visible:function(){var t=this.project.delivery;t&&(this.form={remark:t.remark,file_url:t.file_url})}},methods:{show:function(){this.visible=!0},onConfirm:function(){var t=this;if(this.uploading)return this.$message.warning(this.$t("正在上传附件，请稍后")),!1;if(!this.form.file_url)return this.$message.warning(this.$t("请上传交付的设计文件"));if(this.hasSubmitted){var e=this.form,i=this.project.delivery;if(e.remark===i.remark&&e.file_url===i.file_url)return void(this.visible=!1)}this.submitting=!0,(this.hasSubmitted?Object(s.s)(this.project.delivery.id,this.form):Object(s.f)(this.project.id,this.form)).then(function(e){var i=e.data;t.submitting=!1,t.visible=!1,t.$message.success(t.$t("提交成功")),t.$emit("delivered",i)}).catch(function(){t.submitting=!1})},onCancel:function(){this.$refs.upload.cancel(),this.visible=!1},onUploadStart:function(){this.uploading=!0},onUploadSuccess:function(t){this.uploading=!1,this.form.file_url=t.path},onUploadError:function(){this.uploading=!1},onUploadRemove:function(){this.form.file_url=null}}},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-dialog",{attrs:{visible:t.visible,title:t.$t("上传交付文件")},on:{"update:visible":function(e){t.visible=e}}},[i("el-input",{attrs:{rows:5,placeholder:t.$t("备注信息（5000字以内）"),maxlength:5e3,type:"textarea"},model:{value:t.form.remark,callback:function(e){t.$set(t.form,"remark",e)},expression:"form.remark"}}),t._v(" "),i("my-upload",{ref:"upload",staticClass:"mt-12",attrs:{"max-size":100,type:"delivery_file"},on:{start:t.onUploadStart,success:t.onUploadSuccess,error:t.onUploadError,remove:t.onUploadRemove}}),t._v(" "),t.hasSubmitted?i("my-alert",{staticClass:"mt-12"},[i("a",{attrs:{href:t.project.delivery.file_url,target:"_blank"}},[t._v(t._s(t.$t("查看已上传的设计文件")))])]):t._e(),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:t.onCancel}},[t._v(t._s(t.$t("g.cancelBtn")))]),t._v(" "),i("el-button",{attrs:{loading:t.submitting,type:"primary"},on:{click:t.onConfirm}},[t._v(t._s(t.$t("g.confirmBtn")))])],1)],1)},staticRenderFns:[]};var l=function(t){i("wAoR")},c=Object(a.a)(o,r,!1,l,null,null),p=i("XK0Y");p&&p.__esModule&&(p=p.default),"function"==typeof p&&p(c);var u=c.exports,d={props:{project:{type:Object,validator:function(t){return Array.isArray(t.applications)},required:!0}},data:function(){return{applications:[],currentPage:1,pageCount:1,loading:!1,dialog:{remark:"",visible:!1}}},created:function(){this.applications=this.project.applications},methods:{getApplications:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.loading=!0,Object(s.h)(this.project.id,e).then(function(e){var i=e.data,a=i.data,n=i.meta.pagination;t.loading=!1,t.applications=a,t.pageCount=n.total_pages}).catch(function(){t.loading=!1})},onViewDetail:function(t){this.dialog.visible=!0,this.dialog.remark=t.remark},onDownloadApplicationFile:function(t){window.open(t.application_file_url)}}},v={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"card"},[i("h3",{directives:[{name:"t",rawName:"v-t",value:"报名列表",expression:"'报名列表'"}],staticClass:"mt0 mb2"}),t._v(" "),t.applications.length?i("div",{staticClass:"list"},[t._l(t.applications,function(e){return i("div",{key:e.id,staticClass:"list-item"},[i("router-link",{attrs:{to:"/profile?uid="+e.user.id}},[i("my-avatar",{staticClass:"list-item__avatar",attrs:{"avatar-url":e.user.avatar_url}})],1),t._v(" "),i("div",{staticClass:"list-item__info"},[i("router-link",{staticClass:"bold black-85",attrs:{to:"/profile?uid="+e.user.id}},[t._v(t._s(e.user.name))]),t._v(" "),i("p",[i("span",{staticClass:"color-primary"},[t._v(t._s(t.$t("g.following")))]),t._v(" "),i("span",{domProps:{textContent:t._s(e.user.following_count)}}),t._v(" "),i("span",{staticClass:"color-primary"},[t._v(t._s(t.$t("g.fans")))]),t._v(" "),i("span",{domProps:{textContent:t._s(e.user.follower_count)}})]),t._v(" "),i("p",{domProps:{textContent:t._s(e.user.title)}}),t._v(" "),i("p",{domProps:{textContent:t._s(e.user.introduction)}})],1),t._v(" "),i("div",{staticClass:"black-45 f-14"},[i("div",{directives:[{name:"t",rawName:"v-t",value:"报名于",expression:"'报名于'"}],staticClass:"m0 mb-4"}),t._v(" "),i("div",{staticClass:"m0",domProps:{textContent:t._s(e.created_at)}})]),t._v(" "),i("div",{staticClass:"list-item__action"},[i("el-button",{attrs:{disabled:!e.remark,type:"text"},on:{click:function(i){t.onViewDetail(e)}}},[t._v("\n          "+t._s(t.$t("查看备注"))+"\n        ")]),t._v(" "),i("el-button",{attrs:{disabled:!e.application_file_url,type:"text"},on:{click:function(i){t.onDownloadApplicationFile(e)}}},[t._v("\n          "+t._s(t.$t("下载附件"))+"\n        ")])],1)],1)}),t._v(" "),i("el-pagination",{staticClass:"mt2 center",attrs:{"current-page":t.currentPage,"page-count":t.pageCount,background:"",layout:"prev, pager, next"},on:{"update:currentPage":function(e){t.currentPage=e},"current-change":t.getApplications}})],2):i("my-empty"),t._v(" "),i("el-dialog",{attrs:{visible:t.dialog.visible,title:t.$t("备注")},on:{"update:visible":function(e){t.$set(t.dialog,"visible",e)}}},[i("p",{domProps:{textContent:t._s(t.dialog.remark)}})])],1)},staticRenderFns:[]};var _=function(t){i("/YL8")},m=Object(a.a)(d,v,!1,_,"data-v-7182e60a",null),f=i("ebiC");f&&f.__esModule&&(f=f.default),"function"==typeof f&&f(m);var h=m.exports,g={filters:{statusToType:function(t){return["info","success","error"][t]}},props:{project:{type:Object,validator:function(t){return Array.isArray(t.invitations)},required:!0}},data:function(){return{invitations:[],currentPage:1,pageCount:1,loading:!1}},created:function(){this.invitations=this.project.invitations},methods:{getInvitations:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.loading=!0,Object(s.k)(this.project.id,e).then(function(e){var i=e.data,a=i.data,n=i.meta.pagination;t.loading=!1,t.invitations=a,t.pageCount=n.total_pages}).catch(function(){t.loading=!1})},onViewCause:function(t){this.$alert(this.$t("refusalCause",{refusalCause:t.refusal_cause}),this.$t("拒绝原因"),{confirmButtonText:this.$t("g.confirmBtn")})}}},y={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"card"},[i("h3",{directives:[{name:"t",rawName:"v-t",value:"邀请列表",expression:"'邀请列表'"}],staticClass:"mt0 mb2"}),t._v(" "),t.invitations.length?i("div",{staticClass:"list"},[t._l(t.invitations,function(e){return i("div",{key:e.id,staticClass:"list-item"},[i("router-link",{attrs:{to:"/profile?uid="+e.user.id}},[i("my-avatar",{staticClass:"list-item__avatar",attrs:{"avatar-url":e.user.avatar_url}})],1),t._v(" "),i("div",{staticClass:"list-item__info"},[i("router-link",{staticClass:"bold black-85",attrs:{to:"/profile?uid="+e.user.id}},[t._v(t._s(e.user.name))]),t._v(" "),i("p",[i("span",{staticClass:"color-primary"},[t._v(t._s(t.$t("g.following")))]),t._v(" "),i("span",{domProps:{textContent:t._s(e.user.following_count)}}),t._v(" "),i("span",{staticClass:"color-primary"},[t._v(t._s(t.$t("g.fans")))]),t._v(" "),i("span",{domProps:{textContent:t._s(e.user.follower_count)}})]),t._v(" "),i("p",{domProps:{textContent:t._s(e.user.title)}}),t._v(" "),i("p",{domProps:{textContent:t._s(e.user.introduction)}})],1),t._v(" "),i("div",{staticClass:"black-45 f-14"},[i("div",{directives:[{name:"t",rawName:"v-t",value:"邀请于",expression:"'邀请于'"}],staticClass:"mb-4"}),t._v(" "),i("div",{domProps:{textContent:t._s(e.created_at)}})]),t._v(" "),i("div",{staticClass:"list-item__status black-45 f-14"},[i("div",{directives:[{name:"t",rawName:"v-t",value:"状态",expression:"'状态'"}],staticClass:"mb-4"}),t._v(" "),i("my-badge-status",{staticClass:"mb-4",attrs:{text:t.$t("status."+e.status),status:t._f("statusToType")(e.status)}}),t._v(" "),2===e.status?i("el-button",{attrs:{type:"text"},on:{click:function(i){t.onViewCause(e)}}},[t._v("\n          "+t._s(t.$t("查看原因"))+"\n        ")]):t._e()],1)],1)}),t._v(" "),i("el-pagination",{staticClass:"mt2 center",attrs:{"current-page":t.currentPage,"page-count":t.pageCount,background:"",layout:"prev, pager, next"},on:{"update:currentPage":function(e){t.currentPage=e},"current-change":t.getInvitations}})],2):i("my-empty")],1)},staticRenderFns:[]};var b=function(t){i("/h52"),i("5Z1k")},C=Object(a.a)(g,y,!1,b,"data-v-3f4d84f8",null),j=i("iBfo");j&&j.__esModule&&(j=j.default),"function"==typeof j&&j(C);var $=C.exports,w={props:{project:{type:Object,validator:function(t){return Array.isArray(t.deliveries)},required:!0}},data:function(){return{deliveries:[],currentPage:1,pageCount:1,loading:!1,dialog:{remark:"",visible:!1}}},created:function(){this.deliveries=this.project.deliveries},methods:{getItems:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.loading=!0,Object(s.i)(this.project.id,e).then(function(e){var i=e.data,a=i.data,n=i.meta.pagination;t.loading=!1,t.deliveries=a,t.pageCount=n.total_pages}).catch(function(){t.loading=!1})},onViewDetail:function(t){this.dialog.visible=!0,this.dialog.remark=t.remark},onDownloadApplicationFile:function(t){window.open(t.file_url)}}},k={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"card"},[i("h3",{directives:[{name:"t",rawName:"v-t",value:"交付列表",expression:"'交付列表'"}],staticClass:"mt0 mb2"}),t._v(" "),t.deliveries.length?i("div",{staticClass:"list"},[t._l(t.deliveries,function(e){return i("div",{key:e.id,staticClass:"list-item"},[i("router-link",{attrs:{to:"/profile?uid="+e.user.id}},[i("my-avatar",{staticClass:"list-item__avatar",attrs:{"avatar-url":e.user.avatar_url}})],1),t._v(" "),i("div",{staticClass:"list-item__info"},[i("router-link",{staticClass:"bold black-85",attrs:{to:"/profile?uid="+e.user.id}},[t._v(t._s(e.user.name))]),t._v(" "),i("p",[i("span",{staticClass:"color-primary"},[t._v(t._s(t.$t("g.following")))]),t._v(" "),i("span",{domProps:{textContent:t._s(e.user.following_count)}}),t._v(" "),i("span",{staticClass:"color-primary"},[t._v(t._s(t.$t("g.fans")))]),t._v(" "),i("span",{domProps:{textContent:t._s(e.user.follower_count)}})]),t._v(" "),i("p",{domProps:{textContent:t._s(e.user.title)}}),t._v(" "),i("p",{domProps:{textContent:t._s(e.user.introduction)}})],1),t._v(" "),i("div",{staticClass:"black-45 f-14"},[i("div",{directives:[{name:"t",rawName:"v-t",value:"交付于",expression:"'交付于'"}],staticClass:"m0 mb-4"}),t._v(" "),i("div",{staticClass:"m0",domProps:{textContent:t._s(e.created_at)}})]),t._v(" "),i("div",{staticClass:"list-item__action"},[i("el-button",{attrs:{disabled:!e.remark,type:"text"},on:{click:function(i){t.onViewDetail(e)}}},[t._v("\n          "+t._s(t.$t("查看备注"))+"\n        ")]),t._v(" "),i("el-button",{attrs:{disabled:!e.file_url,type:"text"},on:{click:function(i){t.onDownloadFile(e)}}},[t._v("\n          "+t._s(t.$t("下载附件"))+"\n        ")])],1)],1)}),t._v(" "),i("el-pagination",{staticClass:"mt2 center",attrs:{"current-page":t.currentPage,"page-count":t.pageCount,background:"",layout:"prev, pager, next"},on:{"update:currentPage":function(e){t.currentPage=e},"current-change":t.getItems}})],2):i("my-empty"),t._v(" "),i("el-dialog",{attrs:{visible:t.dialog.visible,title:t.$t("备注")},on:{"update:visible":function(e){t.$set(t.dialog,"visible",e)}}},[i("p",{domProps:{textContent:t._s(t.dialog.remark)}})])],1)},staticRenderFns:[]};var x=function(t){i("pvGA")},D=Object(a.a)(w,k,!1,x,"data-v-7677e9f6",null),T=i("Fe0+");T&&T.__esModule&&(T=T.default),"function"==typeof T&&T(D);var S={components:{DeliverDialog:u,ApplicationList:h,InvitationList:$,DeliveryList:D.exports},data:function(){return{project:{id:null,title:"加载中",types:[],features:[],keywords:[],favorite_count:0,user:{},application:{},applications:[],invitations:[],invitation:{status:null,refusal_cause:""}},loading:!1,dialogVisible:!1,dialogUploading:!1,dialogButtonLoading:!1,applicationForm:{remark:"",application_file_id:null},paymentDialog:{visible:!1,content:"",submitting:!1},showInfo:!this.$isClient()}},computed:{isSignIn:function(){return!!this.$store.getters.uid},id:function(){return this.$route.params.id},stepIndex:function(){switch(this.project.status){case n.a.STATUS_TENDERING:return 0;case n.a.STATUS_WORKING:return 1;case n.a.STATUS_COMPLETED:return 2}},isCanceled:function(){return this.project.status==n.a.STATUS_CANCELED},isReviewing:function(){return this.project.status==n.a.STATUS_REVIEWING},isReviewFailed:function(){return this.project.status==n.a.STATUS_REVIEW_FAILED},isTendering:function(){return this.project.status==n.a.STATUS_TENDERING},isWorking:function(){return this.project.status==n.a.STATUS_WORKING},isCompleted:function(){return this.project.status==n.a.STATUS_COMPLETED},appliable:function(){return"free"===this.project.mode},invitable:function(){return"invite"===this.project.mode||"specify"===this.project.mode},isPublisher:function(){return this.$uid()&&this.project.user.id==this.$uid()},editable:function(){var t=this.project;return this.project.user.id==this.$uid()&&(t.status==n.a.STATUS_REVIEW_FAILED||t.status==n.a.STATUS_REVIEWING)},cancelable:function(){var t=this.project;return this.project.user.id==this.$uid()&&(t.status==n.a.STATUS_TENDERING||t.status==n.a.STATUS_REVIEW_FAILED||t.status==n.a.STATUS_REVIEWING)},canApply:function(){var t=this.project;return this.appliable&&t.status==n.a.STATUS_TENDERING&&!t.applying},canCancelApply:function(){var t=this.project;return t.status==n.a.STATUS_TENDERING&&t.applying},isAccepted:function(){var t=this.project;return this.invitable&&t.invitation.status===n.b.STATUS_ACCEPTED},isDeclined:function(){var t=this.project;return this.invitable&&t.invitation.status===n.b.STATUS_DECLINED},isNotViewed:function(){var t=this.project;return this.invitable&&t.invitation.status===n.b.STATUS_NOT_VIEWED},isDeliverd:function(){return!!this.project.delivery},canDeliver:function(){var t=this.isAccepted,e=this.project.applying;return t||e},canUpdateDelivery:function(){return this.project.status==n.a.STATUS_WORKING}},created:function(){var t=this;this.getProject().then(function(){t.showInfo=!t.isPublisher,t.paymentDialog.content=t.project.payment_remark})},methods:{getProject:function(){var t=this;return this.loading=!0,Object(s.m)(this.id).then(function(e){var i=e.data;t.loading=!1,t.project=i}).catch(function(){t.loading=!1})},onCancelApply:function(){var t=this;this.$confirm(this.$t("此操作将取消报名该项目，是否确认？"),this.$t("g.notice"),{confirmButtonText:this.$t("g.confirmBtn"),cancelButtonText:this.$t("g.cancelBtn"),type:"warning"}).then(function(){Object(s.c)(t.project.id).then(function(){t.project.applying=!1,t.$message({type:"success",message:t.$t("取消成功")})})}).catch(function(){})},onFavorite:function(){var t=this;Object(s.g)(this.project.id).then(function(){t.project.favoriting=!0,t.project.favorite_count++})},onUnfavorite:function(){var t=this;Object(s.r)(this.project.id).then(function(){t.project.favoriting=!1,t.project.favorite_count--})},onAcceptInvitation:function(){var t=this;this.$confirm(this.$t("您确定接受甲方邀请，参与该项目吗？"),this.$t("g.notice"),{confirmButtonText:this.$t("g.confirmBtn"),cancelButtonText:this.$t("g.cancelBtn"),type:"warning"}).then(function(){Object(s.a)(t.project.id).then(function(e){var i=e.data;t.project.invitation=i,t.$message({type:"success",message:t.$t("已接受邀请")})})}).catch(function(){})},onDeclineInvitation:function(){var t=this;this.$prompt(this.$t("您确定拒绝甲方邀请吗？这个操作将无法撤销"),this.$t("g.notice"),{confirmButtonText:this.$t("g.confirmBtn"),cancelButtonText:this.$t("g.cancelBtn"),inputPattern:/^(?=.*?\S)[\s\S]{0,300}$/,inputPlaceholder:this.$t("请填写拒绝原因，最多300字"),inputErrorMessage:this.$t("请填写拒绝原因，最多300字")}).then(function(e){var i=e.value;Object(s.e)(t.project.id,i).then(function(e){var i=e.data;t.project.invitation=i,t.$message({type:"success",message:t.$t("已拒绝邀请")})})}).catch(function(){})},onShowDeliverDialog:function(){this.$refs.deliverDialog.show()},onDeliverd:function(t){this.project.delivery=t},onCancelPublish:function(){var t=this;this.$confirm(this.$t("此操作将取消发布该项目并不可恢复，是否确认？"),this.$t("g.notice"),{confirmButtonText:this.$t("g.confirmBtn"),cancelButtonText:this.$t("g.cancelBtn"),type:"warning"}).then(function(){Object(s.d)(t.project.id).then(function(){t.project.status=n.a.STATUS_CANCELED,t.project.canceled_at=t.$dayjs().format("YYYY-MM-DD HH:mm:ss"),t.$message({type:"success",message:t.$t("取消成功")})})}).catch(function(){})},onEdit:function(){this.$router.push("/project/"+this.id+"/edit")},onShowPaymentDialog:function(){this.paymentDialog.visible=!0},onSubmitPaymentRemark:function(){var t=this;this.paymentDialog.submitting=!0;var e=this.isWorking;Object(s.u)(this.id,this.paymentDialog.content,e).then(function(e){var i=e.data;t.project=i,t.paymentDialog.submitting=!1,t.paymentDialog.visible=!1,t.$message.success(t.$t("操作成功"))}).catch(function(){t.paymentDialog.submitting=!0})},onDialogCancel:function(){this.$refs.upload.cancel(),this.dialogVisible=!1},onDialogConfirm:function(){var t=this;if(this.dialogUploading)return this.$message.warning(this.$t("正在上传附件，请稍后")),!1;this.dialogButtonLoading=!0,Object(s.b)(this.project.id,this.applicationForm).then(function(e){var i=e.data;t.dialogButtonLoading=!1,t.dialogVisible=!1,t.$message.success(t.$t("报名成功")),t.project.applying=!0,t.project.application=i}).catch(function(){t.dialogButtonLoading=!1})},onUploadStart:function(){this.dialogUploading=!0},onUploadSuccess:function(t){this.dialogUploading=!1,this.applicationForm.application_file_id=t.id},onUploadError:function(){this.dialogUploading=!1},onUploadRemove:function(){this.applicationForm.application_file_id=null}}},P={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"project-header card"},[t.isCanceled?i("my-alert",{staticClass:"mb2",attrs:{title:t.$t("该项目已被甲方取消"),type:"warning"}}):t._e(),t._v(" "),t.isReviewing?i("my-alert",{staticClass:"mb2",attrs:{title:t.$t("该项目正在审核中"),type:"warning"}}):t._e(),t._v(" "),t.isReviewFailed?i("my-alert",{staticClass:"mb2",attrs:{title:t.$t("该项目未通过审核")+(t.project.review_message?"："+t.project.review_message:""),type:"warning"}}):t._e(),t._v(" "),t.$isDesigner()?[t.invitable&&t.isNotViewed&&!t.isTendering?i("my-alert",{staticClass:"mb2",attrs:{title:t.$t("您未在规定时间内接受邀请，已无法参与该项目"),type:"warning"}}):t._e(),t._v(" "),t.canDeliver&&t.isWorking&&!t.isDeliverd?i("my-alert",{staticClass:"mb2",attrs:{title:t.$t("请您在规定交付时间内上传设计文件"),type:"warning"}}):t._e(),t._v(" "),t.canDeliver&&t.isCompleted&&!t.isDeliverd?i("my-alert",{staticClass:"mb2",attrs:{title:t.$t("项目已结束，您未在规定交付时间内上传设计文件"),type:"warning"}}):t._e(),t._v(" "),t.isDeclined?i("my-alert",{staticClass:"mb2",attrs:{title:t.$t("declined",{refusalCause:t.project.invitation.refusal_cause}),type:"warning"}}):t._e()]:t._e(),t._v(" "),"free"===t.project.mode?i("my-alert",{staticClass:"mb2",attrs:{title:t.$t("该项目模式为自由式，所有设计师都可以报名参与")}}):t._e(),t._v(" "),"invite"===t.project.mode?i("my-alert",{staticClass:"mb2",attrs:{title:t.$t("该项目模式为邀请设计师，只对邀请的设计师可见")}}):t._e(),t._v(" "),"specify"===t.project.mode?i("my-alert",{staticClass:"mb2",attrs:{title:t.$t("该项目模式为指定设计师，只对指定的设计师可见")}}):t._e(),t._v(" "),t.project.has_remitted?i("my-alert",{staticClass:"mb2",attrs:{title:t.$t("该项目已托管赏金"),type:"success"}}):t._e(),t._v(" "),i("div",{staticClass:"project-header__title-area"},[i("h1",{staticClass:"project-header__title"},[t._v(t._s(t.project.title))]),t._v(" "),t.$isDesigner()&&!t.loading?[t.project.favoriting?i("el-button",{attrs:{icon:"el-icon-star-off",size:"mini"},on:{click:t.onUnfavorite}},[t._v(t._s(t.$t("取消收藏"))+" ("+t._s(t.project.favorite_count)+")")]):i("el-button",{attrs:{icon:"el-icon-star-off",size:"mini"},on:{click:t.onFavorite}},[t._v(t._s(t.$t("收藏"))+" ("+t._s(t.project.favorite_count)+")")]),t._v(" "),t.appliable?[t.canCancelApply?i("el-button",{attrs:{size:"mini"},on:{click:t.onCancelApply}},[t._v(t._s(t.$t("取消报名")))]):t._e(),t._v(" "),t.canApply?i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){t.dialogVisible=!0}}},[t._v(t._s(t.$t("我要报名")))]):t._e()]:t._e(),t._v(" "),t.invitable?[t.isAccepted||t.isDeclined?i("el-button",{attrs:{size:"mini",disabled:""}},[t._v(t._s(t.$t(t.isAccepted?"已接受邀请":"已拒绝邀请")))]):t.isTendering?[i("el-button",{attrs:{type:"success",size:"mini",plain:""},on:{click:t.onAcceptInvitation}},[t._v(t._s(t.$t("接受邀请")))]),t._v(" "),i("el-button",{attrs:{type:"danger",size:"mini",plain:""},on:{click:t.onDeclineInvitation}},[t._v(t._s(t.$t("拒绝邀请")))])]:t._e()]:t._e(),t._v(" "),t.isDeliverd?i("el-button",{attrs:{size:"mini",type:"success",disabled:""}},[t._v(t._s(t.$t("已上传交付文件")))]):t.canDeliver&&t.isWorking?i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.onShowDeliverDialog}},[t._v(t._s(t.$t("上传交付文件")))]):t._e()]:t._e(),t._v(" "),t.$isClient()&&t.isPublisher?[t.editable?i("el-button",{attrs:{size:"mini"},on:{click:t.onEdit}},[t._v(t._s(t.$t("编辑项目")))]):t._e(),t._v(" "),t.cancelable?i("el-button",{attrs:{size:"mini"},on:{click:t.onCancelPublish}},[t._v(t._s(t.$t("取消发布")))]):t._e(),t._v(" "),t.isWorking?i("el-button",{attrs:{plain:"",size:"mini"},on:{click:t.onShowPaymentDialog}},[t._v(t._s(t.$t("完成项目")))]):t._e()]:t._e()],2),t._v(" "),i("div",{staticClass:"project-header__info"},[i("div",{staticClass:"project-header__info-item"},[i("span",{staticClass:"black-85"},[t._v(t._s(t.$t("甲方"))+": ")]),t._v(" "),i("my-avatar",{attrs:{"avatar-url":t.project.user.avatar_url}}),t._v(" "),i("router-link",{attrs:{to:"/profile?uid="+t.project.user.id}},[t._v(t._s(t.project.user.name))])],1),t._v(" "),i("div",{staticClass:"project-header__info-item"},[i("span",{staticClass:"black-85"},[t._v(t._s(t.$t("发布于"))+": ")]),t._v("\n        "+t._s(t.project.created_at)+"\n      ")])]),t._v(" "),i("el-steps",{staticClass:"mt3",attrs:{active:t.stepIndex,"process-status":"process","finish-status":"success"}},[i("el-step",{attrs:{title:t.$t("设计师报名中")}}),t._v(" "),i("el-step",{attrs:{title:t.$t("设计师工作中")}}),t._v(" "),i("el-step",{attrs:{title:t.$t("项目已完成")}})],1)],2),t._v(" "),i("div",{staticClass:"main-container"},[t.isPublisher&&t.isCompleted?i("div",{staticClass:"card"},[i("h3",{directives:[{name:"t",rawName:"v-t",value:"设计费发放说明",expression:"'设计费发放说明'"}],staticClass:"mt0"}),t._v(" "),i("el-button",{staticStyle:{position:"absolute",right:"24px",top:"16px"},attrs:{type:"text"},on:{click:t.onShowPaymentDialog}},[t._v(t._s(t.$t("编辑")))]),t._v(" "),i("p",{domProps:{textContent:t._s(t.project.payment_remark)}}),t._v(" "),i("p",{staticClass:"m0 mt1 f-12 black-65"},[t._v(t._s(t.$t("更新于"))+"："+t._s(t.project.payment_remark_updated_at))])],1):t._e(),t._v(" "),t.$isDesigner()&&t.isDeliverd?i("div",{staticClass:"card"},[i("h3",{directives:[{name:"t",rawName:"v-t",value:"我的交付文件",expression:"'我的交付文件'"}],staticClass:"mt0"}),t._v(" "),t.canUpdateDelivery?i("el-button",{staticStyle:{position:"absolute",right:"24px",top:"16px"},attrs:{type:"text"},on:{click:t.onShowDeliverDialog}},[t._v(t._s(t.$t("编辑")))]):t._e(),t._v(" "),t.project.delivery.remark?i("p",{domProps:{textContent:t._s(t.project.delivery.remark)}}):t._e(),t._v(" "),i("my-alert",{staticClass:"mt-12"},[i("a",{attrs:{href:t.project.delivery.file_url,target:"_blank"}},[t._v(t._s(t.$t("下载附件")))])]),t._v(" "),i("p",{staticClass:"m0 mt1 f-12 black-65"},[t._v(t._s(t.$t("提交于"))+"："+t._s(t.project.delivery.created_at))])],1):t._e(),t._v(" "),t.$isDesigner()&&t.project.applying?i("div",{staticClass:"card"},[i("h3",{directives:[{name:"t",rawName:"v-t",value:"我的报名信息",expression:"'我的报名信息'"}],staticClass:"mt0"}),t._v(" "),i("p",{domProps:{textContent:t._s(t.project.application.remark)}}),t._v(" "),t.project.application.application_file_url?i("my-alert",{staticClass:"mt-12"},[i("a",{attrs:{href:t.project.application.application_file_url,target:"_blank"}},[t._v(t._s(t.$t("下载附件")))])]):t._e(),t._v(" "),i("p",{staticClass:"m0 mt1 f-12 black-65"},[t._v(t._s(t.$t("报名于"))+"："+t._s(t.project.application.created_at))])],1):t._e(),t._v(" "),i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"card"},[t.showInfo?[i("el-button",{staticStyle:{position:"absolute",right:"24px",top:"16px"},attrs:{type:"text"},on:{click:function(e){t.showInfo=!1}}},[t._v(t._s(t.$t("收起")))]),t._v(" "),i("div",{staticClass:"project-info"},[i("h3",{directives:[{name:"t",rawName:"v-t",value:"项目的类型是？",expression:"'项目的类型是？'"}]}),t._v(" "),i("p",[t._v(t._s(t.project.types.join("/")))]),t._v(" "),i("h3",{directives:[{name:"t",rawName:"v-t",value:"项目的功能是？",expression:"'项目的功能是？'"}]}),t._v(" "),i("p",[t._v(t._s(t.project.features.join("/")))]),t._v(" "),i("h3",{directives:[{name:"t",rawName:"v-t",value:"项目关键字",expression:"'项目关键字'"}]}),t._v(" "),t._l(t.project.keywords,function(e){return i("el-tag",{key:e,staticClass:"mr1",attrs:{type:"info"}},[t._v(t._s(e))])}),t._v(" "),t.isSignIn?[i("h3",{directives:[{name:"t",rawName:"v-t",value:"项目描述",expression:"'项目描述'"}]}),t._v(" "),i("p",{staticClass:"pre-wrap",domProps:{textContent:t._s(t.project.description)}}),t._v(" "),t.project.project_file_url?i("my-alert",{staticClass:"mt-12"},[i("a",{attrs:{href:t.project.project_file_url,target:"_blank"}},[t._v(t._s(t.$t("下载附件")))])]):t._e(),t._v(" "),i("h3",{directives:[{name:"t",rawName:"v-t",value:"项目设计深度要求",expression:"'项目设计深度要求'"}]}),t._v(" "),i("p",{domProps:{textContent:t._s(t.project.depth)}}),t._v(" "),i("h3",{directives:[{name:"t",rawName:"v-t",value:"项目的交付时间",expression:"'项目的交付时间'"}]}),t._v(" "),i("p",{domProps:{textContent:t._s(t.project.delivery_time)}}),t._v(" "),i("h3",{directives:[{name:"t",rawName:"v-t",value:"希望用多长时间找设计师？",expression:"'希望用多长时间找设计师？'"}]}),t._v(" "),i("p",{domProps:{textContent:t._s(t.project.find_time)}}),t._v(" "),i("h3",{directives:[{name:"t",rawName:"v-t",value:"希望付给设计师的费用是多少？",expression:"'希望付给设计师的费用是多少？'"}]}),t._v(" "),i("p",{domProps:{textContent:t._s(t.project.payment)}})]:t._e()],2)]:i("el-button",{attrs:{type:"text"},on:{click:function(e){t.showInfo=!0}}},[t._v(t._s(t.$t("点击查看项目信息")))])],2),t._v(" "),t.isSignIn?t._e():i("router-link",{attrs:{to:"/signin?returnUrl="+t.$route.fullPath}},[i("el-button",{staticClass:"block w-100 shadow",attrs:{type:"primary"}},[t._v(t._s(t.$t("登录后查看项目完整信息")))])],1),t._v(" "),t.isPublisher?[t.isWorking||t.isCompleted?i("delivery-list",{attrs:{project:t.project}}):t._e(),t._v(" "),t.appliable?i("application-list",{attrs:{project:t.project}}):t._e(),t._v(" "),t.invitable?i("invitation-list",{attrs:{project:t.project}}):t._e()]:t._e()],2),t._v(" "),i("el-dialog",{attrs:{visible:t.dialogVisible,title:t.$t("报名项目")},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("el-input",{attrs:{rows:5,placeholder:t.$t("简单说点什么，让业主更快了解你（200字以内）"),type:"textarea"},model:{value:t.applicationForm.remark,callback:function(e){t.$set(t.applicationForm,"remark",e)},expression:"applicationForm.remark"}}),t._v(" "),i("my-upload",{ref:"upload",staticClass:"mt-12",attrs:{"max-size":50,type:"application_file"},on:{start:t.onUploadStart,success:t.onUploadSuccess,error:t.onUploadError,remove:t.onUploadRemove}}),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:t.onDialogCancel}},[t._v(t._s(t.$t("g.cancelBtn")))]),t._v(" "),i("el-button",{attrs:{loading:t.dialogButtonLoading,type:"primary"},on:{click:t.onDialogConfirm}},[t._v(t._s(t.$t("g.confirmBtn")))])],1)],1),t._v(" "),i("deliver-dialog",{ref:"deliverDialog",attrs:{project:t.project},on:{delivered:t.onDeliverd}}),t._v(" "),i("el-dialog",{attrs:{visible:t.paymentDialog.visible,title:t.$t("填写设计费发放说明")},on:{"update:visible":function(e){t.$set(t.paymentDialog,"visible",e)}}},[i("p",{directives:[{name:"t",rawName:"v-t",value:"paymentHelp",expression:"'paymentHelp'"}],staticClass:"mt0 black-45 f-14",staticStyle:{"white-space":"pre-wrap"}}),t._v(" "),i("el-input",{attrs:{rows:5,placeholder:t.$t("请填写设计费发放说明"),maxlength:1e3,type:"textarea"},model:{value:t.paymentDialog.content,callback:function(e){t.$set(t.paymentDialog,"content",e)},expression:"paymentDialog.content"}}),t._v(" "),i("span",{attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.paymentDialog.visible=!1}}},[t._v(t._s(t.$t("g.cancelBtn")))]),t._v(" "),i("el-button",{attrs:{loading:t.paymentDialog.submitting,disabled:!t.paymentDialog.content,type:"primary"},on:{click:t.onSubmitPaymentRemark}},[t._v(t._s(t.$t("g.confirmBtn")))])],1)],1)],1)},staticRenderFns:[]};var A=function(t){i("oQTT")},E=Object(a.a)(S,P,!1,A,"data-v-d0bfc968",null),U=i("hssh");U&&U.__esModule&&(U=U.default),"function"==typeof U&&U(E);e.default=E.exports},XK0Y:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"上传交付文件":"Upload delivery file","备注信息（5000字以内）":"Remark (up to 5000 characters)","正在上传附件，请稍后":"File uploading, please wait","请上传交付的设计文件":"Please upload the design file to deliver","提交成功":"Successfully uploaded","查看已上传的设计文件":"View the delivered design file"}}'),delete t.options._Ctor}},ebiC:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"报名列表":"Applied designers","下载附件":"Attachments","报名于":"Applied at","查看备注":"Review remarks","备注":"Remark"}}'),delete t.options._Ctor}},hssh:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh":{"declined":"您已拒绝邀请。拒绝原因: {refusalCause}","paymentHelp":"请准确描述您的设计费发放方案，说明给谁多少发设计费。只能给成功上传设计文件的设计师发放设计费。 \\n举例: \\n一等奖: 张三, 10000元; 李四, 10000元. \\n二等奖: 王五, 5000元."},"en":{"declined":"You have declined the project. Refusal cause: {refusalCause}","该项目已被甲方取消":"The project has been canceled","该项目正在审核中":"The project is reviewing","该项目未通过审核":"The project has not passed review","该项目模式为自由式，所有设计师都可以报名参与":"The project is \\"free mode\\", which is opened to everyone.","该项目模式为邀请设计师，只对邀请的设计师可见":"The project is \\"invite mode\\", which is visible only to invited designers.","该项目模式为指定设计师，只对指定的设计师可见":"The project is \\"specify mode\\", which is visible only to specified designers.","该项目已托管赏金":"The project has remitted the consulting fee","收藏":"Favorite","取消收藏":"Unfavorite","我要报名":"Apply","报名项目":"Apply the project","接受邀请":"Accept invitation","拒绝邀请":"Decline invitation","已接受邀请":"Has accepted invitation","已拒绝邀请":"Has declined invitation","您确定接受甲方邀请，参与该项目吗？":"Are you sure to accept the invitation from the client and to participate in the project?","您确定拒绝甲方邀请吗？这个操作将无法撤销":"Are you sure you reject the invitation from the client? This operation cannot undo","请填写拒绝原因，最多300字":"Please enter the refusal reason, up to 300 characters","您未在规定时间内接受邀请，已无法参与该项目":"You have not accepted the invitation within the specified time and are unable to participate in the project.","请您在规定交付时间内上传设计文件":"Please upload the design file within the specified delivery time.","项目已结束，您未在规定交付时间内上传设计文件":"This project has been complete. You have not uploaded the design file within the specified delivery time.","报名成功":"Successfully apply","取消报名":"Cancel apply","此操作将取消报名该项目，是否确认？":"This operation will cancel the application for the project. Is it confirmed?","已上传交付文件":"Has uploaded delivery file","上传交付文件":"Uploaded delivery file","编辑项目":"Edit the project","取消发布":"Cancel publish","完成项目":"Complete the project","此操作将取消发布该项目并不可恢复，是否确认？":"This operation will unpublish the project and is not recoverable. Is it confirmed?","取消成功":"Successfully canceled","甲方":"Client","发布于":"Released time","设计师报名中":"Designers applying","设计师工作中":"In process","项目已完成":"Completed","项目的类型是？":"Project types","项目的功能是？":"Project features","项目描述":"Project description","项目关键字":"Project keywords","项目设计深度要求":"Design depth","项目的交付时间":"Delivery time","希望用多长时间找设计师？":"How long do you want to find a designer?","希望付给设计师的费用是多少？":"How much would you want to pay for the designer?","下载附件":"Download file","上传附件":"Upload file","只能上传一个文件":"Allow upload only one file","正在上传附件，请稍后":"File uploading, please wait","简单说点什么，让业主更快了解你（200字以内）":"Say something so that the client can know you quickly (200 characters at most)","我的报名信息":"My application","点击查看项目信息":"View project info","收起":"Collapse","登录后查看项目完整信息":"Sign in to view complete project info","我的交付文件":"My delivery file","提交于":"Delivered at","操作成功":"Successful operation","更新于":"Updated at","编辑":"Edit","设计费发放说明":"Consulting fee destribution scheme","填写设计费发放说明":"Describe how to pay consulting fee","请填写设计费发放说明":"Please describe how to pay consulting fee","paymentHelp":"Please describe your consulting fee payment plan accurately. Please explain to whom and how much the consulting fee is paid. Consulting fee can only be paid to designers who successfully upload design files. \\nFor example: \\nThe First Prize: Wang, 10000 RMB; Zhang, 10000 RMB. \\nThe Second Prize: Cook, 5000 RMB; Jobs, 5000 RMB."}}'),delete t.options._Ctor}},iBfo:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh":{"status":{"0":"未查看","1":"接受","2":"拒绝"},"refusalCause":"拒绝原因：{refusalCause}"},"en":{"邀请列表":"Invited designers","邀请于":"Invited at","状态":"Status","拒绝原因":"Refusal cause","查看原因":"View cause","status":{"0":"Not viewd","1":"Accepted","2":"Declined"},"refusalCause":"Refusal cause: {refusalCause}"}}'),delete t.options._Ctor}},oQTT:function(t,e){},pvGA:function(t,e){},wAoR:function(t,e){}});
//# sourceMappingURL=4.053ff89fb31e450a0bdc.js.map