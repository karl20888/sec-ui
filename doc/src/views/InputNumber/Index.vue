<!-- eslint-disable max-len -->
<template>
  <sec-block class="doc-block">
    <h2>InputNumber 计数器</h2>
    <p>仅允许输入标准的数字值，可定义范围。</p>
    <h3>基础用法</h3>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
      </template>
      <p>要使用它，只需要在 <code>el-input-number</code> 元素中使用 <code>v-model</code> 绑定变量即可，变量的初始值为默认值。</p>
    </DocDemo>
    <h3>禁用状态</h3>
    <DocDemo :markdown="demo2">
      <template #source>
        <Demo2></Demo2>
      </template>
      <p><code>disabled</code> 属性接受一个 <code>Boolean</code>，设置为 <code>true</code> 即可禁用整个组件，如果你只需要控制数值在某一范围内，可以设置 <code>min</code> 属性和 <code>max</code> 属性，不设置 <code>min</code> 和 <code>max</code> 时，最小值为 0。</p>
    </DocDemo>
    <h3>步数</h3>
    <p>允许定义递增递减的步数控制。</p>
    <DocDemo :markdown="demo3">
      <template #source>
        <Demo3></Demo3>
      </template>
      <p>设置 <code>step</code> 属性可以控制步长，接受一个 <code>Number</code>。</p>
    </DocDemo>
    <h3>严格步数</h3>
    <DocDemo :markdown="demo4">
      <template #source>
        <Demo4></Demo4>
      </template>
      <p><code>step-strictly</code> 属性接受一个 <code>Boolean</code>。如果这个属性被设置为 <code>true</code>，则只能输入步数的倍数。</p>
    </DocDemo>
    <h3>精度</h3>
    <DocDemo :markdown="demo5">
      <template #source>
        <Demo5></Demo5>
      </template>
      <p>设置 <code>precision</code> 属性可以控制数值精度，接收一个 <code>Number</code>。</p>
    </DocDemo>
    <div class="tip">
      <p><code>precision</code> 的值必须是一个非负整数，并且不能小于 <code>step</code> 的小数位数。</p>
    </div>
    <h3>尺寸</h3>
    <p>额外提供了 <code>large</code>、<code>medium</code>、<code>mini</code> 三种尺寸的数字输入框。</p>
    <DocDemo :markdown="demo6">
      <template #source>
        <Demo6></Demo6>
      </template>
    </DocDemo>
    <h3>按钮位置</h3>
    <DocDemo :markdown="demo7">
      <template #source>
        <Demo7></Demo7>
      </template>
      <p>设置 <code>controls-position</code> 属性可以控制按钮位置。</p>
    </DocDemo>
    <h3>Attributes</h3>
    <sec-table class="doc-table" :data="attributes">
      <sec-table-column label="参数" prop="attr" width="140"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="类型" prop="type" width="220"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="200"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="80"></sec-table-column>
    </sec-table>
    <h3>Events</h3>
    <sec-table class="doc-table" :data="events">
      <sec-table-column label="事件名称" prop="event" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="回调参数" prop="param"></sec-table-column>
    </sec-table>
    <h3>Methods</h3>
    <sec-table class="doc-table" :data="methods">
      <sec-table-column label="方法名" prop="method" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="参数" prop="param" width="250"></sec-table-column>
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
      attributes: [{
        attr: 'value / v-model',
        desc: '绑定值',
        type: 'number',
        value: '—',
        default: '0',
      }, {
        attr: 'min',
        desc: '设置计数器允许的最小值',
        type: 'number',
        value: '—',
        default: '-Infinity',
      }, {
        attr: 'max',
        desc: '设置计数器允许的最大值',
        type: 'number',
        value: '—',
        default: 'Infinity',
      }, {
        attr: 'step',
        desc: '计数器步长',
        type: 'number',
        value: '—',
        default: '1',
      }, {
        attr: 'step-strictly',
        desc: '是否只能输入 step 的倍数',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'precision',
        desc: '数值精度',
        type: 'number',
        value: '—',
        default: '—',
      }, {
        attr: 'size',
        desc: '计数器尺寸',
        type: 'string',
        value: 'large / small',
        default: '—',
      }, {
        attr: 'disabled',
        desc: '是否禁用计数器',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'controls',
        desc: '是否使用控制按钮',
        type: 'boolean',
        value: '—',
        default: 'true',
      }, {
        attr: 'controls-position',
        desc: '控制按钮位置',
        type: 'string',
        value: 'right',
        default: '—',
      }, {
        attr: 'name',
        desc: '原生属性',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'label',
        desc: '输入框关联的 label 文字',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'placeholder',
        desc: '输入框默认 placeholder',
        type: 'string',
        value: '—',
        default: '—',
      }],
      events: [{
        event: 'change',
        desc: '绑定值被改变时触发',
        param: 'currentValue, oldValue',
      }, {
        event: 'blur',
        desc: '在组件 Input 失去焦点时触发',
        param: '(event: Event)',
      }, {
        event: 'focus',
        desc: '在组件 Input 获得焦点时触发',
        param: '(event: Event)',
      }],
      methods: [{
        method: 'focus',
        desc: '使 input 获取焦点',
        param: '—',
      }, {
        method: 'select',
        desc: '选中 input 中的文字',
        param: '—',
      }],
    };
  },
};
</script>
