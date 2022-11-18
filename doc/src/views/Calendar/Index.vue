<!-- eslint-disable max-len -->
<template>
  <sec-block class="doc-block">
    <h2>Calendar calendar</h2>
    <p>显示日期。</p>
    <h3>基本</h3>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
      </template>
      <p>设置 <code>value</code> 来指定当前显示的月份。如果 <code>value</code> 未指定，则显示当月。<code>value</code> 支持 <code>v-mdoel</code> 双向绑定。</p>
    </DocDemo>
    <h3>自定义内容</h3>
    <DocDemo :markdown="demo2">
      <template #source>
        <Demo2></Demo2>
      </template>
      <p>通过设置名为 <code>dateCell</code> 的 <code>scoped-slot</code> 来自定义日历单元格中显示的内容。在 <code>scoped-slot</code> 可以获取到 date（当前单元格的日期），data（包括 type，isSelected，day 属性）。详情解释参考下方的 API 文档。</p>
    </DocDemo>
    <h3>自定义范围</h3>
    <DocDemo :markdown="demo3">
      <template #source>
        <Demo3></Demo3>
      </template>
      <p>设置 <code>range</code> 属性指定日历的显示范围。开始时间必须是周起始日，结束时间必须是周结束日，且时间跨度不能超过两个月。</p>
    </DocDemo>
    <h3>Attributes</h3>
    <sec-table class="doc-table" :data="attributes">
      <sec-table-column label="参数" prop="attr" width="180"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="类型" prop="type" width="180"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="100"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="100"></sec-table-column>
    </sec-table>
    <h3>DateCell Scoped Slot 参数</h3>
    <sec-table class="doc-table" :data="dateCellScopedSlotAttributes">
      <sec-table-column label="参数" prop="attr" width="180"></sec-table-column>
      <sec-table-column label="说明">
        <template #default="{ row }">
          <span v-html="row.desc"></span>
        </template>
      </sec-table-column>
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
      attributes: [{
        attr: 'valur / v-model',
        desc: '绑定值',
        type: 'Date / String / Number',
        value: '—',
        default: '—',
      }, {
        attr: 'range',
        desc: '时间范围，包括开始时间与结束时间。开始时间必须是周起始日，结束时间必须是周结束日，且时间跨度不能超过两个月。',
        type: 'Array',
        value: '—',
        default: '—',
      }, {
        attr: 'first-day-of-week',
        desc: '周起始日',
        type: 'Number',
        value: '1 到 7',
        default: '1',
      }],
      dateCellScopedSlotAttributes: [{
        attr: 'date',
        desc: '单元格代表的日期',
        type: 'Date',
        value: '—',
        default: '—',
      }, {
        attr: 'data',
        desc: '{ type, isSelected, day }，<code>type</code> 表示该日期的所属月份，可选值有 prev-month，current-month，next-month；<code>isSelected</code> 标明该日期是否被选中；<code>day</code> 是格式化的日期，格式为 yyyy-MM-dd',
        type: 'Object',
        value: '—',
        default: '—',
      }],
    };
  },
};
</script>
