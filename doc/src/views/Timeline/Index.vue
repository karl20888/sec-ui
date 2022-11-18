<template>
  <sec-block class="doc-block">
    <h2>Timeline 时间线</h2>
    <p>可视化地呈现时间流信息。</p>
    <h3>基础用法</h3>
    <p>Timeline 可拆分成多个按照时间戳正序或倒序排列的 activity，时间戳是其区分于其他控件的重要特征，使用时注意与 Steps 步骤条等区分。</p>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
      </template>
    </DocDemo>
    <h3>自定义节点样式</h3>
    <p>可根据实际场景自定义节点尺寸、颜色，或直接使用图标。</p>
    <DocDemo :markdown="demo2">
      <template #source>
        <Demo2></Demo2>
      </template>
    </DocDemo>
    <h3>自定义时间戳</h3>
    <p>当内容在垂直方向上过高时，可将时间戳置于内容之上。</p>
    <DocDemo :markdown="demo3">
      <template #source>
        <Demo3></Demo3>
      </template>
    </DocDemo>
    <h3>Timeline Attributes</h3>
    <sec-table class="doc-table" :data="timelineAttributes">
      <sec-table-column label="参数" prop="attr" width="140"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="类型" prop="type" width="100"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="100"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="100"></sec-table-column>
    </sec-table>
    <h3>Timeline-Item Attributes</h3>
    <sec-table class="doc-table" :data="timelineItemAttributes">
      <sec-table-column label="参数" prop="attr" width="140"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="类型" prop="type" width="100"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="310"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="100"></sec-table-column>
    </sec-table>
    <h3>Timeline-Item Slots</h3>
    <sec-table class="doc-table" :data="timelineItemSlots">
      <sec-table-column label="name" prop="name" width="140"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
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
      timelineAttributes: [{
        attr: 'reverse',
        desc: '指定节点排序方向，默认为正序',
        type: 'Boolean',
        value: '—',
        default: 'false',
      }],
      timelineItemAttributes: [{
        attr: 'timestamp',
        desc: '时间戳',
        type: 'String',
        value: '—',
        default: '—',
      }, {
        attr: 'hide-timestamp',
        desc: '是否隐藏时间戳',
        type: 'Boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'placement',
        desc: '时间戳位置',
        type: 'String',
        value: 'top / bottom',
        default: 'bottom',
      }, {
        attr: 'type',
        desc: '节点类型',
        type: 'String',
        value: 'primary / success / warning / danger / info',
        default: '—',
      }, {
        attr: 'color',
        desc: '节点颜色',
        type: 'String',
        value: 'hsl / hsv / hex / rgb',
        default: '—',
      }, {
        attr: 'size',
        desc: '节点尺寸',
        type: 'String',
        value: 'normal / large',
        default: 'normal',
      }, {
        attr: 'icon',
        desc: '节点图标',
        type: 'String',
        value: '—',
        default: '—',
      }],
      timelineItemSlots: [{
        name: '—',
        desc: 'Timeline-Item 的内容',
      }, {
        name: 'dot',
        desc: '自定义节点',
      }],
    };
  },
};
</script>
