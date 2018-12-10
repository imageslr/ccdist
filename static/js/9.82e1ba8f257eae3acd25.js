webpackJsonp([9],{"LC+d":function(t,o){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"加载更多":"Load more","编辑":"Edit","删除":"Delete","确认删除该作品？":"Is it confirmed to delete the work?"}}'),delete t.options._Ctor}},V2YY:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var i=e("XyMi"),n=e("xoXj"),r=e("GUlH"),s=e("0xDb"),a={data:function(){return{works:[],currentPage:0,loading:!1,nomore:!1,error:!1,followLoadings:{}}},computed:{busy:function(){return this.loading||this.nomore||this.error}},methods:{likeCountStr:function(t){return t?this.$t("g.like")+" ("+t+")":this.$t("g.like")},onToggleLike:function(t){var o=this.works[t],e=o.liked;(e?r.g:r.f)(o.id).then(function(t){var i=t.data.like_count;o.liked=!e,o.like_count=i})},onReachBottom:function(){var t=this;return this.loading=!0,Object(r.d)(this.currentPage+1).then(function(o){var e=o.data,i=e.data,n=e.meta.pagination;t.loading=!1,t.works.push.apply(t.works,i),t.currentPage=n.current_page,t.nomore=n.total_pages<=n.current_page}).catch(function(){t.error=!0,t.loading=!1})},onReload:function(){this.error=!1},onFollow:function(t){var o=this;if(!this.followLoadings[t]){this.$set(this.followLoadings,t,!0);var e=this.works[t].user;console.log("user",e),this.$store.dispatch("FOLLOW",e.id).then(function(){o.followLoadings[t]=!1,o.works.forEach(function(t){var o=t.user;o.id===e.id&&(o.following=!0,o.follower_count++)})}).catch(function(){o.followLoadings[t]=!1})}},onUnfollow:function(t){var o=this,e=this.works[t].user;this.$store.dispatch("UNFOLLOW",e.id).then(function(){o.works.forEach(function(t){var o=t.user;o.id===e.id&&(o.following=!1,o.follower_count--)})})},onEdit:function(t){var o=this.works[t].id;this.$router.push("/work/"+o+"/edit")},onDelete:function(t){var o=this;this.$confirm(this.$t("确认删除该作品？"),this.$t("g.notice"),{confirmButtonText:this.$t("g.confirmBtn"),cancelButtonText:this.$t("g.cancelBtn"),type:"warning"}).then(function(){Object(r.b)(o.works[t].id).then(function(){o.works.splice(t,1),o.$message.success(o.$t("g.successfullyDeleted"))})}).catch(function(){})},onPreview:function(t,o){this.$refs.preview.open(t,o)},splittedFollowerCount:function(t){return Object(s.b)(t)}}},l={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.onReachBottom,expression:"onReachBottom"}],attrs:{"infinite-scroll-disabled":"busy","infinite-scroll-distance":"200"}},[e("transition-group",{attrs:{tag:"div",name:"fade-transform-y"}},t._l(t.works,function(o,i){return e("div",{key:o.id,staticClass:"work-card"},[e("div",{staticClass:"work-card__header"},[e("router-link",{attrs:{to:"/profile?uid="+o.user.id}},[e("my-avatar",{staticClass:"work-card__header-avatar",attrs:{"avatar-url":o.user.avatar_url}})],1),t._v(" "),e("div",{staticClass:"work-card__header-text"},[e("router-link",{attrs:{to:"/profile?uid="+o.user.id}},[e("p",{staticClass:"m0 f-15 bold black inline-block"},[t._v(t._s(o.user.name))])]),t._v(" "),e("p",{staticClass:"m0 f-13 bold black-65"},[t._v(t._s(t.splittedFollowerCount(o.user.follower_count)+" "+t.$t("g.follower")))]),t._v(" "),e("p",{staticClass:"m0 f-13 bold black-65"},[t._v(t._s(t.$t("g.published_at")+" "+o.created_at))])],1),t._v(" "),t.$uid()==o.user.id?e("el-dropdown",{attrs:{trigger:"click"}},[e("el-button",{staticClass:"work-card__header-dropdown",attrs:{type:"text",icon:"el-icon-arrow-down"}}),t._v(" "),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("el-dropdown-item",{nativeOn:{click:function(o){t.onEdit(i)}}},[t._v(t._s(t.$t("编辑")))]),t._v(" "),e("el-dropdown-item",{nativeOn:{click:function(o){t.onDelete(i)}}},[t._v(t._s(t.$t("删除")))])],1)],1):o.user.following?e("el-dropdown",{attrs:{trigger:"click"},on:{command:t.onUnfollow}},[e("el-button",{staticClass:"work-card__header-dropdown",attrs:{type:"text",icon:"el-icon-arrow-down"}}),t._v(" "),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("el-dropdown-item",{attrs:{command:i}},[t._v(t._s(t.$t("g.cancelFollow")))])],1)],1):e("el-button",{staticClass:"work-card__header-follow-button",attrs:{loading:t.followLoadings[i],plain:"",round:"",type:"primary",size:"small"},on:{click:function(o){t.onFollow(i)}}},[t._v(t._s(t.$t("g.follow")))])],1),t._v(" "),e("div",{staticClass:"work-card__content"},[e("el-carousel",{staticClass:"work-card__content-carousel",attrs:{autoplay:!1,trigger:"click"}},t._l(o.photo_urls,function(i,n){return e("el-carousel-item",{key:i,nativeOn:{click:function(e){t.onPreview(o.photo_urls,n)}}},[e("img",{staticClass:"work-card__content-carousel-item",attrs:{src:i}})])})),t._v(" "),e("div",{staticClass:"work-card__content-info"},[e("el-scrollbar",{attrs:{"wrap-class":"wrapper"}},[e("p",{staticClass:"work-card__content-info-title",domProps:{textContent:t._s(o.title)}}),t._v(" "),e("p",{staticClass:"work-card__content-info-description",domProps:{textContent:t._s(o.description)}})])],1)],1),t._v(" "),e("div",{staticClass:"work-card__action-btn"},[e("el-button",{class:{"is-liked":o.liked},attrs:{type:"text"},on:{click:function(o){t.onToggleLike(i)}}},[t._v(t._s(t.likeCountStr(o.like_count)))])],1)])})),t._v(" "),e("my-loader",{attrs:{loading:t.loading,error:t.error,"btn-text":t.$t("加载更多"),"on-reload":t.onReload}}),t._v(" "),t.nomore?e("p",{directives:[{name:"t",rawName:"v-t",value:t.$t("g.nomore"),expression:"$t('g.nomore')"}],staticClass:"no-more"}):t._e(),t._v(" "),e("my-multi-preview",{ref:"preview"})],1)},staticRenderFns:[]};var c=function(t){e("nkyw"),e("gENw")},d=Object(i.a)(a,l,!1,c,"data-v-a185027c",null),u=e("LC+d");u&&u.__esModule&&(u=u.default),"function"==typeof u&&u(d);var _=d.exports,p=e("Ty/O"),v={components:{ActivityList:n.a,WorkList:_},computed:{type:function(){return this.$route.query.type||"activity"}},methods:{getActivities:function(t){return Object(p.h)(t)},onNavigate:function(t){var o=t.name;this.$router.push({path:this.$route.path,query:{type:o}})}}},f={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("div",{staticClass:"banner"},[e("h1",{directives:[{name:"t",rawName:"v-t",value:"设计师广场",expression:"'设计师广场'"}],staticClass:"banner__title"}),t._v(" "),e("div",{staticClass:"banner__sub"},[e("p",{domProps:{textContent:t._s("Men come to city to live, they stay in the city to live well.——"+t.$t("亚里士多德"))}})])]),t._v(" "),e("div",{staticClass:"wrap-container"},[e("div",{staticClass:"main-container"},[e("div",{staticClass:"left-container"},[e("el-tabs",{attrs:{value:t.type,type:"card"},on:{"tab-click":t.onNavigate}},[e("el-tab-pane",{attrs:{label:t.$t("热门动态"),name:"activity"}}),t._v(" "),e("el-tab-pane",{attrs:{label:t.$t("欣赏作品"),name:"work"}})],1),t._v(" "),"activity"===t.type?e("activity-list",{staticClass:"activity-list",attrs:{"get-activities":t.getActivities,"show-action-button":""}}):e("work-list")],1),t._v(" "),e("div",{staticClass:"right-container"},[e("div",{directives:[{name:"t",rawName:"v-t",value:"tip1",expression:"'tip1'"}],staticClass:"tip"}),t._v(" "),e("div",{staticClass:"tip"},[t._v("\n          "+t._s(t.$t("想要更精确地查找设计师？"))+"\n          "),e("router-link",{attrs:{to:"/search?type=designer"}},[t._v(t._s(t.$t("试试这个搜索页")))])],1)])])])])},staticRenderFns:[]};var w=function(t){e("uK1R")},h=Object(i.a)(v,f,!1,w,"data-v-1a50cf11",null),g=e("oRmW");g&&g.__esModule&&(g=g.default),"function"==typeof g&&g(h);o.default=h.exports},gENw:function(t,o){},nkyw:function(t,o){},oRmW:function(t,o){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh":{"tip1":"设计师广场包含设计师们近一个月的热门动态（依据点赞数与评论数排列）与作品集。"},"en":{"tip1":"Designers\' Plaza is a public space to show the newest of designers and their portfolios.","设计师广场":"Designers\' Plaza","亚里士多德":"Aristotle","热门动态":"Designers\' Talk","欣赏作品":"Portfolios Pool","想要更精确地查找设计师？":"Want to find a designer more accurately?","试试这个搜索页":"Try this search"}}'),delete t.options._Ctor}},uK1R:function(t,o){}});
//# sourceMappingURL=9.82e1ba8f257eae3acd25.js.map