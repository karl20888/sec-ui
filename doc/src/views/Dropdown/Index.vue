<!-- eslint-disable max-len -->
<template>
  <sec-block class="doc-block">
    <h2>Dropdown 下拉菜单</h2>
    <p>将动作或菜单折叠到下拉菜单中。</p>
    <h3>基础用法</h3>
    <p>移动到下拉菜单上，展开更多操作。</p>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
      </template>
    </DocDemo>
    <h3>触发对象</h3>
    <p>可使用按钮触发下拉菜单。</p>
    <DocDemo :markdown="demo2">
      <template #source>
        <Demo2></Demo2>
      </template>
      <p>设置 <code>split-button</code> 属性来让触发下拉元素呈现为按钮组，左边是功能按钮，右边是触发下拉菜单的按钮，设置为 <code>true</code> 即可。</p>
    </DocDemo>
    <h3>触发方式</h3>
    <p>可以配置 click 激活或者 hover 激活。</p>
    <DocDemo :markdown="demo3">
      <template #source>
        <Demo3></Demo3>
      </template>
      <p>在 <code>trigger</code> 属性设置为 <code>click</code> 即可。</p>
    </DocDemo>
    <h3>菜单隐藏方式</h3>
    <p>可以 <code>hide-on-click</code> 属性来配置。</p>
    <DocDemo :markdown="demo4">
      <template #source>
        <Demo4></Demo4>
      </template>
      <p>下拉菜单默认在点击菜单项后会被隐藏，将 <code>hide-on-click</code> 属性设置为 <code>false</code> 可以关闭此功能。</p>
    </DocDemo>
    <h3>指令事件</h3>
    <p>点击菜单项后会触发事件，用户可以通过相应的菜单项 key 进行不同的操作。</p>
    <DocDemo :markdown="demo5">
      <template #source>
        <Demo5></Demo5>
      </template>
    </DocDemo>
    <h3>不同尺寸</h3>
    <p>Dropdown 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的尺寸。</p>
    <DocDemo :markdown="demo6">
      <template #source>
        <Demo6></Demo6>
      </template>
      <p>额外的尺寸：<code>large</code>、<code>medium</code>、<code>mini</code>，通过设置 <code>size</code> 属性来配置它们。</p>
    </DocDemo>
    <h3>Dropdown Attributes</h3>
    <sec-table class="doc-table" :data="dropdownAttributes">
      <sec-table-column label="参数" prop="attr" width="220"></sec-table-column>
      <sec-table-column label="说明">
        <template #default="{ row }">
          <span v-html="row.desc"></span>
        </template>
      </sec-table-column>
      <sec-table-column label="类型" prop="type" width="170"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="190"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="120"></sec-table-column>
    </sec-table>
    <h3>Dropdown Slots</h3>
    <sec-table class="doc-table" :data="dropdownSlots">
      <sec-table-column label="name" prop="name" width="220"></sec-table-column>
      <sec-table-column label="说明">
        <template #default="{ row }">
          <span v-html="row.desc"></span>
        </template>
      </sec-table-column>
    </sec-table>
    <h3>Dropdown Events</h3>
    <sec-table class="doc-table" :data="dropdownEvents">
      <sec-table-column label="事件名称" prop="event" width="220"></sec-table-column>
      <sec-table-column label="说明">
        <template #default="{ row }">
          <span v-html="row.desc"></span>
        </template>
      </sec-table-column>
      <sec-table-column label="回调参数" prop="param" width="250"></sec-table-column>
    </sec-table>
    <h3>Dropdown Menu Item Attributes</h3>
    <sec-table class="doc-table" :data="dropdownMenuItemAttributes">
      <sec-table-column label="参数" prop="attr" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="类型" prop="type" width="220"></sec-table-column>
      <sec-table-column label="可选值" prop="value" width="100"></sec-table-column>
      <sec-table-column label="默认值" prop="default" width="120"></sec-table-column>
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
      dropdownAttributes: [{
        attr: 'type',
        desc: '菜单按钮类型，同 Button 组件（只在 <code>split-button</code> 为 true 的情况下有效）',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'size',
        desc: '菜单尺寸，在 <code>split-button</code> 为 true 的情况下也对触发按钮生效',
        type: 'string',
        value: 'large / medium / small / mini',
        default: 'small',
      }, {
        attr: 'split-button',
        desc: '下拉触发元素呈现为按钮组',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'placement',
        desc: '菜单弹出位置',
        type: 'string',
        value: 'top / top-start / top-end / bottom / bottom-start / bottom-end',
        default: 'bottom-end',
      }, {
        attr: 'trigger',
        desc: '触发下拉的行为',
        type: 'string',
        value: 'hover / click',
        default: 'hover',
      }, {
        attr: 'hide-on-click',
        desc: '是否在点击菜单项后隐藏菜单',
        type: 'boolean',
        value: '—',
        default: 'true',
      }, {
        attr: 'show-timeout',
        desc: '展开下拉菜单的延时（仅在 trigger 为 hover 时有效）',
        type: 'number',
        value: '—',
        default: '250',
      }, {
        attr: 'hide-timeout',
        desc: '收起下拉菜单的延时（仅在 trigger 为 hover 时有效）',
        type: 'number',
        value: '—',
        default: '150',
      }, {
        attr: 'tabindex',
        desc: 'Dropdown 组件的 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex">tabindex</a>',
        type: 'number',
        value: '—',
        default: '0',
      }, {
        attr: 'disabled',
        desc: '是否禁用',
        type: 'boolean',
        value: '—',
        default: 'false',
      }],
      dropdownSlots: [{
        name: '—',
        desc: '触发下拉列表显示的元素。注意：必须是一个元素或者组件',
      }, {
        name: 'dropdown',
        desc: '下拉列表，通常是 <code>sec-dropdown-menu</code> 组件',
      }],
      dropdownEvents: [{
        event: 'click',
        desc: '<code>split-button</code> 为 true 时，点击左侧按钮的回调',
        param: '—',
      }, {
        event: 'command',
        desc: '点击菜单项触发的事件回调',
        param: 'dropdown-item 的指令',
      }, {
        event: 'visible-change',
        desc: '下拉框出现/隐藏时触发',
        param: '出现则为 true，隐藏则为 false',
      }],
      dropdownMenuItemAttributes: [{
        attr: 'command',
        desc: '指令',
        type: 'string / number / object',
        value: '—',
        default: '—',
      }, {
        attr: 'disabled',
        desc: '禁用',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'size',
        desc: '显示分割线',
        type: 'string',
        value: '—',
        default: 'false',
      }, {
        attr: 'size',
        desc: '图标类名',
        type: 'string',
        value: '—',
        default: '—',
      }],
    };
  },
};
</script>
