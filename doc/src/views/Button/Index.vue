<!-- eslint-disable max-len -->
<template>
  <sec-block class="doc-block">
    <h2>Button 按钮</h2>
    <p>常用的操作按钮。</p>
    <div class="tip">
      <p>将原 ElementUI 中的 <code>&lt;el-button&gt;</code> 改成了 <code>&lt;sec-btn&gt;</code>，<code>&lt;el-button-group&gt;</code> 改成了 <code>&lt;sec-btn-group&gt;</code>，这样名字能短一些。</p>
    </div>
    <h3>基础用法</h3>
    <p>基础的按钮用法。</p>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
      </template>
      <p>使用 <code>type</code>、<code>plain</code> 和 <code>circle</code> 属性来定义 Button 的样式。</p>
    </DocDemo>
    <h3>文字按钮</h3>
    <p>没有边框和背景色的按钮</p>
    <DocDemo :markdown="demo2">
      <template #source>
        <Demo2></Demo2>
      </template>
    </DocDemo>
    <h3>图标按钮</h3>
    <p>带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。</p>
    <DocDemo :markdown="demo3">
      <template #source>
        <Demo3></Demo3>
      </template>
    </DocDemo>
    <h3>按钮组</h3>
    <p>以按钮组的方式出现，常用于多项类似操作。</p>
    <DocDemo :markdown="demo4">
      <template #source>
        <Demo4></Demo4>
      </template>
      <p>使用 <code>&lt;sec-btn-group&gt;</code> 标签来嵌套你的按钮。</p>
    </DocDemo>
    <h3>加载中</h3>
    <p>点击按钮后进行数据加载操作，在按钮上显示加载状态。</p>
    <DocDemo :markdown="demo5">
      <template #source>
        <Demo5></Demo5>
      </template>
      <p>要设置为 loading 状态，只要设置 <code>loading</code> 属性为 <code>true</code>即可。</p>
    </DocDemo>
    <h3>不同尺寸</h3>
    <p>Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。</p>
    <DocDemo :markdown="demo6">
      <template #source>
        <Demo6></Demo6>
      </template>
      <p>额外的尺寸：<code>large</code>、<code>medium</code>、<code>mini</code>，通过设置 <code>size</code> 属性来配置它们。</p>
    </DocDemo>
    <h3>Attributes</h3>
    <sec-table class="doc-table" :data="attributes">
      <sec-table-column label="参数" prop="attr" width="120"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="类型" prop="type" width="120"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="380"></sec-table-column>
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
import demo5 from './Demo5/source.md';
import Demo5 from './Demo5/View.vue';
import demo6 from './Demo6/source.md';
import Demo6 from './Demo6/View.vue';

export default {
  components: {
    DocDemo,
    Demo1,
    Demo2,
    Demo3,
    Demo4,
    Demo5,
    Demo6,
  },
  data() {
    return {
      demo1,
      demo2,
      demo3,
      demo4,
      demo5,
      demo6,
      attributes: [{
        attr: 'size',
        desc: '尺寸',
        type: 'string',
        value: 'large / medium / mini',
        default: '—',
      }, {
        attr: 'type',
        desc: '类型',
        type: 'string',
        value: 'primary / success / warning / danger / info / text',
        default: '—',
      }, {
        attr: 'plain',
        desc: '是否朴素按钮',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'round',
        desc: '是否圆角按钮',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'circle',
        desc: '是否圆形按钮',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'loading',
        desc: '是否加载中状态',
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
        attr: 'icon',
        desc: '图标类名',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'autofocus',
        desc: '是否默认聚焦',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'native-type',
        desc: '原生 type 属性',
        type: 'string',
        value: 'button / submit / reset',
        default: 'button',
      }],
    };
  },
};
</script>
