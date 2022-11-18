<!-- eslint-disable max-len -->
<template>
  <sec-block class="doc-block">
    <h2>Cascader 级联选择器</h2>
    <p>当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。</p>
    <h3>基础用法</h3>
    <p>有两种触发子菜单的方式</p>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
      </template>
      <p>只需为 Cascader 的 <code>options</code> 属性指定选项数组即可渲染出一个级联选择器。通过 <code>props.expandTrigger</code> 可以定义展开子级菜单的触发方式。</p>
    </DocDemo>
    <h3>禁用选项</h3>
    <p>通过在数据源中设置 <code>disabled</code> 字段来声明该选项是禁用的</p>
    <DocDemo :markdown="demo2">
      <template #source>
        <Demo2></Demo2>
      </template>
      <p>本例中，<code>options</code> 指定的数组中的第一个元素含有 <code>disabled: true</code> 键值对，因此是禁用的。在默认情况下，Cascader 会检查数据中每一项的 <code>disabled</code> 字段是否为 <code>true</code>，如果你的数据中表示禁用含义的字段名不为 <code>disabled</code>，可以通过 <code>props.disabled</code> 属性来指定（想见下方 API 表格）。当然，<code>value</code>、<code>label</code> 和 <code>children</code> 这三个字段名也可以通过同样的方式指定。</p>
    </DocDemo>
    <h3>可清空</h3>
    <p>通过 <code>clearable</code> 设置输入框可清空</p>
    <DocDemo :markdown="demo3">
      <template #source>
        <Demo3></Demo3>
      </template>
    </DocDemo>
    <h3>仅显示最后一级</h3>
    <p>可以仅在输入框中显示选中项最后一级的标签，而不是选中项所在的完整路径。</p>
    <DocDemo :markdown="demo4">
      <template #source>
        <Demo4></Demo4>
      </template>
      <p>属性 <code>show-all-levels</code> 定义了是否显示完整的路径，将其赋值为 <code>false</code> 则仅显示最后一级</p>
    </DocDemo>
    <h3>多选</h3>
    <p>可通过 <code>props.multiple = true</code> 来开启多选模式</p>
    <DocDemo :markdown="demo5">
      <template #source>
        <Demo5></Demo5>
      </template>
      <p>在开启多选模式后，默认情况下会展示所有已选中的选项的 Tag，你可以使用 <code>callapse-tags</code> 来折叠 Tag</p>
    </DocDemo>
    <h3>选择任意一级选项</h3>
    <p>在单选模式下，你只能选择叶子节点；而在多选模式下，勾选父节点真正选中的都是叶子节点。启用该功能后，可让父子节点取消关联，选择任意一级选项。</p>
    <DocDemo :markdown="demo6">
      <template #source>
        <Demo6></Demo6>
      </template>
      <p>可通过 <code>props.checkStrictly = true</code> 来设置父子节点取消选中关联，从而达到选择任意一级选项的目的。</p>
    </DocDemo>
    <h3>动态加载</h3>
    <p>当选中某一级时，动态加载该级下的选项。</p>
    <DocDemo :markdown="demo7">
      <template #source>
        <Demo7></Demo7>
      </template>
      <p>通过 <code>lazy</code> 开启动态加载，并通过 <code>lazyLoad</code> 来设置加载数据源的方法。<code>lazyLoad</code> 方法有两个参数，第一个参数 <code>node</code> 为当前点击的节点，第二个 <code>resolve</code> 为数据加载完成的回调（必须调用）。为了更准确地显示节点的状态，还可以对节点数据添加是否为叶子节点的标志位（默认字段为 <code>leaf</code>，可通过 <code>props.leaf</code> 修改），否则会简单地以有无子节点来判断是否为叶子节点。</p>
    </DocDemo>
    <h3>可搜索</h3>
    <p>可以快捷地搜索选项并选择。</p>
    <DocDemo :markdown="demo8">
      <template #source>
        <Demo8></Demo8>
      </template>
      <p>将 <code>filterable</code> 赋值为 <code>true</code> 即可打开搜索功能，默认会匹配节点的 <code>label</code> 或所有父节点的 <code>label</code>（由 <code>show-all-levels</code> 决定）中包含输入值的选项。你也可以用 <code>filter-method</code> 自定义搜索逻辑，接受一个函数，第一个参数是节点 <code>node</code>，第二个参数是搜索关键词 <code>keyword</code>，通过返回布尔值表示是否命中。</p>
    </DocDemo>
    <h3>自定义节点内容</h3>
    <p>可以自定义备选项的节点内容</p>
    <DocDemo :markdown="demo9">
      <template #source>
        <Demo9></Demo9>
      </template>
      <p>可以通过 <code>scoped slot</code> 对级联选择器的备选项的节点内容进行自定义，scoped slot 会传入两个字段 <code>node</code> 和 <code>data</code>，分别表示当前节点的 Node 对象和数据。</p>
    </DocDemo>
    <h3>级联面板</h3>
    <p>级联面板是级联选择器的核心组件，与级联选择器一样，有单选、多选、动态加载多种功能。</p>
    <DocDemo :markdown="demo10">
      <template #source>
        <Demo10></Demo10>
      </template>
      <p>和级联选择器一样，通过 <code>options</code> 来指定选项，也可通过 <code>props</code> 来设置多选、动态加载等功能，具体详情见下方 API 表格。</p>
    </DocDemo>
    <h3>Cascader Attributes</h3>
    <sec-table class="doc-table" :data="cascaderAttributes">
      <sec-table-column label="参数" prop="attr" width="150"></sec-table-column>
      <sec-table-column label="说明">
        <template #default="{ row }">
          <span v-html="row.desc"></span>
        </template>
      </sec-table-column>
      <sec-table-column label="类型" prop="type" width="200"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="200"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="100"></sec-table-column>
    </sec-table>
    <h3>Cascader Events</h3>
    <sec-table class="doc-table" :data="cascaderEvents">
      <sec-table-column label="事件名称" prop="event" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="回调参数" prop="param" width="300"></sec-table-column>
    </sec-table>
    <h3>Cascader Methods</h3>
    <sec-table class="doc-table" :data="cascaderMethods">
      <sec-table-column label="方法名" prop="method" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="参数" width="400">
        <template #default="{ row }">
          <span v-html="row.param"></span>
        </template>
      </sec-table-column>
    </sec-table>
    <h3>Cascader Slots</h3>
    <sec-table class="doc-table" :data="cascaderSlots">
      <sec-table-column label="name" prop="name" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
    </sec-table>
    <h3>CascaderPanel Events</h3>
    <sec-table class="doc-table" :data="cascaderPanelEvents">
      <sec-table-column label="事件名称" prop="event" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="回调参数" prop="param" width="300"></sec-table-column>
    </sec-table>
    <h3>CascaderPanel Methods</h3>
    <sec-table class="doc-table" :data="cascaderPanelMethods">
      <sec-table-column label="方法名" prop="method" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="参数" width="400">
        <template #default="{ row }">
          <span v-html="row.param"></span>
        </template>
      </sec-table-column>
    </sec-table>
    <h3>CascaderPanel Slots</h3>
    <sec-table class="doc-table" :data="cascaderPanelSlots">
      <sec-table-column label="name" prop="name" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
    </sec-table>
    <h3>Props</h3>
    <sec-table class="doc-table" :data="props">
      <sec-table-column label="参数" prop="attr" width="150"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="类型" width="300">
        <template #default="{ row }">
          <span v-html="row.type"></span>
        </template>
      </sec-table-column>
      <sec-table-column label="可选值" prop="value" width="140"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="100"></sec-table-column>
    </sec-table>
  </sec-block>
