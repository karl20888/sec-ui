<!-- eslint-disable max-len -->
<template>
  <sec-block class="doc-block">
    <h2>Select 选择器</h2>
    <p>当选项过多时，使用下拉菜单展示并选择内容。</p>
    <h3>基础用法</h3>
    <p>适用广泛的基础单选</p>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
      </template>
      <p><code>v-model</code> 的值为当前被选中的 <code>sec-option</code> 的 value 属性值。</p>
    </DocDemo>
    <h3>有禁用选项</h3>
    <DocDemo :markdown="demo2">
      <template #source>
        <Demo2></Demo2>
      </template>
      <p>在 <code>sec-option</code> 中，设定 <code>disabled</code> 值为 true，即可禁用该选项。</p>
    </DocDemo>
    <h3>禁用状态</h3>
    <p>选择器不可用状态。</p>
    <DocDemo :markdown="demo3">
      <template #source>
        <Demo3></Demo3>
      </template>
      <p>为 <code>sec-select</code> 设置 <code>disabled</code> 属性，则整个选择器不可用。</p>
    </DocDemo>
    <h3>可清空单选</h3>
    <p>包含清空按钮，可将选择器清空为初始状态。</p>
    <DocDemo :markdown="demo4">
      <template #source>
        <Demo4></Demo4>
      </template>
      <p>为 <code>sec-select</code> 设置 <code>clearable</code> 属性，则可将选择器清空。</p>
    </DocDemo>
    <h3>基础多选</h3>
    <p>适用性较广的基础多选，用 Tag 展示已选项。</p>
    <DocDemo :markdown="demo5">
      <template #source>
        <Demo5></Demo5>
      </template>
      <p>为 <code>sec-select</code> 设置 <code>multiple</code> 属性即可启用多选，此时 <code>v-model</code> 的值为当前选中值所组成的数组。默认情况下选中值会以 Tag 的形式展现，你也可以设置 <code>collapse-tags</code> 属性将它们合并为一段文字。</p>
    </DocDemo>
    <h3>自定义模板</h3>
    <p>可以自定义备选项。</p>
    <DocDemo :markdown="demo6">
      <template #source>
        <Demo6></Demo6>
      </template>
      <p>将自定义的 HTML 模板插入 <code>sec-option</code> 的 slot 中即可。</p>
    </DocDemo>
    <h3>分组</h3>
    <p>备选项进行分组展示。</p>
    <DocDemo :markdown="demo7">
      <template #source>
        <Demo7></Demo7>
      </template>
      <p>使用 <code>sec-option-group</code> 对备选项进行分组，它的 <code>label</code> 属性为分组名。</p>
    </DocDemo>
    <h3>可搜索</h3>
    <p>可以利用搜索功能快速查找选项。</p>
    <DocDemo :markdown="demo8">
      <template #source>
        <Demo8></Demo8>
      </template>
      <p>为 <code>sec-select</code> 添加 <code>filterable</code> 属性即可启用搜索功能。默认情况下，Select 会找出所有 <code>label</code> 属性包含输入值的选项。如果希望使用其他的搜索逻辑，可以通过传入一个 <code>filter-method</code> 来实现。<code>filter-method</code> 为一个 <code>Function</code>，它会在输入值发生变化时调用，参数为当前输入值。</p>
    </DocDemo>
    <h3>远程搜索</h3>
    <p>从服务器搜索数据，输入关键字进行查找。</p>
    <DocDemo :markdown="demo9">
      <template #source>
        <Demo9></Demo9>
      </template>
      <p>为了启用远程搜索，需要将 <code>filterable</code> 和 <code>remote</code> 设置为 <code>true</code>，同时传入一个 <code>remote-method</code>。<code>remote-method</code> 为一个 <code>Function</code>，它会在输入值发生变化时调用，参数为当前输入值。需要注意的是，如果 <code>sec-option</code> 是通过 <code>v-for</code> 指令渲染出来的，此时需要为 <code>sec-option</code> 添加 <code>key</code> 属性，且其值需具有唯一性，比如此例中的 <code>item.value</code>。</p>
    </DocDemo>
    <h3>创建条目</h3>
    <p>可以创建并选中选项中不存在的条目。</p>
    <DocDemo :markdown="demo10">
      <template #source>
        <Demo10></Demo10>
      </template>
      <p>使用 <code>allow-create</code> 属性即可通过在输入框中输入文字来创建新的条目。注意此时 <code>filterable</code> 必须为真。本例还使用了 <code>default-first-option</code> 属性，在该属性打开的情况下，按下回车就可以选中当前选项列表中的第一个选项，无需使用鼠标或键盘方向键进行定位。</p>
    </DocDemo>
    <div class="tip">
      <p>如果 Select 的绑定值为对象类型，请务必指定 <code>value-key</code> 作为它的唯一性标识。</p>
    </div>
    <h3>Select Attributes</h3>
    <sec-table class="doc-table" :data="selectAttributes">
      <sec-table-column label="参数" prop="attr" width="200"></sec-table-column>
      <sec-table-column label="说明">
        <template #default="{ row }">
          <span v-html="row.desc"></span>
        </template>
      </sec-table-column>
      <sec-table-column label="类型" prop="type" width="130"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="180"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="100"></sec-table-column>
    </sec-table>
    <h3>Select Events</h3>
    <sec-table class="doc-table" :data="selectEvents">
      <sec-table-column label="事件名称" prop="event" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="回调参数" prop="param" width="250"></sec-table-column>
    </sec-table>
    <h3>Select Slots</h3>
    <sec-table class="doc-table" :data="selectSlots">
      <sec-table-column label="name" prop="name" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
    </sec-table>
    <h3>Option Group Attributes</h3>
    <sec-table class="doc-table" :data="optionGroupAttributes">
      <sec-table-column label="参数" prop="attr" width="200"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="类型" prop="type" width="130"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="100"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="100"></sec-table-column>
    </sec-table>
    <h3>Option Attributes</h3>
    <sec-table class="doc-table" :data="optionAttributes">
      <sec-table-column label="参数" prop="attr" width="200"></sec-table-column>
      <sec-table-column label="说明">
        <template #default="{ row }">
          <span v-html="row.desc"></span>
        </template>
      </sec-table-column>
      <sec-table-column label="类型" prop="type" width="240"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="100"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="100"></sec-table-column>
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
import demo7 from './Demo7/source.md';
import Demo7 from './Demo7/View.vue';
import demo8 from './Demo8/source.md';
import Demo8 from './Demo8/View.vue';
import demo9 from './Demo9/source.md';
import Demo9 from './Demo9/View.vue';
import demo10 from './Demo10/source.md';
import Demo10 from './Demo10/View.vue';

