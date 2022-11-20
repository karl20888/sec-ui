(self["webpackChunkdoc"]=self["webpackChunkdoc"]||[]).push([[2148],{5509:function(e){e.exports='```vue\n<template>\n  <el-descriptions title="用户信息">\n    <el-descriptions-item label="用户名">kooriookami</el-descriptions-item>\n    <el-descriptions-item label="手机号">18100000000</el-descriptions-item>\n    <el-descriptions-item label="居住地">苏州市</el-descriptions-item>\n    <el-descriptions-item label="备注">\n      <sec-tag>学校</sec-tag>\n    </el-descriptions-item>\n    <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>\n  </el-descriptions>\n</template>\n```'},3614:function(e){e.exports='```vue\n<template>\n  <div>\n    <sec-radio-group v-model="size">\n      <sec-radio label="large">大型</sec-radio>\n      <sec-radio label="medium">中等</sec-radio>\n      <sec-radio label="">默认</sec-radio>\n      <sec-radio label="mini">超小</sec-radio>\n    </sec-radio-group>\n    <el-descriptions border title="带边框列表" class="mt20" :size="size">\n      <template #extra>\n        <sec-btn type="primary">操作</sec-btn>\n      </template>\n      <el-descriptions-item>\n        <template #label>\n          <i class="el-icon-user"></i>\n          用户名\n        </template>\n        kooriookami\n      </el-descriptions-item>\n      <el-descriptions-item>\n        <template #label>\n          <i class="el-icon-location-outline"></i>\n          居住地\n        </template>\n        苏州市\n      </el-descriptions-item>\n      <el-descriptions-item>\n        <template #label>\n          <i class="el-icon-tickets"></i>\n          备注\n        </template>\n        <sec-tag>学校</sec-tag>\n      </el-descriptions-item>\n      <el-descriptions-item>\n        <template #label>\n          <i class="el-icon-office-building"></i>\n          联系地址\n        </template>\n        江苏省苏州市吴中区吴中大道 1188 号\n      </el-descriptions-item>\n    </el-descriptions>\n    <el-descriptions title="无边框列表" class="mt20" :size="size">\n      <template #extra>\n        <sec-btn type="primary">操作</sec-btn>\n      </template>\n      <el-descriptions-item label="用户名">kooriookami</el-descriptions-item>\n      <el-descriptions-item label="手机号">18100000000</el-descriptions-item>\n      <el-descriptions-item label="居住地">苏州市</el-descriptions-item>\n      <el-descriptions-item label="备注">\n        <sec-tag>学校</sec-tag>\n      </el-descriptions-item>\n      <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>\n    </el-descriptions>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      size: \'\',\n    };\n  },\n};\n<\/script>\n```'},4838:function(e){e.exports='```vue\n<template>\n  <div>\n    <el-descriptions\n      title="垂直带边框列表"\n      direction="vertical"\n      border\n      :column="4"\n    >\n      <el-descriptions-item label="用户名">kooriookami</el-descriptions-item>\n      <el-descriptions-item label="手机号">18100000000</el-descriptions-item>\n      <el-descriptions-item label="居住地" :span="2">苏州市</el-descriptions-item>\n      <el-descriptions-item label="备注">\n        <el-tag size="small">学校</el-tag>\n      </el-descriptions-item>\n      <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>\n    </el-descriptions>\n    <el-descriptions\n      title="垂直无边框列表"\n      direction="vertical"\n      class="mt20"\n      :column="4"\n    >\n      <el-descriptions-item label="用户名">kooriookami</el-descriptions-item>\n      <el-descriptions-item label="手机号">18100000000</el-descriptions-item>\n      <el-descriptions-item label="居住地" :span="2">苏州市</el-descriptions-item>\n      <el-descriptions-item label="备注">\n        <el-tag size="small">学校</el-tag>\n      </el-descriptions-item>\n      <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>\n    </el-descriptions>\n  </div>\n</template>\n```'},5900:function(e){e.exports='```vue\n<template>\n  <el-descriptions\n    title="自定义样式列表"\n    border\n    :column="3"\n  >\n    <el-descriptions-item\n      label="用户名"\n      label-class-name="my-label"\n      content-class-name="my-content"\n    >kooriookami</el-descriptions-item>\n    <el-descriptions-item label="手机号">18100000000</el-descriptions-item>\n    <el-descriptions-item label="居住地">苏州市</el-descriptions-item>\n    <el-descriptions-item label="备注">\n      <el-tag size="small">学校</el-tag>\n    </el-descriptions-item>\n    <el-descriptions-item\n      label="联系地址"\n      :content-style="{ \'text-align\': \'right\' }"\n    >江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>\n  </el-descriptions>\n</template>\n\n<style lang="less" scoped>\n.my-label {\n  background-color: #e1f3d8;\n}\n\n.my-content {\n  background-color: #fde2e2;\n}\n</style>\n```'},2148:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return U}});var l=function(){var e=this,t=e._self._c;return t("sec-block",{staticClass:"doc-block"},[t("h2",[e._v("Descriptions 描述列表")]),t("div",{staticClass:"tip"},[t("p",[e._v("目前，请直接使用 ElementUI 的 Descriptions 组件。")])]),t("p",[e._v("列表形式展示多个字段。")]),t("h3",[e._v("基础用法")]),t("DocDemo",{attrs:{markdown:e.demo1},scopedSlots:e._u([{key:"source",fn:function(){return[t("Demo1")]},proxy:!0}])}),t("h3",[e._v("不同尺寸")]),t("DocDemo",{attrs:{markdown:e.demo2},scopedSlots:e._u([{key:"source",fn:function(){return[t("Demo2")]},proxy:!0}])}),t("h3",[e._v("垂直列表")]),t("DocDemo",{attrs:{markdown:e.demo3},scopedSlots:e._u([{key:"source",fn:function(){return[t("Demo3")]},proxy:!0}])}),t("h3",[e._v("自定义样式")]),t("DocDemo",{attrs:{markdown:e.demo4},scopedSlots:e._u([{key:"source",fn:function(){return[t("Demo4")]},proxy:!0}])}),t("h3",[e._v("Descriptions Attributes")]),t("sec-table",{staticClass:"doc-table",attrs:{data:e.descriptionsAttributes}},[t("sec-table-column",{attrs:{label:"参数",prop:"attr",width:"160"}}),t("sec-table-column",{attrs:{label:"说明"},scopedSlots:e._u([{key:"default",fn:function({row:s}){return[t("span",{domProps:{innerHTML:e._s(s.desc)}})]}}])}),t("sec-table-column",{attrs:{label:"类型",prop:"type",width:"100"}}),t("sec-table-column",{attrs:{label:"可选值",prop:"value",width:"240"}}),t("sec-table-column",{attrs:{label:"默认值",prop:"default",width:"120"}})],1),t("h3",[e._v("Descriptions Slots")]),t("sec-table",{staticClass:"doc-table",attrs:{data:e.descriptionsSlots}},[t("sec-table-column",{attrs:{label:"name",prop:"name",width:"220"}}),t("sec-table-column",{attrs:{label:"说明",prop:"desc"}})],1),t("h3",[e._v("Descriptions Item Attributes")]),t("sec-table",{staticClass:"doc-table",attrs:{data:e.descriptionsItemAttributes}},[t("sec-table-column",{attrs:{label:"参数",prop:"attr",width:"160"}}),t("sec-table-column",{attrs:{label:"说明",prop:"desc"}}),t("sec-table-column",{attrs:{label:"类型",prop:"type",width:"100"}}),t("sec-table-column",{attrs:{label:"可选值",prop:"value",width:"240"}}),t("sec-table-column",{attrs:{label:"默认值",prop:"default",width:"120"}})],1),t("h3",[e._v("Descriptions Item Slots")]),t("sec-table",{staticClass:"doc-table",attrs:{data:e.descriptionsItemSlots}},[t("sec-table-column",{attrs:{label:"name",prop:"name",width:"220"}}),t("sec-table-column",{attrs:{label:"说明",prop:"desc"}})],1)],1)},i=[],n=s(3722),a=s(5509),o=s.n(a),r=function(){var e=this,t=e._self._c;return t("el-descriptions",{attrs:{title:"用户信息"}},[t("el-descriptions-item",{attrs:{label:"用户名"}},[e._v("kooriookami")]),t("el-descriptions-item",{attrs:{label:"手机号"}},[e._v("18100000000")]),t("el-descriptions-item",{attrs:{label:"居住地"}},[e._v("苏州市")]),t("el-descriptions-item",{attrs:{label:"备注"}},[t("sec-tag",[e._v("学校")])],1),t("el-descriptions-item",{attrs:{label:"联系地址"}},[e._v("江苏省苏州市吴中区吴中大道 1188 号")])],1)},c=[],d=s(4940),p={},m=(0,d.Z)(p,r,c,!1,null,null,null),u=m.exports,b=s(3614),v=s.n(b),_=function(){var e=this,t=e._self._c;return t("div",[t("sec-radio-group",{model:{value:e.size,callback:function(t){e.size=t},expression:"size"}},[t("sec-radio",{attrs:{label:"large"}},[e._v("大型")]),t("sec-radio",{attrs:{label:"medium"}},[e._v("中等")]),t("sec-radio",{attrs:{label:""}},[e._v("默认")]),t("sec-radio",{attrs:{label:"mini"}},[e._v("超小")])],1),t("el-descriptions",{staticClass:"mt20",attrs:{border:"",title:"带边框列表",size:e.size},scopedSlots:e._u([{key:"extra",fn:function(){return[t("sec-btn",{attrs:{type:"primary"}},[e._v("操作")])]},proxy:!0}])},[t("el-descriptions-item",[t("template",{slot:"label"},[t("i",{staticClass:"el-icon-user"}),e._v(" 用户名 ")]),e._v(" kooriookami ")],2),t("el-descriptions-item",[t("template",{slot:"label"},[t("i",{staticClass:"el-icon-location-outline"}),e._v(" 居住地 ")]),e._v(" 苏州市 ")],2),t("el-descriptions-item",[t("template",{slot:"label"},[t("i",{staticClass:"el-icon-tickets"}),e._v(" 备注 ")]),t("sec-tag",[e._v("学校")])],2),t("el-descriptions-item",[t("template",{slot:"label"},[t("i",{staticClass:"el-icon-office-building"}),e._v(" 联系地址 ")]),e._v(" 江苏省苏州市吴中区吴中大道 1188 号 ")],2)],1),t("el-descriptions",{staticClass:"mt20",attrs:{title:"无边框列表",size:e.size},scopedSlots:e._u([{key:"extra",fn:function(){return[t("sec-btn",{attrs:{type:"primary"}},[e._v("操作")])]},proxy:!0}])},[t("el-descriptions-item",{attrs:{label:"用户名"}},[e._v("kooriookami")]),t("el-descriptions-item",{attrs:{label:"手机号"}},[e._v("18100000000")]),t("el-descriptions-item",{attrs:{label:"居住地"}},[e._v("苏州市")]),t("el-descriptions-item",{attrs:{label:"备注"}},[t("sec-tag",[e._v("学校")])],1),t("el-descriptions-item",{attrs:{label:"联系地址"}},[e._v("江苏省苏州市吴中区吴中大道 1188 号")])],1)],1)},f=[],y={data(){return{size:""}}},k=y,g=(0,d.Z)(k,_,f,!1,null,null,null),x=g.exports,h=s(4838),C=s.n(h),D=function(){var e=this,t=e._self._c;return t("div",[t("el-descriptions",{attrs:{title:"垂直带边框列表",direction:"vertical",border:"",column:4}},[t("el-descriptions-item",{attrs:{label:"用户名"}},[e._v("kooriookami")]),t("el-descriptions-item",{attrs:{label:"手机号"}},[e._v("18100000000")]),t("el-descriptions-item",{attrs:{label:"居住地",span:2}},[e._v("苏州市")]),t("el-descriptions-item",{attrs:{label:"备注"}},[t("el-tag",{attrs:{size:"small"}},[e._v("学校")])],1),t("el-descriptions-item",{attrs:{label:"联系地址"}},[e._v("江苏省苏州市吴中区吴中大道 1188 号")])],1),t("el-descriptions",{staticClass:"mt20",attrs:{title:"垂直无边框列表",direction:"vertical",column:4}},[t("el-descriptions-item",{attrs:{label:"用户名"}},[e._v("kooriookami")]),t("el-descriptions-item",{attrs:{label:"手机号"}},[e._v("18100000000")]),t("el-descriptions-item",{attrs:{label:"居住地",span:2}},[e._v("苏州市")]),t("el-descriptions-item",{attrs:{label:"备注"}},[t("el-tag",{attrs:{size:"small"}},[e._v("学校")])],1),t("el-descriptions-item",{attrs:{label:"联系地址"}},[e._v("江苏省苏州市吴中区吴中大道 1188 号")])],1)],1)},z=[],w={},S=(0,d.Z)(w,D,z,!1,null,null,null),E=S.exports,I=s(5900),Z=s.n(I),A=function(){var e=this,t=e._self._c;return t("el-descriptions",{attrs:{title:"自定义样式列表",border:"",column:3}},[t("el-descriptions-item",{attrs:{label:"用户名","label-class-name":"my-label","content-class-name":"my-content"}},[e._v("kooriookami")]),t("el-descriptions-item",{attrs:{label:"手机号"}},[e._v("18100000000")]),t("el-descriptions-item",{attrs:{label:"居住地"}},[e._v("苏州市")]),t("el-descriptions-item",{attrs:{label:"备注"}},[t("el-tag",{attrs:{size:"small"}},[e._v("学校")])],1),t("el-descriptions-item",{attrs:{label:"联系地址","content-style":{"text-align":"right"}}},[e._v("江苏省苏州市吴中区吴中大道 1188 号")])],1)},j=[],N={},H=(0,d.Z)(N,A,j,!1,null,"578195de",null),L=H.exports,M={components:{DocDemo:n.Z,Demo1:u,Demo2:x,Demo3:E,Demo4:L},data(){return{demo1:o(),demo2:v(),demo3:C(),demo4:Z(),descriptionsAttributes:[{attr:"border",desc:"是否带有边框",type:"boolean",value:"—",default:"false"},{attr:"column",desc:"一行 <code>Descriptions Item</code> 的数量",type:"number",value:"—",default:"3"},{attr:"direction",desc:"排列的方向",type:"string",value:"vertical / horizontal",default:"horizontal"},{attr:"size",desc:"列表的尺寸",type:"string",value:"large / medium / small / mini",default:"small"},{attr:"title",desc:"标题文本，显示在上方",type:"string",value:"—",default:"—"},{attr:"extra",desc:"操作区文本，显示在右上方",type:"string",value:"—",default:"—"},{attr:"colon",desc:"是否显示冒号",type:"boolean",value:"—",default:"true"},{attr:"labelClassName",desc:"自定义标签类名",type:"string",value:"—",default:"—"},{attr:"contentClassName",desc:"自定义内容类名",type:"string",value:"—",default:"—"},{attr:"labelStyle",desc:"自定义标签样式",type:"object",value:"—",default:"—"},{attr:"contentStyle",desc:"自定义内容样式",type:"object",value:"—",default:"—"}],descriptionsSlots:[{name:"title",desc:"自定义标题，显示在左上方"},{name:"extra",desc:"自定义操作区，显示在右上方"}],descriptionsItemAttributes:[{attr:"label",desc:"标签文本",type:"string",value:"—",default:"—"},{attr:"span",desc:"列的数量",type:"number",value:"—",default:"1"},{attr:"labelClassName",desc:"自定义标签类名",type:"string",value:"—",default:"—"},{attr:"contentClassName",desc:"自定义内容类名",type:"string",value:"—",default:"—"},{attr:"labelStyle",desc:"自定义标签样式",type:"object",value:"—",default:"—"},{attr:"contentStyle",desc:"自定义内容样式",type:"object",value:"—",default:"—"}],descriptionsItemSlots:[{name:"label",desc:"自定义标签文本"}]}}},P=M,T=(0,d.Z)(P,l,i,!1,null,null,null),U=T.exports},3722:function(e,t,s){"use strict";s.d(t,{Z:function(){return c}});var l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"doc-demo"},[t("div",{staticClass:"doc-demo-source"},[e._t("source")],2),t("div",{staticClass:"doc-demo-meta",class:{"is-expanded":e.isExpanded}},[e.$slots.default?t("div",{staticClass:"doc-demo-desc"},[e._t("default")],2):e._e(),t("markdown-it-vue",{attrs:{content:e.markdown}})],1),t("div",{staticClass:"doc-demo-control",on:{click:function(t){e.isExpanded=!e.isExpanded},keydown:function(t){e.isExpanded=!e.isExpanded}}},[e.isExpanded?t("i",{staticClass:"el-icon-caret-top"}):t("i",{staticClass:"el-icon-caret-bottom"}),t("span",[e.isExpanded?[e._v("隐藏代码")]:[e._v("显示代码")]],2)])])},i=[],n={props:{markdown:{type:String,default:""}},data(){return{isExpanded:!1}}},a=n,o=s(4940),r=(0,o.Z)(a,l,i,!1,null,null,null),c=r.exports}}]);
//# sourceMappingURL=2148.d1777354.js.map