<template>
  <sec-block class="doc-block">
    <h2>ColorPicker 颜色选择器</h2>
    <p>用于颜色选择，支持多种格式。</p>
    <h3>基础用法</h3>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
      </template>
      <p>使用 v-model 与 Vue 实例中的一个变量进行双向绑定，绑定的变量需要是字符串类型。</p>
    </DocDemo>
    <h3>选择透明度</h3>
    <DocDemo :markdown="demo2">
      <template #source>
        <Demo2></Demo2>
      </template>
      <p>ColorPicker 支持普通颜色，也支持带 Alpha 通道的颜色，通过 <code>show-alpha</code> 属性即可控制是否支持透明度的选择。</p>
    </DocDemo>
    <h3>预定义颜色</h3>
    <DocDemo :markdown="demo3">
      <template #source>
        <Demo3></Demo3>
      </template>
      <p>ColorPicker 支持预定义颜色。</p>
    </DocDemo>
    <h3>不同尺寸</h3>
    <DocDemo :markdown="demo4">
      <template #source>
        <Demo4></Demo4>
      </template>
    </DocDemo>
    <h3>Attributes</h3>
    <sec-table class="doc-table" :data="attributes">
      <sec-table-column label="参数" prop="attr" width="150"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="类型" prop="type" width="120"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="240"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="296"></sec-table-column>
    </sec-table>
    <h3>Events</h3>
    <sec-table class="doc-table" :data="events">
      <sec-table-column label="事件名称" prop="event" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="回调参数" prop="param" width="250"></sec-table-column>
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
        attr: 'value / v-model',
        desc: '绑定值',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'disabled',
        desc: '是否禁用',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'size',
        desc: '尺寸',
        type: 'string',
        value: 'large / medium / small / mini',
        default: '—',
      }, {
        attr: 'show-alpha',
        desc: '是否支持透明度选择',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'color-format',
        desc: '写入 v-model 的颜色的格式',
        type: 'string',
        value: 'hsl / hsv / hex / rgb',
        default: 'hex（show-alpha 为 false）/ rgb（show-alpha 为 true）',
      }, {
        attr: 'popper-class',
        desc: 'ColorPicker 下拉框的类名',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'predefine',
        desc: '预定义颜色',
        type: 'array',
        value: '—',
        default: '—',
      }],
      events: [{
        event: 'change',
        desc: '当绑定值变化时触发',
        param: '当前值',
      }, {
        event: 'active-change',
        desc: '面板中当前显示的颜色发生改变时触发',
        param: '当前显示的颜色值',
      }],
    };
  },
};
</script>
