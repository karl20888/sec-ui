<!-- eslint-disable max-len -->
<template>
  <sec-block class="doc-block">
    <h2>Skeleton 骨架屏</h2>
    <p>在需要等待加载内容的位置设置一个骨架屏，某些场景下比 Loading 的视觉效果更好。</p>
    <h3>基础用法</h3>
    <p>基础的骨架效果。</p>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
      </template>
    </DocDemo>
    <h3>更多参数</h3>
    <p>可以配置骨架屏段落数量，以便更接近真实渲染效果。首行会被渲染一个长度 33% 的段首。</p>
    <DocDemo :markdown="demo2">
      <template #source>
        <Demo2></Demo2>
      </template>
    </DocDemo>
    <h3>动画效果</h3>
    <p>显示动画效果。</p>
    <DocDemo :markdown="demo3">
      <template #source>
        <Demo3></Demo3>
      </template>
    </DocDemo>
    <h3>自定义样式</h3>
    <p>Element 提供的排版模式有时候并不满足要求，当您想要自己定义的模板时，可以通过一个具名 Slot 来自己设定模板。</p>
    <p>我们提供了不同的模板单元可供使用，具体可选值请看 API 详细描述。建议在描述模板的时候，尽量靠近真实的 DOM 结构，这样可以避免 DOM 高度差距引起的抖动。</p>
    <DocDemo :markdown="demo4">
      <template #source>
        <Demo4></Demo4>
      </template>
    </DocDemo>
    <h3>Loading 状态</h3>
    <p>当 Loading 结束之后，我们往往需要显示真实的 UI，可以通过 <code>loading</code> 的值来控制是否显示真实的 DOM。然后通过不具名 Slot 来设置当 loading 结束之后需要展示的 UI。</p>
    <DocDemo :markdown="demo5">
      <template #source>
        <Demo5></Demo5>
      </template>
    </DocDemo>
    <h3>渲染多条数据</h3>
    <p>大多时候，骨架屏都被用来渲染列表，当我们需要在从服务器获取数据的时候来渲染一个假的 UI。利用 <code>count</code> 这个属性就能控制渲染多少条假的数据在页面上。</p>
    <div class="tip">
      <p>请注意，请尽可能地将 <code>count</code> 的大小保持在最小状态，即使是假的 UI，DOM 元素多了之后，照样会引起性能问题，并且在骨架屏销毁时所消耗的时间也会更长（相对的）。</p>
    </div>
    <DocDemo :markdown="demo6">
      <template #source>
        <Demo6></Demo6>
      </template>
    </DocDemo>
    <h3>防止渲染抖动</h3>
    <p>有的时候，API 的请求回来的特别快，往往骨架占位刚刚被渲染，真实的数据就已经回来了，用户的界面会突然一闪，此时为了避免这种情况，就需要通过 <code>throttle</code> 属性来避免这个问题。</p>
    <DocDemo :markdown="demo7">
      <template #source>
        <Demo7></Demo7>
      </template>
    </DocDemo>
    <h3>Skeleton Attributes</h3>
    <sec-table class="doc-table" :data="skeletonAttributes">
      <sec-table-column label="参数" prop="attr" width="100"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="类型" prop="type" width="100"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="100"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="100"></sec-table-column>
    </sec-table>
    <h3>Skeleton Item Attributes</h3>
    <sec-table class="doc-table" :data="skeletonItemAttributes">
      <sec-table-column label="参数" prop="attr" width="100"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="类型" prop="type" width="120"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="360"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="100"></sec-table-column>
    </sec-table>
    <h3>Skeleton Slots</h3>
    <sec-table class="doc-table" :data="skeletonSlots">
      <sec-table-column label="name" prop="name" width="220"></sec-table-column>
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
      skeletonAttributes: [{
        attr: 'animated',
        desc: '是否使用动画',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'count',
        desc: '渲染多少个 template，建议使用尽可能小的数字',
        type: 'number',
        value: '—',
        default: '1',
      }, {
        attr: 'loading',
        desc: '是否显示 skeleton 骨架屏',
        type: 'boolean',
        value: '—',
        default: 'true',
      }, {
        attr: 'rows',
        desc: '骨架屏段落数量',
        type: 'number',
        value: '—',
        default: '4',
      }, {
        attr: 'throttle',
        desc: '延迟占位 DOM 渲染的时间，单位为毫秒',
        type: 'number',
        value: '—',
        default: '0',
      }],
      skeletonItemAttributes: [{
        attr: 'variant',
        desc: '当前显示的占位元素的样式',
        type: 'Enum(string)',
        value: 'p / text / h1 / h3 / text / caption / button / image / circle / rect',
        default: 'text',
      }],
      skeletonSlots: [{
        name: 'default',
        desc: '用来展示真实 UI',
      }, {
        name: 'template',
        desc: '用来展示自定义占位符',
      }],
    };
  },
};
</script>
