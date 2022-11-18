<!-- eslint-disable max-len -->
<template>
  <sec-block class="doc-block">
    <h2>Upload 上传</h2>
    <p>通过点击或者拖拽上传文件。</p>
    <h3>点击上传</h3>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
      </template>
      <p>通过 slot 你可以传入自定义的上传按钮类型和文字提示。可通过设置 <code>limit</code> 和 <code>on-exceed</code> 来限制上传文件的个数和定义超出限制时的行为。可通过设置 <code>before-remove</code> 来阻止文件移除操作。</p>
    </DocDemo>
    <h3>用户头像上传</h3>
    <p>使用 <code>before-upload</code> 限制用户上传的图片格式和大小。</p>
    <DocDemo :markdown="demo2">
      <template #source>
        <Demo2></Demo2>
      </template>
    </DocDemo>
    <h3>照片墙</h3>
    <p>使用 <code>list-type</code> 属性来设置文件列表的样式。</p>
    <DocDemo :markdown="demo3">
      <template #source>
        <Demo3></Demo3>
      </template>
    </DocDemo>
    <h3>文件缩略图</h3>
    <p>使用 <code>scoped-slot</code> 去设置缩略图模板。</p>
    <DocDemo :markdown="demo4">
      <template #source>
        <Demo4></Demo4>
      </template>
    </DocDemo>
    <h3>图片列表缩略图</h3>
    <DocDemo :markdown="demo5">
      <template #source>
        <Demo5></Demo5>
      </template>
    </DocDemo>
    <h3>上传文件列表控制</h3>
    <p>通过 <code>on-change</code> 钩子函数来对列表进行控制。</p>
    <DocDemo :markdown="demo6">
      <template #source>
        <Demo6></Demo6>
      </template>
    </DocDemo>
    <h3>拖拽上传</h3>
    <DocDemo :markdown="demo7">
      <template #source>
        <Demo7></Demo7>
      </template>
    </DocDemo>
    <h3>手动上传</h3>
    <DocDemo :markdown="demo8">
      <template #source>
        <Demo8></Demo8>
      </template>
    </DocDemo>
    <h3>Attributes</h3>
    <sec-table class="doc-table" :data="attributes">
      <sec-table-column label="参数" prop="attr" width="150"></sec-table-column>
      <sec-table-column label="说明">
        <template #default="{ row }">
          <span v-html="row.desc"></span>
        </template>
      </sec-table-column>
      <sec-table-column label="类型" prop="type" width="180"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="220"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="100"></sec-table-column>
    </sec-table>
    <h3>Slots</h3>
    <sec-table class="doc-table" :data="slots">
      <sec-table-column label="name" prop="name" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
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
      attributes: [{
        attr: 'action',
        desc: '必选参数，上传的地址',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'headers',
        desc: '设置上传的请求头部',
        type: 'object',
        value: '—',
        default: '—',
      }, {
        attr: 'multiple',
        desc: '是否支持多选文件',
        type: 'boolean',
        value: '—',
        default: '—',
      }, {
        attr: 'data',
        desc: '上传时附带的额外参数',
        type: 'object',
        value: '—',
        default: '—',
      }, {
        attr: 'name',
        desc: '上传的文件字段名',
        type: 'string',
        value: '—',
        default: 'file',
      }, {
        attr: 'with-credentials',
        desc: '支持发送 cookie 凭证信息',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'show-file-list',
        desc: '是否显示已上传文件列表',
        type: 'boolean',
        value: '—',
        default: 'true',
      }, {
        attr: 'drag',
        desc: '是否启用拖拽上传',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'accept',
        desc: '接受上传的<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept">文件类型</a>（thumbnail-mode 模式下此参数无效）',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'on-preview',
        desc: '点击文件列表中已上传的文件时的钩子',
        type: 'function(file)',
        value: '—',
        default: '—',
      }, {
        attr: 'on-remove',
        desc: '文件列表移除文件时的钩子',
        type: 'function(file, fileList)',
        value: '—',
        default: '—',
      }, {
        attr: 'on-success',
        desc: '文件上传成功时的钩子',
        type: 'function(response, file, fileList)',
        value: '—',
        default: '—',
      }, {
        attr: 'on-error',
        desc: '文件上传失败时的钩子',
        type: 'function(err, file, fileList)',
        value: '—',
        default: '—',
      }, {
        attr: 'on-progress',
        desc: '文件上传时的钩子',
        type: 'function(event, file, fileList)',
        value: '—',
        default: '—',
      }, {
        attr: 'on-change',
        desc: '文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用',
        type: 'function(file, fileList)',
        value: '—',
        default: '—',
      }, {
        attr: 'before-upload',
        desc: '上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。',
        type: 'function(file)',
        value: '—',
        default: '—',
      }, {
        attr: 'before-remove',
        desc: '删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除。',
        type: 'function(file, fileList)',
        value: '—',
        default: '—',
      }, {
        attr: 'list-type',
        desc: '文件列表的类型',
        type: 'string',
        value: 'text / picture / picture-card',
        default: 'text',
      }, {
        attr: 'auto-upload',
        desc: '是否在选取文件后立即进行上传',
        type: 'boolean',
        value: '—',
        default: 'true',
      }, {
        attr: 'file-list',
        desc: '上传的文件列表, 例如: [{name: \'food.jpg\', url: \'https://xxx.cdn.com/xxx.jpg\'}]',
        type: 'array',
        value: '—',
        default: '[]',
      }, {
        attr: 'http-request',
        desc: '覆盖默认的上传行为，可以自定义上传的实现',
        type: 'function',
        value: '—',
        default: '—',
      }, {
        attr: 'disabled',
        desc: '是否禁用',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'limit',
        desc: '最大允许上传个数',
        type: 'number',
        value: '—',
        default: '—',
      }, {
        attr: 'on-exceed',
        desc: '文件超出个数限制时的钩子',
        type: 'function(files, fileList)',
        value: '—',
        default: '—',
      }],
      slots: [{
        name: 'trigger',
        desc: '触发文件选择框的内容',
      }, {
        name: 'tip',
        desc: '提示说明文字',
      }, {
        name: 'file',
        desc: '文件内容，参数为 { file }',
      }],
      methods: [{
        method: 'clearFiles',
        desc: '清空已上传的文件列表（该方法不支持在 before-upload 中调用）',
        param: '—',
      }, {
        method: 'abort',
        desc: '取消上传请求',
        param: '（ file: fileList 中的 file 对象 ）',
      }, {
        method: 'submit',
        desc: '手动上传文件列表',
        param: '—',
      }],
    };
  },
};
</script>
