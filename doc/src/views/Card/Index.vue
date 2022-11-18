<!-- eslint-disable max-len -->
<template>
  <sec-block class="doc-block">
    <h2>Card 卡片</h2>
    <p>将信息聚合在卡片容器中展示。</p>
    <h3>基础用法</h3>
    <p>包含标题，内容和操作。</p>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
      </template>
      <p>Card 组件包括 <code>header</code> 和 <code>body</code> 部分，<code>header</code> 部分需要有显式具名 slot 分发，同时也是可选的。</p>
    </DocDemo>
    <h3>简单卡片</h3>
    <p>卡片可以只有内容区域。</p>
    <DocDemo :markdown="demo2">
      <template #source>
        <Demo2></Demo2>
      </template>
    </DocDemo>
    <h3>带图片</h3>
    <p>可配置定义更丰富的内容展示。</p>
    <DocDemo :markdown="demo3">
      <template #source>
        <Demo3></Demo3>
      </template>
      <p>配置 <code>body-style</code> 属性来自定义 <code>body</code> 部分的 <code>style</code>，我们还使用了布局组件。</p>
    </DocDemo>
    <h3>卡片阴影</h3>
    <p>可对阴影的显示进行配置。</p>
    <DocDemo :markdown="demo4">
      <template #source>
        <Demo4></Demo4>
      </template>
      <p>通过 <code>shadow</code> 属性设置卡片阴影出现的时机：<code>always</code>、<code>hover</code> 或 <code>never</code>。</p>
    </DocDemo>
    <h3>Attributes</h3>
    <sec-table class="doc-table" :data="attributes">
      <sec-table-column label="参数" prop="attr" width="120"></sec-table-column>
      <sec-table-column label="说明">
        <template #default="{ row }">
          <span v-html="row.desc"></span>
        </template>
      </sec-table-column>
      <sec-table-column label="类型" prop="type" width="100"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="180"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="180"></sec-table-column>
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
        attr: 'header',
        desc: '设置 header，也可以通过 <code>slot#header</code> 传入 DOM',
        type: 'String',
        value: '—',
        default: '—',
      }, {
        attr: 'body-style',
        desc: '设置 body 的样式',
        type: 'Object',
        value: '—',
        default: '{ padding: \'20px\' }',
      }, {
        attr: 'shadow',
        desc: '设置阴影显示时机',
        type: 'String',
        value: 'always / hover / never',
        default: 'always',
      }],
    };
  },
};
</script>
