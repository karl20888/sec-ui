<template>
  <sec-block class="doc-block">
    <h2>Popconfirm 气泡确认框</h2>
    <p>点击元素，弹出气泡确认框。</p>
    <h3>基础用法</h3>
    <p>Popconfirm 的属性与 Popover 很类似，因此对于重复属性，请参考 Popover 的文档，在此文档中不做详尽解释。</p>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
      </template>
      <p>在 Popconfirm 中，只有 <code>title</code> 属性可用，<code>content</code> 属性不会被展示。</p>
    </DocDemo>
    <h3>自定义</h3>
    <p>可以在 Popconfirm 中自定义内容。</p>
    <DocDemo :markdown="demo2">
      <template #source>
        <Demo2></Demo2>
      </template>
    </DocDemo>
    <h3>Attributes</h3>
    <sec-table class="doc-table" :data="attributes">
      <sec-table-column label="参数" prop="attr" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="类型" prop="type" width="100"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="100"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="200"></sec-table-column>
    </sec-table>
    <h3>Slot</h3>
    <sec-table class="doc-table" :data="slot">
      <sec-table-column label="name" prop="name" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
    </sec-table>
    <h3>Events</h3>
    <sec-table class="doc-table" :data="events">
      <sec-table-column label="事件名称" prop="event" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="回调参数" prop="param" width="250"></sec-table-column>
    </sec-table>
  </sec-block>
</template>

<script>
import DocDemo from '../DocDemo.vue';
import demo1 from './Demo1/source.md';
import Demo1 from './Demo1/View.vue';
import demo2 from './Demo2/source.md';
import Demo2 from './Demo2/View.vue';

export default {
  components: {
    DocDemo,
    Demo1,
    Demo2,
  },
  data() {
    return {
      demo1,
      demo2,
      attributes: [{
        attr: 'title',
        desc: '标题',
        type: 'String',
        value: '—',
        default: '—',
      }, {
        attr: 'confirm-button-text',
        desc: '确认按钮文字',
        type: 'String',
        value: '—',
        default: '—',
      }, {
        attr: 'cancel-button-text',
        desc: '取消按钮文字',
        type: 'String',
        value: '—',
        default: '—',
      }, {
        attr: 'confirm-button-type',
        desc: '确认按钮类型',
        type: 'String',
        value: '—',
        default: 'primary',
      }, {
        attr: 'cancel-button-type',
        desc: '取消按钮类型',
        type: 'String',
        value: '—',
        default: 'text',
      }, {
        attr: 'icon',
        desc: 'Icon',
        type: 'String',
        value: '—',
        default: 'el-icon-question',
      }, {
        attr: 'icon-color',
        desc: 'Icon 颜色',
        type: 'String',
        value: '—',
        default: '#f90',
      }, {
        attr: 'hide-icon',
        desc: '是否隐藏 Icon',
        type: 'Boolean',
        value: '—',
        default: 'false',
      }],
      slot: [{
        name: 'reference',
        desc: '触发 Popconfirm 显示的 HTML 元素',
      }],
      events: [{
        event: 'confirm',
        desc: '点击确认按钮时触发',
        param: '—',
      }, {
        event: 'cancel',
        desc: '点击取消按钮时触发',
        param: '—',
      }],
    };
  },
};
</script>
