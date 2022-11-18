<!-- eslint-disable max-len -->
<template>
  <sec-block class="doc-block">
    <h2>Loading 加载</h2>
    <p>加载数据时显示动效。</p>
    <h3>区域加载</h3>
    <p>在表格等容器中加载数据时显示。</p>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
      </template>
      <p>SecUI 提供了两种调用 Loading 的方法：指令和服务。对于自定义指令 <code>v-loading</code>，只需要绑定 <code>Boolean</code> 即可。默认状态下，Loading 遮罩会插入到绑定元素的子节点，通过添加 <code>body</code> 修饰符，可以使遮罩插入至 DOM 中的 body 上。</p>
    </DocDemo>
    <h3>整页加载</h3>
    <p>页面数据加载时显示。</p>
    <DocDemo :markdown="demo2">
      <template #source>
        <Demo2></Demo2>
      </template>
      <p>当使用指令方式时，全屏遮罩需要添加 <code>fullscreen</code> 修饰符（遮罩会插入至 body 上），此时若需要锁定屏幕的滚动，可以使用 <code>lock</code> 修饰符；当使用服务方式时，遮罩默认即为全屏，无需额外设置。</p>
    </DocDemo>
    <h3>服务</h3>
    <p>Loading 还可以以服务的方式调用。引入 Loading 服务：</p>
    <markdown-it-vue
      content="```
      import { Loading } from 'element-ui';
      "
    ></markdown-it-vue>
    <p>在需要调用时：</p>
    <markdown-it-vue
      content="```
      Loading.service(options);
      "
    ></markdown-it-vue>
    <p>其中 <code>options</code> 参数为 Loading 的配置项，具体见下表。<code>LoadingService</code> 会返回一个 Loading 实例，可通过调用该实例的 <code>close</code> 方法来关闭它：</p>
    <markdown-it-vue
      content="```
      const loadingInstance = Loading.service(options);
      this.$nextTick(() => { // 已服务的方式调用的 Loading 需要异步关闭
        loadingInstance.close();
      });
      "
    ></markdown-it-vue>
    <p>需要注意的是，以服务的方式调用的全屏 Loading 是单例的：若在前一个全屏 Loading 关闭前再次调用全屏 Loading，并不会创建一个新的 Loading 实例，而是返回现有全屏 Loading 的实例：</p>
    <markdown-it-vue
      content="```
      const loadingInstance1 = Loading.service({ fullscreen: true });
      const loadingInstance2 = Loading.service({ fullscreen: true });
      console.log(loadingInstance1 === loadingInstance2); // true
      "
    ></markdown-it-vue>
    <p>此时调用它们中任意一个的 <code>close</code> 方法都能关闭这个全屏 Loading。</p>
    <p>Vue.prototype 上会有一个全局方法 <code>$loading</code>，它的调用方式为：<code>this.$loading(options)</code>，同样会返回一个 Loading 实例。</p>
    <h3>Options</h3>
    <sec-table class="doc-table" :data="options">
      <sec-table-column label="参数" prop="attr" width="130"></sec-table-column>
      <sec-table-column label="说明">
        <template #default="{ row }">
          <span v-html="row.desc"></span>
        </template>
      </sec-table-column>
      <sec-table-column label="类型" prop="type" width="150"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="100"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="150"></sec-table-column>
    </sec-table>
  </sec-block>
</template>

<script>
import DocDemo from '../DocDemo.vue';
import demo1 from './Demo1/source.md';
import Demo1 from './Demo1/View.vue';
import demo2 from './Demo2/source.md';
import Demo2 from './Demo2/View.vue';

export default {
  components: {
    DocDemo,
    Demo1,
    Demo2,
  },
  data() {
    return {
      demo1,
      demo2,
      options: [{
        attr: 'target',
        desc: 'Loading 需要覆盖的 DOM 节点。可传入一个 DOM 对象或字符串；若传入字符串，则会将其作为参数传入 <code>document.querySelector</code> 以获取到对应 COM 节点',
        type: 'object / string',
        value: '—',
        default: 'document.body',
      }, {
        attr: 'body',
        desc: '同 <code>v-loading</code> 指令中的 <code>body</code> 修饰符',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'fullscreen',
        desc: '同 <code>v-loading</code> 指令中的 <code>fullscreen</code> 修饰符',
        type: 'boolean',
        value: '—',
        default: 'true',
      }, {
        attr: 'lock',
        desc: '同 <code>v-loading</code> 指令中的 <code>lock</code> 修饰符',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'text',
        desc: '显示在加载图标下方的加载文案',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'spinner',
        desc: '自定义加载图标类名',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'background',
        desc: '遮罩背景色',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'customClass',
        desc: 'Loading 的自定义类名',
        type: 'string',
        value: '—',
        default: '—',
      }],
    };
  },
};
</script>
