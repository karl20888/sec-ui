<!-- eslint-disable max-len -->
<template>
  <sec-block class="doc-block">
    <h2>TimePicker 时间选择器</h2>
    <p>用于选择或输入日期</p>
    <h3>固定时间点</h3>
    <p>提供几个固定的时间点供用户选择</p>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
      </template>
      <p>使用 el-time-select 标签，分别通过 <code>start</code>、<code>end</code> 和 <code>step</code> 指定可选的起始时间、结束时间和步长</p>
    </DocDemo>
    <h3>任意时间点</h3>
    <p>可以选择任意时间</p>
    <DocDemo :markdown="demo2">
      <template #source>
        <Demo2></Demo2>
      </template>
      <p>使用 el-time-picker 标签，通过 <code>selectableRange</code> 限制可选时间范围。提供了两种交互方式：默认情况下通过鼠标滚轮进行选择，打开 <code>arrow-control</code> 属性则通过界面上的箭头进行选择。</p>
    </DocDemo>
    <h3>固定时间范围</h3>
    <p>若先选择开始时间，则结束时间内备选项的状态会随之改变。</p>
    <DocDemo :markdown="demo3">
      <template #source>
        <Demo3></Demo3>
      </template>
    </DocDemo>
    <h3>任意时间范围</h3>
    <p>可选择任意的时间范围</p>
    <DocDemo :markdown="demo4">
      <template #source>
        <Demo4></Demo4>
      </template>
      <p>添加 <code>is-range</code> 属性即可选择时间范围，同样支持 <code>arrow-control</code> 属性。</p>
    </DocDemo>
    <h3>Attributes</h3>
    <sec-table class="doc-table" :data="attributes">
      <sec-table-column label="参数" prop="attr" width="150"></sec-table-column>
      <sec-table-column label="说明">
        <template #default="{ row }">
          <span v-html="row.desc"></span>
        </template>
      </sec-table-column>
      <sec-table-column label="类型" prop="type" width="150"></sec-table-column>
      <sec-table-column label="可选值" width="190">
        <template #default="{ row }">
          <span v-html="row.value"></span>
        </template>
      </sec-table-column>
      <sec-table-column label="默认值" prop="default" width="180"></sec-table-column>
    </sec-table>
    <h3>Time Select Options</h3>
    <sec-table class="doc-table" :data="timeSelectOptions">
      <sec-table-column label="参数" prop="attr" width="150"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="类型" prop="type" width="100"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="100"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="100"></sec-table-column>
    </sec-table>
    <h3>Time Picker Options</h3>
    <sec-table class="doc-table" :data="timePickerOptions">
      <sec-table-column label="参数" prop="attr" width="150"></sec-table-column>
      <sec-table-column label="说明">
        <template #default="{ row }">
          <span v-html="row.desc"></span>
        </template>
      </sec-table-column>
      <sec-table-column label="类型" prop="type" width="150"></sec-table-column>
      <sec-table-column label="可选值" width="240">
        <template #default="{ row }">
          <span v-html="row.value"></span>
        </template>
      </sec-table-column>
      <sec-table-column label="默认值" prop="default" width="120"></sec-table-column>
    </sec-table>
    <h3>Events</h3>
    <sec-table class="doc-table" :data="events">
      <sec-table-column label="事件名称" prop="event" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="回调参数" prop="param" width="220"></sec-table-column>
    </sec-table>
    <h3>Methods</h3>
    <sec-table class="doc-table" :data="methods">
      <sec-table-column label="方法名" prop="method" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="参数" prop="param" width="250"></sec-table-column>
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
        type: 'date(TimePicker) / string(TimeSelect)',
        value: '—',
        default: '—',
      }, {
        attr: 'readonly',
        desc: '完全只读',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'disabled',
        desc: '禁用',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'editable',
        desc: '文本框可输入',
        type: 'boolean',
        value: '—',
        default: 'true',
      }, {
        attr: 'clearable',
        desc: '是否显示清除按钮',
        type: 'boolean',
        value: '—',
        default: 'true',
      }, {
        attr: 'size',
        desc: '输入框尺寸',
        type: 'string',
        value: 'large / medium / small / mini',
        default: 'small',
      }, {
        attr: 'placeholder',
        desc: '非范围选择时的占位内容',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'start-placeholder',
        desc: '范围选择时开始日期的占位内容',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'end-placeholder',
        desc: '范围选择时结束日期的占位内容',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'is-range',
        desc: '是否为时间范围选择，仅对 <code>&lt;sec-time-picker&gt;</code> 有效',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'arrow-control',
        desc: '是否使用箭头进行时间选择，仅对 <code>&lt;sec-time-picker&gt;</code> 有效',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'align',
        desc: '对齐方式',
        type: 'string',
        value: 'left / center / right',
        default: 'left',
      }, {
        attr: 'popper-class',
        desc: 'TimePicker 下拉框的类名',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'picker-options',
        desc: '当前时间日期选择器特有的选项参考下表',
        type: 'object',
        value: '—',
        default: '{}',
      }, {
        attr: 'range-separator',
        desc: '选择范围时的分隔符',
        type: 'string',
        value: '—',
        default: '\'-\'',
      }, {
        attr: 'value-format',
        desc: '可选，仅 TimePicker 时可用，绑定值的格式。不指定则绑定值为 Date 对象',
        type: 'string',
        value: '见 <a href="/#/components/date-picker#ri-qi-ge-shi">日期格式</a>',
        default: '—',
      }, {
        attr: 'default-value',
        desc: '可选，选择器打开时默认显示的时间',
        type: 'Date(TimePicker) / string(TimeSelect)',
        value: '可被 <code>new Date()</code> 解析(TimePicker) / 可选值(TimeSelect)',
        default: '—',
      }, {
        attr: 'name',
        desc: '原生属性',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'prefix-icon',
        desc: '自定义头部图标的类名',
        type: 'string',
        value: '—',
        default: 'el-icon-time',
      }, {
        attr: 'clear-icon',
        desc: '自定义清空图标的类名',
        type: 'string',
        value: '—',
        default: 'el-icon-circle-close',
      }],
      timeSelectOptions: [{
        attr: 'start',
        desc: '开始时间',
        type: 'string',
        value: '—',
        default: '09:00',
      }, {
        attr: 'end',
        desc: '结束时间',
        type: 'string',
        value: '—',
        default: '18:00',
      }, {
        attr: 'step',
        desc: '间隔时间',
        type: 'string',
        value: '—',
        default: '00:30',
      }, {
        attr: 'minTime',
        desc: '最小时间，小于该时间的时间段将被禁用',
        type: 'string',
        value: '—',
        default: '00:00',
      }, {
        attr: 'maxTime',
        desc: '最大时间，大于该时间的时间段将被禁用',
        type: 'string',
        value: '—',
        default: '—',
      }],
      timePickerOptions: [{
        attr: 'selectableRange',
        desc: '可选时间段，例如 <code>\'18:30:00 - 20:30:00\'</code> 或者传入数组 <code>[\'09:30:00 - 12:00:00\', \'14:30:00 - 18:30:00\']</code>',
        type: 'string / array',
        value: '—',
        default: '—',
      }, {
        attr: 'format',
        desc: '时间格式化(TimePicker)',
        type: 'string',
        value: '小时：<code>HH</code>，分：<code>mm</code>，秒：<code>ss</code>，AM/PM <code>A</code>',
        default: '\'HH:mm:ss\'',
      }],
      events: [{
        event: 'change',
        desc: '用户确认选定的值时触发',
        param: '组件绑定值',
      }, {
        event: 'blur',
        desc: '当 input 失去焦点时触发',
        param: '组件实例',
      }, {
        event: 'focus',
        desc: '当 input 获得焦点时触发',
        param: '组件实例',
      }],
      methods: [{
        method: 'focus',
        desc: '使 input 获取焦点',
        param: '—',
      }],
    };
  },
};
</script>
