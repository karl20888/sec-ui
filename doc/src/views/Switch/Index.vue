<!-- eslint-disable max-len -->
<template>
  <sec-block class="doc-block">
    <h2>Switch 开关</h2>
    <p>表示两种相互对立的状态间的切换，多用于出发「开/关」。</p>
    <h3>基本用法</h3>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
      </template>
      <p>绑定 <code>v-model</code> 到一个 <code>Boolean</code> 类型的变量，可以使用 <code>active-color</code> 属性与 <code>inactive-color</code> 属性来设置开关的背景色。</p>
    </DocDemo>
    <h3>文字描述</h3>
    <DocDemo :markdown="demo2">
      <template #source>
        <Demo2></Demo2>
      </template>
      <p>使用 <code>active-text</code> 属性与 <code>inactive-text</code> 属性来设置开关的文字描述。</p>
    </DocDemo>
    <h3>扩展的 value 类型</h3>
    <DocDemo :markdown="demo3">
      <template #source>
        <Demo3></Demo3>
      </template>
      <p>设置 <code>active-value</code> 和 <code>inactive-value</code> 属性，接受 <code>Boolean</code>，<code>String</code> 或 <code>Number</code> 类型的值。</p>
    </DocDemo>
    <h3>禁用状态</h3>
    <DocDemo :markdown="demo4">
      <template #source>
        <Demo4></Demo4>
      </template>
      <p>设置 <code>disabled</code> 属性，接受一个 <code>Boolean</code>，设置 <code>true</code> 即可禁用。</p>
    </DocDemo>
    <h3>Attributes</h3>
    <sec-table class="doc-table" :data="attributes">
      <sec-table-column label="参数" prop="attr" width="160"></sec-table-column>
      <sec-table-column label="说明">
        <template #default="{ row }">
          <span v-html="row.desc"></span>
        </template>
      </sec-table-column>
      <sec-table-column label="类型" prop="type" width="220"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="80"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="120"></sec-table-column>
    </sec-table>
    <h3>Events</h3>
    <sec-table class="doc-table" :data="events">
      <sec-table-column label="事件名称" prop="event" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="回调参数" prop="param" width="250"></sec-table-column>
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
        type: 'boolean / string / number',
        value: '—',
        default: '—',
      }, {
        attr: 'disabled',
        desc: '是否禁用',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'width',
        desc: 'switch 的宽度（像素）',
        type: 'number',
        value: '—',
        default: '40',
      }, {
        attr: 'active-icon-class',
        desc: 'switch 打开时所显示图标的类名，设置此项会忽略 <code>active-text</code>',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'inactive-icon-class',
        desc: 'switch 关闭时所显示图标的类名，设置此项会忽略 <code>inactive-text</code>',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'active-text',
        desc: 'switch 打开时的文字描述',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'inactive-text',
        desc: 'switch 关闭时的文字描述',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'active-value',
        desc: 'switch 打开时的值',
        type: 'boolean / string / number',
        value: '—',
        default: 'true',
      }, {
        attr: 'inactive-value',
        desc: 'switch 关闭时的值',
        type: 'boolean / string / number',
        value: '—',
        default: 'false',
      }, {
        attr: 'active-color',
        desc: 'switch 打开时的背景色',
        type: 'string',
        value: '—',
        default: '#F08300',
      }, {
        attr: 'inactive-color',
        desc: 'switch 关闭时的背景色',
        type: 'string',
        value: '—',
        default: '#DCDFE6',
      }, {
        attr: 'name',
        desc: 'switch 对应的 name 属性',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'validate-event',
        desc: '改变 switch 状态时是否触发表单的校验',
        type: 'boolean',
        value: '—',
        default: 'true',
      }],
      events: [{
        event: 'change',
        desc: 'switch 状态发生变化时的回调函数',
        param: '新状态的值',
      }],
      methods: [{
        method: 'focus',
        desc: '使 Switch 获取焦点',
        param: '—',
      }],
    };
  },
};
</script>
