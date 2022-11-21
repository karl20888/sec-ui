<!-- eslint-disable max-len -->
<template>
  <sec-block class="doc-block">
    <h2>MessageBox 弹框</h2>
    <p>模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。</p>
    <div class="tip">
      <p>从场景上说，MessageBox 的作用是美化系统自带的 <code>alert</code>、<code>confirm</code> 和 <code>prompt</code>，因此适合展示较为简单的内容。如果需要弹出较为复杂的内容，请使用 Dialog。</p>
    </div>
    <h3>消息提示</h3>
    <p>当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭。</p>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
      </template>
      <p>调用 <code>$alert</code> 方法即可打开消息提示，它模拟了系统的 <code>alert</code>，无法通过按下 ESC 或点击框外关闭。此例中接收了两个参数，<code>message</code> 和 <code>title</code>。值得一提的是，窗口被关闭后，它默认会返回一个 <code>Promise</code> 对象便于进行后续操作的处理。若不确定浏览器是否支持 <code>Promise</code>，可自行引入第三方 polyfill 或像本例一样使用回调进行后续处理。</p>
    </DocDemo>
    <h3>确认消息</h3>
    <p>提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。</p>
    <DocDemo :markdown="demo2">
      <template #source>
        <Demo2></Demo2>
      </template>
      <p>调用 <code>$confirm</code> 方法即可打开消息提示，它模拟了系统的 <code>confirm</code>。Message Box 组件也拥有极高的定制性，我们可以传入 <code>options</code> 作为第三个参数，它是一个字面量对象。<code>type</code> 字段表明消息类型，可以为 <code>success</code>、<code>error</code>、<code>info</code> 和 <code>warning</code>，无效的设置将会被忽略。注意，第二个参数 <code>title</code> 必须定义为 <code>String</code> 类型，如果是 <code>Objectt</code>，会被理解为 <code>options</code>。在这里我们用了 Promise 来处理后续响应。</p>
    </DocDemo>
    <h3>提交内容</h3>
    <p>当用户进行操作时会被触发，中断用户操作，提示用户进行输入的对话框。</p>
    <DocDemo :markdown="demo3">
      <template #source>
        <Demo3></Demo3>
      </template>
      <p>调用 <code>$prompt</code> 方法即可打开消息提示，它模拟了系统的 <code>prompt</code>。可以用 <code>inputPattern</code> 字段自己规定匹配模式，或者用 <code>inputValidator</code> 规定校验函数，可以返回 <code>Boolean</code> 或 <code>String</code>，返回 <code>false</code> 或字符串时均表示校验未通过，同时返回的字符串相当于定义了 <code>inputErrorMessage</code> 字段。此外，可以用 <code>inputPlaceholder</code> 字段来定义输入框的占位符。</p>
    </DocDemo>
    <h3>自定义</h3>
    <p>可自定义配置不同内容。</p>
    <DocDemo :markdown="demo4">
      <template #source>
        <Demo4></Demo4>
      </template>
      <p>以上三个方法都是对 <code>$msgbox</code> 方法的再包装。本例直接调用 <code>$msgbox</code> 方法，使用了 <code>showCancelButton</code> 字段，用于显示取消按钮。另外可使用 <code>cancelButtonClass</code> 为其添加自定义样式，使用 <code>cancelButtonText</code> 来自定义按钮文本（Confirm 按钮也具有相同的字段，在文末的字段说明中有完整的字段列表）。此例还使用了 <code>beforeClose</code> 属性，它的值是一个方法，会在 MessageBox 的实例关闭前被调用，同时暂停实例的关闭。它有三个参数：<code>action</code>、实例本身和 <code>done</code> 方法。使用它能够在关闭前对实例进行一些操作，比如为确定按钮添加 <code>loading</code> 状态等；此时若需要关闭实例，可以调用 <code>done</code> 方法（若在 <code>beforeClose</code> 中没有调用 <code>done</code>，则实例不会关闭）。</p>
    </DocDemo>
    <div class="tip">
      <p>弹出层的内容可以是 <code>VNode</code>，所以我们能把一些自定义组件传入其中。每次弹出层打开后，Vue 会对新老 <code>VNode</code> 节点进行比对，然后将根据比较结果进行最小单位地修改视图。这也许会造成弹出层内容区域的组件没有重新渲染，比如 <a href="https://github.com/ElemeFE/element/issues/8931">#8931</a>。当这类问题出现时，解决方案是给 <code>VNode</code> 加上一个不相同的 key，参考<a href="https://jsfiddle.net/zhiyang/ezmhq2ef/">这里</a>。</p>
    </div>
    <h3>使用 HTML 片段</h3>
    <p><code>message</code> 属性支持传入 HTML 片段。</p>
    <DocDemo :markdown="demo5">
      <template #source>
        <Demo5></Demo5>
      </template>
      <p>将 <code>dangerouslyUseHTMLString</code> 属性设置为 true，<code>message</code> 就将被当做 HTML 片段处理。</p>
    </DocDemo>
    <div class="tip warning">
      <p><code>message</code> 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 <a href="https://en.wikipedia.org/wiki/Cross-site_scripting">XSS 攻击</a>。因此在 <code>dangerouslyUseHTMLString</code> 打开的情况下，请确保 <code>message</code> 的内容是可信的，<strong>永远不要</strong> 将用户提交的内容赋值给 <code>message</code> 属性。</p>
    </div>
    <h3>区分取消与关闭</h3>
    <p>有些场景下，点击取消按钮与点击关闭按钮有着不同的含义。</p>
    <DocDemo :markdown="demo6">
      <template #source>
        <Demo6></Demo6>
      </template>
      <p>默认情况下，当用户触发取消（点击取消按钮）和触发关闭（点击关闭按钮或遮罩层、按下 ESC 键）时，Promise 的 reject 回调和 <code>callback</code> 回调的参数均为 'cancel'。如果将 <code>distinguishCancelAndClose</code> 属性设置为 true，则上述两种行为的参数分别为 'cancel' 和 'close'。</p>
    </DocDemo>
    <h3>居中布局</h3>
    <p>内容支持居中布局。</p>
    <DocDemo :markdown="demo7">
      <template #source>
        <Demo7></Demo7>
      </template>
      <p>将 <code>center</code> 设置为 <code>true</code> 即可开启居中布局。</p>
    </DocDemo>
    <h3>全局方法</h3>
    <p>如果你完整引入了 SecUI，它会为 Vue.prototype 添加如下全局方法：$msgbox，$alert，$confirm 和 $prompt。因此在 Vue instance 中可以采用本页面中的方式调用 <code>MessageBox</code>。调用参数为：</p>
    <ul>
      <li><code>$msgbox(options)</code></li>
      <li><code>$alert(message, title, options)</code> 或 <code>$alert(message, options)</code></li>
      <li><code>$confirm(message, title, options)</code> 或 <code>$confirm(message, options)</code></li>
      <li><code>$prompt(message, title, options)</code> 或 <code>$prompt(message, options)</code></li>
    </ul>
    <h3>单独引用</h3>
    <p>如果单独引入 <code>MessageBox</code>：</p>
    <markdown-it-vue
      content="```
      import { MessageBox } from '@dbsec/ui';
      "
    ></markdown-it-vue>
    <p>那么对应于上述四个全局方法的调用方法依次为：MessageBox, MessageBox.alert，MessageBox.confirm 和 MessageBox.prompt，调用参数与全局方法相同。</p>
    <h3>Options</h3>
    <sec-table class="doc-table" :data="options">
      <sec-table-column label="参数" prop="attr" width="220"></sec-table-column>
      <sec-table-column label="说明">
        <template #default="{ row }">
          <span v-html="row.desc"></span>
        </template>
      </sec-table-column>
      <sec-table-column label="类型" prop="type" width="260"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="130"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="240"></sec-table-column>
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
      options: [{
        attr: 'title',
        desc: 'MessageBox 标题',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'message',
        desc: 'MessageBox 消息正文内容',
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
        desc: '消息类型，用于显示图标',
        type: 'string',
        value: 'success / info / warning / error',
        default: '—',
      }, {
        attr: 'iconClass',
        desc: '自定义图标的类名，会覆盖 <code>type</code>',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'customClass',
        desc: 'MessageBox 的自定义类名',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'callback',
        desc: '若不是用 Promise，可以使用此参数指定 MessageBox 关闭后的回调',
        type: 'function(action, instance)，action 的值为 \'confirm\'，\'cancel\' 或 \'close\'，instance 为 MessageBox 实例，可以通过它访问实例上的属性和方法',
        value: '—',
        default: '—',
      }, {
        attr: 'showClose',
        desc: 'MessageBox 是否显示右上角关闭按钮',
        type: 'boolean',
        value: '—',
        default: 'true',
      }, {
        attr: 'beforeClose',
        desc: 'MessageBox 关闭前的回调，会暂停实例的关闭',
        type: 'function(action, instance, done)，action 的值为 \'confirm\'，\'cancel\' 或 \'close\'；instance 为 MessageBox 实例，可以通过它访问实例上的属性和方法；done 用于关闭 MessageBox 实例',
        value: '—',
        default: '—',
      }, {
        attr: 'distinguishCancelAndClose',
        desc: '是否将取消（点击取消按钮）与关闭（点击关闭按钮或遮罩层、按下 ESC 键）进行区分',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'lockScroll',
        desc: '是否在 MessageBox 出现时将 body 滚动锁定',
        type: 'boolean',
        value: '—',
        default: 'true',
      }, {
        attr: 'showCancelButton',
        desc: '是否显示取消按钮',
        type: 'boolean',
        value: '—',
        default: 'false（以 confirm 和 prompt 方式调用时为 true）',
      }, {
        attr: 'showConfirmButton',
        desc: '是否显示确定按钮',
        type: 'boolean',
        value: '—',
        default: 'true',
      }, {
        attr: 'cancelButtonText',
        desc: '取消按钮的文本内容',
        type: 'string',
        value: '—',
        default: '取消',
      }, {
        attr: 'confirmButtonText',
        desc: '确定按钮的文本内容',
        type: 'string',
        value: '—',
        default: '确定',
      }, {
        attr: 'cancelButtonClass',
        desc: '取消按钮的自定义类名',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'confirmButtonClass',
        desc: '确定按钮的自定义类名',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'closeOnClickModal',
        desc: '是否可通过点击遮罩关闭 MessageBox',
        type: 'boolean',
        value: '—',
        default: 'true（以 alert 方式调用时为 false）',
      }, {
        attr: 'closeOnPressEscape',
        desc: '是否可通过按下 ESC 键关闭 MessageBox',
        type: 'boolean',
        value: '—',
        default: 'true（以 alert 方式调用时为 false）',
      }, {
        attr: 'closeOnHashChange',
        desc: '是否在 hashchange 时关闭 MessageBox',
        type: 'boolean',
        value: '—',
        default: 'true',
      }, {
        attr: 'showInput',
        desc: '是否显示输入框',
        type: 'boolean',
        value: '—',
        default: 'false（以 prompt 方式调用时为 true）',
      }, {
        attr: 'inputPlaceholder',
        desc: '输入框的占位符',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'inputType',
        desc: '输入框的类型',
        type: 'string',
        value: '—',
        default: 'text',
      }, {
        attr: 'inputValue',
        desc: '输入框的初始文本',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'inputPattern',
        desc: '输入框的校验表达式',
        type: 'regexp',
        value: '—',
        default: '—',
      }, {
        attr: 'inputValidator',
        desc: '输入框的校验函数。可以返回布尔值或字符串，若返回一个字符串，则返回结果会被赋值给 inputErrorMessage',
        type: 'function',
        value: '—',
        default: '—',
      }, {
        attr: 'inputErrorMessage',
        desc: '校验未通过时的提示文本',
        type: 'string',
        value: '—',
        default: '输入的数据不合法!',
      }, {
        attr: 'center',
        desc: '是否居中布局',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'roundButton',
        desc: '是否使用圆角按钮',
        type: 'boolean',
        value: '—',
        default: 'false',
      }],
    };
  },
};
</script>
