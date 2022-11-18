<!-- eslint-disable max-len -->
<template>
  <sec-block class="doc-block">
    <h2>DateTimePicker 日期时间选择器</h2>
    <p>在同一个选择器里选择日期和时间。</p>
    <div class="tip">
      <p>DateTimePicker 由 DatePicker 和 TimePicker 派生，<code>Picker Options</code> 或者其他选项可以参照 DatePicker 和 TimePicker。</p>
    </div>
    <h3>日期和时间点</h3>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
      </template>
      <p>通过设置 <code>type</code> 属性为 <code>datetime</code>，即可在同一个选择器里同时进行日期和时间的选择。快捷选项的使用方法与 DatePicker 相同。</p>
    </DocDemo>
    <h3>日期和时间范围</h3>
    <DocDemo :markdown="demo2">
      <template #source>
        <Demo2></Demo2>
      </template>
      <p>设置 <code>type</code> 为 <code>datetimerange</code> 即可选择日期和时间范围。</p>
    </DocDemo>
    <h3>默认的起始与结束时刻</h3>
    <DocDemo :markdown="demo3">
      <template #source>
        <Demo3></Demo3>
      </template>
      <p>使用 <code>datetimerange</code> 进行范围选择时，在日期选择面板中选定起始与结束的日期，默认会使用该日期的 <code>00:00:00</code> 作为起始与结束的时刻；通过选项 <code>default-time</code> 可以控制选中起始与结束日期时所使用的具体时刻。<code>default-time</code> 接受一个数组，数组每项值为字符串，形如 <code>12:00:00</code>，其中第一项控制起始日期的具体时刻，第二项控制结束日期的具体时刻。</p>
    </DocDemo>
    <h3>Attributes</h3>
    <sec-table class="doc-table" :data="attributes">
      <sec-table-column label="参数" prop="attr" width="150"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="类型" prop="type" width="150"></sec-table-column>
      <sec-table-column label="可选值" width="190">
        <template #default="{ row }">
          <span v-html="row.value"></span>
        </template>
      </sec-table-column>
      <sec-table-column label="默认值" prop="default" width="180"></sec-table-column>
    </sec-table>
    <h3>Picker Options</h3>
    <sec-table class="doc-table" :data="pickerOptions">
      <sec-table-column label="参数" prop="attr" width="150"></sec-table-column>
      <sec-table-column label="说明">
        <template #default="{ row }">
          <span v-html="row.desc"></span>
        </template>
      </sec-table-column>
      <sec-table-column label="类型" prop="type" width="250"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="100"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="80"></sec-table-column>
    </sec-table>
    <h3>Shortcuts</h3>
    <sec-table class="doc-table" :data="shortcuts">
      <sec-table-column label="参数" prop="attr" width="150"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="类型" prop="type" width="100"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="80"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="80"></sec-table-column>
    </sec-table>
    <h3>Events</h3>
    <sec-table class="doc-table" :data="events">
      <sec-table-column label="事件名称" prop="event" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="回调参数" width="450">
        <template #default="{ row }">
          <span v-html="row.param"></span>
        </template>
      </sec-table-column>
    </sec-table>
    <h3>Methods</h3>
    <sec-table class="doc-table" :data="methods">
      <sec-table-column label="方法名" prop="method" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="参数" prop="param" width="250"></sec-table-column>
    </sec-table>
    <h3>Slots</h3>
    <sec-table class="doc-table" :data="slots">
      <sec-table-column label="name" prop="name" width="220"></sec-table-column>
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
        attr: 'time-arrow-control',
        desc: '是否使用箭头进行时间选择',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'type',
        desc: '显示类型',
        type: 'string',
        value: 'year / month / date / dates / week / datetime / datetimerange / daterange',
        default: 'date',
      }, {
        attr: 'format',
        desc: '显示在输入框中的格式',
        type: 'string',
        value: '见 <a href="/#/components/date-picker#ri-qi-ge-shi">日期格式</a>',
        default: 'yyyy-MM-dd HH:mm:ss',
      }, {
        attr: 'align',
        desc: '对齐方式',
        type: 'string',
        value: 'left / center / right',
        default: 'left',
      }, {
        attr: 'popper-class',
        desc: 'DateTimePicker  下拉框的类名',
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
        attr: 'default-value',
        desc: '可选，选择器打开时默认显示的时间',
        type: 'Date',
        value: '可被 <code>new Date()</code> 解析',
        default: '—',
      }, {
        attr: 'default-time',
        desc: '选中日期后的默认具体时刻',
        type: '非范围选择时：string / 范围选择时：string[]',
        value: '非范围选择时：形如 <code>12:00:00</code> 的字符串；范围选择时：数组，长度为 2，每项值为字符串，形如 <code>12:00:00</code>，第一项指定开始日期的时刻，第二项指定结束日期的时刻。不指定会使用时刻 <code>00:00:00</code>',
        default: '—',
      }, {
        attr: 'value-format',
        desc: '可选，绑定值的格式。不指定则绑定值为 Date 对象',
        type: 'string',
        value: '见 <a href="/#/components/date-picker#ri-qi-ge-shi">日期格式</a>',
        default: '—',
      }, {
        attr: 'name',
        desc: '原生属性',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'unlink-panels',
        desc: '在范围选择器里取消两个日期面板之间的联动',
        type: 'boolean',
        value: '—',
        default: 'false',
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
      pickerOptions: [{
        attr: 'shortcuts',
        desc: '设置快捷选项，需要传入 { text, onClick } 对象用法参考 demo 或下表',
        type: 'Object[]',
        value: '—',
        default: '—',
      }, {
        attr: 'disabledDate',
        desc: '设置禁用状态，参数为当前日期，要求返回 Boolean',
        type: 'Function',
        value: '—',
        default: '—',
      }, {
        attr: 'cellClassName',
        desc: '设置日期的 className',
        type: 'Function(Date)',
        value: '—',
        default: '—',
      }, {
        attr: 'firstDayOfWeek',
        desc: '周起始日',
        type: 'Number',
        value: '1 到 7',
        default: '7',
      }],
      shortcuts: [{
        attr: 'text',
        desc: '标题文本',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'onClick',
        desc: '选中后的回调函数，参数是 vm，可通过触发 \'pick\' 事件设置选择器的值。例如 vm.$emit(\'pick\', new Date())',
        type: 'function',
        value: '—',
        default: '—',
      }],
      events: [{
        event: 'change',
        desc: '用户确认选定的值时触发',
        param: '组件绑定值。格式与绑定值一致，可受 <code>value-format</code> 控制',
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
      slots: [{
        name: 'range-separator',
        desc: '自定义分隔符',
      }],
    };
  },
};
</script>
