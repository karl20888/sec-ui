<!-- eslint-disable max-len -->
<template>
  <sec-block class="doc-block">
    <h2>Input 输入框</h2>
    <p>通过鼠标或键盘输入字符</p>
    <div class="tip warning">
      <p>Input 为受控组件，它<strong>总会显示 Vue 绑定值</strong>。</p>
      <p>通常情况下，应当处理 <code>input</code> 事件，并更新组件的绑定值（或使用 <code>v-model</code>）。否则，输入框内显示的值不会改变。</p>
      <p>不支持 <code>v-model</code> 修饰符。</p>
    </div>
    <h3>基础用法</h3>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
      </template>
    </DocDemo>
    <h3>禁用状态</h3>
    <DocDemo :markdown="demo2">
      <template #source>
        <Demo2></Demo2>
      </template>
      <p>通过 <code>disabled</code> 属性指定是否禁用 input 组件</p>
    </DocDemo>
    <h3>可清空</h3>
    <DocDemo :markdown="demo3">
      <template #source>
        <Demo3></Demo3>
      </template>
      <p>通过 <code>clearable</code> 属性即可得到一个可清空的输入框</p>
    </DocDemo>
    <h3>密码框</h3>
    <DocDemo :markdown="demo4">
      <template #source>
        <Demo4></Demo4>
      </template>
      <p>使用 <code>show-password</code> 属性即可得到一个可切换显示隐藏的密码框</p>
    </DocDemo>
    <h3>带 icon 的输入框</h3>
    <p>带有图标标记输入类型</p>
    <DocDemo :markdown="demo5">
      <template #source>
        <Demo5></Demo5>
      </template>
      <p>可以通过 <code>prefix-icon</code> 和 <code>suffix-icon</code> 属性在 input 组件首部和尾部增加显示图标，也可以通过 slot 来放置图标。</p>
    </DocDemo>
    <h3>文本域</h3>
    <p>用于输入多行文本信息，通过 <code>type</code> 属性的值指定为 textarea。</p>
    <div class="tip">
      <p>同时添加了 <code>sec-textarea</code> 标签，可直接代表文本域，省去设置 <code>type="textarea"</code> 属性。</p>
    </div>
    <DocDemo :markdown="demo6">
      <template #source>
        <Demo6></Demo6>
      </template>
      <p>文本域高度可通过 <code>rows</code> 属性控制</p>
    </DocDemo>
    <h3>可自适应文本高度的文本域</h3>
    <p>通过设置 <code>autosize</code> 属性可以使得文本域的高度能够根据文本内容自动进行调整，并且 <code>autosize</code> 还可以设定一个对象，指定最小行数和最大行数。</p>
    <DocDemo :markdown="demo7">
      <template #source>
        <Demo7></Demo7>
      </template>
    </DocDemo>
    <h3>复合型输入框</h3>
    <p>可前置或后置元素，一般为标签或按钮</p>
    <DocDemo :markdown="demo8">
      <template #source>
        <Demo8></Demo8>
      </template>
    </DocDemo>
    <h3>尺寸</h3>
    <DocDemo :markdown="demo9">
      <template #source>
        <Demo9></Demo9>
      </template>
      <p>可通过 <code>size</code> 属性指定输入框的尺寸，除了默认的大小外，还提供了 <code>large</code>、<code>medium</code> 和 <code>mini</code> 三种尺寸。</p>
    </DocDemo>
    <h3>带输入建议</h3>
    <p>根据输入内容提供对应的输入建议</p>
    <DocDemo :markdown="demo10">
      <template #source>
        <Demo10></Demo10>
      </template>
      <p>autocomplete 是一个可带输入建议的输入框组件，<code>fetch-suggestions</code> 是一个返回输入建议的方法属性，如 querySearch(queryString, callback)，在该方法中你可以在你的输入建议数据准备好时通过 callback(data) 返回到 autocomplete 组件中。</p>
    </DocDemo>
    <h3>自定义模板</h3>
    <p>可自定义输入建议的显示</p>
    <DocDemo :markdown="demo11">
      <template #source>
        <Demo11></Demo11>
      </template>
      <p>使用 <code>scoped slot</code> 自定义输入建议的模板。该 scope 的参数为 <code>item</code>，表示当前输入建议对象。</p>
    </DocDemo>
    <h3>远程搜索</h3>
    <p>从服务端搜索数据</p>
    <DocDemo :markdown="demo12">
      <template #source>
        <Demo12></Demo12>
      </template>
    </DocDemo>
    <h3>输入长度限制</h3>
    <DocDemo :markdown="demo13">
      <template #source>
        <Demo13></Demo13>
      </template>
      <p><code>maxlength</code> 和 <code>minlength</code> 是原生属性，用来限制输入框的字符长度，其中字符长度是用 Javascript 的字符串长度统计的。对于类型为 <code>text</code> 或 <code>textarea</code> 的输入框，在使用 <code>maxlength</code> 属性限制最大输入长度的同时，可通过设置 <code>show-word-limit</code> 属性来展示字数统计。如果使用 <code>sec-textarea</code>，字数统计默认显示。</p>
    </DocDemo>
    <h3>Input Attributes</h3>
    <sec-table class="doc-table" :data="inputAttributes">
      <sec-table-column label="参数" prop="attr" width="150"></sec-table-column>
      <sec-table-column label="说明">
        <template #default="{ row }">
          <span v-html="row.desc"></span>
        </template>
      </sec-table-column>
      <sec-table-column label="类型" prop="type" width="180"></sec-table-column>
      <sec-table-column label="可选值" width="200">
        <template #default="{ row }">
          <span v-html="row.value"></span>
        </template>
      </sec-table-column>
      <sec-table-column label="默认值" width="220">
        <template #default="{ row }">
          <span v-html="row.default"></span>
        </template>
      </sec-table-column>
    </sec-table>
    <h3>Input Slots</h3>
    <sec-table class="doc-table" :data="inputSlots">
      <sec-table-column label="name" prop="name" width="220"></sec-table-column>
      <sec-table-column label="说明">
        <template #default="{ row }">
          <span v-html="row.desc"></span>
        </template>
      </sec-table-column>
    </sec-table>
    <h3>Input Events</h3>
    <sec-table class="doc-table" :data="inputEvents">
      <sec-table-column label="事件名称" prop="event" width="220"></sec-table-column>
      <sec-table-column label="说明">
        <template #default="{ row }">
          <span v-html="row.desc"></span>
        </template>
      </sec-table-column>
      <sec-table-column label="回调参数" prop="param" width="250"></sec-table-column>
    </sec-table>
    <h3>Input Methods</h3>
    <sec-table class="doc-table" :data="inputMethods">
      <sec-table-column label="方法名" prop="method" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="参数" prop="param" width="250"></sec-table-column>
    </sec-table>
    <h3>Autocomplete Attributes</h3>
    <sec-table class="doc-table" :data="autocompleteAttribute">
      <sec-table-column label="参数" prop="attr" width="200"></sec-table-column>
      <sec-table-column label="说明">
        <template #default="{ row }">
          <span v-html="row.desc"></span>
        </template>
      </sec-table-column>
      <sec-table-column label="类型" prop="type" width="170"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="190"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="120"></sec-table-column>
    </sec-table>
    <h3>Autocomplete Slots</h3>
    <sec-table class="doc-table" :data="autocompleteSlots">
      <sec-table-column label="name" prop="name" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
    </sec-table>
    <h3>Autocomplete Scoped Slot</h3>
    <sec-table class="doc-table" :data="autocompleteScopedSlot">
      <sec-table-column label="name" prop="name" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
    </sec-table>
    <h3>Autocomplete Events</h3>
    <sec-table class="doc-table" :data="autocompleteEvents">
      <sec-table-column label="事件名称" prop="event" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="回调参数" prop="param" width="400"></sec-table-column>
    </sec-table>
    <h3>Autocomplete Methods</h3>
    <sec-table class="doc-table" :data="autocompleteMethods">
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
import demo11 from './Demo11/source.md';
import Demo11 from './Demo11/View.vue';
import demo12 from './Demo12/source.md';
import Demo12 from './Demo12/View.vue';
import demo13 from './Demo13/source.md';
import Demo13 from './Demo13/View.vue';

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
    Demo11,
    Demo12,
    Demo13,
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
      demo11,
      demo12,
      demo13,
      inputAttributes: [{
        attr: 'type',
        desc: '类型',
        type: 'string',
        value: 'text, textarea 和其他 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types">原生的 input 的 type 值</a>',
        default: 'text',
      }, {
        attr: 'value / v-model',
        desc: '绑定值',
        type: 'string / number',
        value: '—',
        default: '—',
      }, {
        attr: 'maxlength',
        desc: '原生属性，最大输入长度',
        type: 'number',
        value: '—',
        default: '—',
      }, {
        attr: 'minlength',
        desc: '原生属性，最小输入长度',
        type: 'number',
        value: '—',
        default: '—',
      }, {
        attr: 'show-word-limit',
        desc: '是否显示输入字数统计，只在 <code>type = "text"</code> 或 <code>type = "textarea"</code> 时有效',
        type: 'boolean',
        value: '—',
        default: 'false（如果使用 <code>sec-textarea</code> 时默认为 true）',
      }, {
        attr: 'placeholder',
        desc: '输入框占位文本',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'clearable',
        desc: '是否可清空',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'trim',
        desc: '当 Input 失去焦点时绑定值自动执行 trim 函数',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'show-password',
        desc: '是否显示切换密码图标',
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
        attr: 'size',
        desc: '输入框尺寸，只在 <code>type != "textarea"</code> 时有效',
        type: 'string',
        value: 'large / medium / mini',
        default: '—',
      }, {
        attr: 'prefix-icon',
        desc: '输入框头部图标',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'suffix-icon',
        desc: '输入框尾部图标',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'rows',
        desc: '输入框行数，只对 <code>type = "textarea"</code> 有效',
        type: 'number',
        value: '—',
        default: '2',
      }, {
        attr: 'autosize',
        desc: '自适应内容高度，只对 <code>type = "autotext"</code> 有效，可传入对象，如，{ minRows: 2, maxRows: 6 }',
        type: 'boolean / object',
        value: '—',
        default: 'false',
      }, {
        attr: 'autocomplete',
        desc: '原生属性，自动补全',
        type: 'string',
        value: 'on，off',
        default: 'off',
      }, {
        attr: 'auto-complete',
        desc: '下个版本弃用',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'name',
        desc: '原生属性',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'readonly',
        desc: '原生属性，是否只读',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'max',
        desc: '原生属性，设置最大值',
        type: '—',
        value: '—',
        default: '—',
      }, {
        attr: 'min',
        desc: '原生属性，设置最小值',
        type: '—',
        value: '—',
        default: '—',
      }, {
        attr: 'step',
        desc: '原生属性，设置输入字段的合法数字间隔',
        type: '—',
        value: '—',
        default: '—',
      }, {
        attr: 'resize',
        desc: '控制是否能被用户缩放',
        type: 'string',
        value: 'none / both / horizontal / vertical',
        default: '—',
      }, {
        attr: 'autofocus',
        desc: '原生属性，自动获取焦点',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'form',
        desc: '原生属性',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'label',
        desc: '输入框关联的 label 文字',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'tabindex',
        desc: '输入框的 tabindex',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'validate-event',
        desc: '输入时是否触发表单的校验',
        type: 'boolean',
        value: '—',
        default: 'true',
      }],
      inputSlots: [{
        name: 'prefix',
        desc: '输入框头部内容，只对 <code> type = "text"</code> 有效',
      }, {
        name: 'suffix',
        desc: '输入框尾部内容，只对 <code> type = "text"</code> 有效',
      }, {
        name: 'prepend',
        desc: '输入框前置内容，只对 <code> type = "text"</code> 有效',
      }, {
        name: 'append',
        desc: '输入框后置内容，只对 <code> type = "text"</code> 有效',
      }],
      inputEvents: [{
        event: 'blur',
        desc: '在 Input 失去焦点时触发',
        param: '(event: Event)',
      }, {
        event: 'focus',
        desc: '在 Input 获得焦点时触发',
        param: '(event: Event)',
      }, {
        event: 'change',
        desc: '仅在输入框失去焦点或用户按下回车时触发',
        param: '(value: string | number)',
      }, {
        event: 'input',
        desc: '在 Input 值改变时触发',
        param: '(value: string | number)',
      }, {
        event: 'clear',
        desc: '在点击由 <code>clearable</code> 属性生成的清空按钮时触发',
        param: '—',
      }],
      inputMethods: [{
        method: 'focus',
        desc: '使 input 获取焦点',
        param: '—',
      }, {
        method: 'blur',
        desc: '使 input 失去焦点',
        param: '—',
      }, {
        method: 'select',
        desc: '选中 input 中的文字',
        param: '—',
      }],
      autocompleteAttribute: [{
        attr: 'placeholder',
        desc: '输入框占位文本',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'disabled',
        desc: '禁用',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'value-key',
        desc: '输入建议对象中用于显示的键名',
        type: 'string',
        value: '—',
        default: 'value',
      }, {
        attr: 'value',
        desc: '必填值，输入绑定值',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'debounce',
        desc: '获取输入建议的去抖延时',
        type: 'number',
        value: '—',
        default: '300',
      }, {
        attr: 'placement',
        desc: '菜单弹出位置',
        type: 'string',
        value: 'top / top-start / top-end / bottom / bottom-start / bottom-end',
        default: 'bottom-start',
      }, {
        attr: 'fetch-suggestions',
        desc: '返回输入建议的方法，仅当你的输入建议数据 resolve 时，通过调用 callback(data: []) 来返回它',
        type: 'Function(queryString, callback)',
        value: '—',
        default: '—',
      }, {
        attr: 'popper-class',
        desc: 'Autocomplete 下拉列表的类名',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'trigger-on-focus',
        desc: '是否在输入框 focus 时显示建议列表',
        type: 'boolean',
        value: '—',
        default: '—',
      }, {
        attr: 'name',
        desc: '原生属性',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'select-when-unmatched',
        desc: '在输入没有任何匹配建议的情况下，按下回车是否触发 <code>select</code> 事件',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'label',
        desc: '输入框关联的 label 文字',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'prefix-icon',
        desc: '输入框头部图标',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'suffix-icon',
        desc: '输入框尾部图标',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'hide-loading',
        desc: '是否隐藏远程加载时的加载图标',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'popper-append-to-body',
        desc: '是否将下拉列表插入至 body 元素。在下拉列表的定位出现问题时，可将该属性设置为 false',
        type: 'boolean',
        value: '—',
        default: 'true',
      }, {
        attr: 'highlight-first-item',
        desc: '是否默认突出显示远程搜索建议中的第一项',
        type: 'boolean',
        value: '—',
        default: 'false',
      }],
      autocompleteSlots: [{
        name: 'prefix',
        desc: '输入框头部内容',
      }, {
        name: 'suffix',
        desc: '输入框尾部内容',
      }, {
        name: 'prepend',
        desc: '输入框前置内容',
      }, {
        name: 'append',
        desc: '输入框后置内容',
      }],
      autocompleteScopedSlot: [{
        name: '—',
        desc: '自定义输入建议，参数为 { item }',
      }],
      autocompleteEvents: [{
        event: 'select',
        desc: '点击选中建议时触发',
        param: '选中建议项',
      }, {
        event: 'change',
        desc: '在 Input 值改变时触发',
        param: '(value: string | number)',
      }],
      autocompleteMethods: [{
        method: 'focus',
        desc: '使 input 获取焦点',
        param: '—',
      }],
    };
  },
};
</script>
