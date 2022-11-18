<!-- eslint-disable max-len -->
<template>
  <sec-block class="doc-block">
    <h2>Breadcrumb 面包屑</h2>
    <p>显示当前页面的路径，快速返回之前的任意页面。</p>
    <h3>基础用法</h3>
    <p>适用广泛的基础用法。</p>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
      </template>
      <p>在 <code>sec-breadcrumb</code> 中使用 <code>sec-breadcrumb-item</code> 标签表示从首页开始的每一级。SecUI 提供了一个 <code>separator</code> 属性，在 <code>sec-breadcrumb</code> 标签中设置它来决定分隔符，它只能是字符串，默认为斜杠 <code>/</code>。</p>
    </DocDemo>
    <h3>图标分隔符</h3>
    <DocDemo :markdown="demo2">
      <template #source>
        <Demo2></Demo2>
      </template>
      <p>通过设置 <code>separator-class</code> 可使用相应的 <code>iconfont</code> 作为分隔符，注意这将使 <code>separator</code> 设置失效。</p>
    </DocDemo>
    <h3>Breadcrumb Attributes</h3>
    <sec-table class="doc-table" :data="breadcrumbAttributes">
      <sec-table-column label="参数" prop="attr" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="类型" prop="type" width="150"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="100"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="100"></sec-table-column>
    </sec-table>
    <h3>Breadcrumb Item Attributes</h3>
    <sec-table class="doc-table" :data="breadcrumbItemAttributes">
      <sec-table-column label="参数" prop="attr" width="220"></sec-table-column>
      <sec-table-column label="说明">
        <template #default="{ row }">
          <span v-html="row.desc"></span>
        </template>
      </sec-table-column>
      <sec-table-column label="类型" prop="type" width="150"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="100"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="100"></sec-table-column>
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
      breadcrumbAttributes: [{
        attr: 'separator',
        desc: '分隔符',
        type: 'string',
        value: '—',
        default: '斜杠 \'/\'',
      }, {
        attr: 'separator-class',
        desc: '图标分隔符 class',
        type: 'string',
        value: '—',
        default: '—',
      }],
      breadcrumbItemAttributes: [{
        attr: 'to',
        desc: '路由跳转对象，同 <code>vue-router</code> 的 <code>to</code>',
        type: 'string / object',
        value: '—',
        default: '—',
      }, {
        attr: 'replace',
        desc: '在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录',
        type: 'boolean',
        value: '—',
        default: 'false',
      }],
    };
  },
};
</script>
