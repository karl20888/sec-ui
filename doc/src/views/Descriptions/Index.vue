<template>
  <sec-block class="doc-block">
    <h2>Descriptions 描述列表</h2>
    <div class="tip">
      <p>目前，请直接使用 ElementUI 的 Descriptions 组件。</p>
    </div>
    <p>列表形式展示多个字段。</p>
    <h3>基础用法</h3>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
      </template>
    </DocDemo>
    <h3>不同尺寸</h3>
    <DocDemo :markdown="demo2">
      <template #source>
        <Demo2></Demo2>
      </template>
    </DocDemo>
    <h3>垂直列表</h3>
    <DocDemo :markdown="demo3">
      <template #source>
        <Demo3></Demo3>
      </template>
    </DocDemo>
    <h3>自定义样式</h3>
    <DocDemo :markdown="demo4">
      <template #source>
        <Demo4></Demo4>
      </template>
    </DocDemo>
    <h3>Descriptions Attributes</h3>
    <sec-table class="doc-table" :data="descriptionsAttributes">
      <sec-table-column label="参数" prop="attr" width="160"></sec-table-column>
      <sec-table-column label="说明">
        <template #default="{ row }">
          <span v-html="row.desc"></span>
        </template>
      </sec-table-column>
      <sec-table-column label="类型" prop="type" width="100"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="240"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="120"></sec-table-column>
    </sec-table>
    <h3>Descriptions Slots</h3>
    <sec-table class="doc-table" :data="descriptionsSlots">
      <sec-table-column label="name" prop="name" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
    </sec-table>
    <h3>Descriptions Item Attributes</h3>
    <sec-table class="doc-table" :data="descriptionsItemAttributes">
      <sec-table-column label="参数" prop="attr" width="160"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="类型" prop="type" width="100"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="240"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="120"></sec-table-column>
    </sec-table>
    <h3>Descriptions Item Slots</h3>
    <sec-table class="doc-table" :data="descriptionsItemSlots">
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
      descriptionsAttributes: [{
        attr: 'border',
        desc: '是否带有边框',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'column',
        desc: '一行 <code>Descriptions Item</code> 的数量',
        type: 'number',
        value: '—',
        default: '3',
      }, {
        attr: 'direction',
        desc: '排列的方向',
        type: 'string',
        value: 'vertical / horizontal',
        default: 'horizontal',
      }, {
        attr: 'size',
        desc: '列表的尺寸',
        type: 'string',
        value: 'large / medium / small / mini',
        default: 'small',
      }, {
        attr: 'title',
        desc: '标题文本，显示在上方',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'extra',
        desc: '操作区文本，显示在右上方',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'colon',
        desc: '是否显示冒号',
        type: 'boolean',
        value: '—',
        default: 'true',
      }, {
        attr: 'labelClassName',
        desc: '自定义标签类名',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'contentClassName',
        desc: '自定义内容类名',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'labelStyle',
        desc: '自定义标签样式',
        type: 'object',
        value: '—',
        default: '—',
      }, {
        attr: 'contentStyle',
        desc: '自定义内容样式',
        type: 'object',
        value: '—',
        default: '—',
      }],
      descriptionsSlots: [{
        name: 'title',
        desc: '自定义标题，显示在左上方',
      }, {
        name: 'extra',
        desc: '自定义操作区，显示在右上方',
      }],
      descriptionsItemAttributes: [{
        attr: 'label',
        desc: '标签文本',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'span',
        desc: '列的数量',
        type: 'number',
        value: '—',
        default: '1',
      }, {
        attr: 'labelClassName',
        desc: '自定义标签类名',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'contentClassName',
        desc: '自定义内容类名',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'labelStyle',
        desc: '自定义标签样式',
        type: 'object',
        value: '—',
        default: '—',
      }, {
        attr: 'contentStyle',
        desc: '自定义内容样式',
        type: 'object',
        value: '—',
        default: '—',
      }],
      descriptionsItemSlots: [{
        name: 'label',
        desc: '自定义标签文本',
      }],
    };
  },
};
</script>
