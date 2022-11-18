<!-- eslint-disable max-len -->
<template>
  <sec-block class="doc-block">
    <h2>Dialog 对话框</h2>
    <p>在保留当前页面状态的情况下，告知用户并承载相关操作。</p>
    <h3>基本用法</h3>
    <p>Dialog 弹出一个对话框，适合需要定制性更大的场景。</p>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
      </template>
      <p>可以使用 <code>visible</code> 属性，它接收 <code>Boolean</code>，当为 <code>true</code> 时显示 Dialog；也可以使用 <code>open</code> 和 <code>close</code> 方法来打开或关闭 Dialog。Dialog 分为两个部分：<code>body</code> 和 <code>footer</code>，<code>footer</code> 需要具名为 <code>footer</code> 的 <code>slot</code>。<code>title</code> 属性用于定义标题，它是可选的，默认值为空。最后，本例还展示了 <code>before-close</code> 的用法。</p>
    </DocDemo>
    <div class="tip">
      <p><code>before-close</code> 仅当用户通过点击关闭图标或遮罩关闭 Dialog 时起效。如果你在 <code>footer</code> 具名 slot 里添加了用于关闭 Dialog 的按钮，那么可以在按钮的点击回调函数里加入 <code>before-close</code> 的相关逻辑。</p>
    </div>
    <h3>自定义内容</h3>
    <p>Dialog 组件的内容可以是任意的，甚至可以是表格或表单，下面是应用了 Table 和 Form 组件的两个样例。</p>
    <DocDemo :markdown="demo2">
      <template #source>
        <Demo2></Demo2>
      </template>
    </DocDemo>
    <h3>居中布局</h3>
    <p>标题和底部可水平居中。</p>
    <DocDemo :markdown="demo3">
      <template #source>
        <Demo3></Demo3>
      </template>
      <p>将 <code>center</code> 设置为 <code>true</code> 即可使标题和底部居中。<code>center</code> 仅影响标题和底部区域。Dialog 的内容是任意的，在一些情况下内容并不适合居中布局。如果需要内容也水平居中，请自行为其添加 CSS。</p>
    </DocDemo>
    <div class="tip">
      <p>Dialog 的内容是懒渲染的，即在第一次被打开之前，传入的默认 slot 不会被渲染到 DOM 上。因此，如果需要执行 DOM 操作，或通过 <code>ref</code> 获取相应组件，请在 <code>open</code> 事件回调中进行。</p>
    </div>
    <div class="tip">
      <p>如果 <code>visible</code> 属性绑定的变量位于 Vuex 的 store 内，那么 <code>.sync</code> 不会正常工作。此时需要去除 <code>.sync</code> 修饰符，同时监听 Dialog 的 <code>open</code> 和 <code>close</code> 事件，在事件回调中执行 Vuex 中对应的 mutation 更新 <code>visible</code> 属性绑定的变量的值。</p>
    </div>
    <h3>Attributes</h3>
    <sec-table class="doc-table" :data="attributes">
      <sec-table-column label="参数" prop="attr" width="200"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="类型" prop="type" width="300"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="80"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="80"></sec-table-column>
    </sec-table>
    <h3>Slots</h3>
    <sec-table class="doc-table" :data="slots">
      <sec-table-column label="name" prop="name" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
    </sec-table>
    <h3>Events</h3>
    <sec-table class="doc-table" :data="events">
      <sec-table-column label="事件名称" prop="event" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="回调参数" prop="param" width="250"></sec-table-column>
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
        attr: 'visible',
        desc: '是否显示 Dialog，支持 .sync 修饰符',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'title',
        desc: 'Dialog 的标题，也可通过具名 slot（见下表）传入',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'width',
        desc: 'Dialog 的宽度',
        type: 'string',
        value: '—',
        default: '50%',
      }, {
        attr: 'fullscreen',
        desc: '是否为全屏 Dialog',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'top',
        desc: 'Dialog CSS 中的 margin-top 值',
        type: 'string',
        value: '—',
        default: '15vh',
      }, {
        attr: 'modal',
        desc: '是否需要遮罩层',
        type: 'boolean',
        value: '—',
        default: 'true',
      }, {
        attr: 'modal-append-to-body',
        desc: '遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上',
        type: 'boolean',
        value: '—',
        default: 'true',
      }, {
        attr: 'append-to-body',
        desc: 'Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true',
        type: 'boolean',
        value: '—',
        default: 'true',
      }, {
        attr: 'lock-scroll',
        desc: '是否在 Dialog 出现时将 body 滚动锁定',
        type: 'boolean',
        value: '—',
        default: 'true',
      }, {
        attr: 'custom-class',
        desc: 'Dialog 的自定义类名',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'close-on-click-modal',
        desc: '是否可以通过点击 modal 关闭 Dialog',
        type: 'boolean',
        value: '—',
        default: 'true',
      }, {
        attr: 'close-on-press-escape',
        desc: '是否可以通过按下 ESC 关闭 Dialog',
        type: 'boolean',
        value: '—',
        default: 'true',
      }, {
        attr: 'show-close',
        desc: '是否显示关闭按钮',
        type: 'boolean',
        value: '—',
        default: 'true',
      }, {
        attr: 'before-close',
        desc: '关闭前的回调，会暂停 Dialog 的关闭',
        type: 'Function(done)，done 用于关闭 Dialog',
        value: '—',
        default: '—',
      }, {
        attr: 'center',
        desc: '是否对头部和底部采用居中布局',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'destroy-on-close',
        desc: '关闭时销毁 Dialog 中的元素',
        type: 'boolean',
        value: '—',
        default: 'false',
      }],
      slots: [{
        name: '—',
        desc: 'Dialog 的内容',
      }, {
        name: 'title',
        desc: 'Dialog 标题区的内容',
      }, {
        name: 'footer',
        desc: 'Dialog 按钮操作区的内容',
      }],
      events: [{
        event: 'open',
        desc: 'Dialog 打开的回调',
        param: '—',
      }, {
        event: 'opened',
        desc: 'Dialog 打开动画结束时的回调',
        param: '—',
      }, {
        event: 'close',
        desc: 'Dialog 关闭的回调',
        param: '—',
      }, {
        event: 'closed',
        desc: 'Dialog 关闭动画结束时的回调',
        param: '—',
      }],
      methods: [{
        method: 'open',
        desc: '打开 Dialog',
        param: 'data 传入 Dialog 的数据',
      }, {
        method: 'close',
        desc: '关闭 Dialog',
        param: '—',
      }],
    };
  },
};
</script>
