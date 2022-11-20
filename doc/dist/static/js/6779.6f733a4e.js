(self["webpackChunkdoc"]=self["webpackChunkdoc"]||[]).push([[6779],{944:function(e){e.exports="```vue\n<template>\n  <div>\n    <div class=\"mb20\">\n      排序：\n      <sec-radio-group v-model=\"reverse\">\n        <sec-radio :label=\"true\">倒序</sec-radio>\n        <sec-radio :label=\"false\">正序</sec-radio>\n      </sec-radio-group>\n    </div>\n    <sec-timeline :reverse=\"reverse\">\n      <sec-timeline-item\n        v-for=\"activity in activities\"\n        :key=\"activity.id\"\n        :timestamp=\"activity.timestamp\"\n      >{{ activity.content }}</sec-timeline-item>\n    </sec-timeline>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      reverse: true,\n      activities: [{\n        id: '1',\n        content: '活动按期开始',\n        timestamp: '2018-04-15',\n      }, {\n        id: '2',\n        content: '通过审核',\n        timestamp: '2018-04-13',\n      }, {\n        id: '3',\n        content: '创建成功',\n        timestamp: '2018-04-11',\n      }],\n    };\n  },\n};\n<\/script>\n```"},7409:function(e){e.exports="```vue\n<template>\n  <sec-timeline>\n    <sec-timeline-item\n      v-for=\"(activity, index) in activities\"\n      :key=\"index\"\n      :icon=\"activity.icon\"\n      :type=\"activity.type\"\n      :color=\"activity.color\"\n      :size=\"activity.size\"\n      :timestamp=\"activity.timestamp\"\n    >\n      {{ activity.content }}\n    </sec-timeline-item>\n  </sec-timeline>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      activities: [{\n        content: '支持使用图标',\n        timestamp: '2018-04-12 20:46',\n        size: 'large',\n        type: 'primary',\n        icon: 'el-icon-more',\n      }, {\n        content: '支持自定义颜色',\n        timestamp: '2018-04-03 20:46',\n        color: '#0bbd87',\n      }, {\n        content: '支持自定义尺寸',\n        timestamp: '2018-04-03 20:46',\n        size: 'large',\n      }, {\n        content: '默认样式的节点',\n        timestamp: '2018-04-03 20:46',\n      }],\n    };\n  },\n};\n<\/script>\n```"},7324:function(e){e.exports='```vue\n<template>\n  <sec-timeline>\n    <sec-timeline-item timestamp="2018/4/12" placement="top">\n      <sec-card>\n        <h4>更新 Github 模板</h4>\n        <p>王小虎 提交于 2018/4/12 20:46</p>\n      </sec-card>\n    </sec-timeline-item>\n    <sec-timeline-item timestamp="2018/4/3" placement="top">\n      <sec-card>\n        <h4>更新 Github 模板</h4>\n        <p>王小虎 提交于 2018/4/3 20:46</p>\n      </sec-card>\n    </sec-timeline-item>\n    <sec-timeline-item timestamp="2018/4/2" placement="top">\n      <sec-card>\n        <h4>更新 Github 模板</h4>\n        <p>王小虎 提交于 2018/4/2 20:46</p>\n      </sec-card>\n    </sec-timeline-item>\n  </sec-timeline>\n</template>\n```'},3722:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"doc-demo"},[t("div",{staticClass:"doc-demo-source"},[e._t("source")],2),t("div",{staticClass:"doc-demo-meta",class:{"is-expanded":e.isExpanded}},[e.$slots.default?t("div",{staticClass:"doc-demo-desc"},[e._t("default")],2):e._e(),t("markdown-it-vue",{attrs:{content:e.markdown}})],1),t("div",{staticClass:"doc-demo-control",on:{click:function(t){e.isExpanded=!e.isExpanded},keydown:function(t){e.isExpanded=!e.isExpanded}}},[e.isExpanded?t("i",{staticClass:"el-icon-caret-top"}):t("i",{staticClass:"el-icon-caret-bottom"}),t("span",[e.isExpanded?[e._v("隐藏代码")]:[e._v("显示代码")]],2)])])},a=[],s={props:{markdown:{type:String,default:""}},data(){return{isExpanded:!1}}},c=s,l=n(4940),r=(0,l.Z)(c,i,a,!1,null,null,null),o=r.exports},6779:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return T}});var i=function(){var e=this,t=e._self._c;return t("sec-block",{staticClass:"doc-block"},[t("h2",[e._v("Timeline 时间线")]),t("p",[e._v("可视化地呈现时间流信息。")]),t("h3",[e._v("基础用法")]),t("p",[e._v("Timeline 可拆分成多个按照时间戳正序或倒序排列的 activity，时间戳是其区分于其他控件的重要特征，使用时注意与 Steps 步骤条等区分。")]),t("DocDemo",{attrs:{markdown:e.demo1},scopedSlots:e._u([{key:"source",fn:function(){return[t("Demo1")]},proxy:!0}])}),t("h3",[e._v("自定义节点样式")]),t("p",[e._v("可根据实际场景自定义节点尺寸、颜色，或直接使用图标。")]),t("DocDemo",{attrs:{markdown:e.demo2},scopedSlots:e._u([{key:"source",fn:function(){return[t("Demo2")]},proxy:!0}])}),t("h3",[e._v("自定义时间戳")]),t("p",[e._v("当内容在垂直方向上过高时，可将时间戳置于内容之上。")]),t("DocDemo",{attrs:{markdown:e.demo3},scopedSlots:e._u([{key:"source",fn:function(){return[t("Demo3")]},proxy:!0}])}),t("h3",[e._v("Timeline Attributes")]),t("sec-table",{staticClass:"doc-table",attrs:{data:e.timelineAttributes}},[t("sec-table-column",{attrs:{label:"参数",prop:"attr",width:"140"}}),t("sec-table-column",{attrs:{label:"说明",prop:"desc"}}),t("sec-table-column",{attrs:{label:"类型",prop:"type",width:"100"}}),t("sec-table-column",{attrs:{label:"可选值",prop:"value",width:"100"}}),t("sec-table-column",{attrs:{label:"默认值",prop:"default",width:"100"}})],1),t("h3",[e._v("Timeline-Item Attributes")]),t("sec-table",{staticClass:"doc-table",attrs:{data:e.timelineItemAttributes}},[t("sec-table-column",{attrs:{label:"参数",prop:"attr",width:"140"}}),t("sec-table-column",{attrs:{label:"说明",prop:"desc"}}),t("sec-table-column",{attrs:{label:"类型",prop:"type",width:"100"}}),t("sec-table-column",{attrs:{label:"可选值",prop:"value",width:"310"}}),t("sec-table-column",{attrs:{label:"默认值",prop:"default",width:"100"}})],1),t("h3",[e._v("Timeline-Item Slots")]),t("sec-table",{staticClass:"doc-table",attrs:{data:e.timelineItemSlots}},[t("sec-table-column",{attrs:{label:"name",prop:"name",width:"140"}}),t("sec-table-column",{attrs:{label:"说明",prop:"desc"}})],1)],1)},a=[],s=n(3722),c=n(944),l=n.n(c),r=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"mb20"},[e._v(" 排序： "),t("sec-radio-group",{model:{value:e.reverse,callback:function(t){e.reverse=t},expression:"reverse"}},[t("sec-radio",{attrs:{label:!0}},[e._v("倒序")]),t("sec-radio",{attrs:{label:!1}},[e._v("正序")])],1)],1),t("sec-timeline",{attrs:{reverse:e.reverse}},e._l(e.activities,(function(n){return t("sec-timeline-item",{key:n.id,attrs:{timestamp:n.timestamp}},[e._v(e._s(n.content))])})),1)],1)},o=[],m={data(){return{reverse:!0,activities:[{id:"1",content:"活动按期开始",timestamp:"2018-04-15"},{id:"2",content:"通过审核",timestamp:"2018-04-13"},{id:"3",content:"创建成功",timestamp:"2018-04-11"}]}}},p=m,d=n(4940),u=(0,d.Z)(p,r,o,!1,null,null,null),v=u.exports,b=n(7409),f=n.n(b),y=function(){var e=this,t=e._self._c;return t("sec-timeline",e._l(e.activities,(function(n,i){return t("sec-timeline-item",{key:i,attrs:{icon:n.icon,type:n.type,color:n.color,size:n.size,timestamp:n.timestamp}},[e._v(" "+e._s(n.content)+" ")])})),1)},_=[],h={data(){return{activities:[{content:"支持使用图标",timestamp:"2018-04-12 20:46",size:"large",type:"primary",icon:"el-icon-more"},{content:"支持自定义颜色",timestamp:"2018-04-03 20:46",color:"#0bbd87"},{content:"支持自定义尺寸",timestamp:"2018-04-03 20:46",size:"large"},{content:"默认样式的节点",timestamp:"2018-04-03 20:46"}]}}},x=h,k=(0,d.Z)(x,y,_,!1,null,null,null),w=k.exports,g=n(7324),C=n.n(g),D=function(){var e=this,t=e._self._c;return t("sec-timeline",[t("sec-timeline-item",{attrs:{timestamp:"2018/4/12",placement:"top"}},[t("sec-card",[t("h4",[e._v("更新 Github 模板")]),t("p",[e._v("王小虎 提交于 2018/4/12 20:46")])])],1),t("sec-timeline-item",{attrs:{timestamp:"2018/4/3",placement:"top"}},[t("sec-card",[t("h4",[e._v("更新 Github 模板")]),t("p",[e._v("王小虎 提交于 2018/4/3 20:46")])])],1),t("sec-timeline-item",{attrs:{timestamp:"2018/4/2",placement:"top"}},[t("sec-card",[t("h4",[e._v("更新 Github 模板")]),t("p",[e._v("王小虎 提交于 2018/4/2 20:46")])])],1)],1)},S=[],z={},E=(0,d.Z)(z,D,S,!1,null,null,null),I=E.exports,Z={components:{DocDemo:s.Z,Demo1:v,Demo2:w,Demo3:I},data(){return{demo1:l(),demo2:f(),demo3:C(),timelineAttributes:[{attr:"reverse",desc:"指定节点排序方向，默认为正序",type:"Boolean",value:"—",default:"false"}],timelineItemAttributes:[{attr:"timestamp",desc:"时间戳",type:"String",value:"—",default:"—"},{attr:"hide-timestamp",desc:"是否隐藏时间戳",type:"Boolean",value:"—",default:"false"},{attr:"placement",desc:"时间戳位置",type:"String",value:"top / bottom",default:"bottom"},{attr:"type",desc:"节点类型",type:"String",value:"primary / success / warning / danger / info",default:"—"},{attr:"color",desc:"节点颜色",type:"String",value:"hsl / hsv / hex / rgb",default:"—"},{attr:"size",desc:"节点尺寸",type:"String",value:"normal / large",default:"normal"},{attr:"icon",desc:"节点图标",type:"String",value:"—",default:"—"}],timelineItemSlots:[{name:"—",desc:"Timeline-Item 的内容"},{name:"dot",desc:"自定义节点"}]}}},A=Z,G=(0,d.Z)(A,i,a,!1,null,null,null),T=G.exports}}]);
//# sourceMappingURL=6779.6f733a4e.js.map