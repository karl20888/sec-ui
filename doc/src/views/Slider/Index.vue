<template>
  <sec-block class="doc-block">
    <h2>Slider 滑块</h2>
    <p>通过拖动滑块在一个固定区间内进行选择</p>
    <h3>基础用法</h3>
    <p>在拖动滑块时，显示当前值</p>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
      </template>
      <p>通过设置绑定值自定义滑块的初始值</p>
    </DocDemo>
    <h3>离散值</h3>
    <p>选项可以是离散的。</p>
    <DocDemo :markdown="demo2">
      <template #source>
        <Demo2></Demo2>
      </template>
      <p>改变 <code>step</code> 的值可以改变步长，通过设置 <code>show-stops</code> 属性可以显示间断点。</p>
    </DocDemo>
    <h3>带有输入框</h3>
    <p>通过输入框设置精确数值。</p>
    <DocDemo :markdown="demo3">
      <template #source>
        <Demo3></Demo3>
      </template>
      <p>设置 <code>show-input</code> 属性会在右侧显示一个输入框。</p>
    </DocDemo>
    <h3>范围选择</h3>
    <p>支持选择某一数值范围。</p>
    <DocDemo :markdown="demo4">
      <template #source>
        <Demo4></Demo4>
      </template>
      <p>设置 <code>range</code> 即可开启范围选择，此时绑定值是一个数组，其元素分别为最小边界值和最大边界值。</p>
    </DocDemo>
    <h3>竖向模式</h3>
    <DocDemo :markdown="demo5">
      <template #source>
        <Demo5></Demo5>
      </template>
      <p>设置 <code>vertical</code> 可使 Slider 变成竖向模式，此时必须设置高度 <code>height</code> 属性。</p>
    </DocDemo>
    <h3>展示标记</h3>
    <DocDemo :markdown="demo6">
      <template #source>
        <Demo6></Demo6>
      </template>
      <p>设置 <code>marks</code> 属性可以展示标记。</p>
    </DocDemo>
    <h3>Attributes</h3>
    <sec-table class="doc-table" :data="attributes">
      <sec-table-column label="参数" prop="attr" width="180"></sec-table-column>
      <sec-table-column label="说明">
        <template #default="{ row }">
          <span v-html="row.desc"></span>
        </template>
      </sec-table-column>
      <sec-table-column label="类型" prop="type" width="180"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="220"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="100"></sec-table-column>
    </sec-table>
    <h3>Events</h3>
    <sec-table class="doc-table" :data="events">
      <sec-table-column label="事件名称" prop="event" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="回调参数" prop="param" width="200"></sec-table-column>
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

export default {
  components: {
    DocDemo,
    Demo1,
    Demo2,
    Demo3,
    Demo4,
    Demo5,
    Demo6,
  },
  data() {
    return {
      demo1,
      demo2,
      demo3,
      demo4,
      demo5,
      demo6,
      attributes: [{
        attr: 'value / v-model',
        desc: '绑定值',
        type: 'number',
        value: '—',
        default: '0',
      }, {
        attr: 'min',
        desc: '最小值',
        type: 'number',
        value: '—',
        default: '0',
      }, {
        attr: 'max',
        desc: '最大值',
        type: 'number',
        value: '—',
        default: '100',
      }, {
        attr: 'disabled',
        desc: '是否禁用',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'step',
        desc: '步长',
        type: 'number',
        value: '—',
        default: '1',
      }, {
        attr: 'show-input',
        desc: '是否显示输入框，仅在非范围选择时有效',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'show-input-controls',
        desc: '在显示输入框的情况下，是否显示输入框的控制按钮',
        type: 'boolean',
        value: '—',
        default: 'true',
      }, {
        attr: 'input-size',
        desc: '输入框的尺寸',
        type: 'string',
        value: 'large / medium / small / mini',
        default: 'small',
      }, {
        attr: 'show-stops',
        desc: '是否显示间断点',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'show-tooltip',
        desc: '是否显示 tooltip',
        type: 'boolean',
        value: '—',
        default: 'true',
      }, {
        attr: 'format-tooltip',
        desc: '格式化 tooltip message',
        type: 'function(value)',
        value: '—',
        default: '—',
      }, {
        attr: 'range',
        desc: '是否为范围选择',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'vertical',
        desc: '是否竖向模式',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'height',
        desc: 'Slider 高度，竖向模式时必填',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'label',
        desc: '屏幕阅读器标签',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'debounce',
        desc: '输入时的去抖延迟，毫秒，仅在 <code>show-input</code> 等于 true 时有效',
        type: 'number',
        value: '—',
        default: '300',
      }, {
        attr: 'tooltip-class',
        desc: 'tooltip 的自定义类名',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'marks',
        desc: '标记，key 的类型必须为 number 且取值在闭区间 <code>[min, max]</code> 内，每个标记可以单独设置样式',
        type: 'object',
        value: '—',
        default: '—',
      }],
      events: [{
        event: 'change',
        desc: '值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发）',
        param: '改变后的值',
      }, {
        event: 'input',
        desc: '数据改变时触发（使用鼠标拖曳时，活动过程实时触发）',
        param: '改变后的值',
      }],
    };
  },
};
</script>
