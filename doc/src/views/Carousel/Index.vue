<!-- eslint-disable max-len -->
<template>
  <sec-block class="doc-block">
    <h2>Carousel 走马灯</h2>
    <p>在有限空间内，循环播放同一类型的图片、文字等内容。</p>
    <div class="tip">
      <p>目前直接使用 ElementUI 的 <code>el-carousel</code>。</p>
    </div>
    <h3>基础用法</h3>
    <p>适用广泛的基础用法。</p>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
      </template>
    </DocDemo>
    <h3>指示器</h3>
    <p>可以将指示器的显示位置设置在容器外部。</p>
    <DocDemo :markdown="demo2">
      <template #source>
        <Demo2></Demo2>
      </template>
      <p><code>indicator-position</code> 属性定义了指示器的位置。默认情况下，它会显示在走马灯内部，设置为 <code>outside</code> 则会显示在外部；设置为 <code>none</code> 则不会显示指示器。</p>
    </DocDemo>
    <h3>切换箭头</h3>
    <p>可以设置切换箭头的显示时机。</p>
    <DocDemo :markdown="demo3">
      <template #source>
        <Demo3></Demo3>
      </template>
      <p><code>arrow</code> 属性定义了切换箭头的显示时机。默认情况下，切换箭头只有在鼠标 hover 到走马灯上时才会显示；若将 <code>arrow</code> 设置为 <code>always</code>，则会一直显示；设置为 <code>never</code>，则会一直隐藏。</p>
    </DocDemo>
    <h3>卡片化</h3>
    <p>当页面宽度方向空间空余，但高度方向空间匮乏时，可使用卡片风格。</p>
    <DocDemo :markdown="demo4">
      <template #source>
        <Demo4></Demo4>
      </template>
      <p>将 <code>type</code> 属性设置为 <code>card</code> 即可启用卡片模式。从交互上来说，卡片模式和一般模式的最大区别在于，可以通过直接点击两侧的幻灯片进行切换。</p>
    </DocDemo>
    <h3>方向</h3>
    <p>默认情况下，<code>direction</code> 为 <code>horizontal</code>。通过设置 <code>direction</code> 为 <code>vertical</code> 来让走马灯在垂直方向上显示。</p>
    <DocDemo :markdown="demo5">
      <template #source>
        <Demo5></Demo5>
      </template>
    </DocDemo>
    <h3>Carousel Attributes</h3>
    <sec-table class="doc-table" :data="carouselAttributes">
      <sec-table-column label="参数" prop="attr" width="180"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="类型" prop="type" width="100"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="180"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="100"></sec-table-column>
    </sec-table>
    <h3>Carousel Events</h3>
    <sec-table class="doc-table" :data="carouselEvents">
      <sec-table-column label="事件名称" prop="event" width="180"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="回调参数" prop="param" width="300"></sec-table-column>
    </sec-table>
    <h3>Carousel Methods</h3>
    <sec-table class="doc-table" :data="carouselMethods">
      <sec-table-column label="方法名" prop="method" width="180"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="参数" width="300">
        <template #default="{ row }">
          <span v-html="row.param"></span>
        </template>
      </sec-table-column>
    </sec-table>
    <h3>Carousel-Item Attributes</h3>
    <sec-table class="doc-table" :data="carouselItemAttributes">
      <sec-table-column label="参数" prop="attr" width="180"></sec-table-column>
      <sec-table-column label="说明">
        <template #default="{ row }">
          <span v-html="row.desc"></span>
        </template>
      </sec-table-column>
      <sec-table-column label="类型" prop="type" width="100"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="80"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="80"></sec-table-column>
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
      carouselAttributes: [{
        attr: 'height',
        desc: '走马灯的高度',
        type: 'String',
        value: '—',
        default: '—',
      }, {
        attr: 'initial-index',
        desc: '初始状态激活的幻灯片的索引，从 0 开始',
        type: 'Number',
        value: '—',
        default: '0',
      }, {
        attr: 'trigger',
        desc: '指示器的触发方式',
        type: 'String',
        value: 'hover / click',
        default: 'hover',
      }, {
        attr: 'autoplay',
        desc: '是否自动切换',
        type: 'Boolean',
        value: '—',
        default: 'true',
      }, {
        attr: 'interval',
        desc: '自动切换的时间间隔，单位为毫秒',
        type: 'Number',
        value: '—',
        default: '3000',
      }, {
        attr: 'indicator-position',
        desc: '指示器的位置',
        type: 'String',
        value: 'outside / —',
        default: '—',
      }, {
        attr: 'arrow',
        desc: '切换箭头的显示时机',
        type: 'String',
        value: 'always / hover / never',
        default: 'hover',
      }, {
        attr: 'type',
        desc: '走马灯的类型',
        type: 'String',
        value: 'card / —',
        default: '—',
      }, {
        attr: 'loop',
        desc: '是否循环显示',
        type: 'Boolean',
        value: '—',
        default: 'true',
      }, {
        attr: 'direction',
        desc: '走马灯展示的方向',
        type: 'String',
        value: 'horizontal / vertical',
        default: 'horizontal',
      }],
      carouselEvents: [{
        event: 'change',
        desc: '幻灯片切换时触发',
        param: '目前激活的幻灯片的索引, 原幻灯片的索引',
      }],
      carouselMethods: [{
        method: 'setActiveItem',
        desc: '手动切换幻灯片',
        param: '需要切换的幻灯片的索引，从 0 开始，或相应 <code>el-carousel-item</code> 的 <code>name</code> 属性值',
      }, {
        method: 'prev',
        desc: '切换至上一张幻灯片',
        param: '—',
      }, {
        method: 'next',
        desc: '切换至下一张幻灯片',
        param: '—',
      }],
      carouselItemAttributes: [{
        attr: 'name',
        desc: '幻灯片的名字，可用作 <code>setActiveItem</code> 的参数',
        type: 'String',
        value: '—',
        default: '—',
      }, {
        attr: 'label',
        desc: '该幻灯片所对应指示器的文本',
        type: 'String',
        value: '—',
        default: '—',
      }],
    };
  },
};
</script>
