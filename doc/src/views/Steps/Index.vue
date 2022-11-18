<!-- eslint-disable max-len -->
<template>
  <sec-block class="doc-block">
    <h2>Steps 步骤条</h2>
    <p>引导用户按照流程完成任务的分布导航条，可根据实际应用场景设定步骤，步骤不得少于 2 步。</p>
    <div class="tip">
      <p>目前直接使用 ElementUI 的 <code>el-steps</code>。</p>
    </div>
    <h3>基础用法</h3>
    <p>简单的步骤条。</p>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
      </template>
      <p>设置 <code>active</code> 属性，接受一个 <code>Number</code>，表明步骤的 index，从 0 开始。需要定宽的步骤条时，设置 <code>space</code> 属性即可，它接受 <code>Number</code>，单位为 <code>px</code>，如果不设置，则为自适应。设置 <code>finish-status</code> 属性可以改变已经完成的步骤的状态。</p>
    </DocDemo>
    <h3>含状态步骤条</h3>
    <p>每一步骤显示出该步骤的状态。</p>
    <DocDemo :markdown="demo2">
      <template #source>
        <Demo2></Demo2>
      </template>
      <p>也可以使用 <code>title</code> 具名分发，可以用 <code>slot</code> 的方式来取代属性的设置，在本文档最后的列表中有所有的 slot name 可供参考。</p>
    </DocDemo>
    <h3>有描述的步骤条</h3>
    <p>每个步骤有其对应的步骤状态描述。</p>
    <DocDemo :markdown="demo3">
      <template #source>
        <Demo3></Demo3>
      </template>
    </DocDemo>
    <h3>居中的步骤条</h3>
    <p>标题和描述都将居中。</p>
    <DocDemo :markdown="demo4">
      <template #source>
        <Demo4></Demo4>
      </template>
    </DocDemo>
    <h3>带图标的步骤条</h3>
    <p>步骤条内可以启用各种自定义的图标。</p>
    <DocDemo :markdown="demo5">
      <template #source>
        <Demo5></Demo5>
      </template>
      <p>通过 <code>icon</code> 属性来设置图标，图标的类型可以参考 Icon 组件的文档，除此之外，还能通过具名 <code>slot</code> 来使用自定义的图标。</p>
    </DocDemo>
    <h3>竖式步骤条</h3>
    <p>竖直方向的步骤条</p>
    <DocDemo :markdown="demo6">
      <template #source>
        <Demo6></Demo6>
      </template>
      <p>只需要在 <code>el-steps</code> 元素中设置 <code>direction</code> 属性为 <code>vertical</code> 即可。</p>
    </DocDemo>
    <h3>简洁风格的步骤条</h3>
    <p>设置 <code>simple</code> 可应用简洁风格，该条件下 <code>align-center</code> / <code>description</code> / <code>direction</code> / <code>space</code> 都将失效。</p>
    <DocDemo :markdown="demo7">
      <template #source>
        <Demo7></Demo7>
      </template>
    </DocDemo>
    <h3>Steps Attributes</h3>
    <sec-table class="doc-table" :data="stepsAttributes">
      <sec-table-column label="参数" prop="attr" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="类型" prop="type" width="140"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="300"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="100"></sec-table-column>
    </sec-table>
    <h3>Step Attributes</h3>
    <sec-table class="doc-table" :data="stepAttributes">
      <sec-table-column label="参数" prop="attr" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="类型" prop="type" width="140"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="300"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="100"></sec-table-column>
    </sec-table>
    <h3>Step Slot</h3>
    <sec-table class="doc-table" :data="stepSlots">
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
      stepsAttributes: [{
        attr: 'space',
        desc: '每个 step 的间距，不填写将自适应间距。支持百分比。',
        type: 'number / string',
        value: '—',
        default: '—',
      }, {
        attr: 'direction',
        desc: '显示方向',
        type: 'string',
        value: 'vertical / horizontal',
        default: 'horizontal',
      }, {
        attr: 'active',
        desc: '设置当前激活步骤',
        type: 'number',
        value: '—',
        default: '0',
      }, {
        attr: 'process-status',
        desc: '设置当前步骤的状态',
        type: 'string',
        value: 'wait / process / finish / error / success',
        default: 'process',
      }, {
        attr: 'finish-status',
        desc: '设置结束步骤的状态',
        type: 'string',
        value: 'wait / process / finish / error / success',
        default: 'finish',
      }, {
        attr: 'align-center',
        desc: '进行居中对齐',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'simple',
        desc: '是否应用简洁风格',
        type: 'boolean',
        value: '—',
        default: 'false',
      }],
      stepAttributes: [{
        attr: 'title',
        desc: '标题',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'description',
        desc: '描述性文字',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'icon',
        desc: '图标，传入 icon 的 class 全名来自定义 icon，也支持 slot 方式写入',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'status',
        desc: '设置当前步骤的状态，不设置则根据 steps 确定状态',
        type: 'string',
        value: 'wait / process / finish / error / success',
        default: '—',
      }],
      stepSlots: [{
        name: 'icon',
        desc: '自定义图标',
      }, {
        name: 'title',
        desc: '自定义标题',
      }, {
        name: 'description',
        desc: '自定义描述性文字',
      }],
    };
  },
};
</script>
