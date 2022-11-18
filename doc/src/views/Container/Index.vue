<!-- eslint-disable max-len -->
<template>
  <sec-block class="doc-block">
    <h2>Container 布局容器</h2>
    <p>用于布局的容器组件，方便快速搭建页面的基本结构：</p>
    <p><code>&lt;sec-container&gt;</code>：外层容器。当子元素中包含 <code>&lt;sec-header&gt;</code> 或 <code>&lt;sec-footer&gt;</code> 时，全部子元素会垂直上下排列，否则会水平左右排列。</p>
    <p><code>&lt;sec-header&gt;</code>：顶栏容器。</p>
    <p><code>&lt;sec-aside&gt;</code>：侧边栏容器。</p>
    <p><code>&lt;sec-main&gt;</code>：主要区域容器。</p>
    <p><code>&lt;sec-footer&gt;</code>：底栏容器。</p>
    <div class="tip">
      <p>以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，<code>&lt;sec-container&gt;</code> 的子元素只能是后四者，后四者的父元素也只能是 <code>&lt;sec-container&gt;</code>。</p>
    </div>
    <h3>常见页面布局</h3>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
      </template>
    </DocDemo>
    <h3>Container Attributes</h3>
    <sec-table class="doc-table" :data="containerAttributes">
      <sec-table-column label="参数" prop="attr" width="100"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="类型" prop="type" width="80"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="180"></sec-table-column>
      <sec-table-column label="默认值" width="310">
        <template #default="{ row }">
          <span v-html="row.default"></span>
        </template>
      </sec-table-column>
    </sec-table>
    <h3>Header Attributes</h3>
    <sec-table class="doc-table" :data="headerAttributes">
      <sec-table-column label="参数" prop="attr"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="类型" prop="type"></sec-table-column>
      <sec-table-column label="可选值" prop="value"></sec-table-column>
      <sec-table-column label="默认值" prop="default"></sec-table-column>
    </sec-table>
    <h3>Aside Attributes</h3>
    <sec-table class="doc-table" :data="asideAttributes">
      <sec-table-column label="参数" prop="attr"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="类型" prop="type"></sec-table-column>
      <sec-table-column label="可选值" prop="value"></sec-table-column>
      <sec-table-column label="默认值" prop="default"></sec-table-column>
    </sec-table>
    <h3>Footer Attributes</h3>
    <sec-table class="doc-table" :data="footerAttributes">
      <sec-table-column label="参数" prop="attr"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="类型" prop="type"></sec-table-column>
      <sec-table-column label="可选值" prop="value"></sec-table-column>
      <sec-table-column label="默认值" prop="default"></sec-table-column>
    </sec-table>
  </sec-block>
</template>

<script>
import DocDemo from '../DocDemo.vue';
import demo1 from './Demo1/source.md';
import Demo1 from './Demo1/View.vue';

export default {
  components: {
    DocDemo,
    Demo1,
  },
  data() {
    return {
      demo1,
      containerAttributes: [{
        attr: 'direction',
        desc: '子元素的排列方向',
        type: 'string',
        value: 'horizontal / vertical',
        default: '子元素中有 <code>sec-header</code> 或 <code>sec-footer</code> 时为 vertical，否则为 horizontal',
      }],
      headerAttributes: [{
        attr: 'height',
        desc: '顶栏高度',
        type: 'string',
        value: '—',
        default: '60px',
      }],
      asideAttributes: [{
        attr: 'width',
        desc: '侧边栏宽度',
        type: 'string',
        value: '—',
        default: '300px',
      }],
      footerAttributes: [{
        attr: 'height',
        desc: '底栏高度',
        type: 'string',
        value: '—',
        default: '60px',
      }],
    };
  },
};
</script>
