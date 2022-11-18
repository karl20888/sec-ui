<!-- eslint-disable max-len -->
<template>
  <sec-block class="doc-block">
    <h2>NavMenu 导航菜单</h2>
    <p>为网站提供导航功能的菜单。</p>
    <h3>顶栏</h3>
    <p>适用广泛的基础用法。</p>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
      </template>
      <p>导航菜单默认为垂直模式，通过 <code>mode</code> 属性可以使导航菜单变更为水平模式。另外，在菜单中通过 <code>submenu</code> 组件可以生成二级菜单。Menu 还提供了 <code>background-color</code>、<code>text-color</code> 和 <code>active-text-color</code>，分别用于设置菜单的背景色、菜单的文字颜色和当前激活菜单的文字颜色。</p>
    </DocDemo>
    <h3>侧栏</h3>
    <p>垂直菜单，可内嵌子菜单。</p>
    <DocDemo :markdown="demo2">
      <template #source>
        <Demo2></Demo2>
      </template>
      <p>通过 <code>sec-menu-item-group</code> 组件可以对菜单进行分组，分组名可以通过 <code>title</code> 属性直接设定，也可以通过具名 slot 来设定。</p>
    </DocDemo>
    <h3>折叠</h3>
    <DocDemo :markdown="demo3">
      <template #source>
        <Demo3></Demo3>
      </template>
    </DocDemo>
    <h3>Menu Attributes</h3>
    <sec-table class="doc-table" :data="menuAttributes">
      <sec-table-column label="参数" prop="attr" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="类型" prop="type" width="100"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="160"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="100"></sec-table-column>
    </sec-table>
    <h3>Menu Methods</h3>
    <sec-table class="doc-table" :data="menuMethods">
      <sec-table-column label="方法名" prop="method" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="参数" prop="param" width="300"></sec-table-column>
    </sec-table>
    <h3>Menu Events</h3>
    <sec-table class="doc-table" :data="menuEvents">
      <sec-table-column label="事件名称" prop="event" width="100"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="回调参数" prop="param" width="300"></sec-table-column>
    </sec-table>
    <h3>SubMenu Attributes</h3>
    <sec-table class="doc-table" :data="subMenuAttributes">
      <sec-table-column label="参数" prop="attr" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="类型" prop="type" width="100"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="160"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="100"></sec-table-column>
    </sec-table>
    <h3>Menu-Group Attributes</h3>
    <sec-table class="doc-table" :data="menuGroupAttributes">
      <sec-table-column label="参数" prop="attr" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="类型" prop="type" width="100"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="160"></sec-table-column>
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
      menuAttributes: [{
        attr: 'mode',
        desc: '模式',
        type: 'string',
        value: 'horizontal / vertical',
        default: 'vertical',
      }, {
        attr: 'collapse',
        desc: '是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'background-color',
        desc: '菜单的背景色（仅支持 hex 格式）',
        type: 'string',
        value: '—',
        default: '#ffffff',
      }, {
        attr: 'text-color',
        desc: '菜单的文字颜色（仅支持 hex 格式）',
        type: 'string',
        value: '—',
        default: '#303133',
      }, {
        attr: 'active-text-color',
        desc: '当前激活菜单的文字颜色（仅支持 hex 格式）',
        type: 'string',
        value: '—',
        default: '#F08300',
      }, {
        attr: 'default-active',
        desc: '当前激活菜单的 index',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'default-openeds',
        desc: '当前打开的 sub-menu 的 index 的数组',
        type: 'Array',
        value: '—',
        default: '—',
      }, {
        attr: 'unique-opened',
        desc: '是否只保持一个子菜单的展开',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'menu-trigger',
        desc: '子菜单打开的触发方式（只在 mode 为 horizontal 时有效）',
        type: 'string',
        value: 'hover / click',
        default: 'hover',
      }, {
        attr: 'router',
        desc: '是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'collapse-transition',
        desc: '是否开启折叠动画',
        type: 'boolean',
        value: '—',
        default: 'true',
      }],
      menuMethods: [{
        method: 'open',
        desc: '展开指定的 sub-menu',
        param: 'index：需要打开的 sub-menu 的 index',
      }, {
        method: 'close',
        desc: '收起指定的 sub-menu',
        param: 'index：需要收起的 sub-menu 的 index',
      }],
      menuEvents: [{
        event: 'select',
        desc: '菜单激活回调',
        param: 'index：选中菜单项的 index，indexPath：选中菜单项的 index path',
      }, {
        event: 'open',
        desc: 'sub-menu 展开的回调',
        param: 'index：打开的 sub-menu 的 index，indexPath：打开的 sub-menu 的 index path',
      }, {
        event: 'close',
        desc: 'sub-menu 收起的回调',
        param: 'index：收起的 sub-menu 的 index，indexPath：收起的 sub-menu 的 index path',
      }],
      subMenuAttributes: [{
        attr: 'index',
        desc: '唯一标志',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'route',
        desc: 'Vue Router 路径对象',
        type: 'Object',
        value: '—',
        default: '—',
      }, {
        attr: 'disabled',
        desc: '是否禁用',
        type: 'boolean',
        value: '—',
        default: 'false',
      }],
      menuGroupAttributes: [{
        attr: 'title',
        desc: '分组标题',
        type: 'string',
        value: '—',
        default: '—',
      }],
    };
  },
};
</script>
