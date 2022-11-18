<!-- eslint-disable max-len -->
<template>
  <sec-block class="doc-block">
    <h2>DatePicker 日期选择器</h2>
    <p>用于选择或输入日期。</p>
    <h3>选择日</h3>
    <p>以「日」为基本单位，基础的日期选择控件。</p>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
      </template>
      <p>基本单位由 <code>type</code> 属性指定。快捷选项需配置 <code>picker-options</code> 对象中的 <code>shortcuts</code>，禁用日期通过 <code>disabledDate</code> 设置，传入函数。</p>
    </DocDemo>
    <h3>其他日期单位</h3>
    <p>通过扩展基础的日期选择，可以选择周、月、年或多个日期。</p>
    <DocDemo :markdown="demo2">
      <template #source>
        <Demo2></Demo2>
      </template>
    </DocDemo>
    <h3>选择日期范围</h3>
    <p>可在一个选择器中便捷地选择一个时间范围。</p>
    <DocDemo :markdown="demo3">
      <template #source>
        <Demo3></Demo3>
      </template>
      <p>在选择日期范围时，默认情况下左右面板会联动。如果希望两个面板各自独立切换当前月份，可以使用 <code>unlink-panels</code> 属性解除联动。</p>
    </DocDemo>
    <h3>选择月份范围</h3>
    <p>可在一个选择器中便捷地选择一个月份范围。</p>
    <DocDemo :markdown="demo4">
      <template #source>
        <Demo4></Demo4>
      </template>
      <p>在选择月份范围时，默认情况下左右面板会联动。如果希望两个面板各自独立切换当前年份，可以使用 <code>unlink-panels</code> 属性解除联动。</p>
    </DocDemo>
    <h3 id="ri-qi-ge-shi">日期格式</h3>
    <p>使用 <code>format</code> 指定输入框的格式；使用 <code>value-format</code> 指定绑定值的格式。</p>
    <p>默认情况下，组件接受并返回 <code>Date</code> 对象。以下为可用的格式化字串，以 UTC 2017年1月2日 03:04:05 为例：</p>
    <div class="tip warning">
      <p>请注意大小写</p>
    </div>
    <sec-table class="doc-table" :data="dateFormat">
      <sec-table-column label="格式" width="120">
        <template #default="{ row }">
          <code>{{ row.format }}</code>
        </template>
      </sec-table-column>
      <sec-table-column label="含义" prop="meaning" width="180"></sec-table-column>
      <sec-table-column label="备注">
        <template #default="{ row }">
          <span v-html="row.remarks"></span>
        </template>
      </sec-table-column>
      <sec-table-column label="举例" prop="example" width="160"></sec-table-column>
    </sec-table>
    <DocDemo :markdown="demo5">
      <template #source>
        <Demo5></Demo5>
      </template>
    </DocDemo>
    <h3>默认显示日期</h3>
    <p>在选择日期范围时，指定起始日期和结束日期的默认时刻。</p>
    <DocDemo :markdown="demo6">
      <template #source>
        <Demo6></Demo6>
      </template>
      <p>选择日期范围时，默认情况下，其实日期和结束日期的时间部分均为当天的 0 点 0 分 0 秒。通过 <code>default-time</code> 可以分别指定二者的具体时刻。<code>default-time</code> 接受一个数组，其中的值为形如 <code>12:00:00</code> 的字符串，第一个值控制起始日期的时刻，第二个值控制结束日期的时刻。</p>
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
      dateFormat: [{
        format: 'yyyy',
        meaning: '年',
        remarks: '',
        example: '2017',
      }, {
        format: 'M',
        meaning: '月',
        remarks: '不补0',
        example: '1',
      }, {
        format: 'MM',
        meaning: '月',
        remarks: '',
        example: '01',
      }, {
        format: 'W',
        meaning: '周',
        remarks: '仅周选择器的 <code>format</code> 可用；不补0',
        example: '1',
      }, {
        format: 'WW',
        meaning: '周',
        remarks: '仅周选择器的 <code>format</code> 可用',
        example: '01',
      }, {
        format: 'd',
        meaning: '日',
        remarks: '不补0',
        example: '2',
      }, {
        format: 'dd',
        meaning: '日',
        remarks: '',
        example: '02',
      }, {
        format: 'H',
        meaning: '小时',
        remarks: '24小时制；不补0',
        example: '3',
      }, {
        format: 'HH',
        meaning: '小时',
        remarks: '24小时制',
        example: '03',
      }, {
        format: 'h',
        meaning: '小时',
        remarks: '12小时制，须和 <code>A</code> 或 <code>a</code> 使用；不补0',
        example: '3',
      }, {
        format: 'hh',
        meaning: '小时',
        remarks: '12小时制，须和 <code>A</code> 或 <code>a</code> 使用',
        example: '03',
      }, {
        format: 'm',
        meaning: '分钟',
        remarks: '不补0',
        example: '4',
      }, {
        format: 'mm',
        meaning: '分钟',
        remarks: '',
        example: '04',
      }, {
        format: 's',
        meaning: '秒',
        remarks: '不补0',
        example: '5',
      }, {
        format: 'ss',
        meaning: '秒',
        remarks: '',
        example: '05',
      }, {
        format: 'A',
        meaning: 'AM/PM',
        remarks: '仅 <code>format</code> 可用，大写',
        example: 'AM',
      }, {
        format: 'a',
        meaning: 'am/pm',
        remarks: '仅 <code>format</code> 可用，小写',
        example: 'am',
      }, {
        format: 'timestamp',
        meaning: 'JS时间戳',
        remarks: '仅 <code>value-format</code> 可用；组件绑定值为 <code>number</code> 类型',
        example: '1483326245000',
      }, {
        format: '[MM]',
        meaning: '不需要格式化字符',
        remarks: '使用方括号标识不需要格式化的字符 (如 [A] [MM])',
        example: 'MM',
      }],
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
        attr: 'type',
        desc: '显示类型',
        type: 'string',
        value: 'year / month / date / dates / week / datetime / datetimerange / daterange / monthrange',
        default: 'date',
      }, {
        attr: 'format',
        desc: '显示在输入框中的格式',
        type: 'string',
        value: '见 <a href="/#/components/date-picker#ri-qi-ge-shi">日期格式</a>',
        default: 'yyyy-MM-dd',
      }, {
        attr: 'align',
        desc: '对齐方式',
        type: 'string',
        value: 'left / center / right',
        default: 'left',
      }, {
        attr: 'popper-class',
        desc: 'DatePicker 下拉框的类名',
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
        desc: '范围选择时选中日期所使用的当日内具体时刻',
        type: 'string[]',
        value: '数组，长度为 2，每项值为字符串，形如 <code>12:00:00</code>，第一项指定开始日期的时刻，第二项指定结束日期的时刻，不指定会使用时刻 <code>00:00:00</code>',
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
      }, {
        attr: 'validate-event',
        desc: '输入时是否触发表单的校验',
        type: 'boolean',
        value: '—',
        default: 'true',
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
      }, {
        attr: 'onPick',
        desc: '选中日期后会执行的回调，只有当 <code>daterange</code> 或 <code>datetimerange</code> 才生效',
        type: 'Function({ maxDate, minDate })',
        value: '—',
        default: '—',
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
    };
  },
};
</script>
