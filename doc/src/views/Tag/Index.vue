<!-- eslint-disable max-len -->
<template>
  <sec-block class="doc-block">
    <h2>Tag 标签</h2>
    <p>用于标记和选择。</p>
    <h3>基础用法</h3>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
      </template>
      <p>由 <code>type</code> 属性来选择 tag 的类型，也可以通过 <code>color</code> 属性来自定义背景色。</p>
    </DocDemo>
    <h3>不同尺寸</h3>
    <p>Tag 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。</p>
    <DocDemo :markdown="demo4">
      <template #source>
        <Demo4></Demo4>
      </template>
      <p>额外的尺寸：<code>large</code>、<code>medium</code>、<code>mini</code>，通过设置 <code>size</code> 属性来配置它们。</p>
    </DocDemo>
    <h3>不同主题</h3>
    <p>Tag 组件提供了三个不同的主题：<code>dark</code>、<code>light</code> 和 <code>plain</code></p>
    <DocDemo :markdown="demo5">
      <template #source>
        <Demo5></Demo5>
      </template>
      <p>通过设置 <code>effect</code> 属性来改变主题，默认为 <code>lignt</code>。</p>
    </DocDemo>
    <h3>状态标签</h3>
    <p>设置 <code>state</code> 属性，开启状态标签显示。</p>
    <DocDemo :markdown="demo6">
      <template #source>
        <Demo6></Demo6>
      </template>
      <p>注意如果开启 <code>state</code>，则 <code>effect</code>、<code>hit</code> 和 <code>color</code> 三个配置将不生效。</p>
    </DocDemo>
    <h3>可移除标签</h3>
    <DocDemo :markdown="demo2">
      <template #source>
        <Demo2></Demo2>
      </template>
      <p>设置 <code>closable</code> 属性可以定义一个标签是否可移除。默认的标签移除时会附带渐变动画，如果不想使用，可以设置 <code>disable-transitions</code> 属性，它接受一个 <code>Boolean</code>，true 为关闭。</p>
    </DocDemo>
    <h3>动态编辑标签</h3>
    <p>动态编辑标签可以通过点击标签关闭按钮后触发的 <code>close</code> 事件来实现。</p>
    <DocDemo :markdown="demo3">
      <template #source>
        <Demo3></Demo3>
      </template>
    </DocDemo>
    <h3>Attributes</h3>
    <sec-table class="doc-table" :data="attributes">
      <sec-table-column label="参数" prop="attr" width="160"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="类型" prop="type" width="80"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="350"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="80"></sec-table-column>
    </sec-table>
    <h3>Events</h3>
    <sec-table class="doc-table" :data="events">
      <sec-table-column label="事件名称" prop="event" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="回调参数" prop="param" width="400"></sec-table-column>
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
        attr: 'type',
        desc: '类型',
        type: 'string',
        value: 'success / info / warning / danger',
        default: '—',
      }, {
        attr: 'closable',
        desc: '是否可关闭',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'disable-transitions',
        desc: '是否禁用渐变动画',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'hit',
        desc: '是否有边框描边',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'color',
        desc: '背景色',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'size',
        desc: '尺寸',
        type: 'string',
        value: 'large / medium / small / mini',
        default: 'small',
      }, {
        attr: 'effect',
        desc: '主题',
        type: 'string',
        value: 'dark / light / plain',
        default: 'light',
      }, {
        attr: 'state',
        desc: '是否为状态标签',
        type: 'boolean',
        value: '—',
        default: 'false',
      }],
      events: [{
        event: 'click',
        desc: '点击 Tag 时触发的事件',
        param: '—',
      }, {
        event: 'close',
        desc: '关闭 Tag 时触发的事件',
        param: '—',
      }],
    };
  },
};
</script>
