<!-- eslint-disable max-len -->
<template>
  <sec-block class="doc-block">
    <h2>Transfer 穿梭框</h2>
    <h3>基础用法。</h3>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
      </template>
      <p>Transfer 的数据通过 <code>data</code> 属性传入。数据需要的是一个对象数组，每个对象有以下属性：<code>key</code> 为数据的唯一标识，<code>label</code> 为显示文本，<code>disabled</code> 表示该项数据是否禁止转移。目标列表中的数据项会同步到绑定的 <code>v-model</code> 变量中，值为数据项的 <code>key</code> 所组成的数组。当然，如果希望在初始状态时目标列表不为空，可以像本例一样为 <code>v-model</code> 绑定的变量赋予一个初始值。</p>
    </DocDemo>
    <h3>可搜索</h3>
    <p>在数据很多的情况下，可以对数据进行搜索和过滤。</p>
    <DocDemo :markdown="demo2">
      <template #source>
        <Demo2></Demo2>
      </template>
      <p>设置 <code>filterable</code> 为 <code>true</code> 即可开启搜索模式。默认情况下，若数据项的 <code>label</code> 属性包含搜索关键字，则会在搜索结果中显示。你也可以使用 <code>filter-method</code> 定义自己的搜索逻辑。<code>filter-method</code> 接收一个方法，当搜索关键字变化时，会将当前的关键字和每个数据项传给该方法。若方法返回 <code>true</code>，则会在搜索结果中显示对应的数据项。</p>
    </DocDemo>
    <h3>可自定义</h3>
    <p>可以对列表标题文案、按钮文案、数据项的渲染函数、列表底部的勾选状态文案、列表底部的内容区等进行自定义。</p>
    <DocDemo :markdown="demo3">
      <template #source>
        <Demo3></Demo3>
      </template>
      <p>可以使用 <code>titles</code>、<code>button-texts</code>、<code>render-content</code> 和 <code>format</code> 属性分别对列表标题文案、按钮文案、数据项的渲染函数和列表顶部的勾选状态文案进行自定义。数据项的渲染还可以使用 <code>scoped-slot</code> 进行自定义。对于列表底部的内容区，提供了两个具名 slot：<code>left-footer</code> 和 <code>right-footer</code>。此外，如果希望某些数据项在初始化时就被勾选，可以使用 <code>left-default-checked</code> 和 <code>right-default-checked</code> 属性。最后，本例还展示了 <code>change</code> 事件的用法。</p>
    </DocDemo>
    <h3>数据项属性别名</h3>
    <p>默认情况下，Transfer 仅能识别数据项中的 <code>key</code>、<code>label</code> 和 <code>disabled</code> 字段。如果你的数据的字段名不同，可以使用 <code>props</code> 属性为它们设置别名。</p>
    <DocDemo :markdown="demo4">
      <template #source>
        <Demo4></Demo4>
      </template>
      <p>本例中的数据源没有 <code>key</code> 和 <code>label</code> 字段，在功能上与它们相同的字段名为 <code>value</code> 和 <code>desc</code>。因此可以使用 <code>props</code> 属性为 <code>key</code> 和 <code>label</code> 设置别名。</p>
    </DocDemo>
    <h3>Attributes</h3>
    <sec-table class="doc-table" :data="attributes">
      <sec-table-column label="参数" prop="attr" width="170"></sec-table-column>
      <sec-table-column label="说明">
        <template #default="{ row }">
          <span v-html="row.desc"></span>
        </template>
      </sec-table-column>
      <sec-table-column label="类型" prop="type" width="240"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="90"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="150"></sec-table-column>
    </sec-table>
    <h3>Slot</h3>
    <sec-table class="doc-table" :data="slots">
      <sec-table-column label="name" prop="name" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
    </sec-table>
    <h3>Scoped Slot</h3>
    <sec-table class="doc-table" :data="scopedSlot">
      <sec-table-column label="name" prop="name" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
    </sec-table>
    <h3>Methods</h3>
    <sec-table class="doc-table" :data="methods">
      <sec-table-column label="方法名" prop="method" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="参数" prop="param" width="300"></sec-table-column>
    </sec-table>
    <h3>Events</h3>
    <sec-table class="doc-table" :data="events">
      <sec-table-column label="事件名称" prop="event" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="回调参数" prop="param" width="300"></sec-table-column>
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

