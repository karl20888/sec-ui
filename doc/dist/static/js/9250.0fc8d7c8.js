(self["webpackChunkdoc"]=self["webpackChunkdoc"]||[]).push([[9250],{1391:function(t){t.exports="```vue\n<template>\n  <sec-skeleton></sec-skeleton>\n</template>\n```"},2108:function(t){t.exports='```vue\n<template>\n  <sec-skeleton :rows="6"></sec-skeleton>\n</template>\n```'},299:function(t){t.exports='```vue\n<template>\n  <sec-skeleton :rows="6" animated></sec-skeleton>\n</template>\n```'},5389:function(t){t.exports='```vue\n<template>\n  <sec-skeleton style="width: 240px;">\n    <template #template>\n      <sec-skeleton-item variant="image" style="width: 240px; height: 240px;"></sec-skeleton-item>\n      <div style="padding: 14px;">\n        <sec-skeleton-item variant="p" style="width: 50%;"></sec-skeleton-item>\n        <div style="display: flex; align-items: center; justify-items: space-between;">\n          <sec-skeleton-item variant="text" style="margin-right: 16px;"></sec-skeleton-item>\n          <sec-skeleton-item variant="text" style="width: 30%;"></sec-skeleton-item>\n        </div>\n      </div>\n    </template>\n  </sec-skeleton>\n</template>\n```'},6582:function(t){t.exports='```vue\n<template>\n  <div style="width: 240px;">\n    <p class="mb15">\n      <span style="margin-right: 16px;">切换 Loading</span>\n      <sec-switch v-model="loading"></sec-switch>\n    </p>\n    <sec-skeleton animated style="width: 240px;" :loading="loading">\n      <template #template>\n        <sec-skeleton-item variant="image" style="width: 240px; height: 240px;"></sec-skeleton-item>\n        <div style="padding: 14px;">\n          <sec-skeleton-item variant="h3" style="width: 50%;"></sec-skeleton-item>\n          <div\n            style="\n              display: flex;\n              align-items: center;\n              justify-items: space-between;\n              margin-top: 16px;\n              height: 16px;\n            "\n          >\n            <sec-skeleton-item variant="text" style="margin-right: 16px;"></sec-skeleton-item>\n            <sec-skeleton-item variant="text" style="width: 30%;"></sec-skeleton-item>\n          </div>\n        </div>\n      </template>\n      <sec-card\n        :body-style="{\n          \'padding\': \'0\',\n          \'margin-bottom\': \'1px\',\n        }"\n      >\n        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" alt="image">\n        <div style="padding: 14px;">\n          <span>好吃的汉堡</span>\n          <div class="card-header">\n            <span class="time">{{ currentDate }}</span>\n            <sec-btn type="text" class="button">操作按钮</sec-btn>\n          </div>\n        </div>\n      </sec-card>\n    </sec-skeleton>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      loading: true,\n      currentDate: \'2021-06-01\',\n    };\n  },\n};\n<\/script>\n\n<style lang="less" scoped>\n.card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 10px;\n  line-height: 12px;\n}\n\n.time {\n  font-size: 12px;\n  color: #999;\n}\n\n.button {\n  padding: 0;\n  min-height: auto;\n}\n</style>\n```'},789:function(t){t.exports='```vue\n<template>\n  <div style="width: 400px;">\n    <p class="mb15">\n      <sec-btn @click="setLoading">点击重新加载</sec-btn>\n    </p>\n    <sec-skeleton animated style="width: 400px;" :loading="loading" :count="3">\n      <template #template>\n        <sec-skeleton-item variant="image" style="width: 400px; height: 267px;"></sec-skeleton-item>\n        <div style="padding: 14px;">\n          <sec-skeleton-item variant="h3" style="width: 50%;"></sec-skeleton-item>\n          <div\n            style="\n              display: flex;\n              align-items: center;\n              justify-items: space-between;\n              margin-top: 16px;\n              height: 16px;\n            "\n          >\n            <sec-skeleton-item variant="text" style="margin-right: 16px;"></sec-skeleton-item>\n            <sec-skeleton-item variant="text" style="width: 30%;"></sec-skeleton-item>\n          </div>\n        </div>\n      </template>\n      <sec-card\n        v-for="item in lists"\n        :key="item.name"\n        :body-style="{\n          \'padding\': \'0\',\n          \'margin-bottom\': \'1px\',\n        }"\n      >\n        <img :src="item.imgUrl" alt="image" class="multi-content">\n        <div style="padding: 14px;">\n          <span>{{ item.name }}</span>\n          <div class="card-header">\n            <span class="time">{{ currentDate }}</span>\n            <sec-btn type="text" class="button">操作按钮</sec-btn>\n          </div>\n        </div>\n      </sec-card>\n    </sec-skeleton>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      loading: true,\n      currentDate: \'2021-06-01\',\n      lists: [],\n    };\n  },\n  mounted() {\n    this.loading = false;\n    this.lists = [{\n      imgUrl: \'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg\',\n      name: \'鹿\',\n    }, {\n      imgUrl: \'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg\',\n      name: \'马\',\n    }, {\n      imgUrl: \'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg\',\n      name: \'山狮\',\n    }];\n  },\n  methods: {\n    setLoading() {\n      this.loading = true;\n      setTimeout(() => {\n        this.loading = false;\n      }, 2000);\n    },\n  },\n};\n<\/script>\n\n<style lang="less" scoped>\n.sec-card {\n  margin-bottom: 15px;\n}\n\n.multi-content {\n  display: block;\n  width: 400px;\n  height: 267px;\n}\n\n.card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 10px;\n  line-height: 12px;\n}\n\n.time {\n  font-size: 12px;\n  color: #999;\n}\n\n.button {\n  padding: 0;\n  min-height: auto;\n}\n</style>\n```'},4497:function(t){t.exports='```vue\n<template>\n  <div style="width: 240px;">\n    <p class="mb15">\n      <span style="margin-right: 16px;">切换 Loading</span>\n      <sec-switch v-model="loading"></sec-switch>\n    </p>\n    <sec-skeleton\n      animated\n      style="width: 240px;"\n      :loading="loading"\n      :throttle="500"\n    >\n      <template #template>\n        <sec-skeleton-item variant="image" style="width: 240px; height: 240px;"></sec-skeleton-item>\n        <div style="padding: 14px;">\n          <sec-skeleton-item variant="h3" style="width: 50%;"></sec-skeleton-item>\n          <div\n            style="\n              display: flex;\n              align-items: center;\n              justify-items: space-between;\n              margin-top: 16px;\n              height: 16px;\n            "\n          >\n            <sec-skeleton-item variant="text" style="margin-right: 16px;"></sec-skeleton-item>\n            <sec-skeleton-item variant="text" style="width: 30%;"></sec-skeleton-item>\n          </div>\n        </div>\n      </template>\n      <sec-card\n        :body-style="{\n          \'padding\': \'0\',\n          \'margin-bottom\': \'1px\',\n        }"\n      >\n        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" alt="image">\n        <div style="padding: 14px;">\n          <span>好吃的汉堡</span>\n          <div class="card-header">\n            <span class="time">{{ currentDate }}</span>\n            <sec-btn type="text" class="button">操作按钮</sec-btn>\n          </div>\n        </div>\n      </sec-card>\n    </sec-skeleton>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      loading: true,\n      currentDate: \'2021-06-01\',\n    };\n  },\n};\n<\/script>\n\n<style lang="less" scoped>\n.card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 10px;\n  line-height: 12px;\n}\n\n.time {\n  font-size: 12px;\n  color: #999;\n}\n\n.button {\n  padding: 0;\n  min-height: auto;\n}\n</style>\n```'},3722:function(t,e,n){"use strict";n.d(e,{Z:function(){return d}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"doc-demo"},[e("div",{staticClass:"doc-demo-source"},[t._t("source")],2),e("div",{staticClass:"doc-demo-meta",class:{"is-expanded":t.isExpanded}},[t.$slots.default?e("div",{staticClass:"doc-demo-desc"},[t._t("default")],2):t._e(),e("markdown-it-vue",{attrs:{content:t.markdown}})],1),e("div",{staticClass:"doc-demo-control",on:{click:function(e){t.isExpanded=!t.isExpanded},keydown:function(e){t.isExpanded=!t.isExpanded}}},[t.isExpanded?e("i",{staticClass:"el-icon-caret-top"}):e("i",{staticClass:"el-icon-caret-bottom"}),e("span",[t.isExpanded?[t._v("隐藏代码")]:[t._v("显示代码")]],2)])])},a=[],i={props:{markdown:{type:String,default:""}},data(){return{isExpanded:!1}}},l=i,o=n(4940),c=(0,o.Z)(l,s,a,!1,null,null,null),d=c.exports},9250:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return ct}});var s=function(){var t=this,e=t._self._c;return e("sec-block",{staticClass:"doc-block"},[e("h2",[t._v("Skeleton 骨架屏")]),e("p",[t._v("在需要等待加载内容的位置设置一个骨架屏，某些场景下比 Loading 的视觉效果更好。")]),e("h3",[t._v("基础用法")]),e("p",[t._v("基础的骨架效果。")]),e("DocDemo",{attrs:{markdown:t.demo1},scopedSlots:t._u([{key:"source",fn:function(){return[e("Demo1")]},proxy:!0}])}),e("h3",[t._v("更多参数")]),e("p",[t._v("可以配置骨架屏段落数量，以便更接近真实渲染效果。首行会被渲染一个长度 33% 的段首。")]),e("DocDemo",{attrs:{markdown:t.demo2},scopedSlots:t._u([{key:"source",fn:function(){return[e("Demo2")]},proxy:!0}])}),e("h3",[t._v("动画效果")]),e("p",[t._v("显示动画效果。")]),e("DocDemo",{attrs:{markdown:t.demo3},scopedSlots:t._u([{key:"source",fn:function(){return[e("Demo3")]},proxy:!0}])}),e("h3",[t._v("自定义样式")]),e("p",[t._v("Element 提供的排版模式有时候并不满足要求，当您想要自己定义的模板时，可以通过一个具名 Slot 来自己设定模板。")]),e("p",[t._v("我们提供了不同的模板单元可供使用，具体可选值请看 API 详细描述。建议在描述模板的时候，尽量靠近真实的 DOM 结构，这样可以避免 DOM 高度差距引起的抖动。")]),e("DocDemo",{attrs:{markdown:t.demo4},scopedSlots:t._u([{key:"source",fn:function(){return[e("Demo4")]},proxy:!0}])}),e("h3",[t._v("Loading 状态")]),e("p",[t._v("当 Loading 结束之后，我们往往需要显示真实的 UI，可以通过 "),e("code",[t._v("loading")]),t._v(" 的值来控制是否显示真实的 DOM。然后通过不具名 Slot 来设置当 loading 结束之后需要展示的 UI。")]),e("DocDemo",{attrs:{markdown:t.demo5},scopedSlots:t._u([{key:"source",fn:function(){return[e("Demo5")]},proxy:!0}])}),e("h3",[t._v("渲染多条数据")]),e("p",[t._v("大多时候，骨架屏都被用来渲染列表，当我们需要在从服务器获取数据的时候来渲染一个假的 UI。利用 "),e("code",[t._v("count")]),t._v(" 这个属性就能控制渲染多少条假的数据在页面上。")]),e("div",{staticClass:"tip"},[e("p",[t._v("请注意，请尽可能地将 "),e("code",[t._v("count")]),t._v(" 的大小保持在最小状态，即使是假的 UI，DOM 元素多了之后，照样会引起性能问题，并且在骨架屏销毁时所消耗的时间也会更长（相对的）。")])]),e("DocDemo",{attrs:{markdown:t.demo6},scopedSlots:t._u([{key:"source",fn:function(){return[e("Demo6")]},proxy:!0}])}),e("h3",[t._v("防止渲染抖动")]),e("p",[t._v("有的时候，API 的请求回来的特别快，往往骨架占位刚刚被渲染，真实的数据就已经回来了，用户的界面会突然一闪，此时为了避免这种情况，就需要通过 "),e("code",[t._v("throttle")]),t._v(" 属性来避免这个问题。")]),e("DocDemo",{attrs:{markdown:t.demo7},scopedSlots:t._u([{key:"source",fn:function(){return[e("Demo7")]},proxy:!0}])}),e("h3",[t._v("Skeleton Attributes")]),e("sec-table",{staticClass:"doc-table",attrs:{data:t.skeletonAttributes}},[e("sec-table-column",{attrs:{label:"参数",prop:"attr",width:"100"}}),e("sec-table-column",{attrs:{label:"说明",prop:"desc"}}),e("sec-table-column",{attrs:{label:"类型",prop:"type",width:"100"}}),e("sec-table-column",{attrs:{label:"可选值",prop:"value",width:"100"}}),e("sec-table-column",{attrs:{label:"默认值",prop:"default",width:"100"}})],1),e("h3",[t._v("Skeleton Item Attributes")]),e("sec-table",{staticClass:"doc-table",attrs:{data:t.skeletonItemAttributes}},[e("sec-table-column",{attrs:{label:"参数",prop:"attr",width:"100"}}),e("sec-table-column",{attrs:{label:"说明",prop:"desc"}}),e("sec-table-column",{attrs:{label:"类型",prop:"type",width:"120"}}),e("sec-table-column",{attrs:{label:"可选值",prop:"value",width:"360"}}),e("sec-table-column",{attrs:{label:"默认值",prop:"default",width:"100"}})],1),e("h3",[t._v("Skeleton Slots")]),e("sec-table",{staticClass:"doc-table",attrs:{data:t.skeletonSlots}},[e("sec-table-column",{attrs:{label:"name",prop:"name",width:"220"}}),e("sec-table-column",{attrs:{label:"说明",prop:"desc"}})],1)],1)},a=[],i=n(3722),l=n(1391),o=n.n(l),c=function(){var t=this,e=t._self._c;return e("sec-skeleton")},d=[],r=n(4940),p={},m=(0,r.Z)(p,c,d,!1,null,null,null),u=m.exports,g=n(2108),h=n.n(g),v=function(){var t=this,e=t._self._c;return e("sec-skeleton",{attrs:{rows:6}})},x=[],y={},f=(0,r.Z)(y,v,x,!1,null,null,null),b=f.exports,k=n(299),w=n.n(k),_=function(){var t=this,e=t._self._c;return e("sec-skeleton",{attrs:{rows:6,animated:""}})},S=[],D={},C=(0,r.Z)(D,_,S,!1,null,null,null),j=C.exports,U=n(5389),L=n.n(U),Z=function(){var t=this,e=t._self._c;return e("sec-skeleton",{staticStyle:{width:"240px"},scopedSlots:t._u([{key:"template",fn:function(){return[e("sec-skeleton-item",{staticStyle:{width:"240px",height:"240px"},attrs:{variant:"image"}}),e("div",{staticStyle:{padding:"14px"}},[e("sec-skeleton-item",{staticStyle:{width:"50%"},attrs:{variant:"p"}}),e("div",{staticStyle:{display:"flex","align-items":"center","justify-items":"space-between"}},[e("sec-skeleton-item",{staticStyle:{"margin-right":"16px"},attrs:{variant:"text"}}),e("sec-skeleton-item",{staticStyle:{width:"30%"},attrs:{variant:"text"}})],1)],1)]},proxy:!0}])})},E=[],I={},A=(0,r.Z)(I,Z,E,!1,null,null,null),M=A.exports,O=n(6582),z=n.n(O),P=function(){var t=this,e=t._self._c;return e("div",{staticStyle:{width:"240px"}},[e("p",{staticClass:"mb15"},[e("span",{staticStyle:{"margin-right":"16px"}},[t._v("切换 Loading")]),e("sec-switch",{model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}})],1),e("sec-skeleton",{staticStyle:{width:"240px"},attrs:{animated:"",loading:t.loading},scopedSlots:t._u([{key:"template",fn:function(){return[e("sec-skeleton-item",{staticStyle:{width:"240px",height:"240px"},attrs:{variant:"image"}}),e("div",{staticStyle:{padding:"14px"}},[e("sec-skeleton-item",{staticStyle:{width:"50%"},attrs:{variant:"h3"}}),e("div",{staticStyle:{display:"flex","align-items":"center","justify-items":"space-between","margin-top":"16px",height:"16px"}},[e("sec-skeleton-item",{staticStyle:{"margin-right":"16px"},attrs:{variant:"text"}}),e("sec-skeleton-item",{staticStyle:{width:"30%"},attrs:{variant:"text"}})],1)],1)]},proxy:!0}])},[e("sec-card",{attrs:{"body-style":{padding:"0","margin-bottom":"1px"}}},[e("img",{attrs:{src:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",alt:"image"}}),e("div",{staticStyle:{padding:"14px"}},[e("span",[t._v("好吃的汉堡")]),e("div",{staticClass:"card-header"},[e("span",{staticClass:"time"},[t._v(t._s(t.currentDate))]),e("sec-btn",{staticClass:"button",attrs:{type:"text"}},[t._v("操作按钮")])],1)])])],1)],1)},T=[],$={data(){return{loading:!0,currentDate:"2021-06-01"}}},q=$,B=(0,r.Z)(q,P,T,!1,null,"7c53cc6a",null),F=B.exports,G=n(789),H=n.n(G),J=function(){var t=this,e=t._self._c;return e("div",{staticStyle:{width:"400px"}},[e("p",{staticClass:"mb15"},[e("sec-btn",{on:{click:t.setLoading}},[t._v("点击重新加载")])],1),e("sec-skeleton",{staticStyle:{width:"400px"},attrs:{animated:"",loading:t.loading,count:3},scopedSlots:t._u([{key:"template",fn:function(){return[e("sec-skeleton-item",{staticStyle:{width:"400px",height:"267px"},attrs:{variant:"image"}}),e("div",{staticStyle:{padding:"14px"}},[e("sec-skeleton-item",{staticStyle:{width:"50%"},attrs:{variant:"h3"}}),e("div",{staticStyle:{display:"flex","align-items":"center","justify-items":"space-between","margin-top":"16px",height:"16px"}},[e("sec-skeleton-item",{staticStyle:{"margin-right":"16px"},attrs:{variant:"text"}}),e("sec-skeleton-item",{staticStyle:{width:"30%"},attrs:{variant:"text"}})],1)],1)]},proxy:!0}])},t._l(t.lists,(function(n){return e("sec-card",{key:n.name,attrs:{"body-style":{padding:"0","margin-bottom":"1px"}}},[e("img",{staticClass:"multi-content",attrs:{src:n.imgUrl,alt:"image"}}),e("div",{staticStyle:{padding:"14px"}},[e("span",[t._v(t._s(n.name))]),e("div",{staticClass:"card-header"},[e("span",{staticClass:"time"},[t._v(t._s(t.currentDate))]),e("sec-btn",{staticClass:"button",attrs:{type:"text"}},[t._v("操作按钮")])],1)])])})),1)],1)},K=[],N={data(){return{loading:!0,currentDate:"2021-06-01",lists:[]}},mounted(){this.loading=!1,this.lists=[{imgUrl:"https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",name:"鹿"},{imgUrl:"https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",name:"马"},{imgUrl:"https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",name:"山狮"}]},methods:{setLoading(){this.loading=!0,setTimeout((()=>{this.loading=!1}),2e3)}}},Q=N,R=(0,r.Z)(Q,J,K,!1,null,"24f0e869",null),V=R.exports,W=n(4497),X=n.n(W),Y=function(){var t=this,e=t._self._c;return e("div",{staticStyle:{width:"240px"}},[e("p",{staticClass:"mb15"},[e("span",{staticStyle:{"margin-right":"16px"}},[t._v("切换 Loading")]),e("sec-switch",{model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}})],1),e("sec-skeleton",{staticStyle:{width:"240px"},attrs:{animated:"",loading:t.loading,throttle:500},scopedSlots:t._u([{key:"template",fn:function(){return[e("sec-skeleton-item",{staticStyle:{width:"240px",height:"240px"},attrs:{variant:"image"}}),e("div",{staticStyle:{padding:"14px"}},[e("sec-skeleton-item",{staticStyle:{width:"50%"},attrs:{variant:"h3"}}),e("div",{staticStyle:{display:"flex","align-items":"center","justify-items":"space-between","margin-top":"16px",height:"16px"}},[e("sec-skeleton-item",{staticStyle:{"margin-right":"16px"},attrs:{variant:"text"}}),e("sec-skeleton-item",{staticStyle:{width:"30%"},attrs:{variant:"text"}})],1)],1)]},proxy:!0}])},[e("sec-card",{attrs:{"body-style":{padding:"0","margin-bottom":"1px"}}},[e("img",{attrs:{src:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",alt:"image"}}),e("div",{staticStyle:{padding:"14px"}},[e("span",[t._v("好吃的汉堡")]),e("div",{staticClass:"card-header"},[e("span",{staticClass:"time"},[t._v(t._s(t.currentDate))]),e("sec-btn",{staticClass:"button",attrs:{type:"text"}},[t._v("操作按钮")])],1)])])],1)],1)},tt=[],et={data(){return{loading:!0,currentDate:"2021-06-01"}}},nt=et,st=(0,r.Z)(nt,Y,tt,!1,null,"ad212530",null),at=st.exports,it={components:{DocDemo:i.Z,Demo1:u,Demo2:b,Demo3:j,Demo4:M,Demo5:F,Demo6:V,Demo7:at},data(){return{demo1:o(),demo2:h(),demo3:w(),demo4:L(),demo5:z(),demo6:H(),demo7:X(),skeletonAttributes:[{attr:"animated",desc:"是否使用动画",type:"boolean",value:"—",default:"false"},{attr:"count",desc:"渲染多少个 template，建议使用尽可能小的数字",type:"number",value:"—",default:"1"},{attr:"loading",desc:"是否显示 skeleton 骨架屏",type:"boolean",value:"—",default:"true"},{attr:"rows",desc:"骨架屏段落数量",type:"number",value:"—",default:"4"},{attr:"throttle",desc:"延迟占位 DOM 渲染的时间，单位为毫秒",type:"number",value:"—",default:"0"}],skeletonItemAttributes:[{attr:"variant",desc:"当前显示的占位元素的样式",type:"Enum(string)",value:"p / text / h1 / h3 / text / caption / button / image / circle / rect",default:"text"}],skeletonSlots:[{name:"default",desc:"用来展示真实 UI"},{name:"template",desc:"用来展示自定义占位符"}]}}},lt=it,ot=(0,r.Z)(lt,s,a,!1,null,null,null),ct=ot.exports}}]);
//# sourceMappingURL=9250.0fc8d7c8.js.map