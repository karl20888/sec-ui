<!-- eslint-disable max-len -->
<template>
  <sec-block class="doc-block">
    <h2>Alert 警告</h2>
    <p>用于页面中展示重要的提示信息。</p>
    <h3>基本用法</h3>
    <p>页面中的非浮层元素，不会自动消失。</p>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
      </template>
      <p>Alert 组件提供四种主题，由 <code>type</code> 属性指定，默认值为 <code>info</code>。</p>
    </DocDemo>
    <h3>主题</h3>
    <p>Alert 组件提供了两个不同的主题：<code>light</code> 和 <code>dark</code>。</p>
    <DocDemo :markdown="demo2">
      <template #source>
        <Demo2></Demo2>
      </template>
      <p>通过设置 <code>effect</code> 属性来改变主题，默认为 <code>light</code>。</p>
    </DocDemo>
    <h3>自定义关闭按钮</h3>
    <p>自定义关闭按钮为文字或其他符号。</p>
    <DocDemo :markdown="demo3">
      <template #source>
        <Demo3></Demo3>
      </template>
      <p>在 Alert 组件中，你可以设置是否可关闭，关闭按钮的文本以及关闭时的回调函数。<code>closable</code> 属性决定是否可关闭，接受 <code>boolean</code>，默认为 <code>true</code>。你可以设置 <code>close-text</code> 属性来代替右侧的关闭按钮，注意：<code>close-text</code> 必须为文本。设置 <code>close</code> 事件来设置关闭时的回调。</p>
    </DocDemo>
    <h3>带有 icon</h3>
    <p>表示某种状态时提升可读性。</p>
    <DocDemo :markdown="demo4">
      <template #source>
        <Demo4></Demo4>
      </template>
      <p>通过设置 <code>show-icon</code> 属性来显示 Alert 的 icon，这能更有效地向用户展示你的显示意图。</p>
    </DocDemo>
    <h3>文字居中</h3>
    <p>使用 <code>center</code> 属性让文字水平居中。</p>
    <DocDemo :markdown="demo5">
      <template #source>
        <Demo5></Demo5>
      </template>
    </DocDemo>
    <h3>带有辅助性文字介绍</h3>
    <p>包含标题和内容，解释更详细的警告。</p>
    <DocDemo :markdown="demo6">
      <template #source>
        <Demo6></Demo6>
      </template>
      <p>除了必填的 <code>title</code> 属性外，你可以设置 <code>description</code> 属性来帮助你更好地介绍，我们称之为辅助性文字。辅助性文字只能存放单行文本，会自动换行显示。</p>
    </DocDemo>
    <h3>带有 icon 和辅助性文字介绍</h3>
    <DocDemo :markdown="demo7">
      <template #source>
        <Demo7></Demo7>
      </template>
      <p>最后，这是一个同时具有 icon 和辅助性文字的样例。</p>
    </DocDemo>
    <h3>Attributes</h3>
    <sec-table class="doc-table" :data="attributes">
      <sec-table-column label="参数" prop="attr" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="类型" prop="type" width="100"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="250"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="100"></sec-table-column>
    </sec-table>
    <h3>Slot</h3>
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
        attr: 'title',
        desc: '标题',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'type',
        desc: '主题',
        type: 'string',
        value: 'success / warning / info / error',
        default: 'info',
      }, {
        attr: 'description',
        desc: '辅助性文字。也可通过默认 slot 传入',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'closable',
        desc: '是否可关闭',
        type: 'boolean',
        value: '—',
        default: 'true',
      }, {
        attr: 'center',
        desc: '文字是否居中',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'close-text',
        desc: '关闭按钮自定义文本',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'show-icon',
        desc: '是否显示图标',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'effect',
        desc: '选择提供的主题',
        type: 'string',
        value: 'light / dark',
        default: 'light',
      }],
      slots: [{
        name: '—',
        desc: '描述',
      }, {
        name: 'title',
        desc: '标题的内容',
      }],
      events: [{
        event: 'close',
        desc: '关闭 alert 时触发的事件',
        param: '—',
      }],
    };
  },
};
</script>
