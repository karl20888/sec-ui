<template>
  <sec-block class="doc-block">
    <h2>Link 文字链接</h2>
    <p>文字超链接</p>
    <h3>基础用法</h3>
    <p>基础的文字链接用法。</p>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
      </template>
    </DocDemo>
    <h3>禁用状态</h3>
    <p>文字链接不可用状态。</p>
    <DocDemo :markdown="demo2">
      <template #source>
        <Demo2></Demo2>
      </template>
    </DocDemo>
    <h3>下划线</h3>
    <p>文字链接下划线。</p>
    <DocDemo :markdown="demo3">
      <template #source>
        <Demo3></Demo3>
      </template>
    </DocDemo>
    <h3>图标</h3>
    <p>带图标的文字链接可增强辨识度。</p>
    <DocDemo :markdown="demo4">
      <template #source>
        <Demo4></Demo4>
      </template>
    </DocDemo>
    <h3>Attributes</h3>
    <sec-table class="doc-table" :data="attributes">
      <sec-table-column label="参数" prop="attr" width="120"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="类型" prop="type" width="120"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="320"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="100"></sec-table-column>
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
        attr: 'type',
        desc: '类型',
        type: 'string',
        value: 'primary / success / warning / danger / info',
        default: 'default',
      }, {
        attr: 'underline',
        desc: '是否下划线',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'disabled',
        desc: '是否禁用状态',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'href',
        desc: '原生 href 属性',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'icon',
        desc: '图标类名',
        type: 'string',
        value: '—',
        default: '—',
      }],
    };
  },
};
</script>
