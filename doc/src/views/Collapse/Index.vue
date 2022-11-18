<template>
  <sec-block class="doc-block">
    <h2>Collapse 折叠面板</h2>
    <p>通过折叠面板收纳内容区域。</p>
    <h3>基础用法</h3>
    <p>可同时展开多个面板，面板之间不影响。</p>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
      </template>
    </DocDemo>
    <h3>手风琴效果</h3>
    <p>每次只能展示一个面板。</p>
    <DocDemo :markdown="demo2">
      <template #source>
        <Demo2></Demo2>
      </template>
      <p>通过 <code>accordion</code> 属性来设置是否以手风琴模式显示。</p>
    </DocDemo>
    <h3>自定义面板标题</h3>
    <p>除了可以通过 <code>title</code> 属性之外，还可以通过具名 <code>slot</code> 来实现自定义面板的标题内容，以实现增加图标等效果。</p>
    <DocDemo :markdown="demo3">
      <template #source>
        <Demo3></Demo3>
      </template>
    </DocDemo>
    <h3>Collapse Attributes</h3>
    <sec-table class="doc-table" :data="collapseAttributes">
      <sec-table-column label="参数" prop="attr" width="140"></sec-table-column>
      <sec-table-column label="说明">
        <template #default="{ row }">
          <span v-html="row.desc"></span>
        </template>
      </sec-table-column>
      <sec-table-column label="类型" prop="type" width="140"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="100"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="100"></sec-table-column>
    </sec-table>
    <h3>Collapse Events</h3>
    <sec-table class="doc-table" :data="collapseEvents">
      <sec-table-column label="事件名称" prop="event" width="100"></sec-table-column>
      <sec-table-column label="说明">
        <template #default="{ row }">
          <span v-html="row.desc"></span>
        </template>
      </sec-table-column>
      <sec-table-column label="回调参数" prop="param" width="250"></sec-table-column>
    </sec-table>
    <h3>Collapse Item Attributes</h3>
    <sec-table class="doc-table" :data="collapseItemAttributes">
      <sec-table-column label="参数" prop="attr" width="180"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="类型" prop="type" width="180"></sec-table-column>
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
      collapseAttributes: [{
        attr: 'value / v-model',
        desc: '当前激活的面板（如果是手风琴模式，绑定值类型需要为 <code>String</code>，否则为 <code>Array</code>）。',
        type: 'String / Array',
        value: '—',
        default: '—',
      }, {
        attr: 'accordion',
        desc: '是否手风琴模式',
        type: 'Boolean',
        value: '—',
        default: 'false',
      }],
      collapseEvents: [{
        event: 'change',
        desc: '当前激活面板改变时触发（如果是手风琴模式，参数 <code>activeNames</code> 类型为 <code>String</code>，否则为 <code>Array</code>）。',
        param: '(activeNames: Array / String)',
      }],
      collapseItemAttributes: [{
        attr: 'name',
        desc: '唯一标识符',
        type: 'String / Number',
        value: '—',
        default: '—',
      }, {
        attr: 'title',
        desc: '面板标题',
        type: 'String',
        value: '—',
        default: '—',
      }, {
        attr: 'disabled',
        desc: '是否禁用',
        type: 'Boolean',
        value: '—',
        default: '—',
      }],
    };
  },
};
</script>
