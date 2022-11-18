<!-- eslint-disable max-len -->
<template>
  <sec-block class="doc-block">
    <h2>Checkbox 多选框</h2>
    <p>一组备选项中进行多选</p>
    <h3>基础用法</h3>
    <p>单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。</p>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
      </template>
      <p>在 <code>sec-checkbox</code> 元素中定义 <code>v-model</code> 绑定变量，单一的 <code>checkbox</code> 中，默认绑定变量的值会是 <code>Boolean</code>，选中为 <code>true</code>。</p>
    </DocDemo>
    <h3>禁用状态</h3>
    <p>多选框不可用状态。</p>
    <DocDemo :markdown="demo2">
      <template #source>
        <Demo2></Demo2>
      </template>
      <p>设置 <code>disabled</code> 属性即可。</p>
    </DocDemo>
    <h3>多选框组</h3>
    <p>适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。</p>
    <DocDemo :markdown="demo3">
      <template #source>
        <Demo3></Demo3>
      </template>
    </DocDemo>
    <h3>indeterminate 状态</h3>
    <p><code>indeterminate</code> 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果。</p>
    <DocDemo :markdown="demo4">
      <template #source>
        <Demo4></Demo4>
      </template>
    </DocDemo>
    <h3>可选项目数量的限制</h3>
    <p>使用 <code>min</code> 和 <code>max</code> 属性能够限制可以被勾选的项目的数量。</p>
    <DocDemo :markdown="demo5">
      <template #source>
        <Demo5></Demo5>
      </template>
    </DocDemo>
    <h3>按钮样式</h3>
    <p>按钮样式的多选组合。</p>
    <DocDemo :markdown="demo6">
      <template #source>
        <Demo6></Demo6>
      </template>
      <p>只需要把 <code>sec-checkbox</code> 元素替换为 <code>sec-checkbox-button</code> 元素即可。此外，SecUI 还提供了 <code>size</code> 属性。</p>
    </DocDemo>
    <h3>带有边框</h3>
    <DocDemo :markdown="demo7">
      <template #source>
        <Demo7></Demo7>
      </template>
      <p>设置 <code>border</code> 属性可以渲染为带有边框的多选框。</p>
    </DocDemo>
    <h3>Checkbox Attributes</h3>
    <sec-table :data="checkboxAttrabutes">
      <sec-table-column label="参数" prop="attr" width="150"></sec-table-column>
      <sec-table-column label="说明">
        <template #default="{ row }">
          <span v-html="row.desc"></span>
        </template>
      </sec-table-column>
      <sec-table-column label="类型" prop="type" width="220"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="200"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="80"></sec-table-column>
    </sec-table>
    <h3>Checkbox Events</h3>
    <sec-table :data="checkboxEvents">
      <sec-table-column label="事件名称" prop="event" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="回调参数" prop="param"></sec-table-column>
    </sec-table>
    <h3>Checkbox-group Attributes</h3>
    <sec-table :data="checkboxGroupAttributes">
      <sec-table-column label="参数" prop="attr" width="150"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="类型" prop="type" width="100"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="200"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="100"></sec-table-column>
    </sec-table>
    <h3>Checkbox-group Events</h3>
    <sec-table :data="checkboxGroupEvents">
      <sec-table-column label="事件名称" prop="event" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="回调参数" prop="param"></sec-table-column>
    </sec-table>
    <h3>Checkbox-button Attributes</h3>
    <sec-table :data="checkboxButtonAttributes">
      <sec-table-column label="参数" prop="attr" width="150"></sec-table-column>
      <sec-table-column label="说明">
        <template #default="{ row }">
          <span v-html="row.desc"></span>
        </template>
      </sec-table-column>
      <sec-table-column label="类型" prop="type" width="220"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="80"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="80"></sec-table-column>
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
      checkboxAttrabutes: [{
        attr: 'value / v-model',
        desc: '绑定值',
        type: 'string / number / boolean',
        value: '—',
        default: '—',
      }, {
        attr: 'label',
        desc: '选中状态的值（只有在 <code>checkbox-group</code> 或者绑定对象类型为 <code>array</code> 时有效）',
        type: 'string / number / boolean',
        value: '—',
        default: '—',
      }, {
        attr: 'true-label',
        desc: '选中时的值',
        type: 'string / number',
        value: '—',
        default: '—',
      }, {
        attr: 'false-label',
        desc: '没有选中时的值',
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
        attr: 'border',
        desc: '是否显示边框',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'size',
        desc: 'Checkbox 的尺寸，仅在 border 为真时有效',
        type: 'string',
        value: 'large / medium / mini',
        default: '—',
      }, {
        attr: 'name',
        desc: '原生 name 属性',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'checked',
        desc: '当前是否勾选',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'indeterminate',
        desc: '设置 indeterminate 状态，只负责样式控制',
        type: 'boolean',
        value: '—',
        default: 'false',
      }],
      checkboxEvents: [{
        event: 'change',
        desc: '当绑定值变化时触发的事件',
        param: '更新后的值',
      }],
      checkboxGroupAttributes: [{
        attr: 'value / v-model',
        desc: '绑定值',
        type: 'array',
        value: '—',
        default: '—',
      }, {
        attr: 'size',
        desc: '多选框组尺寸，仅对按钮形式的 Checkbox 或带有边框的 Checkbox 有效',
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
        attr: 'min',
        desc: '可被勾选的 checkbox 的最小数量',
        type: 'number',
        value: '—',
        default: '—',
      }, {
        attr: 'max',
        desc: '可被勾选的 checkbox 的最大数量',
        type: 'number',
        value: '—',
        default: '—',
      }, {
        attr: 'text-color',
        desc: '按钮形式的 Checkbox 激活时的文本颜色',
        type: 'string',
        value: '—',
        default: '#ffffff',
      }, {
        attr: 'fill',
        desc: '按钮形式的 Checkbox 激活时的填充色和边框色',
        type: 'string',
        value: '—',
        default: '#409EFF',
      }],
      checkboxGroupEvents: [{
        event: 'change',
        desc: '当绑定值变化时触发的事件',
        param: '更新后的值',
      }],
      checkboxButtonAttributes: [{
        attr: 'label',
        desc: '选中状态的值（只有在 <code>checkbox-group</code> 或者绑定对象类型为 <code>array</code> 时有效）',
        type: 'string / number / boolean',
        value: '—',
        default: '—',
      }, {
        attr: 'true-label',
        desc: '选中时的值',
        type: 'string / number',
        value: '—',
        default: '—',
      }, {
        attr: 'false-label',
        desc: '没有选中时的值',
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
      }, {
        attr: 'checked',
        desc: '当前是否勾选',
        type: 'boolean',
        value: '—',
        default: 'false',
      }],
    };
  },
};
</script>
