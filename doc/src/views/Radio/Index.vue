<!-- eslint-disable max-len -->
<template>
  <sec-block class="doc-block">
    <h2>Radio 单选框</h2>
    <p>在一组备选项中进行单选</p>
    <h3>基础用法</h3>
    <p>由于选项默认可见，不宜过多，若选项过多，便宜使用 Select 选择器。</p>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
      </template>
      <p>要使用 Radio 组件，只需要设置 <code>v-model</code> 绑定变量，选中意味着变量的值为相应 Radio <code>label</code> 属性的值，<code>label</code> 可以是 <code>String</code>、<code>Number</code> 或 <code>Boolean</code>。</p>
    </DocDemo>
    <h3>禁用状态</h3>
    <p>单选框不可用的状态。</p>
    <DocDemo :markdown="demo2">
      <template #source>
        <Demo2></Demo2>
      </template>
      <p>只要在 <code>sec-radio</code> 元素中设置 <code>disabled</code> 属性即可，它接受一个 <code>Boolean</code>，<code>true</code> 为禁用。</p>
    </DocDemo>
    <h3>单选框组</h3>
    <p>适用于在多个互斥的选项中选择的场景</p>
    <DocDemo :markdown="demo3">
      <template #source>
        <Demo3></Demo3>
      </template>
      <p>结合 <code>sec-radio-group</code> 元素和子元素 <code>sec-radio</code> 可以实现单选组，在 <code>sec-radio-group</code> 中绑定 <code>v-model</code>，在 <code>sec-radio</code> 中设置好 <code>label</code> 即可，无需再给每一个 <code>sec-radio</code> 绑定变量，另外，还提供了 <code>change</code> 事件来响应变化，它会传入一个参数 <code>value</code>。</p>
    </DocDemo>
    <h3>按钮样式</h3>
    <p>按钮样式的单选组合。</p>
    <DocDemo :markdown="demo4">
      <template #source>
        <Demo4></Demo4>
      </template>
      <p>只需要把 <code>sec-radio</code> 元素换成 <code>sec-radio-button</code> 元素即可，此外，SecUI 还提供了 <code>size</code> 属性。</p>
    </DocDemo>
    <h3>带有边框</h3>
    <DocDemo :markdown="demo5">
      <template #source>
        <Demo5></Demo5>
      </template>
      <p>设置 <code>border</code> 属性可以渲染为带有边框的单选框。</p>
    </DocDemo>
    <h3>Radio Attributes</h3>
    <sec-table :data="radioAttributes">
      <sec-table-column label="参数" prop="attr" width="140"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="类型" prop="type" width="220"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="200"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="80"></sec-table-column>
    </sec-table>
    <h3>Radio Events</h3>
    <sec-table :data="radioEvents">
      <sec-table-column label="事件名称" prop="event" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="回调参数" prop="param"></sec-table-column>
    </sec-table>
    <h3>Radio-group Attributes</h3>
    <sec-table :data="radioGroupAttributes">
      <sec-table-column label="参数" prop="attr" width="140"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="类型" prop="type" width="220"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="200"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="100"></sec-table-column>
    </sec-table>
    <h3>Radio-group Events</h3>
    <sec-table :data="radioGroupEvents">
      <sec-table-column label="事件名称" prop="event" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="回调参数" prop="param"></sec-table-column>
    </sec-table>
    <h3>Radio-button Attributes</h3>
    <sec-table :data="radioButtonAttributes">
      <sec-table-column label="参数" prop="attr"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="类型" prop="type"></sec-table-column>
      <sec-table-column label="可选值" prop="value"></sec-table-column>
      <sec-table-column label="默认值" prop="default"></sec-table-column>
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

export default {
  components: {
    DocDemo,
    Demo1,
    Demo2,
    Demo3,
    Demo4,
    Demo5,
  },
  data() {
    return {
      demo1,
      demo2,
      demo3,
      demo4,
      demo5,
      radioAttributes: [{
        attr: 'value / v-model',
        desc: '绑定值',
        type: 'string / number / boolean',
        value: '—',
        default: '—',
      }, {
        attr: 'label',
        desc: 'Radio 的 value',
        type: 'string / number / boolean',
        value: '—',
        default: '—',
      }, {
        attr: 'disabled',
        desc: '是否禁用',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'border',
        desc: '是否显示边框',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'size',
        desc: 'Radio 的尺寸，仅在 border 为真时有效',
        type: 'string',
        value: 'large / medium / mini',
        default: '—',
      }, {
        attr: 'name',
        desc: '原生 name 属性',
        type: 'string',
        value: '—',
        default: '—',
      }],
      radioEvents: [{
        event: 'change',
        desc: '绑定值变化时触发的事件',
        param: '选中的 Radio label 值',
      }],
      radioGroupAttributes: [{
        attr: 'value / v-model',
        desc: '绑定值',
        type: 'string / number / boolean',
        value: '—',
        default: '—',
      }, {
        attr: 'size',
        desc: '单选框组尺寸，仅对按钮形式的 Radio 或 带有边框的 Radio 有效',
        type: 'string',
        value: 'large / medium / mini',
        default: '—',
      }, {
        attr: 'disabled',
        desc: '是否禁用',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'text-color',
        desc: '按钮形式的 Radio 激活时的文本颜色',
        type: 'string',
        value: '—',
        default: '#fff',
      }, {
        attr: 'fill',
        desc: '按钮形式的 Radio 激活时的填充色和边框色',
        type: 'string',
        value: '—',
        default: '#409EFF',
      }],
      radioGroupEvents: [{
        event: 'change',
        desc: '绑定值变化时触发的事件',
        param: '选中的 Radio label 值',
      }],
      radioButtonAttributes: [{
        attr: 'label',
        desc: 'Radio 的 value',
        type: 'string / number',
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
        desc: '原生 name 属性',
        type: 'string',
        value: '—',
        default: '—',
      }],
    };
  },
};
</script>
