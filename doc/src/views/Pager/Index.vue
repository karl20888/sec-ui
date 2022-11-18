<!-- eslint-disable max-len -->
<template>
  <sec-block class="doc-block">
    <h2>Pager 分页</h2>
    <p>当数据量过多时，使用分页分解数据。</p>
    <h3>基础用法</h3>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
      </template>
      <p>设置 <code>layout</code>，表示需要显示的内容，用逗号分隔，布局元素会依次显示。<code>prev</code> 表示上一页，<code>next</code> 为下一页，<code>pager</code> 表示页码列表，除此之外还提供了 <code>jumper</code> 和 <code>total</code>，<code>size</code> 和特殊的布局符号 <code>-></code>，<code>-></code> 后的元素会靠右显示（在 align=right 时无法体现效果），<code>jumper</code> 表示跳页元素，<code>total</code> 表示总条目数，<code>size</code> 用于设置每页显示的页码数量。</p>
    </DocDemo>
    <h3>设置最大页码按钮数</h3>
    <DocDemo :markdown="demo2">
      <template #source>
        <Demo2></Demo2>
      </template>
      <p>默认情况下，当总页数超过 5 页时，Pager 会折叠多余的页码按钮。通过 <code>pager-count</code> 属性可以设置最大页码按钮数。</p>
    </DocDemo>
    <h3>小型分页</h3>
    <p>在空间有限的情况下，可以使用简单的小型分页。</p>
    <DocDemo :markdown="demo3">
      <template #source>
        <Demo3></Demo3>
      </template>
      <p>只需要一个 <code>small</code> 属性，它接受一个 <code>Boolean</code>，默认为 <code>false</code>，设为 <code>true</code> 即可启用。</p>
    </DocDemo>
    <h3>绑定分页数据</h3>
    <p>可以使用 <code>v-model</code> 绑定分页数据，更便于使用。</p>
    <DocDemo :markdown="demo4">
      <template #source>
        <Demo4></Demo4>
      </template>
      <p>绑定值类型为 Object，其中包含 <code>page</code>，为当前页码，<code>pageSize</code>，为每页显示条目个数，<code>total</code>，为总条目数。</p>
    </DocDemo>
    <h3>附加功能</h3>
    <p>根据场景需要，可以添加其他功能模块。</p>
    <DocDemo :markdown="demo5">
      <template #source>
        <Demo5></Demo5>
      </template>
      <p>此例是一个完整的用例，<code>page-sizes</code> 接受一个整型数组，数组元素为展示的选择每页显示个数的选项，<code>[100, 200, 300, 400]</code> 表示四个选项，每页显示 100 个，200 个，300 个或者 400 个。</p>
    </DocDemo>
    <h3>当只有一页时隐藏分页</h3>
    <p>当只有一页时，通过设置 <code>hide-on-single-page</code> 属性来隐藏分页。</p>
    <DocDemo :markdown="demo6">
      <template #source>
        <Demo6></Demo6>
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
      <sec-table-column label="可选值" width="250">
        <template #default="{ row }">
          <span v-html="row.value"></span>
        </template>
      </sec-table-column>
      <sec-table-column label="默认值" prop="default" width="290"></sec-table-column>
    </sec-table>
    <h3>Events</h3>
    <sec-table class="doc-table" :data="events">
      <sec-table-column label="事件名称" prop="event" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="回调参数" prop="param" width="250"></sec-table-column>
    </sec-table>
    <h3>Slot</h3>
    <sec-table class="doc-table" :data="slot">
      <sec-table-column label="name" prop="name" width="220"></sec-table-column>
      <sec-table-column label="说明">
        <template #default="{ row }">
          <span v-html="row.desc"></span>
        </template>
      </sec-table-column>
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
      attributes: [{
        attr: 'value / v-model',
        desc: '绑定值，含有 <code>page</code>、<code>pageSize</code>、<code>total</code>。<code>page</code> 为当前页数，会顶替 <code>current-page</code> 配置；<code>pageSize</code> 为每页显示条目个数，会顶替 <code>page-size</code> 配置；<code>total</code> 为总条目数。',
        type: 'object',
        value: '—',
        default: '—',
      }, {
        attr: 'align',
        desc: '对齐方式',
        type: 'string',
        value: 'right / left / center',
        default: 'right',
      }, {
        attr: 'small',
        desc: '是否使用小型分页样式',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'background',
        desc: '是否为分页按钮添加背景色',
        type: 'boolean',
        value: '—',
        default: 'true',
      }, {
        attr: 'page-size',
        desc: '每页显示条目个数，支持 <code>.sync</code> 修饰符',
        type: 'number',
        value: '—',
        default: '10',
      }, {
        attr: 'total',
        desc: '总条目数，优先于绑定值中的 <code>total</code> 显示',
        type: 'number',
        value: '—',
        default: '—',
      }, {
        attr: 'page-count',
        desc: '总页数，<code>total</code> 和 <code>page-count</code> 设置任意一个就可以达到显示页码的功能；如果要支持 <code>page-sizes</code> 的更改，则需要使用 <code>total</code>',
        type: 'number',
        value: '—',
        default: '—',
      }, {
        attr: 'pager-count',
        desc: '页码设置的数量，当总页数超过该值时会折叠',
        type: 'number',
        value: '大于等于 5 且小于等于 21 的奇数',
        default: '5',
      }, {
        attr: 'current-page',
        desc: '当前页数，支持 <code>.sync</code> 修饰符',
        type: 'number',
        value: '—',
        default: '1',
      }, {
        attr: 'layout',
        desc: '组件布局，子组件名用逗号分隔',
        type: 'string',
        value: '<code>sizes</code>、<code>prev</code>、<code>pager</code>、<code>next</code>、<code>jumper</code>、<code>-></code>、<code>total</code>、<code>slot</code>',
        default: '\'prev, pager, next, sizes, total, jumper\'',
      }, {
        attr: 'page-sizes',
        desc: '每页显示个数选择器的选项设置',
        type: 'number[]',
        value: '—',
        default: '[10, 20, 50, 100]',
      }, {
        attr: 'popper-class',
        desc: '每页显示个数选择器的下拉框类名',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'prev-text',
        desc: '替代图标显示的上一页文字',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'next-text',
        desc: '替代图标显示的下一页文字',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'disabled',
        desc: '是否禁用',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'hide-on-single-page',
        desc: '只有一页时是否隐藏',
        type: 'boolean',
        value: '—',
        default: 'false',
      }],
      events: [{
        event: 'size-change',
        desc: 'pageSize 改变时会触发',
        param: '每页条数',
      }, {
        event: 'current-change',
        desc: 'currentPage 改变时会触发',
        param: '当前页',
      }, {
        event: 'prev-click',
        desc: '用户点击上一页按钮改变当前页后触发',
        param: '当前页',
      }, {
        event: 'next-click',
        desc: '用户点击下一页按钮改变当前页后触发',
        param: '当前页',
      }],
      slot: [{
        name: '—',
        desc: '自定义内容，需要在 <code>layout</code> 中列出 <code>slot</code>',
      }],
    };
  },
};
</script>