</template>

<script>
import DocDemo from '../DocDemo.vue';
import demo1 from './Demo1/source.md';
import Demo1 from './Demo1/View.vue';
import demo2 from './Demo2/source.md';
import Demo2 from './Demo2/View.vue';
import demo3 from './Demo3/source.md';
import Demo3 from './Demo3/View.vue';
import demo4 from './Demo4/source.md';
import Demo4 from './Demo4/View.vue';
import demo5 from './Demo5/source.md';
import Demo5 from './Demo5/View.vue';
import demo6 from './Demo6/source.md';
import Demo6 from './Demo6/View.vue';
import demo7 from './Demo7/source.md';
import Demo7 from './Demo7/View.vue';
import demo8 from './Demo8/source.md';
import Demo8 from './Demo8/View.vue';
import demo9 from './Demo9/source.md';
import Demo9 from './Demo9/View.vue';
import demo10 from './Demo10/source.md';
import Demo10 from './Demo10/View.vue';

export default {
  components: {
    DocDemo,
    Demo1,
    Demo2,
    Demo3,
    Demo4,
    Demo5,
    Demo6,
    Demo7,
    Demo8,
    Demo9,
    Demo10,
  },
  data() {
    return {
      demo1,
      demo2,
      demo3,
      demo4,
      demo5,
      demo6,
      demo7,
      demo8,
      demo9,
      demo10,
      cascaderAttributes: [{
        attr: 'value / v-model',
        desc: '选中项绑定值',
        type: '—',
        value: '—',
        default: '—',
      }, {
        attr: 'options',
        desc: '可选项数据源，键名可通过 <code>Props</code> 属性配置',
        type: 'array',
        value: '—',
        default: '—',
      }, {
        attr: 'props',
        desc: '配置选项，具体见下表',
        type: 'object',
        value: '—',
        default: '—',
      }, {
        attr: 'size',
        desc: '尺寸',
        type: 'string',
        value: 'large / medium / mini',
        default: '—',
      }, {
        attr: 'placeholder',
        desc: '输入框占位文本',
        type: 'string',
        value: '—',
        default: '请选择',
      }, {
        attr: 'disabled',
        desc: '是否禁用',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'clearable',
        desc: '是否支持清空选项',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'show-all-levels',
        desc: '输入框中是否显示选中值的完整路径',
        type: 'boolean',
        value: '—',
        default: 'true',
      }, {
        attr: 'collapse-tags',
        desc: '多选模式下是否折叠Tag',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'separator',
        desc: '选项分隔符',
        type: 'string',
        value: '—',
        default: '斜杠\' / \'',
      }, {
        attr: 'filterable',
        desc: '是否可搜索选项',
        type: 'boolean',
        value: '—',
        default: '—',
      }, {
        attr: 'filter-method',
        desc: '自定义搜索逻辑，第一个参数是节点 <code>node</code>，第二个参数是搜索关键词 <code>keyword</code>，通过返回布尔值表示是否命中',
        type: 'function(node, keyword)',
        value: '—',
        default: '—',
      }, {
        attr: 'debounce',
        desc: '搜索关键词输入的去抖延迟，毫秒',
        type: 'number',
        value: '—',
        default: '300',
      }, {
        attr: 'before-filter',
        desc: '筛选之前的钩子，参数为输入的值，若返回 false 或者返回 Promise 且被 reject，则停止筛选',
        type: 'function(value)',
        value: '—',
        default: '—',
      }, {
        attr: 'popper-class',
        desc: '自定义浮层类名',
        type: 'string',
        value: '—',
        default: '—',
      }],
      cascaderEvents: [{
        event: 'change',
        desc: '当选中节点变化时触发',
        param: '选中节点的值',
      }, {
        event: 'expand-change',
        desc: '当展开节点发生变化时触发',
        param: '各父级选项值组成的数组',
      }, {
        event: 'blur',
        desc: '当失去焦点时触发',
        param: '(event: Event)',
      }, {
        event: 'focus',
        desc: '当获得焦点时触发',
        param: '(event: Event)',
      }, {
        event: 'visible-change',
        desc: '下拉框出现/隐藏时触发',
        param: '出现则为 true，隐藏则为 false',
      }, {
        event: 'remove-tag',
        desc: '在多选模式下，移除Tag时触发',
        param: '移除的Tag对应的节点的值',
      }],
      cascaderMethods: [{
        method: 'getCheckedNodes',
        desc: '获取选中的节点',
        param: '(leafOnly) 是否只是叶子节点，默认值为 <code>false</code>',
      }],
      cascaderSlots: [{
        name: '—',
        desc: '自定义备选项的节点内容，参数为 { node, data }，分别为当前节点的 Node 对象和数据',
      }, {
        name: 'empty',
        desc: '无匹配选项时的内容',
      }],
      cascaderPanelEvents: [{
        event: 'change',
        desc: '当选中节点变化时触发',
        param: '选中节点的值',
      }, {
        event: 'expand-change',
        desc: '当展开节点发生变化时触发',
        param: '各父级选项值组成的数组',
      }],
      cascaderPanelMethods: [{
        method: 'getCheckedNodes',
        desc: '获取选中的节点',
        param: '(leafOnly) 是否只是叶子节点，默认值为 <code>false</code>',
      }, {
        method: 'clearCheckedNodes',
        desc: '清空选中的节点',
        param: '—',
      }],
      cascaderPanelSlots: [{
        name: '—',
        desc: '自定义备选项的节点内容，参数为 { node, data }，分别为当前节点的 Node 对象和数据',
      }],
      props: [{
        attr: 'expandTrigger',
        desc: '次级菜单的展开方式',
        type: 'string',
        value: 'click / hover',
        default: '\'click\'',
      }, {
        attr: 'multiple',
        desc: '是否多选',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'checkStrictly',
        desc: '是否严格的遵守父子节点不互相关联',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'emitPath',
        desc: '在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值',
        type: 'boolean',
        value: '—',
        default: 'true',
      }, {
        attr: 'lazy',
        desc: '是否动态加载子节点，需与 lazyLoad 方法结合使用',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'lazyLoad',
        desc: '加载动态数据的方法，仅在 lazy 为 true 时有效',
        type: 'function(node, resolve)，<code>node</code> 为当前点击的节点，<code>resolve</code> 为数据加载完成的回调（必须调用）',
        value: '—',
        default: '—',
      }, {
        attr: 'value',
        desc: '指定选项的值为选项对象的某个属性值',
        type: 'string',
        value: '—',
        default: '\'value\'',
      }, {
        attr: 'label',
        desc: '指定选项标签为选项对象的某个属性值',
        type: 'string',
        value: '—',
        default: '\'label\'',
      }, {
        attr: 'children',
        desc: '指定选项的子选项为选项对象的某个属性值',
        type: 'string',
        value: '—',
        default: '\'children\'',
      }, {
        attr: 'disabled',
        desc: '指定选项的禁用为选项对象的某个属性值',
        type: 'string',
        value: '—',
        default: '\'disabled\'',
      }, {
        attr: 'leaf',
        desc: '指定选项的叶子节点的标志位为选项对象的某个属性值',
        type: 'string',
        value: '—',
        default: '\'leaf\'',
      }],
    };
  },
};
</script>
