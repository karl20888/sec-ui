(self["webpackChunkdoc"]=self["webpackChunkdoc"]||[]).push([[227],{3983:function(e){e.exports='```vue\n<template>\n  <div>\n    <el-tabs v-model="activeName" class="mb20" @tab-click="handleClick">\n      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>\n      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>\n      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>\n      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>\n    </el-tabs>\n    <sec-tabs v-model="activeName" :tabs="tabs" @change="onChange">\n      <template v-if="activeName === \'first\'">用户管理</template>\n      <template v-else-if="activeName === \'second\'">配置管理</template>\n      <template v-else-if="activeName === \'third\'">角色管理</template>\n      <template v-else-if="activeName === \'fourth\'">定时任务补偿</template>\n    </sec-tabs>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      activeName: \'second\',\n      tabs: [\n        { label: \'用户管理\', name: \'first\' },\n        { label: \'配置管理\', name: \'second\' },\n        { label: \'角色管理\', name: \'third\' },\n        { label: \'定时任务补偿\', name: \'fourth\' },\n      ],\n    };\n  },\n  methods: {\n    handleClick(tab, event) {\n      console.log(tab, event);\n    },\n    onChange(active) {\n      console.log(active);\n    },\n  },\n};\n<\/script>\n```'},7076:function(e){e.exports='```vue\n<template>\n  <div>\n    <el-tabs v-model="activeName" type="card" class="mb20" @tab-click="handleClick">\n      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>\n      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>\n      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>\n      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>\n    </el-tabs>\n    <sec-tabs v-model="activeName" type="card" :tabs="tabs" @change="onChange">\n      <template v-if="activeName === \'first\'">用户管理</template>\n      <template v-else-if="activeName === \'second\'">配置管理</template>\n      <template v-else-if="activeName === \'third\'">角色管理</template>\n      <template v-else-if="activeName === \'fourth\'">定时任务补偿</template>\n    </sec-tabs>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      activeName: \'second\',\n      tabs: [\n        { label: \'用户管理\', name: \'first\' },\n        { label: \'配置管理\', name: \'second\' },\n        { label: \'角色管理\', name: \'third\' },\n        { label: \'定时任务补偿\', name: \'fourth\' },\n      ],\n    };\n  },\n  methods: {\n    handleClick(tab, event) {\n      console.log(tab, event);\n    },\n    onChange(active) {\n      console.log(active);\n    },\n  },\n};\n<\/script>\n```'},6445:function(e){e.exports='```vue\n<template>\n  <div>\n    <el-tabs type="border-card" class="mb20">\n      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>\n      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>\n      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>\n      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>\n    </el-tabs>\n    <sec-tabs type="border-card" :tabs="tabs">\n      <template v-if="activeName === \'first\'">用户管理</template>\n      <template v-else-if="activeName === \'second\'">配置管理</template>\n      <template v-else-if="activeName === \'third\'">角色管理</template>\n      <template v-else-if="activeName === \'fourth\'">定时任务补偿</template>\n    </sec-tabs>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      tabs: [\n        { label: \'用户管理\', name: \'first\' },\n        { label: \'配置管理\', name: \'second\' },\n        { label: \'角色管理\', name: \'third\' },\n        { label: \'定时任务补偿\', name: \'fourth\' },\n      ],\n    };\n  },\n};\n<\/script>\n```'},9964:function(e){e.exports='```vue\n<template>\n  <div>\n    <sec-radio-group v-model="tabPosition" class="mb20">\n      <sec-radio-button label="top">top</sec-radio-button>\n      <sec-radio-button label="right">right</sec-radio-button>\n      <sec-radio-button label="bottom">bottom</sec-radio-button>\n      <sec-radio-button label="left">left</sec-radio-button>\n    </sec-radio-group>\n    <el-tabs :tab-position="tabPosition" class="mb20" style="height: 200px;">\n      <el-tab-pane label="用户管理">用户管理</el-tab-pane>\n      <el-tab-pane label="配置管理">配置管理</el-tab-pane>\n      <el-tab-pane label="角色管理">角色管理</el-tab-pane>\n      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>\n    </el-tabs>\n    <sec-tabs v-model="active" :tabs="tabs" :tab-position="tabPosition" height="200px">\n      <template v-if="active === \'a\'">用户管理</template>\n      <template v-if="active === \'b\'">配置管理</template>\n      <template v-if="active === \'c\'">角色管理</template>\n      <template v-if="active === \'d\'">定时任务补偿</template>\n    </sec-tabs>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      tabPosition: \'left\',\n      active: \'a\',\n      tabs: [\n        { label: \'用户管理\', name: \'a\' },\n        { label: \'配置管理\', name: \'b\' },\n        { label: \'角色管理\', name: \'c\' },\n        { label: \'定时任务补偿\', name: \'d\' },\n      ],\n    };\n  },\n};\n<\/script>\n```'},8909:function(e){e.exports='```vue\n<template>\n  <div>\n    <el-tabs type="border-card" class="mb20">\n      <el-tab-pane>\n        <template #label>\n          <i class="el-icon-date"></i>\n          我的行程\n        </template>\n        我的行程\n      </el-tab-pane>\n      <el-tab-pane label="消息中心">消息中心</el-tab-pane>\n      <el-tab-pane label="角色管理">角色管理</el-tab-pane>\n      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>\n    </el-tabs>\n    <sec-tabs v-model="active" :tabs="tabs" type="border-card">\n      <template #label="{ label, name }">\n        <template v-if="name === \'a\'">\n          <i class="el-icon-date"></i>\n          {{ label }}\n        </template>\n        <template v-else>\n          {{ label }}\n        </template>\n      </template>\n      <template v-if="active === \'a\'">我的行程</template>\n      <template v-if="active === \'b\'">消息中心</template>\n      <template v-if="active === \'c\'">角色管理</template>\n      <template v-if="active === \'d\'">定时任务补偿</template>\n    </sec-tabs>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      active: \'a\',\n      tabs: [\n        { label: \'我的行程\', name: \'a\' },\n        { label: \'消息中心\', name: \'b\' },\n        { label: \'角色管理\', name: \'c\' },\n        { label: \'定时任务补偿\', name: \'d\' },\n      ],\n    };\n  },\n};\n<\/script>\n```'},4800:function(e){e.exports="```vue\n<template>\n  <el-tabs\n    v-model=\"editableTabsValue\"\n    type=\"card\"\n    editable\n    @edit=\"handleTabsEdit\"\n  >\n    <el-tab-pane\n      v-for=\"item in editableTabs\"\n      :key=\"item.name\"\n      :label=\"item.title\"\n      :name=\"item.name\"\n    >{{ item.content }}</el-tab-pane>\n  </el-tabs>\n</template>\n\n<script>\nimport { each, filter } from 'lodash';\n\nexport default {\n  data() {\n    return {\n      editableTabsValue: '2',\n      editableTabs: [{\n        title: 'Tab 1',\n        name: '1',\n        content: 'Tab 1 content',\n      }, {\n        title: 'Tab 2',\n        name: '2',\n        content: 'Tab 2 content',\n      }],\n      tabIndex: 2,\n    };\n  },\n  methods: {\n    handleTabsEdit(target, action) {\n      if (action === 'add') {\n        this.tabIndex += 1;\n        const name = `${this.tabIndex}`;\n        this.editableTabs.push({\n          title: 'New Tab',\n          name,\n          content: 'New Tab content',\n        });\n        this.editableTabsValue = name;\n      }\n      if (action === 'remove') {\n        const tabs = this.editableTabs;\n        let active = this.editableTabsValue;\n        if (active === target) {\n          each(tabs, (tab, index) => {\n            if (tab.name === target) {\n              const next = tabs[index + 1] || tabs[index - 1];\n              if (next) {\n                active = next.name;\n              }\n            }\n          });\n        }\n        this.editableTabsValue = active;\n        this.editableTabs = filter(tabs, (tab) => tab.name !== target);\n      }\n    },\n  },\n};\n<\/script>\n```"},4806:function(e){e.exports='```vue\n<template>\n  <div>\n    <sec-btn class="mb20" @click="addTab">add tab</sec-btn>\n    <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">\n      <el-tab-pane\n        v-for="item in editableTabs"\n        :key="item.name"\n        :label="item.label"\n        :name="item.name"\n      >{{ item.content }}</el-tab-pane>\n    </el-tabs>\n    <sec-tabs\n      v-model="editableTabsValue"\n      type="card"\n      closable\n      :tabs="editableTabs"\n      @tab-remove="removeTab"\n    ></sec-tabs>\n  </div>\n</template>\n\n<script>\nimport { each, filter } from \'lodash\';\n\nexport default {\n  data() {\n    return {\n      editableTabsValue: \'2\',\n      editableTabs: [\n        { label: \'Tab 1\', name: \'1\', content: \'Tab 1 content\' },\n        { label: \'Tab 2\', name: \'2\', content: \'Tab 2 content\' },\n      ],\n      tabIndex: 2,\n    };\n  },\n  methods: {\n    addTab() {\n      this.tabIndex += 1;\n      const name = `${this.tabIndex}`;\n      this.editableTabs.push({\n        label: \'New Tab\',\n        name,\n        content: \'New Tab content\',\n      });\n      this.editableTabsValue = name;\n    },\n    removeTab(target) {\n      const tabs = this.editableTabs;\n      let active = this.editableTabsValue;\n      if (active === target) {\n        each(tabs, (tab, index) => {\n          if (tab.name === target) {\n            const next = tabs[index + 1] || tabs[index - 1];\n            if (next) {\n              active = next.name;\n            }\n          }\n        });\n      }\n      this.editableTabsValue = active;\n      this.editableTabs = filter(tabs, (tab) => tab.name !== target);\n    },\n  },\n};\n<\/script>\n```'},7018:function(e){e.exports='```vue\n<template>\n  <div>\n    <sec-form>\n      <sec-form-item label="位置">\n        <sec-radio-group v-model="position">\n          <sec-radio-button label="top">top</sec-radio-button>\n          <sec-radio-button label="right">right</sec-radio-button>\n          <sec-radio-button label="bottom">bottom</sec-radio-button>\n          <sec-radio-button label="left">left</sec-radio-button>\n        </sec-radio-group>\n      </sec-form-item>\n      <sec-form-item label="样式">\n        <sec-radio-group v-model="type">\n          <sec-radio-button label="">普通</sec-radio-button>\n          <sec-radio-button label="card">选项卡</sec-radio-button>\n          <sec-radio-button label="border-card">卡片化</sec-radio-button>\n        </sec-radio-group>\n      </sec-form-item>\n    </sec-form>\n    <sec-tabs\n      v-model="activeName"\n      height="288px"\n      :tabs="tabs"\n      :tab-position="position"\n      :type="type"\n      @change="onChange"\n    >\n      <template #extra>\n        <sec-btn type="text">新增</sec-btn>\n      </template>\n      <template v-if="activeName === \'first\'">用户管理</template>\n      <template v-else-if="activeName === \'second\'">配置管理</template>\n      <template v-else-if="activeName === \'third\'">角色管理</template>\n      <template v-else-if="activeName === \'fourth\'">定时任务补偿</template>\n    </sec-tabs>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      activeName: \'second\',\n      position: \'left\',\n      type: \'\',\n      tabs: [\n        { label: \'用户管理\', name: \'first\' },\n        { label: \'配置管理\', name: \'second\' },\n        { label: \'角色管理\', name: \'third\' },\n        { label: \'定时任务补偿\', name: \'fourth\' },\n      ],\n    };\n  },\n  methods: {\n    onChange(active) {\n      console.log(active);\n    },\n  },\n};\n<\/script>\n```'},3722:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"doc-demo"},[t("div",{staticClass:"doc-demo-source"},[e._t("source")],2),t("div",{staticClass:"doc-demo-meta",class:{"is-expanded":e.isExpanded}},[e.$slots.default?t("div",{staticClass:"doc-demo-desc"},[e._t("default")],2):e._e(),t("markdown-it-vue",{attrs:{content:e.markdown}})],1),t("div",{staticClass:"doc-demo-control",on:{click:function(t){e.isExpanded=!e.isExpanded},keydown:function(t){e.isExpanded=!e.isExpanded}}},[e.isExpanded?t("i",{staticClass:"el-icon-caret-top"}):t("i",{staticClass:"el-icon-caret-bottom"}),t("span",[e.isExpanded?[e._v("隐藏代码")]:[e._v("显示代码")]],2)])])},l=[],s={props:{markdown:{type:String,default:""}},data(){return{isExpanded:!1}}},o=s,b=a(4940),i=(0,b.Z)(o,n,l,!1,null,null,null),c=i.exports},227:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return ye}});var n=function(){var e=this,t=e._self._c;return t("sec-block",{staticClass:"doc-block"},[t("h2",[e._v("Tabs 标签页")]),t("p",[e._v("分隔内容上有关联但属于不同类型的数据集合。")]),t("div",{staticClass:"tip"},[t("p",[e._v("SecUI 直接提供 ElementUI 的 "),t("code",[e._v("el-tabs")]),e._v("，同时提供扩展后的 "),t("code",[e._v("sec-tabs")]),e._v("，下面例子分别用两种方式展示。")])]),t("h3",[e._v("基础用法")]),t("p",[e._v("基础的、简洁的标签页。")]),t("DocDemo",{attrs:{markdown:e.demo1},scopedSlots:e._u([{key:"source",fn:function(){return[t("Demo1")]},proxy:!0}])},[t("p",[e._v("Tabs 组件提供了选项卡功能，默认选中第一个标签页，你也可以通过 "),t("code",[e._v("value")]),e._v(" 属性来指定当前选中的标签页。")])]),t("h3",[e._v("选项卡样式")]),t("p",[e._v("选项卡样式的标签页。")]),t("DocDemo",{attrs:{markdown:e.demo2},scopedSlots:e._u([{key:"source",fn:function(){return[t("Demo2")]},proxy:!0}])},[t("p",[e._v("只需要设置 "),t("code",[e._v("type")]),e._v(" 属性为 "),t("code",[e._v("card")]),e._v(" 就可以使选项卡改变为标签风格。")])]),t("h3",[e._v("卡片化")]),t("p",[e._v("卡片化的标签页。")]),t("DocDemo",{attrs:{markdown:e.demo3},scopedSlots:e._u([{key:"source",fn:function(){return[t("Demo3")]},proxy:!0}])},[t("p",[e._v("将 "),t("code",[e._v("type")]),e._v(" 设置为 "),t("code",[e._v("border-card")]),e._v("。")])]),t("h3",[e._v("位置")]),t("p",[e._v("可以通过 "),t("code",[e._v("tob-position")]),e._v(" 设置标签的位置。")]),t("DocDemo",{attrs:{markdown:e.demo4},scopedSlots:e._u([{key:"source",fn:function(){return[t("Demo4")]},proxy:!0}])},[t("p",[e._v("标签一共有四个方向的设置 "),t("code",[e._v('tabPosition="left | right | top | bottom"')])])]),t("h3",[e._v("自定义标签页")]),t("p",[e._v("可以通过具名 "),t("code",[e._v("slot")]),e._v(" 来实现自定义标签页的内容。")]),t("DocDemo",{attrs:{markdown:e.demo5},scopedSlots:e._u([{key:"source",fn:function(){return[t("Demo5")]},proxy:!0}])}),t("h3",[e._v("动态增减标签页")]),t("p",[e._v("增减标签页按钮只能在选项卡样式的标签页下使用。")]),t("div",{staticClass:"tip"},[t("p",[e._v("动态增减标签页功能暂时请使用 "),t("code",[e._v("el-tabs")]),e._v(" 组件，虽然 "),t("code",[e._v("sec-tabs")]),e._v(" 用起来也没什么太大问题，但可能会产生不可预知的错误。")])]),t("DocDemo",{attrs:{markdown:e.demo6},scopedSlots:e._u([{key:"source",fn:function(){return[t("Demo6")]},proxy:!0}])}),t("h3",[e._v("自定义增加标签页触发器")]),t("div",{staticClass:"tip"},[t("p",[e._v("同上例一样，暂时请使用 "),t("code",[e._v("el-tabs")]),e._v(" 组件，虽然 "),t("code",[e._v("sec-tabs")]),e._v(" 用起来也没什么太大问题，但可能会产生不可预知的错误。")])]),t("DocDemo",{attrs:{markdown:e.demo7},scopedSlots:e._u([{key:"source",fn:function(){return[t("Demo7")]},proxy:!0}])}),t("h3",[e._v("扩展区域")]),t("p",[t("code",[e._v("sec-tabs")]),e._v(" 提供可自定义的扩展区域，使用名为 "),t("code",[e._v("extra")]),e._v(" 的 Slot。")]),t("DocDemo",{attrs:{markdown:e.demo8},scopedSlots:e._u([{key:"source",fn:function(){return[t("Demo8")]},proxy:!0}])}),t("h3",[e._v("Tabs Attributes")]),t("sec-table",{staticClass:"doc-table",attrs:{data:e.tabsAttributes}},[t("sec-table-column",{attrs:{label:"参数",prop:"attr",width:"140"}}),t("sec-table-column",{attrs:{label:"说明",prop:"desc"}}),t("sec-table-column",{attrs:{label:"类型",prop:"type",width:"170"}}),t("sec-table-column",{attrs:{label:"可选值",prop:"value",width:"200"}}),t("sec-table-column",{attrs:{label:"默认值",prop:"default",width:"180"}})],1),t("h3",[e._v("Tabs Events")]),t("sec-table",{staticClass:"doc-table",attrs:{data:e.tabsEvents}},[t("sec-table-column",{attrs:{label:"事件名称",prop:"event",width:"220"}}),t("sec-table-column",{attrs:{label:"说明",prop:"desc"}}),t("sec-table-column",{attrs:{label:"回调参数",prop:"param",width:"250"}})],1),t("h3",[e._v("Tabs Slots")]),t("sec-table",{staticClass:"doc-table",attrs:{data:e.tabsSlots}},[t("sec-table-column",{attrs:{label:"name",prop:"name",width:"220"}}),t("sec-table-column",{attrs:{label:"说明",prop:"desc"}})],1),t("h3",[e._v("Tab-pane Attributes")]),t("sec-table",{staticClass:"doc-table",attrs:{data:e.tabPaneAttributes}},[t("sec-table-column",{attrs:{label:"参数",prop:"attr",width:"220"}}),t("sec-table-column",{attrs:{label:"说明",prop:"desc"}}),t("sec-table-column",{attrs:{label:"类型",prop:"type",width:"80"}}),t("sec-table-column",{attrs:{label:"可选值",prop:"value",width:"80"}}),t("sec-table-column",{attrs:{label:"默认值",prop:"default",width:"300"}})],1)],1)},l=[],s=a(3722),o=a(3983),b=a.n(o),i=function(){var e=this,t=e._self._c;return t("div",[t("el-tabs",{staticClass:"mb20",on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[t("el-tab-pane",{attrs:{label:"用户管理",name:"first"}},[e._v("用户管理")]),t("el-tab-pane",{attrs:{label:"配置管理",name:"second"}},[e._v("配置管理")]),t("el-tab-pane",{attrs:{label:"角色管理",name:"third"}},[e._v("角色管理")]),t("el-tab-pane",{attrs:{label:"定时任务补偿",name:"fourth"}},[e._v("定时任务补偿")])],1),t("sec-tabs",{attrs:{tabs:e.tabs},on:{change:e.onChange},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},["first"===e.activeName?[e._v("用户管理")]:"second"===e.activeName?[e._v("配置管理")]:"third"===e.activeName?[e._v("角色管理")]:"fourth"===e.activeName?[e._v("定时任务补偿")]:e._e()],2)],1)},c=[],r={data(){return{activeName:"second",tabs:[{label:"用户管理",name:"first"},{label:"配置管理",name:"second"},{label:"角色管理",name:"third"},{label:"定时任务补偿",name:"fourth"}]}},methods:{handleClick(e,t){console.log(e,t)},onChange(e){console.log(e)}}},d=r,m=a(4940),p=(0,m.Z)(d,i,c,!1,null,null,null),v=p.exports,u=a(7076),f=a.n(u),h=function(){var e=this,t=e._self._c;return t("div",[t("el-tabs",{staticClass:"mb20",attrs:{type:"card"},on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[t("el-tab-pane",{attrs:{label:"用户管理",name:"first"}},[e._v("用户管理")]),t("el-tab-pane",{attrs:{label:"配置管理",name:"second"}},[e._v("配置管理")]),t("el-tab-pane",{attrs:{label:"角色管理",name:"third"}},[e._v("角色管理")]),t("el-tab-pane",{attrs:{label:"定时任务补偿",name:"fourth"}},[e._v("定时任务补偿")])],1),t("sec-tabs",{attrs:{type:"card",tabs:e.tabs},on:{change:e.onChange},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},["first"===e.activeName?[e._v("用户管理")]:"second"===e.activeName?[e._v("配置管理")]:"third"===e.activeName?[e._v("角色管理")]:"fourth"===e.activeName?[e._v("定时任务补偿")]:e._e()],2)],1)},_=[],x={data(){return{activeName:"first",tabs:[{label:"用户管理",name:"first"},{label:"配置管理",name:"second"},{label:"角色管理",name:"third"},{label:"定时任务补偿",name:"fourth"}]}},methods:{handleClick(e,t){console.log(e,t)},onChange(e){console.log(e)}}},T=x,y=(0,m.Z)(T,h,_,!1,null,null,null),g=y.exports,N=a(6445),k=a.n(N),C=function(){var e=this,t=e._self._c;return t("div",[t("el-tabs",{staticClass:"mb20",attrs:{type:"border-card"}},[t("el-tab-pane",{attrs:{label:"用户管理"}},[e._v("用户管理")]),t("el-tab-pane",{attrs:{label:"配置管理"}},[e._v("配置管理")]),t("el-tab-pane",{attrs:{label:"角色管理"}},[e._v("角色管理")]),t("el-tab-pane",{attrs:{label:"定时任务补偿"}},[e._v("定时任务补偿")])],1),t("sec-tabs",{attrs:{type:"border-card",tabs:e.tabs}},["first"===e.activeName?[e._v("用户管理")]:"second"===e.activeName?[e._v("配置管理")]:"third"===e.activeName?[e._v("角色管理")]:"fourth"===e.activeName?[e._v("定时任务补偿")]:e._e()],2)],1)},D=[],w={data(){return{activeName:"first",tabs:[{label:"用户管理",name:"first"},{label:"配置管理",name:"second"},{label:"角色管理",name:"third"},{label:"定时任务补偿",name:"fourth"}]}}},V=w,S=(0,m.Z)(V,C,D,!1,null,null,null),E=S.exports,I=a(9964),P=a.n(I),Z=function(){var e=this,t=e._self._c;return t("div",[t("sec-radio-group",{staticClass:"mb20",model:{value:e.tabPosition,callback:function(t){e.tabPosition=t},expression:"tabPosition"}},[t("sec-radio-button",{attrs:{label:"top"}},[e._v("top")]),t("sec-radio-button",{attrs:{label:"right"}},[e._v("right")]),t("sec-radio-button",{attrs:{label:"bottom"}},[e._v("bottom")]),t("sec-radio-button",{attrs:{label:"left"}},[e._v("left")])],1),t("el-tabs",{staticClass:"mb20",staticStyle:{height:"200px"},attrs:{"tab-position":e.tabPosition}},[t("el-tab-pane",{attrs:{label:"用户管理"}},[e._v("用户管理")]),t("el-tab-pane",{attrs:{label:"配置管理"}},[e._v("配置管理")]),t("el-tab-pane",{attrs:{label:"角色管理"}},[e._v("角色管理")]),t("el-tab-pane",{attrs:{label:"定时任务补偿"}},[e._v("定时任务补偿")])],1),t("sec-tabs",{attrs:{tabs:e.tabs,"tab-position":e.tabPosition,height:"200px"},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},["a"===e.active?[e._v("用户管理")]:e._e(),"b"===e.active?[e._v("配置管理")]:e._e(),"c"===e.active?[e._v("角色管理")]:e._e(),"d"===e.active?[e._v("定时任务补偿")]:e._e()],2)],1)},A=[],$={data(){return{tabPosition:"left",active:"a",tabs:[{label:"用户管理",name:"a"},{label:"配置管理",name:"b"},{label:"角色管理",name:"c"},{label:"定时任务补偿",name:"d"}]}}},U=$,j=(0,m.Z)(U,Z,A,!1,null,null,null),z=j.exports,F=a(8909),q=a.n(F),B=function(){var e=this,t=e._self._c;return t("div",[t("el-tabs",{staticClass:"mb20",attrs:{type:"border-card"}},[t("el-tab-pane",{scopedSlots:e._u([{key:"label",fn:function(){return[t("i",{staticClass:"el-icon-date"}),e._v(" 我的行程 ")]},proxy:!0}])},[e._v(" 我的行程 ")]),t("el-tab-pane",{attrs:{label:"消息中心"}},[e._v("消息中心")]),t("el-tab-pane",{attrs:{label:"角色管理"}},[e._v("角色管理")]),t("el-tab-pane",{attrs:{label:"定时任务补偿"}},[e._v("定时任务补偿")])],1),t("sec-tabs",{attrs:{tabs:e.tabs,type:"border-card"},scopedSlots:e._u([{key:"label",fn:function({label:a,name:n}){return["a"===n?[t("i",{staticClass:"el-icon-date"}),e._v(" "+e._s(a)+" ")]:[e._v(" "+e._s(a)+" ")]]}}]),model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},["a"===e.active?[e._v("我的行程")]:e._e(),"b"===e.active?[e._v("消息中心")]:e._e(),"c"===e.active?[e._v("角色管理")]:e._e(),"d"===e.active?[e._v("定时任务补偿")]:e._e()],2)],1)},G=[],H={data(){return{active:"a",tabs:[{label:"我的行程",name:"a"},{label:"消息中心",name:"b"},{label:"角色管理",name:"c"},{label:"定时任务补偿",name:"d"}]}}},J=H,K=(0,m.Z)(J,B,G,!1,null,null,null),L=K.exports,M=a(4800),O=a.n(M),Q=function(){var e=this,t=e._self._c;return t("el-tabs",{attrs:{type:"card",editable:""},on:{edit:e.handleTabsEdit},model:{value:e.editableTabsValue,callback:function(t){e.editableTabsValue=t},expression:"editableTabsValue"}},e._l(e.editableTabs,(function(a){return t("el-tab-pane",{key:a.name,attrs:{label:a.title,name:a.name}},[e._v(e._s(a.content))])})),1)},R=[],W=a(1888),X={data(){return{editableTabsValue:"2",editableTabs:[{title:"Tab 1",name:"1",content:"Tab 1 content"},{title:"Tab 2",name:"2",content:"Tab 2 content"}],tabIndex:2}},methods:{handleTabsEdit(e,t){if("add"===t){this.tabIndex+=1;const e=`${this.tabIndex}`;this.editableTabs.push({title:"New Tab",name:e,content:"New Tab content"}),this.editableTabsValue=e}if("remove"===t){const t=this.editableTabs;let a=this.editableTabsValue;a===e&&(0,W.each)(t,((n,l)=>{if(n.name===e){const e=t[l+1]||t[l-1];e&&(a=e.name)}})),this.editableTabsValue=a,this.editableTabs=(0,W.filter)(t,(t=>t.name!==e))}}}},Y=X,ee=(0,m.Z)(Y,Q,R,!1,null,null,null),te=ee.exports,ae=a(4806),ne=a.n(ae),le=function(){var e=this,t=e._self._c;return t("div",[t("sec-btn",{staticClass:"mb20",on:{click:e.addTab}},[e._v("add tab")]),t("el-tabs",{attrs:{type:"card",closable:""},on:{"tab-remove":e.removeTab},model:{value:e.editableTabsValue,callback:function(t){e.editableTabsValue=t},expression:"editableTabsValue"}},e._l(e.editableTabs,(function(a){return t("el-tab-pane",{key:a.name,attrs:{label:a.title,name:a.name}},[e._v(e._s(a.content))])})),1)],1)},se=[],oe={data(){return{editableTabsValue:"2",editableTabs:[{title:"Tab 1",name:"1",content:"Tab 1 content"},{title:"Tab 2",name:"2",content:"Tab 2 content"}],tabIndex:2}},methods:{addTab(){this.tabIndex+=1;const e=`${this.tabIndex}`;this.editableTabs.push({title:"New Tab",name:e,content:"New Tab content"}),this.editableTabsValue=e},removeTab(e){const t=this.editableTabs;let a=this.editableTabsValue;a===e&&(0,W.each)(t,((n,l)=>{if(n.name===e){const e=t[l+1]||t[l-1];e&&(a=e.name)}})),this.editableTabsValue=a,this.editableTabs=(0,W.filter)(t,(t=>t.name!==e))}}},be=oe,ie=(0,m.Z)(be,le,se,!1,null,null,null),ce=ie.exports,re=a(7018),de=a.n(re),me=function(){var e=this,t=e._self._c;return t("div",[t("sec-form",[t("sec-form-item",{attrs:{label:"位置"}},[t("sec-radio-group",{model:{value:e.position,callback:function(t){e.position=t},expression:"position"}},[t("sec-radio-button",{attrs:{label:"top"}},[e._v("top")]),t("sec-radio-button",{attrs:{label:"right"}},[e._v("right")]),t("sec-radio-button",{attrs:{label:"bottom"}},[e._v("bottom")]),t("sec-radio-button",{attrs:{label:"left"}},[e._v("left")])],1)],1),t("sec-form-item",{attrs:{label:"样式"}},[t("sec-radio-group",{model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[t("sec-radio-button",{attrs:{label:""}},[e._v("普通")]),t("sec-radio-button",{attrs:{label:"card"}},[e._v("选项卡")]),t("sec-radio-button",{attrs:{label:"border-card"}},[e._v("卡片化")])],1)],1)],1),t("sec-tabs",{attrs:{height:"288px",tabs:e.tabs,"tab-position":e.position,type:e.type},on:{change:e.onChange},scopedSlots:e._u([{key:"extra",fn:function(){return[t("sec-btn",{attrs:{type:"text"}},[e._v("新增")])]},proxy:!0}]),model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},["first"===e.activeName?[e._v("用户管理")]:"second"===e.activeName?[e._v("配置管理")]:"third"===e.activeName?[e._v("角色管理")]:"fourth"===e.activeName?[e._v("定时任务补偿")]:e._e()],2)],1)},pe=[],ve={data(){return{activeName:"second",position:"left",type:"",tabs:[{label:"用户管理",name:"first"},{label:"配置管理",name:"second"},{label:"角色管理",name:"third"},{label:"定时任务补偿",name:"fourth"}]}},methods:{onChange(e){console.log(e)}}},ue=ve,fe=(0,m.Z)(ue,me,pe,!1,null,null,null),he=fe.exports,_e={components:{DocDemo:s.Z,Demo1:v,Demo2:g,Demo3:E,Demo4:z,Demo5:L,Demo6:te,Demo7:ce,Demo8:he},data(){return{demo1:b(),demo2:f(),demo3:k(),demo4:P(),demo5:q(),demo6:O(),demo7:ne(),demo8:de(),tabsAttributes:[{attr:"value / v-model",desc:"绑定值，选中选项卡的 name",type:"string",value:"—",default:"第一个选项卡的 name，sec-tabs 中必须指定"},{attr:"type",desc:"风格类型",type:"string",value:"card / border-card",default:"—"},{attr:"closable",desc:"标签是否可关闭",type:"boolean",value:"—",default:"false"},{attr:"addable",desc:"标签是否可增加",type:"boolean",value:"—",default:"false"},{attr:"editable",desc:"标签是否同时可增加和关闭",type:"boolean",value:"—",default:"false"},{attr:"tab-position",desc:"选项卡所在位置",type:"string",value:"top / right / bottom / left",default:"top"},{attr:"stretch",desc:"标签的宽度是否自撑开",type:"boolean",value:"—",default:"false"},{attr:"before-leave",desc:"切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。",type:"Function(activeName, oldActiveName)",value:"—",default:"—"},{attr:"full",desc:"如果为 true 则高度会占满父元素的高度，仅 sec-tabs 可用",type:"boolean",value:"—",default:"false"},{attr:"tabs",desc:"标签列表，通过含有 label 和 name 的数组设置，仅 sec-tabs 可用",type:"Array",value:"—",default:"[]"},{attr:"height",desc:"高度，style 的 height 值",type:"String",value:"—",default:"—"}],tabsEvents:[{event:"tab-click",desc:"tab 被选中时触发",param:"被选中的标签 tab 实例"},{event:"tab-remove",desc:"点击 tab 移除按钮后触发",param:"被删除的标签的 name"},{event:"tab-add",desc:"点击 tabs 的新增按钮后触发",param:"—"},{event:"edit",desc:"点击 tabs 的新增按钮或 tab 被关闭后触发",param:"(targetName, action)"},{event:"change",desc:"仅 sec-tabs 中可用，当标签切换时触发",param:"被选中的标签 name"}],tabsSlots:[{name:"extra",desc:"自定义扩展区域内容"}],tabPaneAttributes:[{attr:"label",desc:"选项卡标题",type:"string",value:"—",default:"—"},{attr:"disabled",desc:"是否禁用",type:"boolean",value:"—",default:"false"},{attr:"name",desc:"与选项卡绑定值 value 对应的标识符，表示选项卡别名",type:"string",value:"—",default:"该选项卡在选项卡列表中的顺序值，如第一个选项卡则为 '1'"},{attr:"closable",desc:"标签是否可关闭",type:"boolean",value:"—",default:"false"},{attr:"lazy",desc:"标签是否延迟渲染",type:"boolean",value:"—",default:"false"}]}}},xe=_e,Te=(0,m.Z)(xe,n,l,!1,null,null,null),ye=Te.exports}}]);
//# sourceMappingURL=227.7905847b.js.map