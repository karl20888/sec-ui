<!-- eslint-disable max-len -->
<template>
  <sec-block class="doc-block">
    <h2>Tabs 标签页</h2>
    <p>分隔内容上有关联但属于不同类型的数据集合。</p>
    <div class="tip">
      <p>SecUI 直接提供 ElementUI 的 <code>el-tabs</code>，同时提供扩展后的 <code>sec-tabs</code>，下面例子分别用两种方式展示。</p>
    </div>
    <h3>基础用法</h3>
    <p>基础的、简洁的标签页。</p>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
      </template>
      <p>Tabs 组件提供了选项卡功能，默认选中第一个标签页，你也可以通过 <code>value</code> 属性来指定当前选中的标签页。</p>
    </DocDemo>
    <h3>选项卡样式</h3>
    <p>选项卡样式的标签页。</p>
    <DocDemo :markdown="demo2">
      <template #source>
        <Demo2></Demo2>
      </template>
      <p>只需要设置 <code>type</code> 属性为 <code>card</code> 就可以使选项卡改变为标签风格。</p>
    </DocDemo>
    <h3>卡片化</h3>
    <p>卡片化的标签页。</p>
    <DocDemo :markdown="demo3">
      <template #source>
        <Demo3></Demo3>
      </template>
      <p>将 <code>type</code> 设置为 <code>border-card</code>。</p>
    </DocDemo>
    <h3>位置</h3>
    <p>可以通过 <code>tob-position</code> 设置标签的位置。</p>
    <DocDemo :markdown="demo4">
      <template #source>
        <Demo4></Demo4>
      </template>
      <p>标签一共有四个方向的设置 <code>tabPosition="left | right | top | bottom"</code></p>
    </DocDemo>
    <h3>自定义标签页</h3>
    <p>可以通过具名 <code>slot</code> 来实现自定义标签页的内容。</p>
    <DocDemo :markdown="demo5">
      <template #source>
        <Demo5></Demo5>
      </template>
    </DocDemo>
    <h3>动态增减标签页</h3>
    <p>增减标签页按钮只能在选项卡样式的标签页下使用。</p>
    <div class="tip">
      <p>动态增减标签页功能暂时请使用 <code>el-tabs</code> 组件，虽然 <code>sec-tabs</code> 用起来也没什么太大问题，但可能会产生不可预知的错误。</p>
    </div>
    <DocDemo :markdown="demo6">
      <template #source>
        <Demo6></Demo6>
      </template>
    </DocDemo>
    <h3>自定义增加标签页触发器</h3>
    <div class="tip">
      <p>同上例一样，暂时请使用 <code>el-tabs</code> 组件，虽然 <code>sec-tabs</code> 用起来也没什么太大问题，但可能会产生不可预知的错误。</p>
    </div>
    <DocDemo :markdown="demo7">
      <template #source>
        <Demo7></Demo7>
      </template>
    </DocDemo>
    <h3>扩展区域</h3>
    <p><code>sec-tabs</code> 提供可自定义的扩展区域，使用名为 <code>extra</code> 的 Slot。</p>
    <DocDemo :markdown="demo8">
      <template #source>
        <Demo8></Demo8>
      </template>
    </DocDemo>
    <h3>Tabs Attributes</h3>
    <sec-table class="doc-table" :data="tabsAttributes">
      <sec-table-column label="参数" prop="attr" width="140"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="类型" prop="type" width="170"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="200"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="180"></sec-table-column>
    </sec-table>
    <h3>Tabs Events</h3>
    <sec-table class="doc-table" :data="tabsEvents">
      <sec-table-column label="事件名称" prop="event" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="回调参数" prop="param" width="250"></sec-table-column>
    </sec-table>
    <h3>Tabs Slots</h3>
    <sec-table class="doc-table" :data="tabsSlots">
      <sec-table-column label="name" prop="name" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
    </sec-table>
    <h3>Tab-pane Attributes</h3>
    <sec-table class="doc-table" :data="tabPaneAttributes">
      <sec-table-column label="参数" prop="attr" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="类型" prop="type" width="80"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="80"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="300"></sec-table-column>
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
      tabsAttributes: [{
        attr: 'value / v-model',
        desc: '绑定值，选中选项卡的 name',
        type: 'string',
        value: '—',
        default: '第一个选项卡的 name，sec-tabs 中必须指定',
      }, {
        attr: 'type',
        desc: '风格类型',
        type: 'string',
        value: 'card / border-card',
        default: '—',
      }, {
        attr: 'closable',
        desc: '标签是否可关闭',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'addable',
        desc: '标签是否可增加',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'editable',
        desc: '标签是否同时可增加和关闭',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'tab-position',
        desc: '选项卡所在位置',
        type: 'string',
        value: 'top / right / bottom / left',
        default: 'top',
      }, {
        attr: 'stretch',
        desc: '标签的宽度是否自撑开',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'before-leave',
        desc: '切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。',
        type: 'Function(activeName, oldActiveName)',
        value: '—',
        default: '—',
      }, {
        attr: 'full',
        desc: '如果为 true 则高度会占满父元素的高度，仅 sec-tabs 可用',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'tabs',
        desc: '标签列表，通过含有 label 和 name 的数组设置，仅 sec-tabs 可用',
        type: 'Array',
        value: '—',
        default: '[]',
      }, {
        attr: 'height',
        desc: '高度，style 的 height 值',
        type: 'String',
        value: '—',
        default: '—',
      }],
      tabsEvents: [{
        event: 'tab-click',
        desc: 'tab 被选中时触发',
        param: '被选中的标签 tab 实例',
      }, {
        event: 'tab-remove',
        desc: '点击 tab 移除按钮后触发',
        param: '被删除的标签的 name',
      }, {
        event: 'tab-add',
        desc: '点击 tabs 的新增按钮后触发',
        param: '—',
      }, {
        event: 'edit',
        desc: '点击 tabs 的新增按钮或 tab 被关闭后触发',
        param: '(targetName, action)',
      }, {
        event: 'change',
        desc: '仅 sec-tabs 中可用，当标签切换时触发',
        param: '被选中的标签 name',
      }],
      tabsSlots: [{
        name: 'extra',
        desc: '自定义扩展区域内容',
      }],
      tabPaneAttributes: [{
        attr: 'label',
        desc: '选项卡标题',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'disabled',
        desc: '是否禁用',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'name',
        desc: '与选项卡绑定值 value 对应的标识符，表示选项卡别名',
        type: 'string',
        value: '—',
        default: '该选项卡在选项卡列表中的顺序值，如第一个选项卡则为 \'1\'',
      }, {
        attr: 'closable',
        desc: '标签是否可关闭',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'lazy',
        desc: '标签是否延迟渲染',
        type: 'boolean',
        value: '—',
        default: 'false',
      }],
    };
  },
};
</script>
