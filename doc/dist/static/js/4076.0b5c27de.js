(self["webpackChunkdoc"]=self["webpackChunkdoc"]||[]).push([[4076],{9751:function(e){e.exports='```vue\n<template>\n  <sec-transfer v-model="value" :data="data"></sec-transfer>\n</template>\n\n<script>\nimport { times } from \'lodash\';\n\nexport default {\n  data() {\n    return {\n      data: times(15, (i) => ({\n        key: i,\n        label: `备选项 ${i + 1}`,\n        disabled: (i + 1) % 4 === 0,\n      })),\n      value: [0, 3],\n    };\n  },\n};\n<\/script>\n```'},9004:function(e){e.exports="```vue\n<template>\n  <sec-transfer\n    v-model=\"value\"\n    filterable\n    filter-placeholder=\"请输入城市拼音\"\n    :filter-method=\"filterMethod\"\n    :data=\"data\"\n  ></sec-transfer>\n</template>\n\n<script>\nimport { map, includes } from 'lodash';\n\nexport default {\n  data() {\n    const generateData = () => {\n      const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];\n      const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];\n      return map(cities, (label, key) => ({\n        label,\n        key,\n        pinyin: pinyin[key],\n      }));\n    };\n    return {\n      data: generateData(),\n      value: [],\n    };\n  },\n  methods: {\n    filterMethod(query, item) {\n      return includes(item.pinyin, query);\n    },\n  },\n};\n<\/script>\n```"},2930:function(e){e.exports='```vue\n<template>\n  <div>\n    <p class="tac mb20">使用 render-content 自定义数据项</p>\n    <div class="tac">\n      <sec-transfer\n        v-model="value"\n        filterable\n        :left-default-checked="[2, 3]"\n        :right-default-checked="[1]"\n        :render-content="renderFunc"\n        :titles="[\'Source\', \'Target\']"\n        :button-texts="[\'到左边\', \'到右边\']"\n        :format="{\n          noChecked: \'${total}\',\n          hasChecked: \'${checked}/${total}\',\n        }"\n        :data="data"\n        @change="handleChange"\n      >\n        <template #left-footer>\n          <sec-btn class="transfer-footer">操作</sec-btn>\n        </template>\n        <template #right-footer>\n          <sec-btn class="transfer-footer">操作</sec-btn>\n        </template>\n      </sec-transfer>\n    </div>\n    <p class="tac mb20 mt50">使用 scoped-slot 自定义数据项</p>\n    <div class="tac">\n      <sec-transfer\n        v-model="value4"\n        filterable\n        :left-default-checked="[2, 3]"\n        :right-default-checked="[1]"\n        :titles="[\'Source\', \'Target\']"\n        :button-texts="[\'到左边\', \'到右边\']"\n        :format="{\n          noChecked: \'${total}\',\n          hasChecked: \'${checked}/${total}\',\n        }"\n        :data="data"\n        @change="handleChange"\n      >\n        <template #default="{ option }">\n          {{ option.key }} 3- {{ option.label }}\n        </template>\n        <template #left-footer>\n          <sec-btn class="transfer-footer">操作</sec-btn>\n        </template>\n        <template #right-footer>\n          <sec-btn class="transfer-footer">操作</sec-btn>\n        </template>\n      </sec-transfer>\n    </div>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    const generateData = () => {\n      const data = [];\n      for (let i = 1; i <= 15; i += 1) {\n        data.push({\n          key: i,\n          label: `备选项 ${i}`,\n          disabled: i % 4 === 0,\n        });\n      }\n      return data;\n    };\n    return {\n      data: generateData(),\n      value: [1],\n      value4: [1],\n      renderFunc(h, option) {\n        return h(\'span\', `${option.key} - ${option.label}`);\n      },\n    };\n  },\n\n  methods: {\n    handleChange(value, direction, movedKeys) {\n      console.log(value, direction, movedKeys);\n    },\n  },\n};\n<\/script>\n\n<style lang="less" scoped>\n.sec-transfer {\n  display: inline-block;\n  text-align: left;\n}\n\n.transfer-footer {\n  margin-left: 20px;\n  padding: 6px 5px;\n}\n</style>\n```'},4157:function(e){e.exports="```vue\n<template>\n  <sec-transfer\n    v-model=\"value\"\n    :props=\"{\n      key: 'value',\n      label: 'desc',\n    }\"\n    :data=\"data\"\n  ></sec-transfer>\n</template>\n\n<script>\nimport { times } from 'lodash';\n\nexport default {\n  data() {\n    return {\n      data: times(15, (i) => {\n        const value = i + 1;\n        return {\n          value,\n          desc: `备选项 ${value}`,\n          disabled: value % 4 === 0,\n        };\n      }),\n      value: [],\n    };\n  },\n};\n<\/script>\n```"},3722:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"doc-demo"},[t("div",{staticClass:"doc-demo-source"},[e._t("source")],2),t("div",{staticClass:"doc-demo-meta",class:{"is-expanded":e.isExpanded}},[e.$slots.default?t("div",{staticClass:"doc-demo-desc"},[e._t("default")],2):e._e(),t("markdown-it-vue",{attrs:{content:e.markdown}})],1),t("div",{staticClass:"doc-demo-control",on:{click:function(t){e.isExpanded=!e.isExpanded},keydown:function(t){e.isExpanded=!e.isExpanded}}},[e.isExpanded?t("i",{staticClass:"el-icon-caret-top"}):t("i",{staticClass:"el-icon-caret-bottom"}),t("span",[e.isExpanded?[e._v("隐藏代码")]:[e._v("显示代码")]],2)])])},l=[],o={props:{markdown:{type:String,default:""}},data(){return{isExpanded:!1}}},s=o,r=a(4940),c=(0,r.Z)(s,n,l,!1,null,null,null),d=c.exports},4076:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return G}});var n=function(){var e=this,t=e._self._c;return t("sec-block",{staticClass:"doc-block"},[t("h2",[e._v("Transfer 穿梭框")]),t("h3",[e._v("基础用法。")]),t("DocDemo",{attrs:{markdown:e.demo1},scopedSlots:e._u([{key:"source",fn:function(){return[t("Demo1")]},proxy:!0}])},[t("p",[e._v("Transfer 的数据通过 "),t("code",[e._v("data")]),e._v(" 属性传入。数据需要的是一个对象数组，每个对象有以下属性："),t("code",[e._v("key")]),e._v(" 为数据的唯一标识，"),t("code",[e._v("label")]),e._v(" 为显示文本，"),t("code",[e._v("disabled")]),e._v(" 表示该项数据是否禁止转移。目标列表中的数据项会同步到绑定的 "),t("code",[e._v("v-model")]),e._v(" 变量中，值为数据项的 "),t("code",[e._v("key")]),e._v(" 所组成的数组。当然，如果希望在初始状态时目标列表不为空，可以像本例一样为 "),t("code",[e._v("v-model")]),e._v(" 绑定的变量赋予一个初始值。")])]),t("h3",[e._v("可搜索")]),t("p",[e._v("在数据很多的情况下，可以对数据进行搜索和过滤。")]),t("DocDemo",{attrs:{markdown:e.demo2},scopedSlots:e._u([{key:"source",fn:function(){return[t("Demo2")]},proxy:!0}])},[t("p",[e._v("设置 "),t("code",[e._v("filterable")]),e._v(" 为 "),t("code",[e._v("true")]),e._v(" 即可开启搜索模式。默认情况下，若数据项的 "),t("code",[e._v("label")]),e._v(" 属性包含搜索关键字，则会在搜索结果中显示。你也可以使用 "),t("code",[e._v("filter-method")]),e._v(" 定义自己的搜索逻辑。"),t("code",[e._v("filter-method")]),e._v(" 接收一个方法，当搜索关键字变化时，会将当前的关键字和每个数据项传给该方法。若方法返回 "),t("code",[e._v("true")]),e._v("，则会在搜索结果中显示对应的数据项。")])]),t("h3",[e._v("可自定义")]),t("p",[e._v("可以对列表标题文案、按钮文案、数据项的渲染函数、列表底部的勾选状态文案、列表底部的内容区等进行自定义。")]),t("DocDemo",{attrs:{markdown:e.demo3},scopedSlots:e._u([{key:"source",fn:function(){return[t("Demo3")]},proxy:!0}])},[t("p",[e._v("可以使用 "),t("code",[e._v("titles")]),e._v("、"),t("code",[e._v("button-texts")]),e._v("、"),t("code",[e._v("render-content")]),e._v(" 和 "),t("code",[e._v("format")]),e._v(" 属性分别对列表标题文案、按钮文案、数据项的渲染函数和列表顶部的勾选状态文案进行自定义。数据项的渲染还可以使用 "),t("code",[e._v("scoped-slot")]),e._v(" 进行自定义。对于列表底部的内容区，提供了两个具名 slot："),t("code",[e._v("left-footer")]),e._v(" 和 "),t("code",[e._v("right-footer")]),e._v("。此外，如果希望某些数据项在初始化时就被勾选，可以使用 "),t("code",[e._v("left-default-checked")]),e._v(" 和 "),t("code",[e._v("right-default-checked")]),e._v(" 属性。最后，本例还展示了 "),t("code",[e._v("change")]),e._v(" 事件的用法。")])]),t("h3",[e._v("数据项属性别名")]),t("p",[e._v("默认情况下，Transfer 仅能识别数据项中的 "),t("code",[e._v("key")]),e._v("、"),t("code",[e._v("label")]),e._v(" 和 "),t("code",[e._v("disabled")]),e._v(" 字段。如果你的数据的字段名不同，可以使用 "),t("code",[e._v("props")]),e._v(" 属性为它们设置别名。")]),t("DocDemo",{attrs:{markdown:e.demo4},scopedSlots:e._u([{key:"source",fn:function(){return[t("Demo4")]},proxy:!0}])},[t("p",[e._v("本例中的数据源没有 "),t("code",[e._v("key")]),e._v(" 和 "),t("code",[e._v("label")]),e._v(" 字段，在功能上与它们相同的字段名为 "),t("code",[e._v("value")]),e._v(" 和 "),t("code",[e._v("desc")]),e._v("。因此可以使用 "),t("code",[e._v("props")]),e._v(" 属性为 "),t("code",[e._v("key")]),e._v(" 和 "),t("code",[e._v("label")]),e._v(" 设置别名。")])]),t("h3",[e._v("Attributes")]),t("sec-table",{staticClass:"doc-table",attrs:{data:e.attributes}},[t("sec-table-column",{attrs:{label:"参数",prop:"attr",width:"170"}}),t("sec-table-column",{attrs:{label:"说明"},scopedSlots:e._u([{key:"default",fn:function({row:a}){return[t("span",{domProps:{innerHTML:e._s(a.desc)}})]}}])}),t("sec-table-column",{attrs:{label:"类型",prop:"type",width:"240"}}),t("sec-table-column",{attrs:{label:"可选值",prop:"value",width:"90"}}),t("sec-table-column",{attrs:{label:"默认值",prop:"default",width:"150"}})],1),t("h3",[e._v("Slot")]),t("sec-table",{staticClass:"doc-table",attrs:{data:e.slots}},[t("sec-table-column",{attrs:{label:"name",prop:"name",width:"220"}}),t("sec-table-column",{attrs:{label:"说明",prop:"desc"}})],1),t("h3",[e._v("Scoped Slot")]),t("sec-table",{staticClass:"doc-table",attrs:{data:e.scopedSlot}},[t("sec-table-column",{attrs:{label:"name",prop:"name",width:"220"}}),t("sec-table-column",{attrs:{label:"说明",prop:"desc"}})],1),t("h3",[e._v("Methods")]),t("sec-table",{staticClass:"doc-table",attrs:{data:e.methods}},[t("sec-table-column",{attrs:{label:"方法名",prop:"method",width:"220"}}),t("sec-table-column",{attrs:{label:"说明",prop:"desc"}}),t("sec-table-column",{attrs:{label:"参数",prop:"param",width:"300"}})],1),t("h3",[e._v("Events")]),t("sec-table",{staticClass:"doc-table",attrs:{data:e.events}},[t("sec-table-column",{attrs:{label:"事件名称",prop:"event",width:"220"}}),t("sec-table-column",{attrs:{label:"说明",prop:"desc"}}),t("sec-table-column",{attrs:{label:"回调参数",prop:"param",width:"300"}})],1)],1)},l=[],o=a(3722),s=a(9751),r=a.n(s),c=function(){var e=this,t=e._self._c;return t("sec-transfer",{attrs:{data:e.data},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})},d=[],u=a(1888),i={data(){return{data:(0,u.times)(15,(e=>({key:e,label:`备选项 ${e+1}`,disabled:(e+1)%4===0}))),value:[0,3]}}},v=i,p=a(4940),f=(0,p.Z)(v,c,d,!1,null,null,null),h=f.exports,m=a(9004),b=a.n(m),_=function(){var e=this,t=e._self._c;return t("sec-transfer",{attrs:{filterable:"","filter-placeholder":"请输入城市拼音","filter-method":e.filterMethod,data:e.data},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})},k=[],y={data(){const e=()=>{const e=["上海","北京","广州","深圳","南京","西安","成都"],t=["shanghai","beijing","guangzhou","shenzhen","nanjing","xian","chengdu"];return(0,u.map)(e,((e,a)=>({label:e,key:a,pinyin:t[a]})))};return{data:e(),value:[]}},methods:{filterMethod(e,t){return(0,u.includes)(t.pinyin,e)}}},g=y,x=(0,p.Z)(g,_,k,!1,null,null,null),C=x.exports,$=a(2930),D=a.n($),w=function(){var e=this,t=e._self._c;return t("div",[t("p",{staticClass:"tac mb20"},[e._v("使用 render-content 自定义数据项")]),t("div",{staticClass:"tac"},[t("sec-transfer",{attrs:{filterable:"","left-default-checked":[2,3],"right-default-checked":[1],"render-content":e.renderFunc,titles:["Source","Target"],"button-texts":["到左边","到右边"],format:{noChecked:"${total}",hasChecked:"${checked}/${total}"},data:e.data},on:{change:e.handleChange},scopedSlots:e._u([{key:"left-footer",fn:function(){return[t("sec-btn",{staticClass:"transfer-footer"},[e._v("操作")])]},proxy:!0},{key:"right-footer",fn:function(){return[t("sec-btn",{staticClass:"transfer-footer"},[e._v("操作")])]},proxy:!0}]),model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),t("p",{staticClass:"tac mb20 mt50"},[e._v("使用 scoped-slot 自定义数据项")]),t("div",{staticClass:"tac"},[t("sec-transfer",{attrs:{filterable:"","left-default-checked":[2,3],"right-default-checked":[1],titles:["Source","Target"],"button-texts":["到左边","到右边"],format:{noChecked:"${total}",hasChecked:"${checked}/${total}"},data:e.data},on:{change:e.handleChange},scopedSlots:e._u([{key:"default",fn:function({option:t}){return[e._v(" "+e._s(t.key)+" 3- "+e._s(t.label)+" ")]}},{key:"left-footer",fn:function(){return[t("sec-btn",{staticClass:"transfer-footer"},[e._v("操作")])]},proxy:!0},{key:"right-footer",fn:function(){return[t("sec-btn",{staticClass:"transfer-footer"},[e._v("操作")])]},proxy:!0}]),model:{value:e.value4,callback:function(t){e.value4=t},expression:"value4"}})],1)])},S=[],E={data(){return{data:(0,u.times)(15,(e=>{const t=e+1;return{key:t,label:`备选项 ${t}`,disabled:t%4===0}})),value:[1],value4:[1],renderFunc(e,t){return e("span",`${t.key} - ${t.label}`)}}},methods:{handleChange(e,t,a){console.log(e,t,a)}}},T=E,Z=(0,p.Z)(T,w,S,!1,null,"6be11e90",null),j=Z.exports,M=a(4157),z=a.n(M),F=function(){var e=this,t=e._self._c;return t("sec-transfer",{attrs:{props:{key:"value",label:"desc"},data:e.data},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})},q=[],K={data(){return{data:(0,u.times)(15,(e=>{const t=e+1;return{value:t,desc:`备选项 ${t}`,disabled:t%4===0}})),value:[]}}},A=K,H=(0,p.Z)(A,F,q,!1,null,null,null),L=H.exports,P={components:{DocDemo:o.Z,Demo1:h,Demo2:C,Demo3:j,Demo4:L},data(){return{demo1:r(),demo2:b(),demo3:D(),demo4:z(),attributes:[{attr:"value / v-model",desc:"绑定值",type:"array",value:"—",default:"—"},{attr:"data",desc:"Transfer 的数据源",type:"array[{ key, label, disabled }]",value:"—",default:"[]"},{attr:"filterable",desc:"是否可搜索",type:"boolean",value:"—",default:"false"},{attr:"filter-placeholder",desc:"搜索框占位符",type:"string",value:"—",default:"请输入搜索内容"},{attr:"filter-method",desc:"自定义搜索方法",type:"function",value:"—",default:"—"},{attr:"target-order",desc:"右侧列表元素的排序策略：若为 <code>original</code>，则保持与数据源相同的顺序；若为 <code>push</code>，则新加入的元素排在最后；若为 <code>unshift</code>，则新加入的元素排在最前",type:"string",value:"original / push / unshift",default:"original"},{attr:"titles",desc:"自定义列表标题",type:"array",value:"—",default:"['列表 1', '列表 2']"},{attr:"button-texts",desc:"自定义按钮文案",type:"array",value:"—",default:"[]"},{attr:"render-content",desc:"自定义数据项渲染函数",type:"function(h, option)",value:"—",default:"—"},{attr:"format",desc:"列表顶部勾选状态文案",type:"object{noChecked, hasChecked}",value:"—",default:"{ noChecked: '${checked}/${total}', hasChecked: '${checked}/${total}' }"},{attr:"props",desc:"数据源的字段别名",type:"object{key, label, disabled}",value:"—",default:"—"},{attr:"left-default-checked",desc:"初始状态下左侧列表的已勾选项的 key 数组",type:"array",value:"—",default:"[]"},{attr:"right-default-checked",desc:"初始状态下右侧列表的已勾选项的 key 数组",type:"array",value:"—",default:"[]"}],slots:[{name:"left-footer",desc:"左侧列表底部的内容"},{name:"right-footer",desc:"右侧列表底部的内容"}],scopedSlot:[{name:"—",desc:"自定义数据项的内容，参数为 { option }"}],methods:[{method:"clearQuery",desc:"清空某个面板的搜索关键词",param:"'left' / 'right'，指定需要清空的面板"}],events:[{event:"change",desc:"右侧列表元素变化时触发",param:"当前值、数据移动的方向（'left' / 'right'）、发生移动的数据 key 数组"},{event:"left-check-change",desc:"左侧列表元素被用户选中 / 取消选中时触发",param:"当前被选中的元素的 key 数组、选中状态发生变化的元素的 key 数组"},{event:"right-check-change",desc:"右侧列表元素被用户选中 / 取消选中时触发",param:"当前被选中的元素的 key 数组、选中状态发生变化的元素的 key 数组"}]}}},Q=P,B=(0,p.Z)(Q,n,l,!1,null,null,null),G=B.exports}}]);
//# sourceMappingURL=4076.0b5c27de.js.map