<!-- eslint-disable max-len -->
<template>
  <sec-block class="doc-block">
    <h2>Badge 标记</h2>
    <p>出现在按钮、图标旁的数字或状态标记。</p>
    <h3>基础用法</h3>
    <p>展示新消息数量。</p>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
      </template>
      <p>定义 <code>value</code> 属性，它接受 <code>Number</code> 或者 <code>String</code>。</p>
    </DocDemo>
    <h3>最大值</h3>
    <p>可自定义最大值。</p>
    <DocDemo :markdown="demo2">
      <template #source>
        <Demo2></Demo2>
      </template>
      <p>由 <code>max</code> 属性定义，它接受一个 <code>Number</code>，需要注意的是，只有当 <code>value</code> 为 <code>Number</code> 时，它才会生效。</p>
    </DocDemo>
    <h3>自定义内容</h3>
    <p>可以显示数字以外的文本内容。</p>
    <DocDemo :markdown="demo3">
      <template #source>
        <Demo3></Demo3>
      </template>
      <p>定义 <code>value</code> 为 <code>String</code> 类型时可以用于显示自定义文本。</p>
    </DocDemo>
    <h3>小红点</h3>
    <p>以红点的形式标注需要关注的内容。</p>
    <DocDemo :markdown="demo4">
      <template #source>
        <Demo4></Demo4>
      </template>
      <p>除了数字外，设置 <code>is-dot</code> 属性，它接受一个 <code>Boolean</code>。</p>
    </DocDemo>
    <h3>Attributes</h3>
    <sec-table class="doc-table" :data="attributes">
      <sec-table-column label="参数" prop="attr" width="80"></sec-table-column>
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
        attr: 'value',
        desc: '显示值',
        type: 'string / number',
        value: '—',
        default: '—',
      }, {
        attr: 'max',
        desc: '最大值，超过最大值会显示 \'{max}\'，要求 value 是 Number 类型',
        type: 'number',
        value: '—',
        default: '—',
      }, {
        attr: 'is-dot',
        desc: '小圆点',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'hidden',
        desc: '隐藏 badge',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'type',
        desc: '类型',
        type: 'string',
        value: 'primary / success / warning / danger / info',
        default: '—',
      }],
    };
  },
};
</script>
