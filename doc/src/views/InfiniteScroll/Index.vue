<template>
  <sec-block class="doc-block">
    <h2>InfiniteScroll 无限滚动</h2>
    <p>滚动至底部时，加载更多数据。</p>
    <h3>基础用法</h3>
    <p>在要实现滚动加载的列表上添加 <code>v-infinite-scroll</code>，并赋值相应的加载方法，可实现滚动到底部时自动执行加载方法。</p>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
      </template>
    </DocDemo>
    <h3>禁用加载</h3>
    <DocDemo :markdown="demo2">
      <template #source>
        <Demo2></Demo2>
      </template>
    </DocDemo>
    <h3>Attributes</h3>
    <sec-table class="doc-table" :data="attributes">
      <sec-table-column label="参数" prop="attr" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="类型" prop="type" width="100"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="100"></sec-table-column>
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
      attributes: [{
        attr: 'infinite-scroll-disabled',
        desc: '是否禁用',
        type: 'Boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'infinite-scroll-delay',
        desc: '节流时延，单位为 ms',
        type: 'Number',
        value: '—',
        default: '200',
      }, {
        attr: 'infinite-scroll-distance',
        desc: '触发加载的距离阈值，单位为 px',
        type: 'Number',
        value: '—',
        default: '0',
      }, {
        attr: 'infinite-scroll-immediate',
        desc: '是否立即执行加载方法，以防初始状态下内容无法撑满容器。',
        type: 'Boolean',
        value: '—',
        default: 'true',
      }],
    };
  },
};
</script>
