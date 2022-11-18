<template>
  <sec-block class="doc-block">
    <h2>PageHeader 页头</h2>
    <p>如果页面的路径比较简单，推荐使用页头组件而非面包屑组件。</p>
    <h3>基础</h3>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
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
    <h3>Events</h3>
    <sec-table class="doc-table" :data="events">
      <sec-table-column label="事件名称" prop="event" width="220"></sec-table-column>
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

export default {
  components: {
    DocDemo,
    Demo1,
  },
  data() {
    return {
      demo1,
      attributes: [{
        attr: 'title',
        desc: '标题',
        type: 'string',
        value: '—',
        default: '返回',
      }, {
        attr: 'content',
        desc: '内容',
        type: 'string',
        value: '—',
        default: '—',
      }],
      events: [{
        event: 'back',
        desc: '点击左侧区域触发',
        param: '—',
      }],
      slots: [{
        name: 'title',
        desc: '标题内容',
      }, {
        name: 'content',
        desc: '内容',
      }],
    };
  },
};
</script>
