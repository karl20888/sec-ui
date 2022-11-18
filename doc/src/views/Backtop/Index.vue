<template>
  <sec-block class="doc-block">
    <h2>Backtop 回到顶部</h2>
    <p>返回页面顶部的操作按钮。</p>
    <h3>基础用法</h3>
    <p>滑动页面即可看到右下方的按钮。</p>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
      </template>
    </DocDemo>
    <h3>自定义显示内容</h3>
    <p>显示区域被固定为 40px * 40px 的区域，其中的内容可支持自定义。</p>
    <DocDemo :markdown="demo2">
      <template #source>
        <Demo2></Demo2>
      </template>
    </DocDemo>
    <h3>Attributes</h3>
    <sec-table class="doc-table" :data="attributes">
      <sec-table-column label="参数" prop="attr" width="180"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="类型" prop="type" width="180"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="100"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="100"></sec-table-column>
    </sec-table>
    <h3>Events</h3>
    <sec-table class="doc-table" :data="events">
      <sec-table-column label="事件名称" prop="event" width="180"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="回调参数" prop="param" width="100"></sec-table-column>
    </sec-table>
  </sec-block>
</template>

<script>
import DocDemo from '../DocDemo.vue';
import demo1 from './Demo1/source.md';
import Demo1 from './Demo1/View.vue';
import demo2 from './Demo2/source.md';
import Demo2 from './Demo2/View.vue';

export default {
  components: {
    DocDemo,
    Demo1,
    Demo2,
  },
  data() {
    return {
      demo1,
      demo2,
      attributes: [{
        attr: 'target',
        desc: '触发滚动的对象',
        type: 'String',
        value: '—',
        default: '—',
      }, {
        attr: 'visibility-height',
        desc: '滚动高度达到此参数值才出现',
        type: 'Number',
        value: '—',
        default: '200',
      }, {
        attr: 'right',
        desc: '控制其显示位置，距离页面右边距',
        type: 'Number',
        value: '—',
        default: '40',
      }, {
        attr: 'bottom',
        desc: '控制其显示位置，距离页面底部距离',
        type: 'Number',
        value: '—',
        default: '40',
      }],
      events: [{
        event: 'click',
        desc: '点击按钮触发的事件',
        param: '点击事件',
      }],
    };
  },
};
</script>
