<!-- eslint-disable max-len -->
<template>
  <sec-block class="doc-block">
    <h2>Progress 进度条</h2>
    <p>用于展示操作进度，告知用户当前状态和预期。</p>
    <h3>线形进度条</h3>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
      </template>
      <p>Progress 组件设置 <code>percentage</code> 属性即可，表示进度条对应的百分比，<strong>必填</strong>，必须在 0-100。通过 <code>format</code> 属性来指定进度条文字内容。</p>
    </DocDemo>
    <h3>百分比内显</h3>
    <p>百分比不占用额外空间，适用于文件上传等场景。</p>
    <DocDemo :markdown="demo2">
      <template #source>
        <Demo2></Demo2>
      </template>
      <p>Progress 组件可通过 <code>stroke-width</code> 属性更改进度条高度，并可通过 <code>text-inside</code> 属性来将进度条描述置于进度条内部。</p>
    </DocDemo>
    <h3>自定义颜色</h3>
    <p>可以通过 <code>color</code> 设置进度条的颜色，<code>color</code> 可以接受颜色字符串，函数和数组。</p>
    <DocDemo :markdown="demo3">
      <template #source>
        <Demo3></Demo3>
      </template>
    </DocDemo>
    <h3>环形进度条</h3>
    <p>Progress 组件可通过 <code>type</code> 属性来指定使用环形进度条，在环形进度条中，还可以通过 <code>width</code> 属性来设置其大小。</p>
    <DocDemo :markdown="demo4">
      <template #source>
        <Demo4></Demo4>
      </template>
    </DocDemo>
    <h3>仪表盘形进度条</h3>
    <DocDemo :markdown="demo5">
      <template #source>
        <Demo5></Demo5>
      </template>
      <p>通过 <code>type</code> 属性来指定使用仪表盘形进度条。</p>
    </DocDemo>
    <h3>Attributes</h3>
    <sec-table class="doc-table" :data="attributes">
      <sec-table-column label="参数" prop="attr" width="120"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="类型" prop="type" width="180"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="220"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="80"></sec-table-column>
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
        attr: 'percentage',
        desc: '百分比（必填）',
        type: 'number',
        value: '0-100',
        default: '0',
      }, {
        attr: 'type',
        desc: '进度条类型',
        type: 'string',
        value: 'line / circle / dashboard',
        default: 'line',
      }, {
        attr: 'stroke-width',
        desc: '进度条的宽度，单位 px',
        type: 'number',
        value: '—',
        default: '6',
      }, {
        attr: 'text-inside',
        desc: '进度条显示文字内置在进度条内（只在 type=line 时可用）',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'status',
        desc: '进度条当前状态',
        type: 'string',
        value: 'success / exception / warning',
        default: '—',
      }, {
        attr: 'color',
        desc: '进度条背景色（会覆盖 status 状态颜色）',
        type: 'string / function / array',
        value: '—',
        default: '\'\'',
      }, {
        attr: 'width',
        desc: '环形进度条画布宽度（只在 type 为 circle 或 dashboard 时可用）',
        type: 'number',
        value: '',
        default: '126',
      }, {
        attr: 'show-text',
        desc: '是否显示进度条文字内容',
        type: 'boolean',
        value: '—',
        default: 'true',
      }, {
        attr: 'stroke-linecap',
        desc: 'circle / dashboard 类型路径两端的形状',
        type: 'string',
        value: 'butt / round / square',
        default: 'round',
      }, {
        attr: 'format',
        desc: '指定进度条文字内容',
        type: 'function(percentage)',
        value: '—',
        default: '—',
      }],
    };
  },
};
</script>
