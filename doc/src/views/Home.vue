<!-- eslint-disable max-len -->
<template>
  <sec-block class="doc-block">
    <h1>SecUI</h1>
    <p>基于 <a href="https://element.eleme.cn/#/zh-CN">Element UI</a> 封装的一套适用于快速搭建后台管理界面的 UI 组件库，功能基本完成，相关文档仍在补充中。</p>
    <h2>安装</h2>
    <div class="tip">
      <p>请使用私服下载依赖。</p>
    </div>
    <markdown-it-vue
      content="```
      npm install @dbsec/ui -S
      "
    ></markdown-it-vue>
    <br>
    <h2>快速开始</h2>
    <br>
    <markdown-it-vue
      content="```
      import Vue from 'vue';
      import SecUI from '@dbsec/ui';
      import '@dbsec/ui/dist/sec-ui.css';

      Vue.use(SecUI);
      "
    ></markdown-it-vue>
    <div class="tip">
      <p>组件库已将 <a href="https://element.eleme.cn/#/zh-CN">Element UI</a> 的样式包含进来，无需再单独安装，且可以使用所有的 Element 样式。</p>
      <p>SecUI 绝大部分组件用法都和 Element 保持一致，在原基础上进行了样式调整和功能扩展，大部分情况将组件名的 <code>el-</code> 前缀 改为 <code>sec-</code> 即可使用。</p>
      <p>其中，<code>el-button</code> 更名为 <code>sec-btn</code>、<code>el-pagination</code> 更名为 <code>sec-pager</code>。</p>
      <p>另外，<code>Descriptions</code>、<code>Tabs</code>（<code>sec-tabs</code> 另有用法）、<code>Steps</code>、<code>Carousel</code> 几个组件由于技术原因仍要直接使用 <code>el-</code> 前缀，组件库只是把 Element 的几个组件原样引入过来。</p>
    </div>
    <div class="tip">
      <p>暂不支持按需加载和国际化及一些功能。</p>
    </div>
    <p>一个个组件整理并优化的，真的很辛苦，求您慷慨解囊打赏一下吧^_^</p>
    <p><img src="/img/q.jpg" alt="求打赏"></p>
  </sec-block>
</template>
