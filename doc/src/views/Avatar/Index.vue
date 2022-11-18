<template>
  <sec-block class="doc-block">
    <h2>Avatar 头像</h2>
    <p>用图标、图片或者字符的形式展示用户或事物信息。</p>
    <h3>基本用法</h3>
    <p>通过 <code>shape</code> 和 <code>size</code> 设置头像的形状和大小。</p>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
      </template>
    </DocDemo>
    <h3>展示类型</h3>
    <p>支持三种类型：图标、图片和字符。</p>
    <DocDemo :markdown="demo2">
      <template #source>
        <Demo2></Demo2>
      </template>
    </DocDemo>
    <h3>图片加载失败的 fallback 行为</h3>
    <p>当展示类型为图片的时候，图片加载失败的 fallback 行为。</p>
    <DocDemo :markdown="demo3">
      <template #source>
        <Demo3></Demo3>
      </template>
    </DocDemo>
    <h3>图片如何适应容器框</h3>
    <p>当展示类型为图片的时候，使用 <code>fit</code> 属性定义图片如何适应容器框，同原生 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit">object-fit</a>。</p>
    <DocDemo :markdown="demo4">
      <template #source>
        <Demo4></Demo4>
      </template>
    </DocDemo>
    <h3>Attributes</h3>
    <sec-table class="doc-table" :data="attributes">
      <sec-table-column label="参数" prop="attr" width="80"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="类型" prop="type" width="140"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="250"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="80"></sec-table-column>
    </sec-table>
    <h3>Events</h3>
    <sec-table class="doc-table" :data="events">
      <sec-table-column label="事件名称" prop="event" width="120"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="回调参数" prop="param" width="120"></sec-table-column>
    </sec-table>
    <h3>Slot</h3>
    <sec-table class="doc-table" :data="slot">
      <sec-table-column label="name" prop="name" width="120"></sec-table-column>
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
      attributes: [{
        attr: 'icon',
        desc: '设置头像的图标类型，参考 Icon 组件',
        type: 'string',
        value: '',
        default: '',
      }, {
        attr: 'size',
        desc: '设置头像的大小',
        type: 'number / string',
        value: 'number / large / medium / small',
        default: 'large',
      }, {
        attr: 'shape',
        desc: '设置头像的形状',
        type: 'string',
        value: 'circle / square',
        default: 'circle',
      }, {
        attr: 'src',
        desc: '图片头像的资源地址',
        type: 'string',
        value: '',
        default: '',
      }, {
        attr: 'srcSet',
        desc: '以逗号分隔的一个或多个字符串列表表明一系列用户代理使用的可能的图像',
        type: 'string',
        value: '',
        default: '',
      }, {
        attr: 'alt',
        desc: '描述图像的替换文本',
        type: 'string',
        value: '',
        default: '',
      }, {
        attr: 'fit',
        desc: '当展示类型为图片的时候，设置图片如何适应容器框',
        type: 'string',
        value: 'fill / contain / cover / none / scale-down',
        default: 'cover',
      }],
      events: [{
        event: 'error',
        desc: '图片类头像加载失败的回调，返回 false 会关闭组件默认为 fallback 行为',
        param: '(e: Event)',
      }],
      slot: [{
        name: 'default',
        desc: '自定义头像展示内容',
      }],
    };
  },
};
</script>
