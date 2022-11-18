<!-- eslint-disable max-len -->
<template>
  <sec-block class="doc-block">
    <h2>Rate 评分</h2>
    <p>评分组件。</p>
    <h3>基础用法</h3>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
      </template>
      <p>默认评分被分为三个等级，可以利用颜色数组对分数及情感倾向进行分级（默认情况下不区分颜色）。三个等级所对应的颜色用 <code>colors</code> 属性设置，而它们对应的两个阈值则通过 <code>low-threshold</code> 和 <code>high-threshold</code> 设定。你也可以通过传入颜色对象来自定义分级，键名为分段的界限值，键值为对应的颜色。</p>
    </DocDemo>
    <h3>辅助文字</h3>
    <p>用辅助文字直接地表达对应分数。</p>
    <DocDemo :markdown="demo2">
      <template #source>
        <Demo2></Demo2>
      </template>
      <p>为组件设置 <code>show-text</code> 属性会在右侧显示辅助文字。通过设置 <code>texts</code> 可以为每一个分值指定对应的辅助文字。<code>texts</code> 为一个数组，长度应等于最大值 <code>max</code>。</p>
    </DocDemo>
    <h3>其它 icon</h3>
    <p>当有多层评价时，可以用不同类型的 icon 区分评分层级。</p>
    <DocDemo :markdown="demo3">
      <template #source>
        <Demo3></Demo3>
      </template>
      <p>设置 <code>icon-classes</code> 属性可以自定义不同分段的图标。若传入数组，共有 3 个元素，为 3 个分段所对应的类名；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的类名。本例还使用 <code>void-icon-class</code> 指定了未选中时的图标类名。</p>
    </DocDemo>
    <h3>只读</h3>
    <p>只读的评分用来展示分数，允许出现半星。</p>
    <DocDemo :markdown="demo4">
      <template #source>
        <Demo4></Demo4>
      </template>
      <p>为组件设置 <code>disabled</code> 属性表示组件为只读，支持小数分值。此时若设置 <code>show-score</code>，则会在右侧显示目前的分值。可以提供 <code>score-template</code> 作为显示模板，模板为一个包含了 <code>{ value }</code> 的字符串，<code>{ value }</code> 会被解析为分值。</p>
    </DocDemo>
    <h3>Attributes</h3>
    <sec-table class="doc-table" :data="attributes">
      <sec-table-column label="参数" prop="attr" width="200"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="类型" prop="type" width="140"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="80"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="200"></sec-table-column>
    </sec-table>
    <h3>Events</h3>
    <sec-table class="doc-table" :data="events">
      <sec-table-column label="事件名称" prop="event" width="200"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="回调参数" prop="param" width="220"></sec-table-column>
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
        type: 'number',
        value: '—',
        default: '0',
      }, {
        attr: 'max',
        desc: '最大分值',
        type: 'number',
        value: '—',
        default: '5',
      }, {
        attr: 'disabled',
        desc: '是否为只读',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'allow-half',
        desc: '是否允许半选',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'low-threshold',
        desc: '低分和中等分数的界限值，值本身被划分在低分中',
        type: 'number',
        value: '—',
        default: '2',
      }, {
        attr: 'high-threshold',
        desc: '高分和中等分数的界限值，值本身被划分在高分中',
        type: 'number',
        value: '—',
        default: '4',
      }, {
        attr: 'colors',
        desc: 'icon 的颜色。若传入数组，共有 3 个元素，为 3 个分段所对应的颜色；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的颜色',
        type: 'array / object',
        value: '—',
        default: '[\'#f7ba2a\', \'#f7ba2a\', \'#f7ba2a\']',
      }, {
        attr: 'void-color',
        desc: '未选中 icon 的颜色',
        type: 'string',
        value: '—',
        default: '#c6d1de',
      }, {
        attr: 'disabled-void-color',
        desc: '只读时未选中 icon 的颜色',
        type: 'string',
        value: '—',
        default: '#eff2f7',
      }, {
        attr: 'icon-classes',
        desc: 'icon 的类名。若传入数组，共有 3 个元素，为 3 个分段所对应的类名；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的类名',
        type: 'array / object',
        value: '—',
        default: '[\'el-icon-star-on\', \'el-icon-star-on\',\'el-icon-star-on\']',
      }, {
        attr: 'void-icon-class',
        desc: '未选中 icon 的类名',
        type: 'string',
        value: '—',
        default: 'el-icon-star-off',
      }, {
        attr: 'disabled-void-icon-class',
        desc: '只读时未选中 icon 的类名',
        type: 'string',
        value: '—',
        default: 'el-icon-star-on',
      }, {
        attr: 'show-text',
        desc: '是否显示辅助文字，若为真，则会从 texts 数组中选取当前分数对应的文字内容',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'show-score',
        desc: '是否显示当前分数，show-score 和 show-text 不能同时为真',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'text-color',
        desc: '辅助文字的颜色',
        type: 'string',
        value: '—',
        default: '#1f2d3d',
      }, {
        attr: 'texts',
        desc: '辅助文字数组',
        type: 'array',
        value: '—',
        default: '[\'极差\', \'失望\', \'一般\', \'满意\', \'惊喜\']',
      }, {
        attr: 'score-template',
        desc: '分数显示模板',
        type: 'string',
        value: '—',
        default: '{ value }',
      }],
      events: [{
        event: 'change',
        desc: '分值改变时触发',
        param: '改变后的分值',
      }],
    };
  },
};
</script>
