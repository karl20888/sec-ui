(self["webpackChunkdoc"]=self["webpackChunkdoc"]||[]).push([[3109],{8477:function(e){e.exports='```vue\n<template>\n  <div>\n    <sec-btn type="text" @click="open">点击打开 Dialog</sec-btn>\n    <sec-dialog\n      ref="dialog"\n      title="提示"\n      width="30%"\n      :before-close="handleClose"\n    >\n      <span>这是一段信息</span>\n      <template #footer>\n        <sec-btn @click="close">取消</sec-btn>\n        <sec-btn type="primary" @click="close">确定</sec-btn>\n      </template>\n    </sec-dialog>\n  </div>\n</template>\n\n<script>\nexport default {\n  methods: {\n    open() {\n      this.$refs.dialog.open();\n    },\n    close() {\n      this.$refs.dialog.close();\n    },\n    handleClose(done) {\n      this.$confirm(\'确认关闭？\').then(() => {\n        done();\n      }).catch(() => {});\n    },\n  },\n};\n<\/script>\n```'},3648:function(e){e.exports='```vue\n<template>\n  <div>\n    \x3c!-- Table --\x3e\n    <sec-btn type="text" @click="$refs.tableDialog.open()">打开嵌套表格的 Dialog</sec-btn>\n\n    <sec-dialog ref="tableDialog" title="收货地址">\n      <sec-table :data="gridData">\n        <sec-table-column property="date" label="日期" width="150"></sec-table-column>\n        <sec-table-column property="name" label="姓名" width="200"></sec-table-column>\n        <sec-table-column property="address" label="地址"></sec-table-column>\n      </sec-table>\n    </sec-dialog>\n\n    \x3c!-- Form --\x3e\n    <sec-btn type="text" @click="$refs.formDialog.open()">打开嵌套表单的 Dialog</sec-btn>\n\n    <sec-dialog ref="formDialog" title="收货地址">\n      <sec-form :model="form" label-width="120px">\n        <sec-form-item label="活动名称">\n          <sec-input v-model="form.name"></sec-input>\n        </sec-form-item>\n        <sec-form-item label="活动区域">\n          <sec-select v-model="form.region" placeholder="请选择活动区域">\n            <sec-option label="区域一" value="shanghai"></sec-option>\n            <sec-option label="区域二" value="beijing"></sec-option>\n          </sec-select>\n        </sec-form-item>\n      </sec-form>\n      <template #footer>\n        <sec-btn @click="close">取消</sec-btn>\n        <sec-btn type="primary" @click="close">确定</sec-btn>\n      </template>\n    </sec-dialog>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      gridData: [{\n        date: \'2016-05-02\',\n        name: \'王小虎\',\n        address: \'上海市普陀区金沙江路 1518 弄\',\n      }, {\n        date: \'2016-05-04\',\n        name: \'王小虎\',\n        address: \'上海市普陀区金沙江路 1518 弄\',\n      }, {\n        date: \'2016-05-01\',\n        name: \'王小虎\',\n        address: \'上海市普陀区金沙江路 1518 弄\',\n      }, {\n        date: \'2016-05-03\',\n        name: \'王小虎\',\n        address: \'上海市普陀区金沙江路 1518 弄\',\n      }],\n      form: {\n        name: \'\',\n        region: \'\',\n      },\n    };\n  },\n  methods: {\n    close() {\n      this.$refs.formDialog.close();\n    },\n  },\n};\n<\/script>\n```'},132:function(e){e.exports='```vue\n<template>\n  <div>\n    <sec-btn type="text" @click="open">点击打开 Dialog</sec-btn>\n    <sec-dialog ref="dialog" title="提示" width="30%" center>\n      <span>需要注意的是内容是默认不居中的</span>\n      <template #footer>\n        <sec-btn @click="close">取消</sec-btn>\n        <sec-btn type="primary" @click="close">确定</sec-btn>\n      </template>\n    </sec-dialog>\n  </div>\n</template>\n\n<script>\nexport default {\n  methods: {\n    open() {\n      this.$refs.dialog.open();\n    },\n    close() {\n      this.$refs.dialog.close();\n    },\n  },\n};\n<\/script>\n```'},3109:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return T}});var a=function(){var e=this,t=e._self._c;return t("sec-block",{staticClass:"doc-block"},[t("h2",[e._v("Dialog 对话框")]),t("p",[e._v("在保留当前页面状态的情况下，告知用户并承载相关操作。")]),t("h3",[e._v("基本用法")]),t("p",[e._v("Dialog 弹出一个对话框，适合需要定制性更大的场景。")]),t("DocDemo",{attrs:{markdown:e.demo1},scopedSlots:e._u([{key:"source",fn:function(){return[t("Demo1")]},proxy:!0}])},[t("p",[e._v("可以使用 "),t("code",[e._v("visible")]),e._v(" 属性，它接收 "),t("code",[e._v("Boolean")]),e._v("，当为 "),t("code",[e._v("true")]),e._v(" 时显示 Dialog；也可以使用 "),t("code",[e._v("open")]),e._v(" 和 "),t("code",[e._v("close")]),e._v(" 方法来打开或关闭 Dialog。Dialog 分为两个部分："),t("code",[e._v("body")]),e._v(" 和 "),t("code",[e._v("footer")]),e._v("，"),t("code",[e._v("footer")]),e._v(" 需要具名为 "),t("code",[e._v("footer")]),e._v(" 的 "),t("code",[e._v("slot")]),e._v("。"),t("code",[e._v("title")]),e._v(" 属性用于定义标题，它是可选的，默认值为空。最后，本例还展示了 "),t("code",[e._v("before-close")]),e._v(" 的用法。")])]),t("div",{staticClass:"tip"},[t("p",[t("code",[e._v("before-close")]),e._v(" 仅当用户通过点击关闭图标或遮罩关闭 Dialog 时起效。如果你在 "),t("code",[e._v("footer")]),e._v(" 具名 slot 里添加了用于关闭 Dialog 的按钮，那么可以在按钮的点击回调函数里加入 "),t("code",[e._v("before-close")]),e._v(" 的相关逻辑。")])]),t("h3",[e._v("自定义内容")]),t("p",[e._v("Dialog 组件的内容可以是任意的，甚至可以是表格或表单，下面是应用了 Table 和 Form 组件的两个样例。")]),t("DocDemo",{attrs:{markdown:e.demo2},scopedSlots:e._u([{key:"source",fn:function(){return[t("Demo2")]},proxy:!0}])}),t("h3",[e._v("居中布局")]),t("p",[e._v("标题和底部可水平居中。")]),t("DocDemo",{attrs:{markdown:e.demo3},scopedSlots:e._u([{key:"source",fn:function(){return[t("Demo3")]},proxy:!0}])},[t("p",[e._v("将 "),t("code",[e._v("center")]),e._v(" 设置为 "),t("code",[e._v("true")]),e._v(" 即可使标题和底部居中。"),t("code",[e._v("center")]),e._v(" 仅影响标题和底部区域。Dialog 的内容是任意的，在一些情况下内容并不适合居中布局。如果需要内容也水平居中，请自行为其添加 CSS。")])]),t("div",{staticClass:"tip"},[t("p",[e._v("Dialog 的内容是懒渲染的，即在第一次被打开之前，传入的默认 slot 不会被渲染到 DOM 上。因此，如果需要执行 DOM 操作，或通过 "),t("code",[e._v("ref")]),e._v(" 获取相应组件，请在 "),t("code",[e._v("open")]),e._v(" 事件回调中进行。")])]),t("div",{staticClass:"tip"},[t("p",[e._v("如果 "),t("code",[e._v("visible")]),e._v(" 属性绑定的变量位于 Vuex 的 store 内，那么 "),t("code",[e._v(".sync")]),e._v(" 不会正常工作。此时需要去除 "),t("code",[e._v(".sync")]),e._v(" 修饰符，同时监听 Dialog 的 "),t("code",[e._v("open")]),e._v(" 和 "),t("code",[e._v("close")]),e._v(" 事件，在事件回调中执行 Vuex 中对应的 mutation 更新 "),t("code",[e._v("visible")]),e._v(" 属性绑定的变量的值。")])]),t("h3",[e._v("Attributes")]),t("sec-table",{staticClass:"doc-table",attrs:{data:e.attributes}},[t("sec-table-column",{attrs:{label:"参数",prop:"attr",width:"200"}}),t("sec-table-column",{attrs:{label:"说明",prop:"desc"}}),t("sec-table-column",{attrs:{label:"类型",prop:"type",width:"300"}}),t("sec-table-column",{attrs:{label:"可选值",prop:"value",width:"80"}}),t("sec-table-column",{attrs:{label:"默认值",prop:"default",width:"80"}})],1),t("h3",[e._v("Slots")]),t("sec-table",{staticClass:"doc-table",attrs:{data:e.slots}},[t("sec-table-column",{attrs:{label:"name",prop:"name",width:"220"}}),t("sec-table-column",{attrs:{label:"说明",prop:"desc"}})],1),t("h3",[e._v("Events")]),t("sec-table",{staticClass:"doc-table",attrs:{data:e.events}},[t("sec-table-column",{attrs:{label:"事件名称",prop:"event",width:"220"}}),t("sec-table-column",{attrs:{label:"说明",prop:"desc"}}),t("sec-table-column",{attrs:{label:"回调参数",prop:"param",width:"250"}})],1),t("h3",[e._v("Methods")]),t("sec-table",{staticClass:"doc-table",attrs:{data:e.methods}},[t("sec-table-column",{attrs:{label:"方法名",prop:"method",width:"220"}}),t("sec-table-column",{attrs:{label:"说明",prop:"desc"}}),t("sec-table-column",{attrs:{label:"参数",prop:"param",width:"250"}})],1)],1)},l=[],n=o(3722),s=o(8477),c=o.n(s),r=function(){var e=this,t=e._self._c;return t("div",[t("sec-btn",{attrs:{type:"text"},on:{click:e.open}},[e._v("点击打开 Dialog")]),t("sec-dialog",{ref:"dialog",attrs:{title:"提示",width:"30%","before-close":e.handleClose},scopedSlots:e._u([{key:"footer",fn:function(){return[t("sec-btn",{on:{click:e.close}},[e._v("取消")]),t("sec-btn",{attrs:{type:"primary"},on:{click:e.close}},[e._v("确定")])]},proxy:!0}])},[t("span",[e._v("这是一段信息")])])],1)},i=[],d={methods:{open(){this.$refs.dialog.open()},close(){this.$refs.dialog.close()},handleClose(e){this.$confirm("确认关闭？").then((()=>{e()})).catch((()=>{}))}}},p=d,u=o(4940),m=(0,u.Z)(p,r,i,!1,null,null,null),v=m.exports,b=o(3648),f=o.n(b),_=function(){var e=this,t=e._self._c;return t("div",[t("sec-btn",{staticClass:"mr15",attrs:{type:"text"},on:{click:function(t){return e.$refs.tableDialog.open()}}},[e._v("打开嵌套表格的 Dialog")]),t("sec-dialog",{ref:"tableDialog",attrs:{title:"收货地址"}},[t("sec-table",{attrs:{data:e.gridData}},[t("sec-table-column",{attrs:{property:"date",label:"日期",width:"150"}}),t("sec-table-column",{attrs:{property:"name",label:"姓名",width:"200"}}),t("sec-table-column",{attrs:{property:"address",label:"地址"}})],1)],1),t("sec-btn",{attrs:{type:"text"},on:{click:function(t){return e.$refs.formDialog.open()}}},[e._v("打开嵌套表单的 Dialog")]),t("sec-dialog",{ref:"formDialog",attrs:{title:"收货地址"},scopedSlots:e._u([{key:"footer",fn:function(){return[t("sec-btn",{on:{click:e.close}},[e._v("取消")]),t("sec-btn",{attrs:{type:"primary"},on:{click:e.close}},[e._v("确定")])]},proxy:!0}])},[t("sec-form",{attrs:{model:e.form,"label-width":"120px"}},[t("sec-form-item",{attrs:{label:"活动名称"}},[t("sec-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),t("sec-form-item",{attrs:{label:"活动区域"}},[t("sec-select",{staticClass:"wf",attrs:{placeholder:"请选择活动区域"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[t("sec-option",{attrs:{label:"区域一",value:"shanghai"}}),t("sec-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1)],1)],1)],1)},g=[],h={data(){return{gridData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"}],form:{name:"",region:""}}},methods:{close(){this.$refs.formDialog.close()}}},D=h,y=(0,u.Z)(D,_,g,!1,null,null,null),k=y.exports,x=o(132),w=o.n(x),C=function(){var e=this,t=e._self._c;return t("div",[t("sec-btn",{attrs:{type:"text"},on:{click:e.open}},[e._v("点击打开 Dialog")]),t("sec-dialog",{ref:"dialog",attrs:{title:"提示",width:"30%",center:""},scopedSlots:e._u([{key:"footer",fn:function(){return[t("sec-btn",{on:{click:e.close}},[e._v("取消")]),t("sec-btn",{attrs:{type:"primary"},on:{click:e.close}},[e._v("确定")])]},proxy:!0}])},[t("span",[e._v("需要注意的是内容是默认不居中的")])])],1)},$=[],S={methods:{open(){this.$refs.dialog.open()},close(){this.$refs.dialog.close()}}},E=S,Z=(0,u.Z)(E,C,$,!1,null,null,null),F=Z.exports,M={components:{DocDemo:n.Z,Demo1:v,Demo2:k,Demo3:F},data(){return{demo1:c(),demo2:f(),demo3:w(),attributes:[{attr:"visible",desc:"是否显示 Dialog，支持 .sync 修饰符",type:"boolean",value:"—",default:"false"},{attr:"title",desc:"Dialog 的标题，也可通过具名 slot（见下表）传入",type:"string",value:"—",default:"—"},{attr:"width",desc:"Dialog 的宽度",type:"string",value:"—",default:"50%"},{attr:"fullscreen",desc:"是否为全屏 Dialog",type:"boolean",value:"—",default:"false"},{attr:"top",desc:"Dialog CSS 中的 margin-top 值",type:"string",value:"—",default:"15vh"},{attr:"modal",desc:"是否需要遮罩层",type:"boolean",value:"—",default:"true"},{attr:"modal-append-to-body",desc:"遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上",type:"boolean",value:"—",default:"true"},{attr:"append-to-body",desc:"Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true",type:"boolean",value:"—",default:"true"},{attr:"lock-scroll",desc:"是否在 Dialog 出现时将 body 滚动锁定",type:"boolean",value:"—",default:"true"},{attr:"custom-class",desc:"Dialog 的自定义类名",type:"string",value:"—",default:"—"},{attr:"close-on-click-modal",desc:"是否可以通过点击 modal 关闭 Dialog",type:"boolean",value:"—",default:"true"},{attr:"close-on-press-escape",desc:"是否可以通过按下 ESC 关闭 Dialog",type:"boolean",value:"—",default:"true"},{attr:"show-close",desc:"是否显示关闭按钮",type:"boolean",value:"—",default:"true"},{attr:"before-close",desc:"关闭前的回调，会暂停 Dialog 的关闭",type:"Function(done)，done 用于关闭 Dialog",value:"—",default:"—"},{attr:"center",desc:"是否对头部和底部采用居中布局",type:"boolean",value:"—",default:"false"},{attr:"destroy-on-close",desc:"关闭时销毁 Dialog 中的元素",type:"boolean",value:"—",default:"false"}],slots:[{name:"—",desc:"Dialog 的内容"},{name:"title",desc:"Dialog 标题区的内容"},{name:"footer",desc:"Dialog 按钮操作区的内容"}],events:[{event:"open",desc:"Dialog 打开的回调",param:"—"},{event:"opened",desc:"Dialog 打开动画结束时的回调",param:"—"},{event:"close",desc:"Dialog 关闭的回调",param:"—"},{event:"closed",desc:"Dialog 关闭动画结束时的回调",param:"—"}],methods:[{method:"open",desc:"打开 Dialog",param:"data 传入 Dialog 的数据"},{method:"close",desc:"关闭 Dialog",param:"—"}]}}},j=M,O=(0,u.Z)(j,a,l,!1,null,null,null),T=O.exports},3722:function(e,t,o){"use strict";o.d(t,{Z:function(){return i}});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"doc-demo"},[t("div",{staticClass:"doc-demo-source"},[e._t("source")],2),t("div",{staticClass:"doc-demo-meta",class:{"is-expanded":e.isExpanded}},[e.$slots.default?t("div",{staticClass:"doc-demo-desc"},[e._t("default")],2):e._e(),t("markdown-it-vue",{attrs:{content:e.markdown}})],1),t("div",{staticClass:"doc-demo-control",on:{click:function(t){e.isExpanded=!e.isExpanded},keydown:function(t){e.isExpanded=!e.isExpanded}}},[e.isExpanded?t("i",{staticClass:"el-icon-caret-top"}):t("i",{staticClass:"el-icon-caret-bottom"}),t("span",[e.isExpanded?[e._v("隐藏代码")]:[e._v("显示代码")]],2)])])},l=[],n={props:{markdown:{type:String,default:""}},data(){return{isExpanded:!1}}},s=n,c=o(4940),r=(0,c.Z)(s,a,l,!1,null,null,null),i=r.exports}}]);
//# sourceMappingURL=3109.164a6b7e.js.map