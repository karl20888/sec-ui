<!-- eslint-disable max-len -->
<template>
  <sec-block class="doc-block">
    <h2>Notification 通知</h2>
    <p>悬浮出现在页面角落，显示全局的通知提醒消息。</p>
    <h3>基本用法</h3>
    <p>适用性广泛的通知栏</p>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
      </template>
      <p>Notification 组件提供通知功能，SecUI 注册了 <code>$notify</code> 方法，接收一个 <code>options</code> 字面量参数，在最简单的情况下，你可以设置 <code>title</code> 字段和 <code>message</code> 字段，用于设置通知的标题和正文。默认情况下，经过一段时间后 Notification 组件会自动关闭，但是通过设置 <code>duration</code>，可以控制关闭的时间间隔，特别的是，如果设置为 <code>0</code>，则不会自动关闭。注意：<code>duration</code> 接收一个 <code>Number</code>，单位为毫秒，默认为 <code>4500</code>。</p>
    </DocDemo>
    <h3>带有倾向性</h3>
    <p>带有 icon，常用来显示「成功、警告、消息、错误」类的系统消息。</p>
    <DocDemo :markdown="demo2">
      <template #source>
        <Demo2></Demo2>
      </template>
      <p>SecUI 为 Notification 组件准备了四种通知类型： <code>success</code>、<code>warning</code>、<code>info</code> 和 <code>error</code>。通过 <code>type</code> 字段来设置，除此之外的值将被忽略。同时，我们也为 Notification 的各种 type 注册了方法，可以在不传入 <code>type</code> 字段的情况下像 <code>open3</code> 和 <code>open4</code> 那样直接调用。</p>
    </DocDemo>
    <h3>自定义弹出位置</h3>
    <p>可以让 Notification 从屏幕四角中的任意一角弹出。</p>
    <DocDemo :markdown="demo3">
      <template #source>
        <Demo3></Demo3>
      </template>
      <p>使用 <code>position</code> 属性定义 Notification 的弹出位置，支持四个选项：<code>top-right</code>、<code>top-left</code>、<code>bottom-right</code>、<code>bottom-left</code>，默认为 <code>top-right</code>。</p>
    </DocDemo>
    <h3>带有偏移</h3>
    <p>让 Notification 偏移一些位置。</p>
    <DocDemo :markdown="demo4">
      <template #source>
        <Demo4></Demo4>
      </template>
      <p>Notification 提供设置偏移量的功能，通过设置 <code>offset</code> 字段，可以使弹出的消息距屏幕边缘偏移一段距离。注意在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量。</p>
    </DocDemo>
    <h3>使用 HTML 片段</h3>
    <p><code>message</code> 属性支持传入 HTML 片段。</p>
    <DocDemo :markdown="demo5">
      <template #source>
        <Demo5></Demo5>
      </template>
      <p>将 <code>dangerouslyUseHTMLString</code> 属性设置为 true，<code>message</code> 就会被当做 HTML 片段处理。</p>
    </DocDemo>
    <div class="tip warning">
      <p><code>message</code> 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 <a href="https://en.wikipedia.org/wiki/Cross-site_scripting">XSS 攻击</a>。因此在 <code>dangerouslyUseHTMLString</code> 打开的情况下，请确保 <code>message</code> 的内容是可信的，<strong>永远不要</strong>将用户提交的内容赋值给 <code>message</code> 属性。</p>
    </div>
    <h3>隐藏关闭按钮</h3>
    <p>可以不显示关闭按钮</p>
    <DocDemo :markdown="demo6">
      <template #source>
        <Demo6></Demo6>
      </template>
      <p>将 <code>showClose</code> 属性设置为 <code>false</code> 即可隐藏关闭按钮。</p>
    </DocDemo>
    <h3>全局方法</h3>
    <p>SecUI 为 <code>Vue.prototype</code> 添加了全局方法 <code>$notify</code>。因此在 vue instance 中可以采用本页面中的方式调用 Notification。</p>
    <h3>单独引用</h3>
    <p>单独引入 Notification：</p>
    <markdown-it-vue
      content="```
      import { Notification } from 'element-sec-ui';
      "
    ></markdown-it-vue>
    <p>此时调用方法为 <code>Notification(options)</code>。我们也为每个 type 定义了各自的方法，如 <code>Notification.success(options)</code>。并且可以调用 <code>Notification.closeAll()</code> 手动关闭所有实例。</p>
    <h3>Options</h3>
    <sec-table class="doc-table" :data="options">
      <sec-table-column label="参数" prop="attr" width="220"></sec-table-column>
      <sec-table-column label="说明">
        <template #default="{ row }">
          <span v-html="row.desc"></span>
        </template>
      </sec-table-column>
      <sec-table-column label="类型" prop="type" width="150"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="350"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="100"></sec-table-column>
    </sec-table>
    <h3>方法</h3>
    <p>调用 <code>Notification</code> 或 <code>this.$notify</code> 会返回当前 Notification 的实例。如果需要手动关闭实例，可以调用它的 <code>close</code> 方法。</p>
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
      options: [{
        attr: 'title',
        desc: '标题',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'message',
        desc: '说明文字',
        type: 'string / VNode',
        value: '—',
        default: '—',
      }, {
        attr: 'dangerouslyUseHTMLString',
        desc: '是否将 message 属性作为 HTML 片段处理',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'type',
        desc: '主题样式，如果不在可选值内将被忽略',
        type: 'string',
        value: 'success / warning / info / error',
        default: '—',
      }, {
        attr: 'iconClass',
        desc: '自定义图标的类名。若设置了 <code>type</code>，则 <code>iconClass</code> 会被覆盖',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'customClass',
        desc: '自定义类名',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'duration',
        desc: '显示时间，毫秒。设为 0 则不会自动关闭',
        type: 'number',
        value: '—',
        default: '4500',
      }, {
        attr: 'position',
        desc: '自定义弹出位置',
        type: 'string',
        value: 'top-right / top-left / bottom-right / bottom-left',
        default: 'top-right',
      }, {
        attr: 'showClose',
        desc: '是否显示关闭按钮',
        type: 'boolean',
        value: '—',
        default: 'true',
      }, {
        attr: 'onClose',
        desc: '关闭时的回调函数',
        type: 'function',
        value: '—',
        default: '—',
      }, {
        attr: 'onClick',
        desc: '点击 Notification 时的回调函数',
        type: 'function',
        value: '—',
        default: '—',
      }, {
        attr: 'offset',
        desc: '偏移的距离，在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量',
        type: 'number',
        value: '—',
        default: '0',
      }],
      methods: [{
        method: 'close',
        desc: '关闭当前的 Notification',
      }],
    };
  },
};
</script>
