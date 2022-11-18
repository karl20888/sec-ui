<!-- eslint-disable max-len -->
<template>
  <sec-block class="doc-block">
    <h2>Layout 布局</h2>
    <p>通过基础的 24 分栏，迅速简便地创建布局。</p>
    <h3>基础布局</h3>
    <p>使用单一分栏创建基础的栅格布局。</p>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
      </template>
      <p>通过 row 和 col 组件，并通过 col 组件的 <code>span</code> 属性我们就可以自由地组合布局。</p>
    </DocDemo>
    <h3>分栏间隔</h3>
    <p>分栏之间存在间隔。</p>
    <DocDemo :markdown="demo2">
      <template #source>
        <Demo2></Demo2>
      </template>
      <p>Row 组件提供 <code>gutter</code> 属性来指定每一栏之间的间隔，默认间隔为 0。</p>
    </DocDemo>
    <h3>混合布局</h3>
    <p>通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。</p>
    <DocDemo :markdown="demo3">
      <template #source>
        <Demo3></Demo3>
      </template>
    </DocDemo>
    <h3>分栏偏移</h3>
    <p>支持偏移指定的栏数。</p>
    <DocDemo :markdown="demo4">
      <template #source>
        <Demo4></Demo4>
      </template>
      <p>通过设置 Col 组件的 <code>offset</code> 属性可以指定分栏偏移的栏数。</p>
    </DocDemo>
    <h3>对齐方式</h3>
    <p>通过 <code>flex</code> 布局来对分栏进行灵活的对齐。</p>
    <DocDemo :markdown="demo5">
      <template #source>
        <Demo5></Demo5>
      </template>
      <p>将 <code>type</code> 属性赋值为 'flex'，可以启用 flext 布局，并可通过 <code>justify</code> 属性来指定 start，center，end，space-between，space-around 其中的值来定义子元素的排版方式。</p>
    </DocDemo>
    <h3>响应式布局</h3>
    <p>参照了 Bootstrap 的响应式设计，预设了五个响应尺寸：<code>xs</code>、<code>sm</code>、<code>md</code>、<code>lg</code> 和 <code>xl</code>。</p>
    <DocDemo :markdown="demo6">
      <template #source>
        <Demo6></Demo6>
      </template>
    </DocDemo>
    <h3>Row Attributes</h3>
    <sec-table class="doc-table" :data="rowAttributes">
      <sec-table-column label="参数" prop="attr" width="100"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="类型" prop="type" width="80"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="350"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="80"></sec-table-column>
    </sec-table>
    <h3>Col Attributes</h3>
    <sec-table class="doc-table" :data="colAttributes">
      <sec-table-column label="参数" prop="attr" width="100"></sec-table-column>
      <sec-table-column label="说明">
        <template #default="{ row }">
          <span v-html="row.desc"></span>
        </template>
      </sec-table-column>
      <sec-table-column label="类型" prop="type" width="320"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="80"></sec-table-column>
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
      rowAttributes: [{
        attr: 'gutter',
        desc: '栅格间隔',
        type: 'number',
        value: '—',
        default: '0',
      }, {
        attr: 'type',
        desc: '布局模式，可选 flex，现代浏览器下有效',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'justify',
        desc: 'flex 布局下的水平排列方式',
        type: 'string',
        value: 'start/end/center/space-around/space-between',
        default: 'start',
      }, {
        attr: 'align',
        desc: 'flex 布局下的垂直排列方式',
        type: 'string',
        value: 'top/middle/bottom',
        default: '—',
      }, {
        attr: 'tag',
        desc: '自定义元素标签',
        type: 'string',
        value: '*',
        default: 'div',
      }],
      colAttributes: [{
        attr: 'span',
        desc: '栅格占据的列数',
        type: 'number',
        value: '—',
        default: '24',
      }, {
        attr: 'offset',
        desc: '栅格左侧的间隔格数',
        type: 'number',
        value: '—',
        default: '0',
      }, {
        attr: 'push',
        desc: '栅格向右移动格数',
        type: 'number',
        value: '—',
        default: '0',
      }, {
        attr: 'pull',
        desc: '栅格向左移动格数',
        type: 'number',
        value: '—',
        default: '0',
      }, {
        attr: 'xs',
        desc: '<code><768px</code> 响应式栅格数或者栅格属性对象',
        type: 'number/object (例如： {span: 4, offset: 4})',
        value: '—',
        default: '—',
      }, {
        attr: 'sm',
        desc: '<code>≥768px</code> 响应式栅格数或者栅格属性对象',
        type: 'number/object (例如： {span: 4, offset: 4})',
        value: '—',
        default: '—',
      }, {
        attr: 'md',
        desc: '<code>≥992px</code> 响应式栅格数或者栅格属性对象',
        type: 'number/object (例如： {span: 4, offset: 4})',
        value: '—',
        default: '—',
      }, {
        attr: 'type',
        desc: '<code>≥1200px</code> 响应式栅格数或者栅格属性对象',
        type: 'number/object (例如： {span: 4, offset: 4})',
        value: '—',
        default: '—',
      }, {
        attr: 'type',
        desc: '<code>≥1920px</code> 响应式栅格数或者栅格属性对象',
        type: 'number/object (例如： {span: 4, offset: 4})',
        value: '—',
        default: '—',
      }, {
        attr: 'tag',
        desc: '自定义元素标签',
        type: 'string',
        value: '*',
        default: 'div',
      }],
    };
  },
};
</script>