export default {
  components: {
    DocDemo,
    Demo1,
    Demo2,
    Demo3,
    Demo4,
  },
  data() {
    return {
      demo1,
      demo2,
      demo3,
      demo4,
      attributes: [{
        attr: 'value / v-model',
        desc: '绑定值',
        type: 'array',
        value: '—',
        default: '—',
      }, {
        attr: 'data',
        desc: 'Transfer 的数据源',
        type: 'array[{ key, label, disabled }]',
        value: '—',
        default: '[]',
      }, {
        attr: 'filterable',
        desc: '是否可搜索',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'filter-placeholder',
        desc: '搜索框占位符',
        type: 'string',
        value: '—',
        default: '请输入搜索内容',
      }, {
        attr: 'filter-method',
        desc: '自定义搜索方法',
        type: 'function',
        value: '—',
        default: '—',
      }, {
        attr: 'target-order',
        desc: '右侧列表元素的排序策略：若为 <code>original</code>，则保持与数据源相同的顺序；若为 <code>push</code>，则新加入的元素排在最后；若为 <code>unshift</code>，则新加入的元素排在最前',
        type: 'string',
        value: 'original / push / unshift',
        default: 'original',
      }, {
        attr: 'titles',
        desc: '自定义列表标题',
        type: 'array',
        value: '—',
        default: '[\'列表 1\', \'列表 2\']',
      }, {
        attr: 'button-texts',
        desc: '自定义按钮文案',
        type: 'array',
        value: '—',
        default: '[]',
      }, {
        attr: 'render-content',
        desc: '自定义数据项渲染函数',
        type: 'function(h, option)',
        value: '—',
        default: '—',
      }, {
        attr: 'format',
        desc: '列表顶部勾选状态文案',
        type: 'object{noChecked, hasChecked}',
        value: '—',
        // eslint-disable-next-line no-template-curly-in-string
        default: '{ noChecked: \'${checked}/${total}\', hasChecked: \'${checked}/${total}\' }',
      }, {
        attr: 'props',
        desc: '数据源的字段别名',
        type: 'object{key, label, disabled}',
        value: '—',
        default: '—',
      }, {
        attr: 'left-default-checked',
        desc: '初始状态下左侧列表的已勾选项的 key 数组',
        type: 'array',
        value: '—',
        default: '[]',
      }, {
        attr: 'right-default-checked',
        desc: '初始状态下右侧列表的已勾选项的 key 数组',
        type: 'array',
        value: '—',
        default: '[]',
      }],
      slots: [{
        name: 'left-footer',
        desc: '左侧列表底部的内容',
      }, {
        name: 'right-footer',
        desc: '右侧列表底部的内容',
      }],
      scopedSlot: [{
        name: '—',
        desc: '自定义数据项的内容，参数为 { option }',
      }],
      methods: [{
        method: 'clearQuery',
        desc: '清空某个面板的搜索关键词',
        param: '\'left\' / \'right\'，指定需要清空的面板',
      }],
      events: [{
        event: 'change',
        desc: '右侧列表元素变化时触发',
        param: '当前值、数据移动的方向（\'left\' / \'right\'）、发生移动的数据 key 数组',
      }, {
        event: 'left-check-change',
        desc: '左侧列表元素被用户选中 / 取消选中时触发',
        param: '当前被选中的元素的 key 数组、选中状态发生变化的元素的 key 数组',
      }, {
        event: 'right-check-change',
        desc: '右侧列表元素被用户选中 / 取消选中时触发',
        param: '当前被选中的元素的 key 数组、选中状态发生变化的元素的 key 数组',
      }],
    };
  },
};
</script>