export default {
  components: {
    DocDemo,
    Demo1,
    Demo2,
    Demo3,
    Demo4,
    Demo5,
    Demo6,
    Demo7,
    Demo8,
    Demo9,
    Demo10,
  },
  data() {
    return {
      demo1,
      demo2,
      demo3,
      demo4,
      demo5,
      demo6,
      demo7,
      demo8,
      demo9,
      demo10,
      selectAttributes: [{
        attr: 'value / v-model',
        desc: '绑定值',
        type: 'boolean / string / number',
        value: '—',
        default: '—',
      }, {
        attr: 'multiple',
        desc: '是否多选',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'disabled',
        desc: '是否禁用',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'value-key',
        desc: '作为 value 唯一标识的键名，绑定值为对象类型时必填',
        type: 'string',
        value: '—',
        default: 'value',
      }, {
        attr: 'size',
        desc: '输入框尺寸',
        type: 'string',
        value: 'large / medium / mini',
        default: '—',
      }, {
        attr: 'clearable',
        desc: '是否可以清空选项',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'collapse-tags',
        desc: '多选时是否将选中值按文字的形式展示',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'multiple-limit',
        desc: '多选时用户最多可以选择的项目数，为 0 则不限制',
        type: 'number',
        value: '—',
        default: '0',
      }, {
        attr: 'name',
        desc: 'select input 的 name 属性',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'autocomplete',
        desc: 'select input 的 autocomplete 属性',
        type: 'string',
        value: '—',
        default: 'off',
      }, {
        attr: 'auto-complete',
        desc: '下个主版本弃用',
        type: 'string',
        value: '—',
        default: 'off',
      }, {
        attr: 'placeholder',
        desc: '占位符',
        type: 'string',
        value: '—',
        default: '请选择',
      }, {
        attr: 'filterable',
        desc: '是否可搜索',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'allow-create',
        desc: '是否允许用户创建新条目，需配合 <code>filterable</code> 使用',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'filter-method',
        desc: '自定义搜索方法',
        type: 'function',
        value: '—',
        default: '—',
      }, {
        attr: 'remote',
        desc: '是否为远程搜索',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'remote-method',
        desc: '远程搜索方法',
        type: 'function',
        value: '—',
        default: '—',
      }, {
        attr: 'loading',
        desc: '是否正在从远程获取数据',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'loading-text',
        desc: '远程加载时显示的文字',
        type: 'string',
        value: '—',
        default: '加载中',
      }, {
        attr: 'no-match-text',
        desc: '搜索条件无匹配时显示的文字，也可以使用 <code>slot="empty"</code> 设置',
        type: 'string',
        value: '—',
        default: '无匹配数据',
      }, {
        attr: 'no-data-text',
        desc: '选项为空时显示的文字，也可以使用 <code>slot="empty"</code> 设置',
        type: 'string',
        value: '—',
        default: '无数据',
      }, {
        attr: 'popper-class',
        desc: 'Select 下拉框的类名',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'reserve-keyword',
        desc: '多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'default-first-option',
        desc: '在输入框按下回车，选择第一个匹配项。需配合 <code>filterable</code> 或 <code>remote</code> 使用',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'popper-append-to-body',
        desc: '是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false',
        type: 'boolean',
        value: '—',
        default: 'true',
      }, {
        attr: 'automatic-dropdown',
        desc: '对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单',
        type: 'boolean',
        value: '—',
        default: 'false',
      }],
      selectEvents: [{
        event: 'change',
        desc: '选中值发生变化时触发',
        param: '目前的选中值',
      }, {
        event: 'visible-change',
        desc: '下拉框出现/隐藏时触发',
        param: '出现则为 true，隐藏则为 false',
      }, {
        event: 'remove-tag',
        desc: '多选模式下移除 tag 时触发',
        param: '移除的 tag 值',
      }, {
        event: 'clear',
        desc: '可清空的单选模式下用户点击清空按钮时触发',
        param: '—',
      }, {
        event: 'blur',
        desc: '当 input 失去焦点时触发',
        param: '(event: Event)',
      }, {
        event: 'focus',
        desc: '当 input 获得焦点时触发',
        param: '(event: Event)',
      }],
      selectSlots: [{
        name: '—',
        desc: 'Option 组件列表',
      }, {
        name: 'prefix',
        desc: 'Select 组件头部内容',
      }, {
        name: 'empty',
        desc: '无选项时的列表',
      }],
      optionGroupAttributes: [{
        attr: 'label',
        desc: '分组的组名',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'disabled',
        desc: '是否将该分组下所有选项置为禁用',
        type: 'boolean',
        value: '—',
        default: 'false',
      }],
      optionAttributes: [{
        attr: 'value',
        desc: '选项的值',
        type: 'string / number / object',
        value: '—',
        default: '—',
      }, {
        attr: 'label',
        desc: '选项的标签，若不设置则默认与 <code>value</code> 相同',
        type: 'string / number',
        value: '—',
        default: '—',
      }, {
        attr: 'disabled',
        desc: '是否禁用该选项',
        type: 'boolean',
        value: '—',
        default: 'false',
      }],
      methods: [{
        method: 'focus',
        desc: '使 input 获取焦点',
        param: '—',
      }, {
        method: 'blur',
        desc: '使 input 失去焦点，并隐藏下拉框',
        param: '—',
      }],
    };
  },
};
</script>
