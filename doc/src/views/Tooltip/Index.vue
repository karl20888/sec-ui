<!-- eslint-disable max-len -->
<template>
  <sec-block class="doc-block">
    <h2>Tooltip 文字提示</h2>
    <p>常用于展示鼠标 hover 时的提示信息。</p>
    <h3>基础用法</h3>
    <p>在这里我们提供 9 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。</p>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
      </template>
      <p>使用 <code>content</code> 属性来决定 <code>hover</code> 时的提示信息。由 <code>placement</code> 属性决定展示效果：<code>placement</code> 属性值为：<code>方向-对齐位置</code>；四个方向：<code>top</code>、<code>left</code>、<code>right</code>、<code>bottom</code>；三种对齐位置：<code>start</code>，<code>end</code>，默认为空。如 <code>placement="left-end"</code>，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。</p>
    </DocDemo>
    <h3>主题</h3>
    <p>Tooltip 组件提供了两个不同的主题：<code>dark</code> 和 <code>light</code>。</p>
    <DocDemo :markdown="demo2">
      <template #source>
        <Demo2></Demo2>
      </template>
      <p>通过设置 <code>effect</code> 属性来改变主题，默认为 <code>light</code>。</p>
    </DocDemo>
    <h3>更多 Content</h3>
    <p>展示多行文本或者是设置文本内容的格式。</p>
    <DocDemo :markdown="demo3">
      <template #source>
        <Demo3></Demo3>
      </template>
      <p>用具名 slot 分发 <code>content</code>，替代 <code>tooltip</code> 中的 <code>content</code> 属性。</p>
    </DocDemo>
    <h3>高级扩展</h3>
    <p>除了这些基本设置外，还有一些属性可以让使用者更好的定制自己的效果：</p>
    <p><code>transition</code> 属性可以定制显隐的动画效果，默认为 <code>fade-in-linear</code>。如果需要关闭 <code>tooltip</code> 功能，<code>disabled</code> 属性可以满足这个需求，它接受一个 <code>Boolean</code>，设置为 <code>true</code> 即可。</p>
    <p>事实上，这是基于 <a href="https://github.com/element-component/vue-popper">Vue-popper</a> 的扩展，你可以自定义任意 Vue-popper 中允许定义的字段。当然 Tooltip 组件实际上十分强大，文末的 API 文档会做一一说明。</p>
    <DocDemo :markdown="demo4">
      <template #source>
        <Demo4></Demo4>
      </template>
    </DocDemo>
    <h3>Attributes</h3>
    <sec-table class="doc-table" :data="attributes">
      <sec-table-column label="参数" prop="attr" width="150"></sec-table-column>
      <sec-table-column label="说明">
        <template #default="{ row }">
          <span v-html="row.desc"></span>
        </template>
      </sec-table-column>
      <sec-table-column label="类型" prop="type" width="100"></sec-table-column>
      <sec-table-column label="可选值" width="200">
        <template #default="{ row }">
          <span v-html="row.value"></span>
        </template>
      </sec-table-column>
      <sec-table-column label="默认值" prop="default" width="220"></sec-table-column>
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
        attr: 'effect',
        desc: '默认提供的主题',
        type: 'String',
        value: 'dark / light',
        default: 'light',
      }, {
        attr: 'content',
        desc: '显示的内容，也可以通过 <code>slot#content</code> 传入 DOM',
        type: 'String',
        value: '—',
        default: '—',
      }, {
        attr: 'placement',
        desc: 'Tooltip 的出现位置',
        type: 'String',
        value: 'top / top-start / top-end / bottom / bottom-start / bottom-end / left / left-start / left-end / right / right-start / right-end',
        default: 'bottom',
      }, {
        attr: 'value / v-model',
        desc: '状态是否可见',
        type: 'Boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'disabled',
        desc: 'Tooltip 是否可用',
        type: 'Boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'offset',
        desc: '出现位置的偏移量',
        type: 'Number',
        value: '—',
        default: '0',
      }, {
        attr: 'transition',
        desc: '定义渐变动画',
        type: 'String',
        value: '—',
        default: 'el-fade-in-linear',
      }, {
        attr: 'visible-arrow',
        desc: '是否显示 Tooltip 箭头，更多参数可见 <a href="https://github.com/element-component/vue-popper">Vue-popper</a>',
        type: 'Boolean',
        value: '—',
        default: 'true',
      }, {
        attr: 'popper-options',
        desc: '<a href="https://popper.js.org/documentation.html">popper.js</a> 的参数',
        type: 'Object',
        value: '参考 <a href="https://popper.js.org/documentation.html">popper.js</a> 文档',
        default: '{ boundariesElement：\'body\', gpuAcceleration: false }',
      }, {
        attr: 'open-delay',
        desc: '延迟出现，单位毫秒',
        type: 'Number',
        value: '—',
        default: '0',
      }, {
        attr: 'manual',
        desc: '手动控制模式，设置为 true 后，mouseenter 和 mouseleave 事件将不会生效',
        type: 'Boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'popper-class',
        desc: '为 Tooltip 的 Popper 添加类名',
        type: 'String',
        value: '—',
        default: '—',
      }, {
        attr: 'enterable',
        desc: '鼠标是否可进入到 tooltip 中',
        type: 'Boolean',
        value: '—',
        default: 'true',
      }, {
        attr: 'hide-after',
        desc: 'Tooltip 出现后自动隐藏延时，单位毫秒，为 0 则不会自动隐藏',
        type: 'Number',
        value: '—',
        default: '0',
      }, {
        attr: 'tabindex',
        desc: 'Tooltip 组件的 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex">tabindex</a>',
        type: 'Number',
        value: '—',
        default: '0',
      }],
    };
  },
};
</script>
