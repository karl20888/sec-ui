<template>
  <sec-block class="doc-block">
    <h2>Result 结果</h2>
    <p>用于对用户的操作或者异常状态做反馈。</p>
    <h3>基础用法</h3>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
      </template>
    </DocDemo>
    <h3>自定义内容</h3>
    <DocDemo :markdown="demo2">
      <template #source>
        <Demo2></Demo2>
      </template>
    </DocDemo>
    <h3>Result Attributes</h3>
    <sec-table class="doc-table" :data="resultAttributes">
      <sec-table-column label="参数" prop="attr" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="类型" prop="type" width="100"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="300"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="100"></sec-table-column>
    </sec-table>
    <h3>Result Slots</h3>
    <sec-table class="doc-table" :data="resultSlots">
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
      resultAttributes: [{
        attr: 'title',
        desc: '标题',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'sub-title',
        desc: '二级标题',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'icon',
        desc: '图标类型',
        type: 'string',
        value: 'success / warning / info / error',
        default: 'info',
      }],
      resultSlots: [{
        name: 'icon',
        desc: '自定义图标',
      }, {
        name: 'title',
        desc: '自定义标题',
      }, {
        name: 'subTitle',
        desc: '自定义二级标题',
      }, {
        name: 'extra',
        desc: '自定义底部额外区域',
      }],
    };
  },
};
</script>
