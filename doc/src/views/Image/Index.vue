<!-- eslint-disable max-len -->
<template>
  <sec-block class="doc-block">
    <h2>Image 图片</h2>
    <p>图片容器，在保留原生 img 的特性下，支持懒加载，自定义占位、加载失败等。</p>
    <h3>基础用法</h3>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
      </template>
      <p>可通过 <code>fit</code> 确定图片如何适应到容器框，同原生 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit">object-fit</a>。</p>
    </DocDemo>
    <h3>占位内容</h3>
    <DocDemo :markdown="demo2">
      <template #source>
        <Demo2></Demo2>
      </template>
      <p>可通过 <code>slot = placeholder</code> 自定义占位内容。</p>
    </DocDemo>
    <h3>加载失败</h3>
    <DocDemo :markdown="demo3">
      <template #source>
        <Demo3></Demo3>
      </template>
      <p>可通过 <code>slot = error</code> 自定义加载失败内容。</p>
    </DocDemo>
    <h3>懒加载</h3>
    <DocDemo :markdown="demo4">
      <template #source>
        <Demo4></Demo4>
      </template>
      <p>可通过 <code>lazy</code> 开启懒加载功能，当图片滚动到可视范围内才会加载。可通过 <code>scroll-container</code> 来设置滚动容器，若未定义，则为最后一个 <code>overflow</code> 值为 <code>auto</code> 或 <code>scroll</code> 的父元素。</p>
    </DocDemo>
    <h3>大图预览</h3>
    <DocDemo :markdown="demo5">
      <template #source>
        <Demo5></Demo5>
      </template>
      <p>可通过 <code>previewSrcList</code> 开启预览大图的功能。</p>
    </DocDemo>
    <h3>Attributes</h3>
    <sec-table class="doc-table" :data="attributes">
      <sec-table-column label="参数" prop="attr" width="180"></sec-table-column>
      <sec-table-column label="说明">
        <template #default="{ row }">
          <span v-html="row.desc"></span>
        </template>
      </sec-table-column>
      <sec-table-column label="类型" prop="type" width="180"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="158"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="180"></sec-table-column>
    </sec-table>
    <h3>Events</h3>
    <sec-table class="doc-table" :data="events">
      <sec-table-column label="事件名称" prop="event" width="180"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="回调参数" prop="param" width="250"></sec-table-column>
    </sec-table>
    <h3>Slots</h3>
    <sec-table class="doc-table" :data="slots">
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
      attributes: [{
        attr: 'src',
        desc: '图片源，同原生',
        type: 'String',
        value: '—',
        default: '—',
      }, {
        attr: 'fit',
        desc: '确定图片如何适应容器框，同原生 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit">object-fit</a>',
        type: 'String',
        value: 'fill / contain / cover / none / scale-down',
        default: '—',
      }, {
        attr: 'alt',
        desc: '原生 alt',
        type: 'String',
        value: '—',
        default: '—',
      }, {
        attr: 'referrer-policy',
        desc: '原生 referrerPolicy',
        type: 'String',
        value: '—',
        default: '—',
      }, {
        attr: 'lazy',
        desc: '是否开启懒加载',
        type: 'Boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'scroll-container',
        desc: '开启懒加载后，监听 scroll 事件的容器',
        type: 'String / HTMLElement',
        value: '—',
        default: '最近一个 overflow 值为 auto 或 scroll 的父元素',
      }, {
        attr: 'preview-src-list',
        desc: '开启图片预览功能',
        type: 'Array',
        value: '—',
        default: '—',
      }, {
        attr: 'z-index',
        desc: '设置图片预览的 z-index',
        type: 'Number',
        value: '—',
        default: '2000',
      }],
      events: [{
        event: 'load',
        desc: '图片加载成功触发',
        param: '(e: Event)',
      }, {
        event: 'error',
        desc: '图片加载失败触发',
        param: '(e: Error)',
      }],
      slots: [{
        name: 'placeholder',
        desc: '图片未加载的占位内容',
      }, {
        name: 'error',
        desc: '加载失败的内容',
      }],
    };
  },
};
</script>
