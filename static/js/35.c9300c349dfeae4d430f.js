webpackJsonp([35],{RDbA:function(t,e){},sZNU:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i("XyMi"),n=i("SaQS"),a=i("Ty/O"),o={components:{ActivityCard:n.a},data:function(){return{activity:{id:0,content:"加载中",photo_urls:[],like_count:0,reply_count:0,created_at:"",liked:!1,user:{id:0,avatar_url:"",name:"加载中",follower_count:0,following:!1}}}},created:function(){var t=this;this.activity.id=parseInt(this.$route.params.id),Object(a.d)(this.$route.params.id).then(function(e){var i=e.data;t.activity=i})},methods:{onPreview:function(t){this.$refs.preview.open(t.urls,t.index)}}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("activity-card",{staticStyle:{margin:"24px auto",width:"600px"},attrs:{activity:this.activity,"default-show-reply-list":""},on:{preview:this.onPreview}}),this._v(" "),e("my-multi-preview",{ref:"preview"})],1)},staticRenderFns:[]};var s=function(t){i("RDbA")},u=Object(r.a)(o,c,!1,s,null,null);e.default=u.exports}});
//# sourceMappingURL=35.c9300c349dfeae4d430f.js.map