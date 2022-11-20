(self["webpackChunkdoc"]=self["webpackChunkdoc"]||[]).push([[5368],{6996:function(e){e.exports="```vue\n<template>\n  <sec-time-select\n    v-model=\"value\"\n    placeholder=\"选择时间\"\n    :picker-options=\"{\n      start: '08:30',\n      step: '00:15',\n      end: '18:30',\n    }\"\n  ></sec-time-select>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      value: '',\n    };\n  },\n};\n<\/script>\n```"},935:function(e){e.exports='```vue\n<template>\n  <div>\n    <sec-time-picker\n      v-model="value1"\n      placeholder="任意时间点"\n      :picker-options="{\n        selectableRange: \'18:30:00 - 20:30:00\',\n      }"\n    ></sec-time-picker>\n    <sec-time-picker\n      v-model="value2"\n      placeholder="任意时间点"\n      arrow-control\n      :picker-options="{\n        selectableRange: \'18:30:00 - 20:30:00\',\n      }"\n    ></sec-time-picker>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      value1: new Date(2016, 9, 10, 18, 40),\n      value2: new Date(2016, 9, 10, 18, 40),\n    };\n  },\n};\n<\/script>\n\n<style lang="less" scoped>\n.sec-time-picker + .sec-time-picker {\n  margin-left: 10px;\n}\n</style>\n```'},7389:function(e){e.exports="```vue\n<template>\n  <div>\n    <sec-time-select\n      v-model=\"startTime\"\n      placeholder=\"起始时间\"\n      :picker-options=\"{\n        start: '08:30',\n        step: '00:15',\n        end: '18:30',\n      }\"\n    ></sec-time-select>\n    <sec-time-select\n      v-model=\"endTime\"\n      placeholder=\"结束时间\"\n      :picker-options=\"{\n        start: '08:30',\n        step: '00:15',\n        end: '18:30',\n        minTime: startTime,\n      }\"\n    ></sec-time-select>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      startTime: '',\n      endTime: '',\n    };\n  },\n};\n<\/script>\n\n<style lang=\"less\" scoped>\n.sec-time-select + .sec-time-select {\n  margin-left: 10px;\n}\n</style>\n```"},9481:function(e){e.exports='```vue\n<template>\n  <div>\n    <sec-time-picker\n      v-model="value1"\n      range-separator="至"\n      start-placeholder="开始时间"\n      end-placeholder="结束时间"\n      placeholder="选择时间范围"\n      is-range\n    ></sec-time-picker>\n    <sec-time-picker\n      v-model="value2"\n      range-separator="至"\n      start-placeholder="开始时间"\n      end-placeholder="结束时间"\n      placeholder="选择时间范围"\n      is-range\n      arrow-control\n    ></sec-time-picker>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      value1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],\n      value2: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],\n    };\n  },\n};\n<\/script>\n\n<style lang="less" scoped>\n.sec-time-picker + .sec-time-picker {\n  margin-left: 10px;\n}\n</style>\n```'},3722:function(e,t,a){"use strict";a.d(t,{Z:function(){return i}});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"doc-demo"},[t("div",{staticClass:"doc-demo-source"},[e._t("source")],2),t("div",{staticClass:"doc-demo-meta",class:{"is-expanded":e.isExpanded}},[e.$slots.default?t("div",{staticClass:"doc-demo-desc"},[e._t("default")],2):e._e(),t("markdown-it-vue",{attrs:{content:e.markdown}})],1),t("div",{staticClass:"doc-demo-control",on:{click:function(t){e.isExpanded=!e.isExpanded},keydown:function(t){e.isExpanded=!e.isExpanded}}},[e.isExpanded?t("i",{staticClass:"el-icon-caret-top"}):t("i",{staticClass:"el-icon-caret-bottom"}),t("span",[e.isExpanded?[e._v("隐藏代码")]:[e._v("显示代码")]],2)])])},l=[],s={props:{markdown:{type:String,default:""}},data(){return{isExpanded:!1}}},r=s,c=a(4940),o=(0,c.Z)(r,n,l,!1,null,null,null),i=o.exports},5368:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return F}});var n=function(){var e=this,t=e._self._c;return t("sec-block",{staticClass:"doc-block"},[t("h2",[e._v("TimePicker 时间选择器")]),t("p",[e._v("用于选择或输入日期")]),t("h3",[e._v("固定时间点")]),t("p",[e._v("提供几个固定的时间点供用户选择")]),t("DocDemo",{attrs:{markdown:e.demo1},scopedSlots:e._u([{key:"source",fn:function(){return[t("Demo1")]},proxy:!0}])},[t("p",[e._v("使用 el-time-select 标签，分别通过 "),t("code",[e._v("start")]),e._v("、"),t("code",[e._v("end")]),e._v(" 和 "),t("code",[e._v("step")]),e._v(" 指定可选的起始时间、结束时间和步长")])]),t("h3",[e._v("任意时间点")]),t("p",[e._v("可以选择任意时间")]),t("DocDemo",{attrs:{markdown:e.demo2},scopedSlots:e._u([{key:"source",fn:function(){return[t("Demo2")]},proxy:!0}])},[t("p",[e._v("使用 el-time-picker 标签，通过 "),t("code",[e._v("selectableRange")]),e._v(" 限制可选时间范围。提供了两种交互方式：默认情况下通过鼠标滚轮进行选择，打开 "),t("code",[e._v("arrow-control")]),e._v(" 属性则通过界面上的箭头进行选择。")])]),t("h3",[e._v("固定时间范围")]),t("p",[e._v("若先选择开始时间，则结束时间内备选项的状态会随之改变。")]),t("DocDemo",{attrs:{markdown:e.demo3},scopedSlots:e._u([{key:"source",fn:function(){return[t("Demo3")]},proxy:!0}])}),t("h3",[e._v("任意时间范围")]),t("p",[e._v("可选择任意的时间范围")]),t("DocDemo",{attrs:{markdown:e.demo4},scopedSlots:e._u([{key:"source",fn:function(){return[t("Demo4")]},proxy:!0}])},[t("p",[e._v("添加 "),t("code",[e._v("is-range")]),e._v(" 属性即可选择时间范围，同样支持 "),t("code",[e._v("arrow-control")]),e._v(" 属性。")])]),t("h3",[e._v("Attributes")]),t("sec-table",{staticClass:"doc-table",attrs:{data:e.attributes}},[t("sec-table-column",{attrs:{label:"参数",prop:"attr",width:"150"}}),t("sec-table-column",{attrs:{label:"说明"},scopedSlots:e._u([{key:"default",fn:function({row:a}){return[t("span",{domProps:{innerHTML:e._s(a.desc)}})]}}])}),t("sec-table-column",{attrs:{label:"类型",prop:"type",width:"150"}}),t("sec-table-column",{attrs:{label:"可选值",width:"190"},scopedSlots:e._u([{key:"default",fn:function({row:a}){return[t("span",{domProps:{innerHTML:e._s(a.value)}})]}}])}),t("sec-table-column",{attrs:{label:"默认值",prop:"default",width:"180"}})],1),t("h3",[e._v("Time Select Options")]),t("sec-table",{staticClass:"doc-table",attrs:{data:e.timeSelectOptions}},[t("sec-table-column",{attrs:{label:"参数",prop:"attr",width:"150"}}),t("sec-table-column",{attrs:{label:"说明",prop:"desc"}}),t("sec-table-column",{attrs:{label:"类型",prop:"type",width:"100"}}),t("sec-table-column",{attrs:{label:"可选值",prop:"value",width:"100"}}),t("sec-table-column",{attrs:{label:"默认值",prop:"default",width:"100"}})],1),t("h3",[e._v("Time Picker Options")]),t("sec-table",{staticClass:"doc-table",attrs:{data:e.timePickerOptions}},[t("sec-table-column",{attrs:{label:"参数",prop:"attr",width:"150"}}),t("sec-table-column",{attrs:{label:"说明"},scopedSlots:e._u([{key:"default",fn:function({row:a}){return[t("span",{domProps:{innerHTML:e._s(a.desc)}})]}}])}),t("sec-table-column",{attrs:{label:"类型",prop:"type",width:"150"}}),t("sec-table-column",{attrs:{label:"可选值",width:"240"},scopedSlots:e._u([{key:"default",fn:function({row:a}){return[t("span",{domProps:{innerHTML:e._s(a.value)}})]}}])}),t("sec-table-column",{attrs:{label:"默认值",prop:"default",width:"120"}})],1),t("h3",[e._v("Events")]),t("sec-table",{staticClass:"doc-table",attrs:{data:e.events}},[t("sec-table-column",{attrs:{label:"事件名称",prop:"event",width:"220"}}),t("sec-table-column",{attrs:{label:"说明",prop:"desc"}}),t("sec-table-column",{attrs:{label:"回调参数",prop:"param",width:"220"}})],1),t("h3",[e._v("Methods")]),t("sec-table",{staticClass:"doc-table",attrs:{data:e.methods}},[t("sec-table-column",{attrs:{label:"方法名",prop:"method",width:"220"}}),t("sec-table-column",{attrs:{label:"说明",prop:"desc"}}),t("sec-table-column",{attrs:{label:"参数",prop:"param",width:"250"}})],1)],1)},l=[],s=a(3722),r=a(6996),c=a.n(r),o=function(){var e=this,t=e._self._c;return t("sec-time-select",{attrs:{placeholder:"选择时间","picker-options":{start:"08:30",step:"00:15",end:"18:30"}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})},i=[],d={data(){return{value:""}}},p=d,u=a(4940),m=(0,u.Z)(p,o,i,!1,null,null,null),v=m.exports,f=a(935),b=a.n(f),k=function(){var e=this,t=e._self._c;return t("div",[t("sec-time-picker",{attrs:{placeholder:"任意时间点","picker-options":{selectableRange:"18:30:00 - 20:30:00"}},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}}),t("sec-time-picker",{attrs:{placeholder:"任意时间点","arrow-control":"","picker-options":{selectableRange:"18:30:00 - 20:30:00"}},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1)},h=[],_={data(){return{value1:new Date(2016,9,10,18,40),value2:new Date(2016,9,10,18,40)}}},y=_,g=(0,u.Z)(y,k,h,!1,null,"3c21d7c6",null),w=g.exports,x=a(7389),T=a.n(x),D=function(){var e=this,t=e._self._c;return t("div",[t("sec-time-select",{attrs:{placeholder:"起始时间","picker-options":{start:"08:30",step:"00:15",end:"18:30"}},model:{value:e.startTime,callback:function(t){e.startTime=t},expression:"startTime"}}),t("sec-time-select",{attrs:{placeholder:"结束时间","picker-options":{start:"08:30",step:"00:15",end:"18:30",minTime:e.startTime}},model:{value:e.endTime,callback:function(t){e.endTime=t},expression:"endTime"}})],1)},C=[],P={data(){return{startTime:"",endTime:""}}},S=P,E=(0,u.Z)(S,D,C,!1,null,"65eed8a1",null),H=E.exports,Z=a(9481),M=a.n(Z),O=function(){var e=this,t=e._self._c;return t("div",[t("sec-time-picker",{attrs:{"range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间",placeholder:"选择时间范围","is-range":""},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}}),t("sec-time-picker",{attrs:{"range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间",placeholder:"选择时间范围","is-range":"","arrow-control":""},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1)},R=[],L={data(){return{value1:[new Date(2016,9,10,8,40),new Date(2016,9,10,9,40)],value2:[new Date(2016,9,10,8,40),new Date(2016,9,10,9,40)]}}},A=L,j=(0,u.Z)(A,O,R,!1,null,"70552bb3",null),q=j.exports,z={components:{DocDemo:s.Z,Demo1:v,Demo2:w,Demo3:H,Demo4:q},data(){return{demo1:c(),demo2:b(),demo3:T(),demo4:M(),attributes:[{attr:"value / v-model",desc:"绑定值",type:"date(TimePicker) / string(TimeSelect)",value:"—",default:"—"},{attr:"readonly",desc:"完全只读",type:"boolean",value:"—",default:"false"},{attr:"disabled",desc:"禁用",type:"boolean",value:"—",default:"false"},{attr:"editable",desc:"文本框可输入",type:"boolean",value:"—",default:"true"},{attr:"clearable",desc:"是否显示清除按钮",type:"boolean",value:"—",default:"true"},{attr:"size",desc:"输入框尺寸",type:"string",value:"large / medium / small / mini",default:"small"},{attr:"placeholder",desc:"非范围选择时的占位内容",type:"string",value:"—",default:"—"},{attr:"start-placeholder",desc:"范围选择时开始日期的占位内容",type:"string",value:"—",default:"—"},{attr:"end-placeholder",desc:"范围选择时结束日期的占位内容",type:"string",value:"—",default:"—"},{attr:"is-range",desc:"是否为时间范围选择，仅对 <code>&lt;sec-time-picker&gt;</code> 有效",type:"boolean",value:"—",default:"false"},{attr:"arrow-control",desc:"是否使用箭头进行时间选择，仅对 <code>&lt;sec-time-picker&gt;</code> 有效",type:"boolean",value:"—",default:"false"},{attr:"align",desc:"对齐方式",type:"string",value:"left / center / right",default:"left"},{attr:"popper-class",desc:"TimePicker 下拉框的类名",type:"string",value:"—",default:"—"},{attr:"picker-options",desc:"当前时间日期选择器特有的选项参考下表",type:"object",value:"—",default:"{}"},{attr:"range-separator",desc:"选择范围时的分隔符",type:"string",value:"—",default:"'-'"},{attr:"value-format",desc:"可选，仅 TimePicker 时可用，绑定值的格式。不指定则绑定值为 Date 对象",type:"string",value:'见 <a href="/#/components/date-picker#ri-qi-ge-shi">日期格式</a>',default:"—"},{attr:"default-value",desc:"可选，选择器打开时默认显示的时间",type:"Date(TimePicker) / string(TimeSelect)",value:"可被 <code>new Date()</code> 解析(TimePicker) / 可选值(TimeSelect)",default:"—"},{attr:"name",desc:"原生属性",type:"string",value:"—",default:"—"},{attr:"prefix-icon",desc:"自定义头部图标的类名",type:"string",value:"—",default:"el-icon-time"},{attr:"clear-icon",desc:"自定义清空图标的类名",type:"string",value:"—",default:"el-icon-circle-close"}],timeSelectOptions:[{attr:"start",desc:"开始时间",type:"string",value:"—",default:"09:00"},{attr:"end",desc:"结束时间",type:"string",value:"—",default:"18:00"},{attr:"step",desc:"间隔时间",type:"string",value:"—",default:"00:30"},{attr:"minTime",desc:"最小时间，小于该时间的时间段将被禁用",type:"string",value:"—",default:"00:00"},{attr:"maxTime",desc:"最大时间，大于该时间的时间段将被禁用",type:"string",value:"—",default:"—"}],timePickerOptions:[{attr:"selectableRange",desc:"可选时间段，例如 <code>'18:30:00 - 20:30:00'</code> 或者传入数组 <code>['09:30:00 - 12:00:00', '14:30:00 - 18:30:00']</code>",type:"string / array",value:"—",default:"—"},{attr:"format",desc:"时间格式化(TimePicker)",type:"string",value:"小时：<code>HH</code>，分：<code>mm</code>，秒：<code>ss</code>，AM/PM <code>A</code>",default:"'HH:mm:ss'"}],events:[{event:"change",desc:"用户确认选定的值时触发",param:"组件绑定值"},{event:"blur",desc:"当 input 失去焦点时触发",param:"组件实例"},{event:"focus",desc:"当 input 获得焦点时触发",param:"组件实例"}],methods:[{method:"focus",desc:"使 input 获取焦点",param:"—"}]}}},$=z,B=(0,u.Z)($,n,l,!1,null,null,null),F=B.exports}}]);
//# sourceMappingURL=5368.601893cc.js.map