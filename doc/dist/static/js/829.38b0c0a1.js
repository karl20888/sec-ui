(self["webpackChunkdoc"]=self["webpackChunkdoc"]||[]).push([[829],{5347:function(e){e.exports='```vue\n<template>\n  <div>\n    <sec-radio v-model="radio" label="1">备选项</sec-radio>\n    <sec-radio v-model="radio" label="2">备选项</sec-radio>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      radio: \'1\',\n    };\n  },\n};\n<\/script>\n```'},2679:function(e){e.exports='```vue\n<template>\n  <div>\n    <sec-radio v-model="radio" label="禁用" disabled>备选项</sec-radio>\n    <sec-radio v-model="radio" label="选中且禁用" disabled>备选项</sec-radio>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      radio: \'选中且禁用\',\n    };\n  },\n};\n<\/script>\n```'},929:function(e){e.exports='```vue\n<template>\n  <sec-radio-group v-model="radio">\n    <sec-radio :label="3">备选项</sec-radio>\n    <sec-radio :label="6">备选项</sec-radio>\n    <sec-radio :label="9">备选项</sec-radio>\n  </sec-radio-group>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      radio: 3,\n    };\n  },\n};\n<\/script>\n```'},8302:function(e){e.exports='```vue\n<template>\n  <div>\n    <sec-row>\n      <sec-radio-group v-model="radio1" size="large">\n        <sec-radio-button label="北京"></sec-radio-button>\n        <sec-radio-button label="天津"></sec-radio-button>\n        <sec-radio-button label="上海"></sec-radio-button>\n        <sec-radio-button label="深圳"></sec-radio-button>\n      </sec-radio-group>\n    </sec-row>\n    <sec-row class="mt20">\n      <sec-radio-group v-model="radio2" size="medium">\n        <sec-radio-button label="北京"></sec-radio-button>\n        <sec-radio-button label="天津"></sec-radio-button>\n        <sec-radio-button label="上海"></sec-radio-button>\n        <sec-radio-button label="深圳"></sec-radio-button>\n      </sec-radio-group>\n    </sec-row>\n    <sec-row class="mt20">\n      <sec-radio-group v-model="radio3">\n        <sec-radio-button label="北京"></sec-radio-button>\n        <sec-radio-button label="天津"></sec-radio-button>\n        <sec-radio-button label="上海"></sec-radio-button>\n        <sec-radio-button label="深圳"></sec-radio-button>\n      </sec-radio-group>\n    </sec-row>\n    <sec-row class="mt20">\n      <sec-radio-group v-model="radio4" size="mini">\n        <sec-radio-button label="北京"></sec-radio-button>\n        <sec-radio-button label="天津"></sec-radio-button>\n        <sec-radio-button label="上海"></sec-radio-button>\n        <sec-radio-button label="深圳"></sec-radio-button>\n      </sec-radio-group>\n    </sec-row>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      radio1: \'北京\',\n      radio2: \'北京\',\n      radio3: \'北京\',\n      radio4: \'北京\',\n    };\n  },\n};\n<\/script>\n```'},5652:function(e){e.exports='```vue\n<template>\n  <div>\n    <sec-row>\n      <sec-radio v-model="radio1" label="1" border>备选项1</sec-radio>\n      <sec-radio v-model="radio1" label="2" border>备选项2</sec-radio>\n    </sec-row>\n    <sec-row class="mt20">\n      <sec-radio v-model="radio2" label="1" border size="medium">备选项1</sec-radio>\n      <sec-radio v-model="radio2" label="2" border size="medium">备选项2</sec-radio>\n    </sec-row>\n    <sec-row class="mt20">\n      <sec-radio-group v-model="radio3">\n        <sec-radio label="1" border>备选项1</sec-radio>\n        <sec-radio label="2" border disabled>备选项2</sec-radio>\n      </sec-radio-group>\n    </sec-row>\n    <sec-row class="mt20">\n      <sec-radio-group v-model="radio4" size="mini" disabled>\n        <sec-radio label="1" border>备选项1</sec-radio>\n        <sec-radio label="2" border>备选项2</sec-radio>\n      </sec-radio-group>\n    </sec-row>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      radio1: \'1\',\n      radio2: \'1\',\n      radio3: \'1\',\n      radio4: \'1\',\n    };\n  },\n};\n<\/script>\n```'},3722:function(e,a,o){"use strict";o.d(a,{Z:function(){return i}});var t=function(){var e=this,a=e._self._c;return a("div",{staticClass:"doc-demo"},[a("div",{staticClass:"doc-demo-source"},[e._t("source")],2),a("div",{staticClass:"doc-demo-meta",class:{"is-expanded":e.isExpanded}},[e.$slots.default?a("div",{staticClass:"doc-demo-desc"},[e._t("default")],2):e._e(),a("markdown-it-vue",{attrs:{content:e.markdown}})],1),a("div",{staticClass:"doc-demo-control",on:{click:function(a){e.isExpanded=!e.isExpanded},keydown:function(a){e.isExpanded=!e.isExpanded}}},[e.isExpanded?a("i",{staticClass:"el-icon-caret-top"}):a("i",{staticClass:"el-icon-caret-bottom"}),a("span",[e.isExpanded?[e._v("隐藏代码")]:[e._v("显示代码")]],2)])])},r=[],d={props:{markdown:{type:String,default:""}},data(){return{isExpanded:!1}}},l=d,s=o(4940),n=(0,s.Z)(l,t,r,!1,null,null,null),i=n.exports},829:function(e,a,o){"use strict";o.r(a),o.d(a,{default:function(){return V}});var t=function(){var e=this,a=e._self._c;return a("sec-block",{staticClass:"doc-block"},[a("h2",[e._v("Radio 单选框")]),a("p",[e._v("在一组备选项中进行单选")]),a("h3",[e._v("基础用法")]),a("p",[e._v("由于选项默认可见，不宜过多，若选项过多，便宜使用 Select 选择器。")]),a("DocDemo",{attrs:{markdown:e.demo1},scopedSlots:e._u([{key:"source",fn:function(){return[a("Demo1")]},proxy:!0}])},[a("p",[e._v("要使用 Radio 组件，只需要设置 "),a("code",[e._v("v-model")]),e._v(" 绑定变量，选中意味着变量的值为相应 Radio "),a("code",[e._v("label")]),e._v(" 属性的值，"),a("code",[e._v("label")]),e._v(" 可以是 "),a("code",[e._v("String")]),e._v("、"),a("code",[e._v("Number")]),e._v(" 或 "),a("code",[e._v("Boolean")]),e._v("。")])]),a("h3",[e._v("禁用状态")]),a("p",[e._v("单选框不可用的状态。")]),a("DocDemo",{attrs:{markdown:e.demo2},scopedSlots:e._u([{key:"source",fn:function(){return[a("Demo2")]},proxy:!0}])},[a("p",[e._v("只要在 "),a("code",[e._v("sec-radio")]),e._v(" 元素中设置 "),a("code",[e._v("disabled")]),e._v(" 属性即可，它接受一个 "),a("code",[e._v("Boolean")]),e._v("，"),a("code",[e._v("true")]),e._v(" 为禁用。")])]),a("h3",[e._v("单选框组")]),a("p",[e._v("适用于在多个互斥的选项中选择的场景")]),a("DocDemo",{attrs:{markdown:e.demo3},scopedSlots:e._u([{key:"source",fn:function(){return[a("Demo3")]},proxy:!0}])},[a("p",[e._v("结合 "),a("code",[e._v("sec-radio-group")]),e._v(" 元素和子元素 "),a("code",[e._v("sec-radio")]),e._v(" 可以实现单选组，在 "),a("code",[e._v("sec-radio-group")]),e._v(" 中绑定 "),a("code",[e._v("v-model")]),e._v("，在 "),a("code",[e._v("sec-radio")]),e._v(" 中设置好 "),a("code",[e._v("label")]),e._v(" 即可，无需再给每一个 "),a("code",[e._v("sec-radio")]),e._v(" 绑定变量，另外，还提供了 "),a("code",[e._v("change")]),e._v(" 事件来响应变化，它会传入一个参数 "),a("code",[e._v("value")]),e._v("。")])]),a("h3",[e._v("按钮样式")]),a("p",[e._v("按钮样式的单选组合。")]),a("DocDemo",{attrs:{markdown:e.demo4},scopedSlots:e._u([{key:"source",fn:function(){return[a("Demo4")]},proxy:!0}])},[a("p",[e._v("只需要把 "),a("code",[e._v("sec-radio")]),e._v(" 元素换成 "),a("code",[e._v("sec-radio-button")]),e._v(" 元素即可，此外，SecUI 还提供了 "),a("code",[e._v("size")]),e._v(" 属性。")])]),a("h3",[e._v("带有边框")]),a("DocDemo",{attrs:{markdown:e.demo5},scopedSlots:e._u([{key:"source",fn:function(){return[a("Demo5")]},proxy:!0}])},[a("p",[e._v("设置 "),a("code",[e._v("border")]),e._v(" 属性可以渲染为带有边框的单选框。")])]),a("h3",[e._v("Radio Attributes")]),a("sec-table",{attrs:{data:e.radioAttributes}},[a("sec-table-column",{attrs:{label:"参数",prop:"attr",width:"140"}}),a("sec-table-column",{attrs:{label:"说明",prop:"desc"}}),a("sec-table-column",{attrs:{label:"类型",prop:"type",width:"220"}}),a("sec-table-column",{attrs:{label:"可选值",prop:"value",width:"200"}}),a("sec-table-column",{attrs:{label:"默认值",prop:"default",width:"80"}})],1),a("h3",[e._v("Radio Events")]),a("sec-table",{attrs:{data:e.radioEvents}},[a("sec-table-column",{attrs:{label:"事件名称",prop:"event",width:"220"}}),a("sec-table-column",{attrs:{label:"说明",prop:"desc"}}),a("sec-table-column",{attrs:{label:"回调参数",prop:"param"}})],1),a("h3",[e._v("Radio-group Attributes")]),a("sec-table",{attrs:{data:e.radioGroupAttributes}},[a("sec-table-column",{attrs:{label:"参数",prop:"attr",width:"140"}}),a("sec-table-column",{attrs:{label:"说明",prop:"desc"}}),a("sec-table-column",{attrs:{label:"类型",prop:"type",width:"220"}}),a("sec-table-column",{attrs:{label:"可选值",prop:"value",width:"200"}}),a("sec-table-column",{attrs:{label:"默认值",prop:"default",width:"100"}})],1),a("h3",[e._v("Radio-group Events")]),a("sec-table",{attrs:{data:e.radioGroupEvents}},[a("sec-table-column",{attrs:{label:"事件名称",prop:"event",width:"220"}}),a("sec-table-column",{attrs:{label:"说明",prop:"desc"}}),a("sec-table-column",{attrs:{label:"回调参数",prop:"param"}})],1),a("h3",[e._v("Radio-button Attributes")]),a("sec-table",{attrs:{data:e.radioButtonAttributes}},[a("sec-table-column",{attrs:{label:"参数",prop:"attr"}}),a("sec-table-column",{attrs:{label:"说明",prop:"desc"}}),a("sec-table-column",{attrs:{label:"类型",prop:"type"}}),a("sec-table-column",{attrs:{label:"可选值",prop:"value"}}),a("sec-table-column",{attrs:{label:"默认值",prop:"default"}})],1)],1)},r=[],d=o(3722),l=o(5347),s=o.n(l),n=function(){var e=this,a=e._self._c;return a("div",[a("sec-radio",{attrs:{label:"1"},model:{value:e.radio,callback:function(a){e.radio=a},expression:"radio"}},[e._v("备选项")]),a("sec-radio",{attrs:{label:"2"},model:{value:e.radio,callback:function(a){e.radio=a},expression:"radio"}},[e._v("备选项")])],1)},i=[],c={data(){return{radio:"1"}}},u=c,b=o(4940),p=(0,b.Z)(u,n,i,!1,null,null,null),v=p.exports,m=o(2679),_=o.n(m),f=function(){var e=this,a=e._self._c;return a("div",[a("sec-radio",{attrs:{label:"禁用",disabled:""},model:{value:e.radio,callback:function(a){e.radio=a},expression:"radio"}},[e._v("备选项")]),a("sec-radio",{attrs:{label:"选中且禁用",disabled:""},model:{value:e.radio,callback:function(a){e.radio=a},expression:"radio"}},[e._v("备选项")])],1)},x=[],w={data(){return{radio:"选中且禁用"}}},g=w,k=(0,b.Z)(g,f,x,!1,null,null,null),h=k.exports,y=o(929),D=o.n(y),R=function(){var e=this,a=e._self._c;return a("sec-radio-group",{model:{value:e.radio,callback:function(a){e.radio=a},expression:"radio"}},[a("sec-radio",{attrs:{label:3}},[e._v("备选项")]),a("sec-radio",{attrs:{label:6}},[e._v("备选项")]),a("sec-radio",{attrs:{label:9}},[e._v("备选项")])],1)},C=[],z={data(){return{radio:3}}},E=z,A=(0,b.Z)(E,R,C,!1,null,null,null),S=A.exports,Z=o(8302),B=o.n(Z),G=function(){var e=this,a=e._self._c;return a("div",[a("sec-row",[a("sec-radio-group",{attrs:{size:"large"},model:{value:e.radio1,callback:function(a){e.radio1=a},expression:"radio1"}},[a("sec-radio-button",{attrs:{label:"北京"}}),a("sec-radio-button",{attrs:{label:"天津"}}),a("sec-radio-button",{attrs:{label:"上海"}}),a("sec-radio-button",{attrs:{label:"深圳"}})],1)],1),a("sec-row",{staticClass:"mt20"},[a("sec-radio-group",{attrs:{size:"medium"},model:{value:e.radio2,callback:function(a){e.radio2=a},expression:"radio2"}},[a("sec-radio-button",{attrs:{label:"北京"}}),a("sec-radio-button",{attrs:{label:"天津"}}),a("sec-radio-button",{attrs:{label:"上海"}}),a("sec-radio-button",{attrs:{label:"深圳"}})],1)],1),a("sec-row",{staticClass:"mt20"},[a("sec-radio-group",{model:{value:e.radio3,callback:function(a){e.radio3=a},expression:"radio3"}},[a("sec-radio-button",{attrs:{label:"北京"}}),a("sec-radio-button",{attrs:{label:"天津"}}),a("sec-radio-button",{attrs:{label:"上海"}}),a("sec-radio-button",{attrs:{label:"深圳"}})],1)],1),a("sec-row",{staticClass:"mt20"},[a("sec-radio-group",{attrs:{size:"mini"},model:{value:e.radio4,callback:function(a){e.radio4=a},expression:"radio4"}},[a("sec-radio-button",{attrs:{label:"北京"}}),a("sec-radio-button",{attrs:{label:"天津"}}),a("sec-radio-button",{attrs:{label:"上海"}}),a("sec-radio-button",{attrs:{label:"深圳"}})],1)],1)],1)},F=[],I={data(){return{radio1:"北京",radio2:"北京",radio3:"北京",radio4:"北京"}}},N=I,U=(0,b.Z)(N,G,F,!1,null,null,null),$=U.exports,j=o(5652),q=o.n(j),H=function(){var e=this,a=e._self._c;return a("div",[a("sec-row",[a("sec-radio",{attrs:{label:"1",border:""},model:{value:e.radio1,callback:function(a){e.radio1=a},expression:"radio1"}},[e._v("备选项1")]),a("sec-radio",{attrs:{label:"2",border:""},model:{value:e.radio1,callback:function(a){e.radio1=a},expression:"radio1"}},[e._v("备选项2")])],1),a("sec-row",{staticClass:"mt20"},[a("sec-radio",{attrs:{label:"1",border:"",size:"medium"},model:{value:e.radio2,callback:function(a){e.radio2=a},expression:"radio2"}},[e._v("备选项1")]),a("sec-radio",{attrs:{label:"2",border:"",size:"medium"},model:{value:e.radio2,callback:function(a){e.radio2=a},expression:"radio2"}},[e._v("备选项2")])],1),a("sec-row",{staticClass:"mt20"},[a("sec-radio-group",{model:{value:e.radio3,callback:function(a){e.radio3=a},expression:"radio3"}},[a("sec-radio",{attrs:{label:"1",border:""}},[e._v("备选项1")]),a("sec-radio",{attrs:{label:"2",border:"",disabled:""}},[e._v("备选项2")])],1)],1),a("sec-row",{staticClass:"mt20"},[a("sec-radio-group",{attrs:{size:"mini",disabled:""},model:{value:e.radio4,callback:function(a){e.radio4=a},expression:"radio4"}},[a("sec-radio",{attrs:{label:"1",border:""}},[e._v("备选项1")]),a("sec-radio",{attrs:{label:"2",border:""}},[e._v("备选项2")])],1)],1)],1)},J=[],K={data(){return{radio1:"1",radio2:"1",radio3:"1",radio4:"1"}}},L=K,M=(0,b.Z)(L,H,J,!1,null,null,null),O=M.exports,P={components:{DocDemo:d.Z,Demo1:v,Demo2:h,Demo3:S,Demo4:$,Demo5:O},data(){return{demo1:s(),demo2:_(),demo3:D(),demo4:B(),demo5:q(),radioAttributes:[{attr:"value / v-model",desc:"绑定值",type:"string / number / boolean",value:"—",default:"—"},{attr:"label",desc:"Radio 的 value",type:"string / number / boolean",value:"—",default:"—"},{attr:"disabled",desc:"是否禁用",type:"boolean",value:"—",default:"false"},{attr:"border",desc:"是否显示边框",type:"boolean",value:"—",default:"false"},{attr:"size",desc:"Radio 的尺寸，仅在 border 为真时有效",type:"string",value:"large / medium / mini",default:"—"},{attr:"name",desc:"原生 name 属性",type:"string",value:"—",default:"—"}],radioEvents:[{event:"change",desc:"绑定值变化时触发的事件",param:"选中的 Radio label 值"}],radioGroupAttributes:[{attr:"value / v-model",desc:"绑定值",type:"string / number / boolean",value:"—",default:"—"},{attr:"size",desc:"单选框组尺寸，仅对按钮形式的 Radio 或 带有边框的 Radio 有效",type:"string",value:"large / medium / mini",default:"—"},{attr:"disabled",desc:"是否禁用",type:"boolean",value:"—",default:"false"},{attr:"text-color",desc:"按钮形式的 Radio 激活时的文本颜色",type:"string",value:"—",default:"#fff"},{attr:"fill",desc:"按钮形式的 Radio 激活时的填充色和边框色",type:"string",value:"—",default:"#409EFF"}],radioGroupEvents:[{event:"change",desc:"绑定值变化时触发的事件",param:"选中的 Radio label 值"}],radioButtonAttributes:[{attr:"label",desc:"Radio 的 value",type:"string / number",value:"—",default:"—"},{attr:"disabled",desc:"是否禁用",type:"boolean",value:"—",default:"false"},{attr:"name",desc:"原生 name 属性",type:"string",value:"—",default:"—"}]}}},Q=P,T=(0,b.Z)(Q,t,r,!1,null,null,null),V=T.exports}}]);
//# sourceMappingURL=829.38b0c0a1.js.map