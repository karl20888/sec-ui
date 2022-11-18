<!-- eslint-disable max-len -->
<template>
  <sec-block class="doc-block">
    <h2>Popover 弹出框</h2>
    <h3>基础用法</h3>
    <p>Popover 的属性与 Tooltip 很类似，它们都是基于 <code>Vue-popper</code> 开发的，因此对于重复属性，请参考 Tooltip 的文档，在此文档中不做详尽解释。</p>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
      </template>
      <p><code>trigger</code> 属性用于设置何时触发 Popover，支持四种触发方式：<code>hover</code>，<code>click</code>，<code>focus</code> 和 <code>manual</code>。对于触发 Popover 的元素，有两种写法：使用 <code>slot="reference"</code> 的具名插槽，或使用自定义指令 <code>v-popover</code> 指向 Popover 的索引 <code>ref</code>。</p>
    </DocDemo>
    <h3>嵌套信息</h3>
    <p>可以在 Popover 中嵌套多种类型信息，以下为嵌套表格的例子。</p>
    <DocDemo :markdown="demo2">
      <template #source>
        <Demo2></Demo2>
      </template>
      <p>利用分发取代 <code>content</code> 属性。</p>
    </DocDemo>
    <h3>嵌套操作</h3>
    <p>当然，你还可以嵌套操作，这相比 Dialog 更为轻量：</p>
    <DocDemo :markdown="demo3">
      <template #source>
        <Demo3></Demo3>
      </template>
    </DocDemo>
    <h3>Attributes</h3>
    <sec-table class="doc-table" :data="attributes">
      <sec-table-column label="参数" prop="attr" width="150"></sec-table-column>
      <sec-table-column label="说明">
        <template #default="{ row }">
          <span v-html="row.desc"></span>
        </template>
      </sec-table-column>
      <sec-table-column label="类型" prop="type" width="180"></sec-table-column>
      <sec-table-column label="可选值" width="220">
        <template #default="{ row }">
          <span v-html="row.value"></span>
        </template>
      </sec-table-column>
      <sec-table-column label="默认值" width="230">
        <template #default="{ row }">
          <span v-html="row.default"></span>
        </template>
      </sec-table-column>
    </sec-table>
    <h3>Slots</h3>
    <sec-table class="doc-table" :data="slots">
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
import demo3 from './Demo3/source.md';
import Demo3 from './Demo3/View.vue';

export default {
  components: {
    DocDemo,
    Demo1,
    Demo2,
    Demo3,
  },
  data() {
    return {
      demo1,
      demo2,
      demo3,
      attributes: [{
        attr: 'trigger',
        desc: '触发方式',
        type: 'String',
        value: 'click / focus / hover / manual',
        default: 'click',
      }, {
        attr: 'title',
        desc: '标题',
        type: 'String',
        value: '—',
        default: '—',
      }, {
        attr: 'content',
        desc: '显示的内容，也可以通过 <code>slot</code> 传入 DOM',
        type: 'String',
        value: '—',
        default: '—',
      }, {
        attr: 'width',
        desc: '宽度',
        type: 'String / Number',
        value: '—',
        default: '最小宽度 150px',
      }, {
        attr: 'placement',
        desc: '出现位置',
        type: 'String',
        value: 'top / top-start / top-end / bottom / bottom-start / bottom-end / left / left-start / left-end / right / right-start / right-end',
        default: 'bottom',
      }, {
        attr: 'disabled',
        desc: 'Popover 是否可用',
        type: 'Boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'value / v-model',
        desc: '状态是否可见',
        type: 'Boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'offset',
        desc: '出现位置的偏移量',
        type: 'Number',
        value: '—',
        default: '0',
      }, {
        attr: 'transition',
        desc: '定义渐变动画',
        type: 'String',
        value: '—',
        default: 'fade-in-linear',
      }, {
        attr: 'visible-arrow',
        desc: '是否显示 Tooltip 箭头，更多参数可见 <a href="https://github.com/element-component/vue-popper">Vue-popper</a>',
        type: 'Boolean',
        value: '—',
        default: 'true',
      }, {
        attr: 'popper-options',
        desc: '<a href="https://popper.js.org/docs/v2/">popper.js</a> 的参数',
        type: 'Object',
        value: '参考 <a href="https://popper.js.org/docs/v2/">popper.js</a> 文档',
        default: '<code>{ boundariesElement: \'body\', gpuAcceleration: false }</code>',
      }, {
        attr: 'popper-class',
        desc: '为 popper 添加类名',
        type: 'String',
        value: '—',
        default: '—',
      }, {
        attr: 'open-delay',
        desc: '触发方式为 hover 时的显示延迟，单位为毫秒',
        type: 'Number',
        value: '—',
        default: '—',
      }, {
        attr: 'close-delay',
        desc: '触发方式为 hover 时的隐藏延迟，单位为毫秒',
        type: 'Number',
        value: '—',
        default: '200',
      }, {
        attr: 'tabindex',
        desc: 'Popover 组件的 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex">tabindex</a>',
        type: 'Number',
        value: '—',
        default: '0',
      }],
      slots: [{
        name: '—',
        desc: 'Popover 内嵌 HTML 文本',
      }, {
        name: 'reference',
        desc: '触发 Popover 显示的 HTML 元素',
      }],
      events: [{
        event: 'show',
        desc: '显示时触发',
        param: '—',
      }, {
        event: 'after-enter',
        desc: '显示动画播放完毕后触发',
        param: '—',
      }, {
        event: 'hide',
        desc: '隐藏时触发',
        param: '—',
      }, {
        event: 'after-leave',
        desc: '隐藏动画播放完毕后触发',
        param: '—',
      }],
    };
  },
};
</script>
