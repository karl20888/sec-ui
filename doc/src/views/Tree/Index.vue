<!-- eslint-disable max-len -->
<template>
  <sec-block class="doc-block">
    <h2>Tree 树形控件</h2>
    <p>用清晰的层级结构展示信息，可展开或折叠。</p>
    <h3>基础用法</h3>
    <p>基础的树形结构展示。</p>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
      </template>
    </DocDemo>
    <h3>可选择</h3>
    <p>适用于需要选择层级时使用。</p>
    <DocDemo :markdown="demo2">
      <template #source>
        <Demo2></Demo2>
      </template>
      <p>本例还展示了动态加载节点数据的方法。</p>
    </DocDemo>
    <h3>懒加载自定义叶子节点</h3>
    <DocDemo :markdown="demo3">
      <template #source>
        <Demo3></Demo3>
      </template>
      <p>由于在点击节点时才进行该层数据的获取，默认情况下 Tree 无法预知某个节点是否为叶子节点，所以会为每个节点添加一个下拉按钮，如果节点没有下层数据，则点击后下拉按钮会消失。同时，你也可以提前告知 Tree 某个节点是否为叶子节点，从而避免在叶子节点前渲染下拉按钮。</p>
    </DocDemo>
    <h3>默认展开和默认选中</h3>
    <p>可将 Tree 的某些节点设置为默认展开或默认选中。</p>
    <DocDemo :markdown="demo4">
      <template #source>
        <Demo4></Demo4>
      </template>
      <p>分别通过 <code>default-expanded-keys</code> 和 <code>default-checked-keys</code> 设置默认展开和默认选中的节点。需要注意的是，此时必须设置 <code>node-key</code>，其值为节点数据中的一个字段名，该字段在整棵树中是唯一的。</p>
    </DocDemo>
    <h3>禁用状态</h3>
    <p>可将 Tree 的某些节点设置为禁用状态。</p>
    <DocDemo :markdown="demo5">
      <template #source>
        <Demo5></Demo5>
      </template>
      <p>通过 <code>disabled</code> 设置禁用状态。</p>
    </DocDemo>
    <h3>树节点选择</h3>
    <DocDemo :markdown="demo6">
      <template #source>
        <Demo6></Demo6>
      </template>
      <p>本例展示如何获取和设置选中节点。获取和设置各有两种方式：通过 node 或通过 key。如果需要通过 key 来获取或设置，则必须设置 <code>node-key</code>。</p>
    </DocDemo>
    <h3>自定义节点内容</h3>
    <p>节点的内容支持自定义，可以在节点区添加按钮或图标等内容。</p>
    <DocDemo :markdown="demo7">
      <template #source>
        <Demo7></Demo7>
      </template>
      <p>可以通过两种方法进行树节点内容的自定义：<code>render-content</code> 和 scoped slot。使用 <code>render-content</code> 指定渲染函数，该函数返回需要的节点区内容即可。渲染函数的用法请参考 Vue 文档。使用 scoped slot 会传入两个参数 <code>node</code> 和 <code>data</code>，分别表示当前节点的 Node 对象和当前节点的数据。</p>
    </DocDemo>
    <h3>节点过滤</h3>
    <p>通过关键字过滤树节点。</p>
    <DocDemo :markdown="demo8">
      <template #source>
        <Demo8></Demo8>
      </template>
      <p>在需要对节点进行过滤时，调用 Tree 实例的 <code>filter</code> 方法，参数为关键字。需要注意的是，此时需要设置 <code>filter-node-methods</code>，值为过滤函数。</p>
    </DocDemo>
    <h3>手风琴模式</h3>
    <p>对于同一级的节点，每次只能展开一个。</p>
    <DocDemo :markdown="demo9">
      <template #source>
        <Demo9></Demo9>
      </template>
    </DocDemo>
    <h3>可拖拽节点</h3>
    <p>通过 draggable 属性可让节点变为可拖拽。</p>
    <DocDemo :markdown="demo10">
      <template #source>
        <Demo10></Demo10>
      </template>
    </DocDemo>
    <h3>Attributes</h3>
    <sec-table class="doc-table" :data="attributes">
      <sec-table-column label="参数" prop="attr" width="180"></sec-table-column>
      <sec-table-column label="说明">
        <template #default="{ row }">
          <span v-html="row.desc"></span>
        </template>
      </sec-table-column>
      <sec-table-column label="类型" prop="type" width="300"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="80"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="80"></sec-table-column>
    </sec-table>
    <h3>props</h3>
    <sec-table class="doc-table" :data="props">
      <sec-table-column label="参数" prop="attr" width="100"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="类型" prop="type" width="260"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="80"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="80"></sec-table-column>
    </sec-table>
    <h3>方法</h3>
    <p><code>Tree</code> 内部使用了 Node 类型的对象来包装用户传入的数据，用来保存目前节点的状态。<code>Tree</code> 拥有如下方法：</p>
    <sec-table class="doc-table" :data="methods">
      <sec-table-column label="方法名" prop="method" width="220"></sec-table-column>
      <sec-table-column label="说明">
        <template #default="{ row }">
          <span v-html="row.desc"></span>
        </template>
      </sec-table-column>
      <sec-table-column label="参数" width="260">
        <template #default="{ row }">
          <span v-html="row.param"></span>
        </template>
      </sec-table-column>
    </sec-table>
    <h3>Events</h3>
    <sec-table class="doc-table" :data="events">
      <sec-table-column label="事件名称" prop="event" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="回调参数" width="450">
        <template #default="{ row }">
          <span v-html="row.param"></span>
        </template>
      </sec-table-column>
    </sec-table>
    <h3>Scoped Slot</h3>
    <sec-table class="doc-table" :data="scopedSlot">
      <sec-table-column label="name" prop="name" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
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
      attributes: [{
        attr: 'data',
        desc: '展示数据',
        type: 'array',
        value: '—',
        default: '—',
      }, {
        attr: 'empty-text',
        desc: '内容为空的时候展示的文本',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'node-key',
        desc: '每个树节点用来作为唯一标识的属性，整棵树应该是唯一的',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'props',
        desc: '配置选项，具体看下表',
        type: 'object',
        value: '—',
        default: '—',
      }, {
        attr: 'render-after-expand',
        desc: '是否在第一次展开某个树节点后才渲染其子节点',
        type: 'boolean',
        value: '—',
        default: 'true',
      }, {
        attr: 'load',
        desc: '加载子树数据的方法，仅当 lazy 属性为 true 时生效',
        type: 'function(node, resolve)',
        value: '—',
        default: '—',
      }, {
        attr: 'render-content',
        desc: '树节点的内容区的渲染函数',
        type: 'function(h, { node, data, store })',
        value: '—',
        default: '—',
      }, {
        attr: 'highlight-current',
        desc: '是否高亮当前选中节点',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'default-expand-all',
        desc: '是否默认展开所有节点',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'expand-on-click-node',
        desc: '是否在点击节点的时候展开或者收缩节点，默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点。',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'auto-expand-parent',
        desc: '展开子节点的时候是否自动展开父节点',
        type: 'boolean',
        value: '—',
        default: 'true',
      }, {
        attr: 'default-expanded-keys',
        desc: '默认展开的节点的 key 的数组',
        type: 'array',
        value: '—',
        default: '—',
      }, {
        attr: 'show-checkbox',
        desc: '节点是否可被选择',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'check-strictly',
        desc: '在显示复选框的情况下，是否严格的遵循父子不互相关联的做法',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'default-checked-keys',
        desc: '默认勾选的节点的 key 的数组',
        type: 'array',
        value: '—',
        default: '—',
      }, {
        attr: 'current-node-key',
        desc: '当前选中的节点',
        type: 'string / number',
        value: '—',
        default: '—',
      }, {
        attr: 'filter-node-method',
        desc: '对树节点进行筛选时执行的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏',
        type: 'function(value, data, node)',
        value: '—',
        default: '—',
      }, {
        attr: 'accordion',
        desc: '是否每次只打开一个同级树节点展开',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'indent',
        desc: '相邻级节点间的水平缩进，单位为像素',
        type: 'number',
        value: '—',
        default: '16',
      }, {
        attr: 'icon-class',
        desc: '自定义树节点的图标',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'lazy',
        desc: '是否懒加载子节点，需与 load 方法结合使用',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'draggable',
        desc: '是否开启拖拽节点功能',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'allow-drag',
        desc: '判断节点是否可被拖拽',
        type: 'function(node)',
        value: '—',
        default: '—',
      }, {
        attr: 'allow-drop',
        desc: '拖拽时判定目标节点是否可被放置。<code>type</code> 参数有三种情况：\'prev\'、\'inner\' 和 \'next\'，分别表示放置在目标节点前、插入至目标节点和放置在目标节点后',
        type: 'function(draggingNode, dropNode, type)',
        value: '—',
        default: '—',
      }],
      props: [{
        attr: 'label',
        desc: '指定节点标签为节点对象的某个属性值',
        type: 'string / function(data, node)',
        value: '—',
        default: '—',
      }, {
        attr: 'children',
        desc: '指定子树为节点对象的某个属性值',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'disabled',
        desc: '指定节点选择框是否禁用为节点对象的某个属性值',
        type: 'boolean / function(data, node)',
        value: '—',
        default: '—',
      }, {
        attr: 'isLeaf',
        desc: '指定节点是否为叶子节点，仅在指定了 lazy 属性的情况下生效',
        type: 'boolean / function(data, node)',
        value: '—',
        default: '—',
      }],
      methods: [{
        method: 'filter',
        desc: '对树节点进行筛选操作',
        param: '接受一个任意类型的参数，该参数会在 filter-node-method 中作为第一个参数',
      }, {
        method: 'updateKeyChildren',
        desc: '通过 keys 设置节点子元素，使用此方法必须设置 node-key 属性',
        param: '(key, data) 接收两个参数，1. 节点 key 2. 节点数据的数组',
      }, {
        method: 'getCheckedNodes',
        desc: '若节点可被选择（即 <code>show-checkbox</code> 为 <code>true</code>），则返回目前被选中的节点所组成的数组',
        param: '(leafOnly, includeHalfChecked) 接收两个 boolean 类型的参数，1. 是否只是叶子节点，默认值为 <code>false</code> 2. 是否包含半选节点，默认值为 <code>false</code>',
      }, {
        method: 'setCheckedNodes',
        desc: '设置目前勾选的节点，使用此方法必须设置 node-key 属性',
        param: '(nodes) 接收勾选节点数据的数组',
      }, {
        method: 'getCheckedKeys',
        desc: '若节点可被选择（即 <code>show-checkbox</code> 为 <code>true</code>），则返回目前被选中的节点的 key 所组成的数组',
        param: '(leafOnly) 接收一个 boolean 类型的参数，若为 <code>true</code> 则仅返回被选中的叶子节点的 keys，默认值为 <code>false</code>',
      }, {
        method: 'setCheckedKeys',
        desc: '通过 keys 设置目前勾选的节点，使用此方法必须设置 node-key 属性',
        param: '(keys, leafOnly) 接收两个参数，1. 勾选节点的 key 的数组 2. boolean 类型的参数，若为 <code>true</code> 则仅设置叶子节点的勾选状态，默认值为 <code>false</code>',
      }, {
        method: 'setChecked',
        desc: '通过 key / data 设置某个节点的勾选状态，使用此方法必须设置 node-key 属性',
        param: '(key/data, checked, deep) 接收三个参数，1. 勾选节点的 key 或者 data 2. boolean 类型，节点是否选中 3. boolean 类型，是否设置子节点，默认为 false',
      }, {
        method: 'getHalfCheckedNodes',
        desc: '若节点可被选择（即 <code>show-checkbox</code> 为 <code>true</code>），则返回目前选中的节点所组成的数组',
        param: '—',
      }, {
        method: 'getHalfCheckedKeys',
        desc: '若节点可被选择（即 <code>show-checkbox</code> 为 <code>true</code），则返回目前半选中的节点所有组成的数组',
        param: '—',
      }, {
        method: 'getCurrentKey',
        desc: '获取当前被选中节点的 key，使用此方法必须设置 node-key 属性，若没有节点被选中则返回 null',
        param: '—',
      }, {
        method: 'getCurrentNode',
        desc: '获取当前被选中节点的 data，若没有节点被选中则返回 null',
        param: '—',
      }, {
        method: 'setCurrentKey',
        desc: '通过 key 设置某个节点的当前选中状态，使用此方法必须设置 node-key 属性',
        param: '(key) 待被选节点的 key，若为 null 则取消当前高亮的节点',
      }, {
        method: 'setCurrentNode',
        desc: '通过 node 设置某个节点的当前选中状态，使用此方法必须设置 node-key 属性',
        param: '(node) 待备选节点的 node',
      }, {
        method: 'getNode',
        desc: '根据 data 或者 key 拿到 Tree 组件中的 node',
        param: '(data) 要获得 node 的 key 或者 data',
      }, {
        method: 'remove',
        desc: '删除 Tree 中的一个节点，使用此方法必须设置 node-key 属性',
        param: '(data) 要删除的节点的 data 或者 node',
      }, {
        method: 'append',
        desc: '为 Tree 中的一个节点追加一个子节点',
        param: '(data, parentNode) 接收两个参数，1. 要追加的子节点的 data 2. 子节点的 parent 的 data、key 或者 node',
      }, {
        method: 'insertBefore',
        desc: '为 Tree 的一个节点的前面增加一个节点',
        param: '(data, refNode) 接收两个参数，1. 要增加的节点的 data 2. 要增加的节点的后一个节点的 data、key 或者 node',
      }, {
        method: 'insertAfter',
        desc: '为 Tree 的一个节点的后面增加一个节点',
        param: '(data, refNode) 接收两个参数，1. 要增加的节点的 data 2. 要增加的节点的前一个节点的 data、key 或者 node',
      }],
      events: [{
        event: 'node-click',
        desc: '节点被点击时的回调',
        param: '共三个参数，依次为：传递给 <code>data</code> 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。',
      }, {
        event: 'node-contextmenu',
        desc: '当某一节点被鼠标右键点击时会触发该事件',
        param: '共四个参数，依次为：event、传递给 <code>data</code> 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。',
      }, {
        event: 'check-change',
        desc: '节点选中状态发生变化时的回调',
        param: '共三个参数，依次为：传递给 <code>data</code> 属性的数组中该节点所对应的对象、节点本身是否被选中、节点的子树中是否有被选中的节点',
      }, {
        event: 'check',
        desc: '当复选框被点击的时候触发',
        param: '共两个参数，依次为：传递给 <code>data</code> 属性的数组中该节点所对应的对象、树目前的选中状态对象，包含 checkedNodes、checkedKeys、halfCheckedNodes、halfCheckedKeys 四个属性',
      }, {
        event: 'current-change',
        desc: '当前选中节点变化时触发的事件',
        param: '共两个参数，依次为：当前节点的数据，当前节点的 Node 对象',
      }, {
        event: 'node-expand',
        desc: '节点被展开时触发的事件',
        param: '共三个参数，依次为：传递给 <code>data</code> 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身',
      }, {
        event: 'node-collapse',
        desc: '节点被关闭时触发的事件',
        param: '共三个参数，依次为：传递给 <code>data</code> 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身',
      }, {
        event: 'node-drag-start',
        desc: '节点开始拖拽时触发的事件',
        param: '共两个参数，依次为：被拖拽节点对应的 Node、event',
      }, {
        event: 'node-drag-enter',
        desc: '拖拽进入其他节点时触发的事件',
        param: '共三个参数，依次为：被拖拽节点对应的 Node、所进入节点对应的 Node、event',
      }, {
        event: 'node-drag-leave',
        desc: '拖拽离开某个节点时触发的事件',
        param: '共三个参数，依次为：被拖拽节点对应的 Node、所离开节点对应的 Node、event',
      }, {
        event: 'node-drag-over',
        desc: '在拖拽节点时触发的事件（类似浏览器的 mouseover 事件）',
        param: '共三个参数，依次为：被拖拽节点对应的 Node、当前进入节点对应的 Node、event',
      }, {
        event: 'node-drag-end',
        desc: '拖拽结束时（可能未成功）触发的事件',
        param: '共四个参数，依次为：被拖拽节点对应的 Node、结束拖拽时最后进入的节点（可能为空）、被拖拽节点的放置位置（before、after、inner）、event',
      }, {
        event: 'node-drop',
        desc: '拖拽成功完成时触发的事件',
        param: '共四个参数，依次为：被拖拽节点对应的 Node、结束拖拽时最后进入的节点、被拖拽节点的放置位置（before、after、inner）、event',
      }],
      scopedSlot: [{
        name: '—',
        desc: '自定义树节点的内容，参数为 { node, data }',
      }],
    };
  },
};
</script>
