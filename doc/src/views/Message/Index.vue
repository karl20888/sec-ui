<!-- eslint-disable max-len -->
<template>
  <sec-block class="doc-block">
    <h2>Message 消息提示</h2>
    <p>常用于主动操作后的反馈提示。与 Notification 的区别是后者更多用于系统级通知的被动提醒。</p>
    <h3>基础用法</h3>
    <p>从顶部出现，3 秒后自动消失。</p>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
      </template>
      <p>Message 在配置上与 Notification 非常类似，所以部分 options 在此不做详尽解释，文末有 options 列表，可以结合 Notification 的文档理解它们。SecUI 注册了一个 <code>$message</code> 方法用于调用，Message 可以接收一个字符串或一个 VNode 作为参数，它会被显示为正文内容。</p>
    </DocDemo>
    <h3>不同状态</h3>
    <p>用来显示「成功、警告、消息、错误」类的操作反馈。</p>
    <DocDemo :markdown="demo2">
      <template #source>
        <Demo2></Demo2>
      </template>
      <p>当需要自定义更多属性时，Message 也可以接收一个对象为参数。比如，设置 <code>type</code> 字段可以定义不同的状态，默认为 <code>info</code>。此时正文内容以 <code>message</code> 的值传入。同时，我们也为 Message 的各种 type 注册了方法，可以在不传入 <code>type</code> 字段的情况下像 <code>open4</code> 那样直接调用。</p>
    </DocDemo>
    <h3>可关闭</h3>
    <p>可以添加关闭按钮。</p>
    <DocDemo :markdown="demo3">
      <template #source>
        <Demo3></Demo3>
      </template>
      <p>默认的 Message 是不可以被人工关闭的，如果需要可手动关闭的 Message，可以使用 <code>showClose</code> 字段。此外，和 Notification 一样，Message 拥有可控的 <code>duration</code>，设置 <code>0</code> 为不会被自动关闭，默认为 3000 毫秒。</p>
    </DocDemo>
    <h3>文字居中</h3>
    <p>使用 <code>center</code> 属性让文字水平居中。</p>
    <DocDemo :markdown="demo4">
      <template #source>
        <Demo4></Demo4>
      </template>
    </DocDemo>
    <h3>使用 HTML 片段</h3>
    <p><code>message</code> 属性支持传入 HTML 片段。</p>
    <DocDemo :markdown="demo5">
      <template #source>
        <Demo5></Demo5>
      </template>
      <p>将 <code>dangerouslyUseHTMLString</code> 属性设置为 true，<code>message</code> 就会被当作 HTML 片段处理。</p>
    </DocDemo>
    <div class="tip warning">
      <p><code>message</code> 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 <a href="https://en.wikipedia.org/wiki/Cross-site_scripting">XSS 攻击</a>。因此在 <code>dangerouslyUseHTMLString</code> 打开的情况下，请确保 <code>message</code> 的内容是可信的，<strong>永远不要</strong>将用户提交的内容赋值给 <code>message</code> 属性。</p>
    </div>
    <h3>全局方法</h3>
    <p>SecUI 为 Vue.prototype 添加了全局方法 $message。因此在 vue instance 中可以采用本页面中的方式调用 <code>Message</code>。</p>
    <h3>单独引用</h3>
    <p>单独引入 <code>Message</code>：</p>
    <markdown-it-vue
      content="```
      import { Message } from secui';
      "
    ></markdown-it-vue>
    <p>此时调用方法 <code>Message(options)</code>。我们也可以每个 type 定义了各自的方法，如 <code>Message.success(options)。并且可以调用 <code>Message.closeAll()</code> 手动关闭所有实例。</code></p>
    <h3>Options</h3>
    <sec-table class="doc-table" :data="options">
      <sec-table-column label="参数" prop="attr" width="220"></sec-table-column>
      <sec-table-column label="说明">
        <template #default="{ row }">
          <span v-html="row.desc"></span>
        </template>
      </sec-table-column>
      <sec-table-column label="类型" prop="type" width="150"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="240"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="150"></sec-table-column>
    </sec-table>
    <h3>方法</h3>
    <p>调用 <code>Message</code> 或 <code>this.$message</code> 会返回当前 Message 的实例。如果需要手动关闭实例，可以调用它的 <code>close</code> 方法。</p>
    <sec-table class="doc-table" :data="methods">
      <sec-table-column label="方法名" prop="method" width="220"></sec-table-column>
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
import demo4 from './Demo4/source.md';
import Demo4 from './Demo4/View.vue';
import demo5 from './Demo5/source.md';
import Demo5 from './Demo5/View.vue';

export default {
  components: {
    DocDemo,
    Demo1,
    Demo2,
    Demo3,
    Demo4,
    Demo5,
  },
  data() {
    return {
      demo1,
      demo2,
      demo3,
      demo4,
      demo5,
      options: [{
        attr: 'message',
        desc: '消息文本',
        type: 'string / VNode',
        value: '—',
        default: '—',
      }, {
        attr: 'type',
        desc: '主题',
        type: 'string',
        value: 'success / warning / info / error',
        default: 'info',
      }, {
        attr: 'iconClass',
        desc: '自定义图标的类名，会覆盖 <code>type</code>',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'dangerouslyUseHTMLString',
        desc: '是否将 message 属性作为 HTML 片段处理',
        type: 'boolaen',
        value: '—',
        default: 'false',
      }, {
        attr: 'customClass',
        desc: '自定义类名',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'duration',
        desc: '显示时间，毫秒。设置 0 为不会自动关闭',
        type: 'number',
        value: '—',
        default: '3000',
      }, {
        attr: 'showClose',
        desc: '是否显示关闭按钮',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'center',
        desc: '文字是否居中',
        type: 'boolaen',
        value: '—',
        default: 'false',
      }, {
        attr: 'onClose',
        desc: '关闭时的回调函数，参数为被关闭的 message 实例',
        type: 'function',
        value: '—',
        default: '—',
      }, {
        attr: 'offset',
        desc: 'Message 距离窗口顶部的偏移量',
        type: 'number',
        value: '—',
        default: '20',
      }],
      methods: [{
        method: 'close',
        desc: '关闭当前的 Message',
      }],
    };
  },
};
</script>
