<template>
  <sec-block class="doc-block">
    <h2>Empty 空状态</h2>
    <p>空状态时的占位提示。</p>
    <h3>基础用法</h3>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
      </template>
    </DocDemo>
    <h3>自定义图片</h3>
    <p>通过设置 <code>image</code> 属性传入图片 URL。</p>
    <DocDemo :markdown="demo2">
      <template #source>
        <Demo2></Demo2>
      </template>
    </DocDemo>
    <h3>图片尺寸</h3>
    <p>通过设置 <code>image-size</code> 属性来控制图片大小。</p>
    <DocDemo :markdown="demo3">
      <template #source>
        <Demo3></Demo3>
      </template>
    </DocDemo>
    <h3>底部内容</h3>
    <p>使用默认插槽可在底部插入内容。</p>
    <DocDemo :markdown="demo4">
      <template #source>
        <Demo4></Demo4>
      </template>
    </DocDemo>
    <h3>Empty Attributes</h3>
    <sec-table class="doc-table" :data="emptyAttributes">
      <sec-table-column label="参数" prop="attr" width="100"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="类型" prop="type" width="100"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="100"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="100"></sec-table-column>
    </sec-table>
    <h3>Empty Slots</h3>
    <sec-table class="doc-table" :data="emptySlots">
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
      emptyAttributes: [{
        attr: 'image',
        desc: '图片地址',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'image-size',
        desc: '图片大小（宽度）',
        type: 'number',
        value: '—',
        default: '—',
      }, {
        attr: 'description',
        desc: '文本描述',
        type: 'string',
        value: '—',
        default: '—',
      }],
      emptySlots: [{
        name: 'default',
        desc: '自定义底部内容',
      }, {
        name: 'image',
        desc: '自定义图片',
      }, {
        name: 'description',
        desc: '自定义描述文本',
      }],
    };
  },
};
</script>
