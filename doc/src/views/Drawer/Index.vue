<!-- eslint-disable max-len -->
<template>
  <sec-block class="doc-block">
    <h2>Drawer 抽屉</h2>
    <p>有些时候，<code>Dialog</code> 组件并不满足我们的需求，比如你的表单很长，亦或是你需要临时展示一些文档，<code>Drawer</code> 拥有和 <code>Dialog</code> 几乎相同的 API，在 UI 上带来不一样的体验。</p>
    <h3>基本用法</h3>
    <p>呼出一个临时的侧边栏，可以从多个方向呼出</p>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
      </template>
      <p>可以设置 <code>visible</code> 属性，它的<strong>类型</strong>是 <code>boolean</code>，当为 <strong>true</strong> 时显示 Drawer。也可以使用 <code>open</code> 和 <code>close</code> 方法来打开或关闭 Drawer。Drawer 分为三个部分：<code>title</code>、<code>body</code> 和 <code>footer</code>，<code>title</code> 需要具名为 <strong>title</strong> 的 <code>slot</code>，也可以通过 <code>title</code> 属性来定义，默认值为空。需要注意的是，Drawer 默认是从右往左打开，当然可以设置对应的 <code>direction</code>，详细请参考 <code>direction</code> 用法。最后，本例还展示了 <code>before-close</code> 的用法。</p>
    </DocDemo>
    <h3>不添加 Title</h3>
    <p>当你不需要标题的时候，你还可以去掉标题。</p>
    <DocDemo :markdown="demo2">
      <template #source>
        <Demo2></Demo2>
      </template>
      <p>当遇到不需要 title 的场景时，可以通过 <code>withHeader</code> 这个属性来关闭掉 title 的显示，这样可以留出更大的空间给到用户，注意此时不能设置 title 属性，或设置 title slot，否则标题仍然显示。</p>
    </DocDemo>
    <h3>自定义底部</h3>
    <p>通过 footer slot 可以自定义底部区域，一般用来显示操作按钮，此区域默认文字右对齐显示。</p>
    <DocDemo :markdown="demo3">
      <template #source>
        <Demo3></Demo3>
      </template>
    </DocDemo>
    <h3>防止意外关闭</h3>
    <p>除了 <code>before-close</code> 可以自定义关闭拦截函数外，还可以更简便地使用 <code>beforeCloseTip</code> 来预防抽屉的意外关闭。</p>
    <DocDemo :markdown="demo4">
      <template #source>
        <Demo4></Demo4>
      </template>
      <p><code>beforeClostTip</code> 可以接收 Boolean 类型的值或一个函数，当设置了 <code>beforeCloseTip</code> 点击遮罩时抽屉不会关闭，如果点击右上角的关闭按钮或按 ESC 会弹出默认的提示框。默认的提示框标题为“提示”，提示内容为“保存更改”，确认按钮文字为“保存”，取消按钮文字为“不保存”，可以使用 <code>beforeCloseTipTitle</code>、<code>beforeCloseTipMessage</code>、<code>beforeCloseTipConfirm</code>、<code>beforeCloseTipCancel</code> 四个属性对四处文字做更改，当 <code>beforeCloseTip</code> 为 true 时，提示框只是显示作用，这时可以给 <code>beforeCloseTip</code> 传个函数，和 <code>beforeClose</code> 用法类似，可有使用参数 <code>done</code> 来控制抽屉的关闭。</p>
    </DocDemo>
    <h3>自定义内容</h3>
    <p>和 <code>Dialog</code> 组件一样，<code>Drawer</code> 同样可以在其内部嵌套各种丰富的操作。</p>
    <DocDemo :markdown="demo5">
      <template #source>
        <Demo5></Demo5>
      </template>
    </DocDemo>
    <h3>尺寸</h3>
    <p>在 ElementUI 的抽屉组件基础上增加了 <code>mini</code>、<code>samll</code>、<code>medium</code> 三个预定义的尺寸。</p>
    <DocDemo :markdown="demo6">
      <template #source>
        <Demo6></Demo6>
      </template>
    </DocDemo>
    <h3>多层嵌套</h3>
    <p><code>Drawer</code> 组件也拥有多层嵌套的方法。</p>
    <DocDemo :markdown="demo7">
      <template #source>
        <Demo7></Demo7>
      </template>
    </DocDemo>
    <div class="tip">
      <p>Drawer 的内容是懒渲染的，即在第一次被打开之前，传入的默认 slot 不会被渲染到 DOM 上。因此，如果需要执行 DOM 操作，或通过 <code>ref</code> 获取相应组件，请在 <code>open</code> 事件回调中进行。</p>
    </div>
    <div class="tip">
      <p>Drawer 提供一个 <code>destroyOnClose</code> API，用来在关闭 Drawer 时销毁子组件内容，例如清理表单内的状态，在必要时可以将该属性设置为 <strong>true</strong> 用来保证初始状态的一致性。</p>
    </div>
    <div class="tip">
      <p>如果 <code>visible</code> 属性绑定的变量位于 Vuex 的 store 内，那么 <code>.sync</code> 不会正常工作。此时需要去除 <code>.sync</code> 修饰符，同时监听 Drawer 的 <code>open</code> 和 <code>close</code> 事件，在事件回调中执行 Vuex 中对应的 mutation 更新 <code>visible</code> 属性绑定的变量的值。</p>
    </div>
    <h3>Drawer Attributes</h3>
    <sec-table class="doc-table" :data="drawerAttributes">
      <sec-table-column label="参数" prop="attr" width="220"></sec-table-column>
      <sec-table-column label="说明">
        <template #default="{ row }">
          <span v-html="row.desc"></span>
        </template>
      </sec-table-column>
      <sec-table-column label="类型" prop="type" width="300"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="300"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="100"></sec-table-column>
    </sec-table>
    <h3>Drawer Slots</h3>
    <sec-table class="doc-table" :data="drawerSlots">
      <sec-table-column label="name" prop="name" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
    </sec-table>
    <h3>Drawer Methods</h3>
    <sec-table class="doc-table" :data="drawerMethods">
      <sec-table-column label="方法名" prop="method" width="220"></sec-table-column>
      <sec-table-column label="说明">
        <template #default="{ row }">
          <span v-html="row.desc"></span>
        </template>
      </sec-table-column>
      <sec-table-column label="参数" prop="param" width="250"></sec-table-column>
    </sec-table>
    <h3>Drawer Events</h3>
    <sec-table class="doc-table" :data="drawerEvents">
      <sec-table-column label="事件名称" prop="event" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="回调参数" prop="param" width="250"></sec-table-column>
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
      drawerAttributes: [{
        attr: 'append-to-body',
        desc: 'Drawer 自身是否插入至 body 元素上。嵌套的 Drawer 必须指定该属性并赋值为 true',
        type: 'Boolean',
        value: '—',
        default: 'true',
      }, {
        attr: 'before-close',
        desc: '关闭前的回调，会暂停 Drawer 的关闭',
        type: 'Function(done)，done 用于关闭 Drawer',
        value: '—',
        default: '—',
      }, {
        attr: 'before-close-tip',
        desc: '阻止关闭抽屉的简便方法',
        type: 'Boolean / Function(done)',
        value: '—',
        default: 'false',
      }, {
        attr: 'before-close-tip-title',
        desc: '阻止关闭弹窗的标题',
        type: 'String',
        value: '—',
        default: '提示',
      }, {
        attr: 'before-close-tip-message',
        desc: '阻止关闭弹窗的提示信息',
        type: 'String',
        value: '—',
        default: '保存变更？',
      }, {
        attr: 'before-close-tip-confirm',
        desc: '阻止关闭弹窗的确认按钮文字',
        type: 'String',
        value: '—',
        default: '保存',
      }, {
        attr: 'before-close-tip-cancel',
        desc: '阻止关闭弹窗的取消按钮文字',
        type: 'String',
        value: '—',
        default: '不保存',
      }, {
        attr: 'close-on-press-escape',
        desc: '是否可以通过按下 ESC 关闭 Drawer',
        type: 'Boolean',
        value: '—',
        default: 'true',
      }, {
        attr: 'custom-class',
        desc: 'Drawer 的自定义类名',
        type: 'String',
        value: '—',
        default: '—',
      }, {
        attr: 'destory-on-close',
        desc: '控制是否在关闭 Drawer 之后将子元素全部销毁',
        type: 'Boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'modal',
        desc: '是否需要遮罩层',
        type: 'Boolean',
        value: '—',
        default: 'true',
      }, {
        attr: 'modal-append-to-body',
        desc: '遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Drawer 的父元素上',
        type: 'Boolean',
        value: '—',
        default: 'true',
      }, {
        attr: 'direction',
        desc: 'Drawer 打开的方向',
        type: 'String',
        value: 'rtl / ltr / ttb / btt',
        default: 'rtl',
      }, {
        attr: 'show-close',
        desc: '是否显示关闭按钮',
        type: 'Boolean',
        value: '—',
        default: 'true',
      }, {
        attr: 'size',
        desc: 'Drawer 窗体的大小，预设 <code>mini</code>、<code>samll</code> 和 <code>medium</code> 三个大小，或当使用 <code>Number</code> 类型时，以像素为单位，当使用 <code>String</code> 类型时，请传入 \'x%\'，否则便会以 <code>Number</code> 类型解释',
        type: 'String / Number',
        value: 'mini / small / medium / String / Number',
        default: 'mini',
      }, {
        attr: 'title',
        desc: 'Drawer 的标题，也可通过具名 slot（见下表）传入',
        type: 'String',
        value: '—',
        default: '—',
      }, {
        attr: 'visible',
        desc: '是否显示 Drawer，支持 .sync 修饰符',
        type: 'Boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'wrapper-closeable',
        desc: '点击遮罩层是否可以关闭 Drawer',
        type: 'Boolean',
        value: '—',
        default: 'true',
      }, {
        attr: 'with-header',
        desc: '控制是否显示 header 栏，默认为 true，当此项为 false 时，title attribute 和 title slot 均不生效',
        type: 'Boolean',
        value: '—',
        default: 'true',
      }, {
        attr: 'content-padding',
        desc: '内容区域的 padding 值',
        type: 'String',
        value: '—',
        default: '10%',
      }, {
        attr: 'full-content',
        desc: '内容区域是否高度占满整个区域',
        type: 'Boolean',
        value: '—',
        default: 'false',
      }],
      drawerSlots: [{
        name: '—',
        desc: 'Drawer 的内容',
      }, {
        name: 'title',
        desc: 'Drawer 标题去的内容',
      }, {
        name: 'footer',
        desc: 'Drawer 底部区的内容',
      }],
      drawerMethods: [{
        method: 'closeDrawer',
        desc: '用于关闭 Drawer，该方法会调用传入的 <code>before-close</code> 方法',
        param: '—',
      }, {
        method: 'open',
        desc: '打开 Drawer',
        param: 'data 传入 Drawer 的数据',
      }, {
        method: 'close',
        desc: '关闭 Drawer',
        param: '—',
      }],
      drawerEvents: [{
        event: 'open',
        desc: 'Drawer 打开的回调',
        param: '—',
      }, {
        event: 'opened',
        desc: 'Drawer 打开动画结束时的回调',
        param: '—',
      }, {
        event: 'close',
        desc: 'Drawer 关闭的回调',
        param: '—',
      }, {
        event: 'closed',
        desc: 'Drawer 关闭动画结束时的回调',
        param: '—',
      }],
    };
  },
};
</script>
