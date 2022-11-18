<template>
  <sec-block class="doc-block">
    <h2>Divider 分割线</h2>
    <p>区隔内容的分割线。</p>
    <h3>基础用法</h3>
    <p>对不同章节的文本段落进行分隔。</p>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
      </template>
    </DocDemo>
    <h3>设置文案</h3>
    <p>可以在分割线上自定义文案内容。</p>
    <DocDemo :markdown="demo2">
      <template #source>
        <Demo2></Demo2>
      </template>
    </DocDemo>
    <h3>垂直分割</h3>
    <DocDemo :markdown="demo3">
      <template #source>
        <Demo3></Demo3>
      </template>
    </DocDemo>
    <h3>Divider Attributes</h3>
    <sec-table class="doc-table" :data="dividerAttributes">
      <sec-table-column label="参数" prop="attr" width="180"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="类型" prop="type" width="100"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="180"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="120"></sec-table-column>
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

export default {
  components: {
    DocDemo,
    Demo1,
    Demo2,
    Demo3,
  },
  data() {
    return {
      demo1,
      demo2,
      demo3,
      dividerAttributes: [{
        attr: 'direction',
        desc: '设置分割线方向',
        type: 'String',
        value: 'horizontal / vertical',
        default: 'horizontal',
      }, {
        attr: 'content-position',
        desc: '设置分割线文案的位置',
        type: 'String',
        value: 'left / right / center',
        default: 'center',
      }],
    };
  },
};
</script>
