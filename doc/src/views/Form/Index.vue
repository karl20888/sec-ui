<!-- eslint-disable max-len -->
<template>
  <sec-block class="doc-block">
    <h2>Form 表单</h2>
    <p>由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据</p>
    <h3>典型表单</h3>
    <p>包括各种表单项，比如输入框、选择器、开关、单选框、多选框等。</p>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
      </template>
      <p>在 Form 组件中，每一个表单域由一个 FormItem 组件构成，表单域中可以放置各种类型的表单控件，包括 Input、Select、Checkbox、Radio、Switch、DatePicker、TimePicker</p>
    </DocDemo>
    <div class="tip">
      <p>W3C 标准中有如下<a href="https://www.w3.org/MarkUp/html-spec/html-spec_8.html#SEC8.2">规定</a>：</p>
      <blockquote>
        <p>When there is only one single-line text input field in a form, the user agent should accept Enter in that field as a request to submit the form.</p>
      </blockquote>
      <p>即：当一个 form 元素中只有一个输入框时，在该输入框中按下回车应提交该表单。如果希望阻止这一默认行为，可以在 <code>&lt;sec-form&gt;</code> 标签上添加 <code>@submit.native.prevent</code>。</p>
    </div>
    <h3>右侧扩展区域</h3>
    <p>在表单右侧提供扩展区域插槽</p>
    <DocDemo :markdown="demo2">
      <template #source>
        <Demo2></Demo2>
      </template>
      <p>可在 <code>sec-form</code> 标签上设置 <code>extra-width</code> 和 <code>extra-align</code>，也可对某个表单域单独设置</p>
    </DocDemo>
    <h3>行内表单</h3>
    <p>当垂直方向空间受限且表单较简单时，可以在一行内放置表单。</p>
    <DocDemo :markdown="demo3">
      <template #source>
        <Demo3></Demo3>
      </template>
      <p>通过设置 <code>label-position</code> 属性可以改变表单域标签的位置，可选值为 <code>top</code>、<code>left</code>，当设为 <code>top</code> 时标签会置于表单域的顶部。</p>
    </DocDemo>
    <h3>表单验证</h3>
    <p>在防止用户错误的前提下，尽可能让用户更早地发现并纠正错误。</p>
    <DocDemo :markdown="demo4">
      <template #source>
        <Demo4></Demo4>
      </template>
      <p>Form 组件提供了表单验证的功能，只需要通过 <code>rules</code> 属性传入约定的验证规则，并将 Form-Item 的 <code>prop</code> 属性设置为需校验的字段名即可。校验规则参见 <a href="https://github.com/yiminghe/async-validator">async-validator</a></p>
    </DocDemo>
    <h3>自定义校验规则</h3>
    <p>这个例子中展示了如何使用自定义验证规则来完成密码的二次验证。</p>
    <DocDemo :markdown="demo5">
      <template #source>
        <Demo5></Demo5>
      </template>
      <p>本例还使用 <code>status-icon</code> 属性为输入框添加了表示检验结果的反馈图标。</p>
    </DocDemo>
    <div class="tip">
      <p>自定义校验 callback 必须被调用。更多高级用法可参考 <a href="https://github.com/yiminghe/async-validator">async-validator</a>。</p>
    </div>
    <h3>动态增减表单项</h3>
    <DocDemo :markdown="demo6">
      <template #source>
        <Demo6></Demo6>
      </template>
      <p>除了在 Form 组件上一次性传递所有的验证规则外还可以在单个的表单域上传递属性的验证规则。</p>
    </DocDemo>
    <h3>数字类型验证</h3>
    <DocDemo :markdown="demo7">
      <template #source>
        <Demo7></Demo7>
      </template>
      <p>数字类型的验证需要在 <code>v-model</code> 处加上 <code>.number</code> 的修饰符，这是 <code>Vue</code> 自身提供的用于将绑定值转化为 <code>number</code> 类型的修饰符。</p>
    </DocDemo>
    <div class="tip">
      <p>嵌套在 <code>sec-form-item</code> 中的 <code>sec-form-item</code> 标签宽度默认为零，不会继承 <code>sec-form</code> 的 <code>label-width</code>。如果需要可以为其单独设置 <code>label-width</code> 属性。</p>
    </div>
    <h3>表单内组件尺寸控制</h3>
    <p>通过设置 Form 上的 <code>size</code> 属性可以使该表单内所有可调节大小的组件继承该尺寸。Form-Item 也具有该属性。</p>
    <DocDemo :markdown="demo8">
      <template #source>
        <Demo8></Demo8>
      </template>
      <p>如果希望某个表单项或某个表单组件的尺寸不同于 Form 上的 <code>size</code> 属性，直接为这个表单项或表单组件设置自己的 <code>size</code> 即可。</p>
    </DocDemo>
    <h3>Form Attributes</h3>
    <sec-table class="doc-table" :data="formAttributes">
      <sec-table-column label="参数" prop="attr" width="180"></sec-table-column>
      <sec-table-column label="说明">
        <template #default="{ row }">
          <span v-html="row.desc"></span>
        </template>
      </sec-table-column>
      <sec-table-column label="类型" prop="type" width="100"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="220"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="100"></sec-table-column>
    </sec-table>
    <h3>Form Methods</h3>
    <sec-table class="doc-table" :data="formMethods">
      <sec-table-column label="方法名" prop="method" width="140"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="参数" prop="param" width="250"></sec-table-column>
    </sec-table>
    <h3>Form Events</h3>
    <sec-table class="doc-table" :data="formEvents">
      <sec-table-column label="事件名称" prop="event" width="140"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="回调参数" prop="param" width="440"></sec-table-column>
    </sec-table>
    <h3>Form-Item Attributes</h3>
    <sec-table class="doc-table" :data="formItemAttributes">
      <sec-table-column label="参数" prop="attr" width="160"></sec-table-column>
      <sec-table-column label="说明">
        <template #default="{ row }">
          <span v-html="row.desc"></span>
        </template>
      </sec-table-column>
      <sec-table-column label="类型" prop="type" width="100"></sec-table-column>
      <sec-table-column label="可选值" width="260">
        <template #default="{ row }">
          <span v-html="row.value"></span>
        </template>
      </sec-table-column>
      <sec-table-column label="默认值" prop="default" width="80"></sec-table-column>
    </sec-table>
    <h3>Form-Item Slot</h3>
    <sec-table class="doc-table" :data="formItemSlot">
      <sec-table-column label="name" prop="name" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
    </sec-table>
    <h3>Form-Item Scoped Slot</h3>
    <sec-table class="doc-table" :data="formItemScopedSlot">
      <sec-table-column label="name" prop="name" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
    </sec-table>
    <h3>Form-Item Methods</h3>
    <sec-table class="doc-table" :data="formItemMethods">
      <sec-table-column label="方法名" prop="method" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="参数" prop="param" width="80"></sec-table-column>
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
      formAttributes: [{
        attr: 'model',
        desc: '表单数据对象',
        type: 'object',
        value: '—',
        default: '—',
      }, {
        attr: 'rules',
        desc: '表单验证规则',
        type: 'object',
        value: '—',
        default: '—',
      }, {
        attr: 'inline',
        desc: '行内表单模式',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'lable-position',
        desc: '表单域标签的位置，如果值为 left 或者 right 时，则需要设置 <code>label-width</code>',
        type: 'string',
        value: 'right / left / top',
        default: 'right',
      }, {
        attr: 'label-width',
        desc: '表单域标签的宽度，例如 \'50px\'。作为 Form 直接子元素的 form-item 会继承该值。支持 <code>auto</code>。',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'label-suffix',
        desc: '表单域标签的后缀',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'extra-width',
        desc: '右侧扩展区域宽度。作为 Form 直接子元素的 form-item 会继承该值。',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'extra-align',
        desc: '右侧扩展区域对齐方式。作为 Form 直接子元素的 form-item 会继承该值。',
        type: 'string',
        value: 'left / center / right',
        default: '—',
      }, {
        attr: 'hide-required-asterisk',
        desc: '是否隐藏必填字段的标签旁边的红色星号',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'show-message',
        desc: '是否显示校验错误信息',
        type: 'boolean',
        value: '—',
        default: 'true',
      }, {
        attr: 'inline-message',
        desc: '是否以行内形式展示校验信息',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'status-icon',
        desc: '是否在输入框中显示校验结果反馈图标',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'validate-on-rule-change',
        desc: '是否在 <code>rules</code> 属性改变后立即触发一次验证',
        type: 'boolean',
        value: '—',
        default: 'true',
      }, {
        attr: 'size',
        desc: '用于控制该表单内组件的尺寸',
        type: 'string',
        value: 'large / medium / small / mini',
        default: '—',
      }, {
        attr: 'disabled',
        desc: '是否禁用该表单内的所有组件。若设置为 true，则表单内组件上的 disabled 属性不再生效',
        type: 'boolean',
        value: '—',
        default: 'false',
      }],
      formMethods: [{
        method: 'validate',
        desc: '对整个表单进行校验的方法，返回一个 promise，验证失败后的 catch 中会传入未通过校验的字段',
        param: 'Function',
      }, {
        method: 'validateField',
        desc: '对部分表单字段进行校验的方法',
        param: 'Function(props: array | string, callback: Function(errorMessage: string))',
      }, {
        method: 'resetFields',
        desc: '对整个表单进行重置，将所有字段值重置为初始值并移除校验结果',
        param: '—',
      }, {
        method: 'clearValidate',
        desc: '移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果',
        param: 'Function(props: array | string)',
      }],
      formEvents: [{
        event: 'validate',
        desc: '任一表单项被校验后触发',
        param: '被校验的表单项 prop 值，校验是否通过，错误消息（如果存在）',
      }],
      formItemAttributes: [{
        attr: 'prop',
        desc: '表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的',
        type: 'string',
        value: '传入 Form 组件的 <code>model</code> 中的字段',
        default: '—',
      }, {
        attr: 'label',
        desc: '标签文本',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'label-width',
        desc: '表单域标签的的宽度，例如 \'50px\'。支持 <code>auto</code>。',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'extra-width',
        desc: '右侧扩展区域宽度',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'extra-align',
        desc: '右侧扩展区域对齐方式',
        type: 'string',
        value: 'left / center / right',
        default: '—',
      }, {
        attr: 'required',
        desc: '是否必填，如不设置，则会根据校验规则自动生成',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'rules',
        desc: '表单验证规则',
        type: 'object',
        value: '—',
        default: '—',
      }, {
        attr: 'error',
        desc: '表单域验证错误信息, 设置该值会使表单验证状态变为 <code>error</code>，并显示该错误信息',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'show-message',
        desc: '是否显示校验错误信息',
        type: 'boolean',
        value: '—',
        default: 'true',
      }, {
        attr: 'inline-message',
        desc: '以行内形式展示校验信息',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'size',
        desc: '用于控制该表单域下组件的尺寸',
        type: 'string',
        value: 'large / medium / small / mini',
        default: '—',
      }],
      formItemSlot: [{
        name: '—',
        desc: 'Form Item 的内容',
      }, {
        name: 'label',
        desc: '标签文本的内容',
      }, {
        name: 'extra',
        desc: '右侧扩展区域的内容',
      }],
      formItemScopedSlot: [{
        name: 'error',
        desc: '自定义表单校验信息的显示方式，参数为 { error }',
      }],
      formItemMethods: [{
        method: 'resetField',
        desc: '对该表单项进行重置，将其值重置为初始值并移除校验结果',
        param: '—',
      }, {
        method: 'clearValidate',
        desc: '移除该表单项的校验结果',
        param: '—',
      }],
    };
  },
};
</script>
