<!-- eslint-disable max-len -->
<template>
  <sec-block class="doc-block">
    <h2>Table 表格</h2>
    <p>用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。</p>
    <h3>基础表格</h3>
    <p>基础的表格展示用法。</p>
    <DocDemo :markdown="demo1">
      <template #source>
        <Demo1></Demo1>
      </template>
      <p>当 <code>sec-table</code> 元素中注入 <code>data</code> 对象数组后，在 <code>sec-table-column</code> 中用 <code>prop</code> 属性来对应对象中的键名即可填入数据，用 <code>label</code> 属性来定义表格的列名。可以使用 <code>width</code> 属性来定义列宽。</p>
    </DocDemo>
    <h3>带斑马纹表格</h3>
    <p>使用带斑马纹的表格，可以更容易区分出不同行的数据。</p>
    <DocDemo :markdown="demo2">
      <template #source>
        <Demo2></Demo2>
      </template>
      <p><code>stripe</code> 属性可以创建带斑马纹的表格。它接受一个 <code>Boolean</code>，默认为 <code>false</code>，设置为 <code>true</code> 即为启用。</p>
    </DocDemo>
    <h3>带边框表格</h3>
    <DocDemo :markdown="demo3">
      <template #source>
        <Demo3></Demo3>
      </template>
      <p>默认情况下，Table 组件是不具有竖直方向的边框的，如果需要，可以使用 <code>border</code> 属性，它接受一个 <code>Boolean</code>，设置为 <code>true</code> 即可启用。</p>
    </DocDemo>
    <h3>带状态表格</h3>
    <p>可将表格内容 highlight 显示，方便区分「成功、信息、警告、危险」等内容。</p>
    <DocDemo :markdown="demo4">
      <template #source>
        <Demo4></Demo4>
      </template>
      <p>可以通过指定 Table 组件的 <code>row-class-name</code> 属性来为 Table 中的某一行添加 class，表明该行处于某种状态。</p>
    </DocDemo>
    <h3>固定表头</h3>
    <p>纵向内容过多时，可选择固定表头。</p>
    <DocDemo :markdown="demo5">
      <template #source>
        <Demo5></Demo5>
      </template>
      <p>只要在 <code>sec-table</code> 元素中定义了 <code>height</code> 属性，即可实现固定表头的表格，而不需要额外的代码。</p>
    </DocDemo>
    <h3>自定义列模板</h3>
    <p>自定义列的显示内容，可组合其他组件使用。</p>
    <DocDemo :markdown="demo18">
      <template #source>
        <Demo18></Demo18>
      </template>
      <p>通过 <code>Scoped slot</code> 可以获取到 row, column, $index 和 store（table内部的状态管理）的数据，用法参考 demo。</p>
    </DocDemo>
    <h3>固定列</h3>
    <p>横向内容过多时，可选择固定列。</p>
    <DocDemo :markdown="demo6">
      <template #source>
        <Demo6></Demo6>
      </template>
      <p>固定列需要使用 <code>fixed</code> 属性，它接受 Boolean 值或者 <code>left</code>、<code>right</code>，表示左边固定还是右边固定。</p>
    </DocDemo>
    <h3>固定列和表头</h3>
    <p>横纵内容过多时，可选择固定列和表头。</p>
    <DocDemo :markdown="demo7">
      <template #source>
        <Demo7></Demo7>
      </template>
      <p>固定列和表头可以同时使用，只需要将上述两个属性分别设置好即可。</p>
    </DocDemo>
    <h3>流体高度</h3>
    <p>当数据量动态变化时，可以为 Table 设置一个最大高度。</p>
    <DocDemo :markdown="demo8">
      <template #source>
        <Demo8></Demo8>
      </template>
      <p>固定列和表头可以同时使用，只需要将上述两个属性分别设置好即可。</p>
    </DocDemo>
    <h3>多级表头</h3>
    <p>数据结构比较复杂的时候，可使用多级表头来展现数据的层次关系。</p>
    <div class="tip">
      <p>注意：当需要多级表头的时候，由于嵌套渲染的问题，表格列的组件只能使用 <code>el-table-column</code>。</p>
    </div>
    <DocDemo :markdown="demo9">
      <template #source>
        <Demo9></Demo9>
      </template>
      <p>只需要在 <code>el-table-column</code> 里面嵌套 <code>el-table-column</code>，就可以实现多级表头。</p>
    </DocDemo>
    <h3>单选</h3>
    <p>选择单行数据时使用色块表示。</p>
    <DocDemo :markdown="demo10">
      <template #source>
        <Demo10></Demo10>
      </template>
      <p>Table 组件提供了单选的支持，只需要配置 <code>highlight-current-row</code> 属性即可实现单选。只有由 <code>current-change</code> 事件来管理选中时触发的事件，它会传入 <code>currentRow</code>，<code>oldCurrentRow</code>。如果需要显示索引，可以增加一列 <code>sec-table-column</code>，设置 <code>type</code> 属性为 <code>index</code> 即可显示从 1 开始的索引号。</p>
    </DocDemo>
    <h3>基础多选</h3>
    <p>选择多行数据时使用 Checkbox。</p>
    <DocDemo :markdown="demo11">
      <template #source>
        <Demo11></Demo11>
      </template>
      <p>实现多选非常简单：手动添加一个 <code>sec-table-column</code>，设 <code>type</code> 属性为 <code>selection</code> 即可；默认情况下若内容过多会折行显示，若需要单行显示可以使用 <code>show-overflow-tooltip</code> 属性，它接受一个 <code>Boolean</code>，为 <code>true</code> 时多余的内容会在 hover 时以 tooltip 的形式显示出来。</p>
    </DocDemo>
    <h3>表格数据筛选和扩展区域</h3>
    <p>常在表格上方使用一些筛选表单，以及在右上角添加一些功能按钮。</p>
    <DocDemo :markdown="demo12">
      <template #source>
        <Demo12></Demo12>
      </template>
      <p>可以使用名为 <code>filter</code> 的 Slot 来设置数据筛选的简单表单，同时需要在 Table 上设置 <code>model</code>，来指定筛选对象，<code>model</code> 可以增加 <code>.sync</code> 修饰符用来同步数据，当数据变化时会传出 <code>filterChange</code> 事件，参数为筛选对象值。</p>
      <p>Slot 内使用 <code>sec-form-item</code> 来设置每个表单项，用法和 Form 表单类似。筛选表单默认超出三项，会将超出的部分放在【更多条件】中隐藏起来，可以在 Table 上设置 <code>filter-max</code> 的值来控制此数量，<code>0</code> 为不隐藏更多条件。</p>
      <p>点击【更多条件】会将超出部分的表单项用 Popover 的形式显示出来，对这个 Popover 及内部的 Form 的一些配置可以使用 <code>filter-more-options</code> 来配置，其中包含</p>
      <p>筛选表单后面会默认展示一个【刷新】按钮，点击按钮会传出 <code>refresh</code> 事件，可以设置 <code>filter-append</code> 为 <code>false</code> 来隐藏这个按钮，或通过 <code>filter-append</code> 的 Slot 替换掉此按钮。</p>
      <p>筛选表单中的每一项数值产生变化时会显示一行筛选结果，在筛选结果中可以对某个单项的筛选进行清空，或点击【清除】按钮将整个筛选表单全部清空，有无变化的判断是靠空字符串来判断的，可以在 <code>sec-form-item</code> 上设置 <code>default-value</code> 来修改默认值。同时还增加 <code>result-value-map</code> 和 <code>result-value-format</code> 来对复杂类型的筛选值进行结果展示。</p>
    </DocDemo>
    <h3>带分页组件的表格</h3>
    <p>只需要设置 <code>pager</code> 属性即可在表格下方显示分页组件。</p>
    <DocDemo :markdown="demo13">
      <template #source>
        <Demo13></Demo13>
      </template>
      <p>设置 <code>pager</code> 属性（支持 <code>.sync</code> 修饰符），用法和 Pager 分页组件一致，可通过 <code>pager-options</code> 属性修改分页组件的默认配置。操作分页产生变动可通过 <code>pagerChange</code> 事件获取信息。</p>
    </DocDemo>
    <h3>高级多选</h3>
    <p>使用 <code>v-model</code> 绑定数据提供更高级的多选能力，也更方便使用。</p>
    <DocDemo :markdown="demo14">
      <template #source>
        <Demo14></Demo14>
      </template>
      <p>当使用 <code>v-model</code> 绑定一个值时，表格第一列将自动添加一列 <code>type="selection"</code> 的选择列，注意 <code>row-key</code> 必须指定，当绑定值为一个数组时，勾选的数据会是一个 <code>row-key</code> 指定的值的数组。当有被勾选时，可以使用 <code>control</code> Slot 来展示对勾选数据的一些操作。</p>
    </DocDemo>
    <h3>跨页全选</h3>
    <p>当 <code>v-model</code> 绑定的值为一个 Object 时（同时要开启表格内的分页），鼠标停留在表格左上角的全选框上会出现跨页全选功能。</p>
    <DocDemo :markdown="demo15">
      <template #source>
        <Demo15></Demo15>
      </template>
      <p>跨页全选中 <code>v-model</code> 绑定的值为一个 Object，其中包含 <code>checkAll</code>、<code>selected</code> 和 <code>excluded</code>， <code>checkAll</code> 表示是否选择了跨页全选，如果没有跨页全选，<code>selected</code> 的值为选中了哪些数据的 <code>row-key</code> 值数组，如果选择了跨页全选，<code>excluded</code> 则是排除掉的数据的 <code>row-key</code> 值数组。</p>
    </DocDemo>
    <h3>排序</h3>
    <p>对表格进行排序，可快速查找或对比数据。</p>
    <DocDemo :markdown="demo16">
      <template #source>
        <Demo16></Demo16>
      </template>
      <p>在列中设置 <code>sortable</code> 属性即可实现以该列为基准的排序，接受一个 <code>Boolean</code>，默认为 <code>false</code>。可以通过 Table 的 <code>default-sort</code> 属性设置默认的排序列和排序顺序。可以使用 <code>sort-method</code> 或者 <code>sort-by</code> 使用自定义的排序规则。如果需要后端排序，需将 <code>sortable</code> 设置为 <code>custom</code>，同时在 Table 上监听 <code>sort-change</code> 事件，在事件回调中可以获取当前排序的字段名和排序顺序，从而向接口请求排序后的表格数据。</p>
    </DocDemo>
    <h3>筛选</h3>
    <p>对表格进行筛选，可快速查找到自己想看的数据。</p>
    <DocDemo :markdown="demo17">
      <template #source>
        <Demo17></Demo17>
      </template>
      <p>在列中设置 <code>filter</code>、<code>filter-method</code> 属性即可开启该列的筛选，<code>filter</code> 是一个数组，<code>filter-method</code> 是一个方法，它用于决定某些数据是否显示，会传入三个参数：<code>value</code>、<code>row</code> 和 <code>column</code>。</p>
    </DocDemo>
    <h3>展开行</h3>
    <p>当行内容过多并且不想显示横向滚动条时，可以使用 Table 展开行功能。</p>
    <DocDemo :markdown="demo19">
      <template #source>
        <Demo19></Demo19>
      </template>
      <p>通过设置 <code>type="expand"</code> 和 <code>Scoped slot</code> 可以开启展开行功能，<code>sec-table-column</code> 的模板会被渲染成展开行的内容，展开行可访问的属性与使用自定义列模板时的 <code>Scoped slot</code> 相同。</p>
    </DocDemo>
    <h3>树形数据与懒加载</h3>
    <DocDemo :markdown="demo20">
      <template #source>
        <Demo20></Demo20>
      </template>
      <p>支持树类型的数据的显示。当 row 中包含 <code>children</code> 字段时，被视为树形数据。渲染树形数据时，必须要指定 <code>row-key</code>。支持子节点数据异步加载。设置 Table 的 <code>lazy</code> 属性为 true 与加载函数 <code>load</code>。通过指定 row 中的 <code>hasChildren</code> 字段来指定哪些行是包含子节点。<code>children</code> 与 <code>hasChildren</code> 都可以通过 <code>tree-props</code> 配置。</p>
    </DocDemo>
    <h3>自定义表头</h3>
    <p>表头支持自定义。</p>
    <DocDemo :markdown="demo21">
      <template #source>
        <Demo21></Demo21>
      </template>
      <p>通过设置 Scoped slot 来自定义表头。</p>
    </DocDemo>
    <h3>表尾合计行</h3>
    <p>若表格展示的是各类数字，可以在表尾显示各列的合计。</p>
    <DocDemo :markdown="demo22">
      <template #source>
        <Demo22></Demo22>
      </template>
      <p>将 <code>show-summary</code> 设置为 <code>true</code> 就会在表格尾部展示合计行。默认情况下，对于合计行，第一列不进行数据求和操作，而是显示「合计」二字（可通过 <code>sum-text</code> 配置），其余列会将本列所有数值进行求和操作，并显示出来。当然，你也可以定义自己的合计逻辑。使用 <code>summary-method</code> 并传入一个方法，返回一个数组，这个数组中的各项就会显示在合计行的各列中，具体可以参考本例中的第二个表格。</p>
    </DocDemo>
    <h3>合并行或列</h3>
    <p>多行或多列共用一个数据时，可以合并行或列。</p>
    <DocDemo :markdown="demo23">
      <template #source>
        <Demo23></Demo23>
      </template>
      <p>通过给 <code>table</code> 传入 <code>span-method</code> 方法可以实现合并行货列，方法的参数是一个对象，里面包含当前行 <code>row</code>、当前列 <code>column</code>、当前行号 <code>rowIndex</code>、当前序号 <code>columnIndex</code> 四个属性。该函数可以返回一个包含两个元素的数组，第一个元素代表 <code>rowspan</code>，第二个元素代表 <code>colspan</code>。也可以返回一个键名为 <code>rowspan</code> 和 <code>colspan</code> 的对象。</p>
    </DocDemo>
    <h3>自定义索引</h3>
    <p>自定义 <code>type=index</code> 列的行号。</p>
    <DocDemo :markdown="demo24">
      <template #source>
        <Demo24></Demo24>
      </template>
      <p>通过给 <code>type=index</code> 的列传入 <code>index</code> 属性，可以自定义索引。该属性传入数字时，将作为索引的起始值。也可以传入一个方法，它提供当前行的行号（从 <code>0</code> 开始）作为参数，返回值将作为索引展示。</p>
    </DocDemo>
    <h3>Table Attributes</h3>
    <sec-table class="doc-table" :data="tableAttributes">
      <sec-table-column label="参数" prop="attr" width="184"></sec-table-column>
      <sec-table-column label="说明">
        <template #default="{ row }">
          <span v-html="row.desc"></span>
        </template>
      </sec-table-column>
      <sec-table-column label="类型" prop="type" width="200"></sec-table-column>
      <sec-table-column label="可选值" width="180">
        <template #default="{ row }">
          <span v-html="row.value"></span>
        </template>
      </sec-table-column>
      <sec-table-column label="默认值" width="220">
        <template #default="{ row }">
          <span v-html="row.default"></span>
        </template>
      </sec-table-column>
    </sec-table>
    <h3>Table Events</h3>
    <sec-table class="doc-table" :data="tableEvents">
      <sec-table-column label="事件名称" prop="event" width="220"></sec-table-column>
      <sec-table-column label="说明" prop="desc"></sec-table-column>
      <sec-table-column label="回调参数" prop="param" width="270"></sec-table-column>
    </sec-table>
    <h3>Table Methods</h3>
    <sec-table class="doc-table" :data="tableMethods">
      <sec-table-column label="方法名" prop="method" width="220"></sec-table-column>
      <sec-table-column label="说明">
        <template #default="{ row }">
          <span v-html="row.desc"></span>
        </template>
      </sec-table-column>
      <sec-table-column label="参数" prop="param" width="250"></sec-table-column>
    </sec-table>
    <h3>Table Slots</h3>
    <sec-table class="doc-table" :data="tableSlots">
      <sec-table-column label="name" prop="name" width="220"></sec-table-column>
      <sec-table-column label="说明">
        <template #default="{ row }">
          <span v-html="row.desc"></span>
        </template>
      </sec-table-column>
    </sec-table>
    <h3>Table-column Attributes</h3>
    <sec-table class="doc-table" :data="tableColumnAttributes">
      <sec-table-column label="参数" prop="attr" width="184"></sec-table-column>
      <sec-table-column label="说明">
        <template #default="{ row }">
          <span v-html="row.desc"></span>
        </template>
      </sec-table-column>
      <sec-table-column label="类型" prop="type" width="240"></sec-table-column>
      <sec-table-column label="可选值" width="180">
        <template #default="{ row }">
          <span v-html="row.value"></span>
        </template>
      </sec-table-column>
      <sec-table-column label="默认值" prop="default" width="220"></sec-table-column>
    </sec-table>
    <h3>Table-column Scoped Slot</h3>
    <sec-table class="doc-table" :data="tableColumnScopedSlot">
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
import demo8 from './Demo8/source.md';
import Demo8 from './Demo8/View.vue';
import demo9 from './Demo9/source.md';
import Demo9 from './Demo9/View.vue';
import demo10 from './Demo10/source.md';
import Demo10 from './Demo10/View.vue';
import demo11 from './Demo11/source.md';
import Demo11 from './Demo11/View.vue';
import demo12 from './Demo12/source.md';
import Demo12 from './Demo12/View.vue';
import demo13 from './Demo13/source.md';
import Demo13 from './Demo13/View.vue';
import demo14 from './Demo14/source.md';
import Demo14 from './Demo14/View.vue';
import demo15 from './Demo15/source.md';
import Demo15 from './Demo15/View.vue';
import demo16 from './Demo16/source.md';
import Demo16 from './Demo16/View.vue';
import demo17 from './Demo17/source.md';
import Demo17 from './Demo17/View.vue';
import demo18 from './Demo18/source.md';
import Demo18 from './Demo18/View.vue';
import demo19 from './Demo19/source.md';
import Demo19 from './Demo19/View.vue';
import demo20 from './Demo20/source.md';
import Demo20 from './Demo20/View.vue';
import demo21 from './Demo21/source.md';
import Demo21 from './Demo21/View.vue';
import demo22 from './Demo22/source.md';
import Demo22 from './Demo22/View.vue';
import demo23 from './Demo23/source.md';
import Demo23 from './Demo23/View.vue';
import demo24 from './Demo24/source.md';
import Demo24 from './Demo24/View.vue';

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
    Demo8,
    Demo9,
    Demo10,
    Demo11,
    Demo12,
    Demo13,
    Demo14,
    Demo15,
    Demo16,
    Demo17,
    Demo18,
    Demo19,
    Demo20,
    Demo21,
    Demo22,
    Demo23,
    Demo24,
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
      demo8,
      demo9,
      demo10,
      demo11,
      demo12,
      demo13,
      demo14,
      demo15,
      demo16,
      demo17,
      demo18,
      demo19,
      demo20,
      demo21,
      demo22,
      demo23,
      demo24,
      tableAttributes: [{
        attr: 'value / v-model',
        desc: '绑定值，如果含有绑定值，则开启高级多选功能，表格行的选择和绑定值可以做到双向绑定，如果绑定值为一个对象，则开启跨页全选功能。',
        type: 'array / object',
        value: '—',
        default: '—',
      }, {
        attr: 'data',
        desc: '显示的数据',
        type: 'array',
        value: '—',
        default: '—',
      }, {
        attr: 'height',
        desc: 'Table 的高度，默认为自动高度。如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式。',
        type: 'string / number',
        value: '—',
        default: '—',
      }, {
        attr: 'max-height',
        desc: 'Table 的最大高度。合法的值为数字或者单位为 px 的高度。',
        type: 'string / number',
        value: '—',
        default: '—',
      }, {
        attr: 'full',
        desc: '如果为 true 则表格高度会占满父元素的高度。',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'stripe',
        desc: '是否为斑马纹 table',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'border',
        desc: '是否带有纵向边框',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'size',
        desc: 'Table 的尺寸',
        type: 'string',
        value: 'large / medium / small / mini',
        default: 'small',
      }, {
        attr: 'fit',
        desc: '列的宽度是否自撑开',
        type: 'boolean',
        value: '—',
        default: 'true',
      }, {
        attr: 'show-header',
        desc: '是否显示表头',
        type: 'boolean',
        value: '—',
        default: 'true',
      }, {
        attr: 'highlight-current-row',
        desc: '是否要高亮当前行',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'current-row-key',
        desc: '当前行的 key，只写属性',
        type: 'string / number',
        value: '—',
        default: '—',
      }, {
        attr: 'row-class-name',
        desc: '行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。',
        type: 'Function({ row, rowIndex }) / string',
        value: '—',
        default: '—',
      }, {
        attr: 'row-style',
        desc: '行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。',
        type: 'Function({ row, rowIndex }) / object',
        value: '—',
        default: '—',
      }, {
        attr: 'cell-class-name',
        desc: '单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。',
        type: 'Function({ row, column, rowIndex, columnIndex }) / string',
        value: '—',
        default: '—',
      }, {
        attr: 'cell-style',
        desc: '单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style。',
        type: 'Function({ row, column, rowIndex, columnIndex }) / object',
        value: '—',
        default: '—',
      }, {
        attr: 'header-row-class-name',
        desc: '表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。',
        type: 'Function({ row, rowIndex }) / string',
        value: '—',
        default: '—',
      }, {
        attr: 'header-row-style',
        desc: '表头行的 style 的回调方法，也可以使用一个固定的 Object 为所有表头行设置一样的 Style。',
        type: 'Function({ row, rowIndex }) / object',
        value: '—',
        default: '—',
      }, {
        attr: 'header-cell-class-name',
        desc: '表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className。',
        type: 'Function({ row, column, rowIndex, columnIndex }) / string',
        value: '—',
        default: '—',
      }, {
        attr: 'header-cell-style',
        desc: '表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style。',
        type: 'Function({ row, column, rowIndex, columnIndex }) / object',
        value: '—',
        default: '—',
      }, {
        attr: 'row-key',
        desc: '行数据的 Key，用来优化 Table 的渲染；在使用 reserve-selection 或通过绑定值来实现多选功能，或显示树形数据时，该属性是必填的。类型为 String 时，支持多层访问：<code>user.info.id</code>，但不支持 <code>user.info[0].id</code>，此种情况请使用 Function。',
        type: 'Function(row) / string',
        value: '—',
        default: '—',
      }, {
        attr: 'empty-options',
        desc: '空数据时显示的 Empty 组件配置，也可通过 <code>slot="empty"</code> 设置',
        type: 'object / boolean',
        value: '—',
        default: 'true',
      }, {
        attr: 'default-expand-all',
        desc: '是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'expand-row-keys',
        desc: '可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组。',
        type: 'array',
        value: '—',
        default: '—',
      }, {
        attr: 'default-sort',
        desc: '默认的排序列的 prop 和顺序。它的 <code>prop</code> 属性指定默认的排序的列，<code>order</code> 指定默认排序的顺序。',
        type: 'object',
        value: '<code>order</code>：ascending / descending',
        default: '如果只指定了 <code>prop</code>，没有指定 <code>order</code>，则默认顺序是 ascending',
      }, {
        attr: 'tooltip-effect',
        desc: 'tooltip <code>effect</code> 属性',
        type: 'string',
        value: 'dark / light',
        default: 'light',
      }, {
        attr: 'show-summary',
        desc: '是否在表尾显示合计行',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'sum-text',
        desc: '合计行第一列的文本',
        type: 'string',
        value: '—',
        default: '合计',
      }, {
        attr: 'summary-method',
        desc: '自定义的合计计算方法',
        type: 'Function({ columns, data })',
        value: '—',
        default: '—',
      }, {
        attr: 'span-method',
        desc: '合并行或列的计算方法',
        type: 'Function({ row, column, rowIndex, columnIndex })',
        value: '—',
        default: '—',
      }, {
        attr: 'select-on-indeterminate',
        desc: '在多选表格中，当仅有部分行被选中时，点击表头的多选框时的行为。若为 true，则选中所有行；若为 false，则取消选择所有行',
        type: 'boolean',
        value: '—',
        default: 'true',
      }, {
        attr: 'indent',
        desc: '展示树形数据时，树节点的缩进',
        type: 'number',
        value: '—',
        default: '16',
      }, {
        attr: 'lazy',
        desc: '显示的数据',
        type: 'array',
        value: '—',
        default: '—',
      }, {
        attr: 'data',
        desc: '是否懒加载子节点数据',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'load',
        desc: '加载子节点数据的函数，lazy 为 true 时生效，函数第二个参数包含了节点的层级信息',
        type: 'Function({ row, treeNode, resolve })',
        value: '—',
        default: '—',
      }, {
        attr: 'tree-props',
        desc: '渲染嵌套数据的配置选项',
        type: 'object',
        value: '—',
        default: '{ hasChildren: \'hasChildren\', children: \'children\' }',
      }, {
        attr: 'model',
        desc: '筛选对象，支持 <code>.sync</code> 修饰符，配合 <code>filter</code> Slot 使用。',
        type: 'object',
        value: '—',
        default: '—',
      }, {
        attr: 'filterMax',
        desc: '筛选项展现在外层时的最大数量，多出去的项将收到“更多条件”中。',
        type: 'number',
        value: '—',
        default: '3',
      }, {
        attr: 'filterMoreOptions',
        desc: '筛选项“更多条件”的一些配置，含有 <code>popoverWidth</code>：弹出框的宽度，<code>popoverPlacement</code>：弹出框的方向，<code>popoverTrigger</code>：弹出框的触发方式，<code>labelWidth</code>：表单标签宽度，<code>extraWidth</code>：表单扩展区域宽度。',
        type: 'object',
        value: '—',
        default: '—',
      }, {
        attr: 'filterAppend',
        desc: '是否显示默认的【刷新】按钮',
        type: 'boolean',
        value: '—',
        default: 'true',
      }, {
        attr: 'pager',
        desc: '分页数据，同 Pager 组件绑定的数据格式一样',
        type: 'object',
        value: '—',
        default: '—',
      }, {
        attr: 'pagerOptions',
        desc: '分页组件的配置',
        type: 'object',
        value: '—',
        default: '—',
      }, {
        attr: 'toggleColumnShow',
        desc: '表格列显示开关，如果为字符串，则开关设置存储到 localStorage 中。',
        type: 'boolean / string',
        value: '—',
        default: 'false',
      }],
      tableEvents: [{
        event: 'select',
        desc: '当用户手动勾选数据行的 Checkbox 时触发的事件',
        param: 'selection, row',
      }, {
        event: 'select-all',
        desc: '当用户手动勾选全选 Checkbox 时触发的事件',
        param: 'selection',
      }, {
        event: 'selection-change',
        desc: '当选择项发生变化时会触发该事件',
        param: 'selection',
      }, {
        event: 'cell-mouse-enter',
        desc: '当单元格 hover 进入时会触发该事件',
        param: 'row, column, cell, event',
      }, {
        event: 'cell-mouse-leave',
        desc: '当单元格 hover 退出时会触发该事件',
        param: 'row, column, cell, event',
      }, {
        event: 'cell-click',
        desc: '当某个单元格被点击时会触发该事件',
        param: 'row, column, cell, event',
      }, {
        event: 'cell-dblclick',
        desc: '当某个单元格被双击击时会触发该事件',
        param: 'row, column, cell, event',
      }, {
        event: 'row-click',
        desc: '当某一行被点击时会触发该事件',
        param: 'row, column, event',
      }, {
        event: 'row-contextmenu',
        desc: '当某一行被鼠标右键点击时会触发该事件',
        param: 'row, column, event',
      }, {
        event: 'row-dblclick',
        desc: '当某一行被双击时会触发该事件',
        param: 'row, column, event',
      }, {
        event: 'header-click',
        desc: '当某一列的表头被点击时会触发该事件',
        param: 'column, event',
      }, {
        event: 'header-contextmenu',
        desc: '当某一列的表头被鼠标右键点击时触发该事件',
        param: 'column, event',
      }, {
        event: 'sort-change',
        desc: '当表格的排序条件发生变化的时候会触发该事件',
        param: '{ column, prop, order }',
      }, {
        event: 'filter-change',
        desc: '当表格的筛选条件发生变化的时候会触发该事件，参数的值是一个对象，对象的 key 是 column 的 columnKey，对应的 value 为用户选择的筛选条件的数组。',
        param: 'filters',
      }, {
        event: 'current-change',
        desc: '当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性',
        param: 'currentRow, oldCurrentRow',
      }, {
        event: 'header-dragend',
        desc: '当拖动表头改变了列的宽度的时候会触发该事件',
        param: 'newWidth, oldWidth, column, event',
      }, {
        event: 'expand-change',
        desc: '当用户对某一行展开或者关闭的时候会触发该事件（展开行时，回调的第二个参数为 expandedRows；树形表格时第二参数为 expanded）',
        param: 'row, (expandedRows | expanded)',
      }, {
        event: 'colsChange',
        desc: '如果开启了列显示开关，则列显示变化时触发，值为可开关列的对象',
        param: 'colsMap',
      }, {
        event: 'filterChange',
        desc: '如果开启了高级多选功能，当筛选值产生变化时触发，需要区分 filter-change 方法，两者触发条件并不同',
        param: 'newModel',
      }, {
        event: 'refresh',
        desc: '点击筛选后边的【刷新】按钮触发',
        param: '—',
      }, {
        event: 'pagerChange',
        desc: '分页组件触发',
        param: 'newPager',
      }],
      tableMethods: [{
        method: 'clearSelection',
        desc: '用于多选表格，清空用户的选择',
        param: '—',
      }, {
        method: 'toggleRowSelection',
        desc: '用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中）',
        param: 'row, selected',
      }, {
        method: 'toggleAllSelection',
        desc: '用于多选表格，切换所有行的选中状态',
        param: '—',
      }, {
        method: 'toggleRowExpansion',
        desc: '用于可展开表格与树形表格，切换某一行的展开状态，如果使用了第二个参数，则是设置这一行展开与否（expanded 为 true 则展开）',
        param: 'row, expanded',
      }, {
        method: 'setCurrentRow',
        desc: '用于单选表格，设定某一行为选中行，如果调用时不加参数，则会取消目前高亮行的选中状态。',
        param: 'row',
      }, {
        method: 'clearSort',
        desc: '用于清空排序条件，数据会恢复成未排序的状态',
        param: '—',
      }, {
        method: 'clearFilter',
        desc: '不传入参数时用于清空所有过滤条件，数据会恢复成未过滤的状态，也可传入由columnKey组成的数组以清除指定列的过滤条件',
        param: 'columnKey',
      }, {
        method: 'doLayout',
        desc: '对 Table 进行重新布局。当 Table 或其祖先元素由隐藏切换为显示时，可能需要调用此方法',
        param: '—',
      }, {
        method: 'sort',
        desc: '手动对 Table 进行排序。参数 <code>prop</code> 属性指定排序列，<code>order</code>指定排序顺序。',
        param: 'prop: string, order: string',
      }],
      tableSlots: [{
        name: 'append',
        desc: '插入至表格最后一行之后的内容，如果需要对表格的内容进行无限滚动操作，可能需要用到这个 slot。若表格有合计行，该 slot 会位于合计行之上。',
      }, {
        name: 'control',
        desc: '如果开启高级多选，当有被选中的行时，会在表格上方显示被选择数据条数，并在后边展示此插槽内容。',
      }, {
        name: 'filter',
        desc: '筛选区域，内部为多个 sec-form-item，展现方式和行内表单类似，请务必设置 <code>label</code> 和 <code>prop</code> 两个属性，其中的 <code>prop</code> 用来关联筛选绑定的 <code>model</code> 对应的键值，另外增加 <code>default-value</code>、<code>result-value-map</code>、<code>result-value-format</code> 和 <code>debounce</code> 四个属性，默认情况下筛选结果用是否为空字符串来判定，可以利用 <code>default-value</code> 来设定默认值，<code>result-value-map</code> 和 <code>default-value-format</code> 用来对复杂的筛选结果值做转换显示。<code>debounce</code> 为筛选值变化时触发 <code>filterChange</code> 事件的防抖间隔事件，单位 ms 的数值，默认 300。',
      }, {
        name: 'filter-append',
        desc: '用于替换筛选框后边的【刷新】按钮。',
      }, {
        name: 'extra',
        desc: '显示在表格右上角位置，一般用于放一些对表格数据操作的按钮。',
      }, {
        name: 'empty',
        desc: '用于替换无数据时的 Empty 组件。',
      }],
      tableColumnAttributes: [{
        attr: 'type',
        desc: '对应列的类型，如果设置了 <code>selection</code> 则显示多选框；如果设置了 <code>index</code> 则显示该行的索引（从 1 开始计算）；如果设置了 <code>expand</code> 则显示为一个可展开的按钮。',
        type: 'string',
        value: 'selection / index / expand',
        default: '—',
      }, {
        attr: 'index',
        desc: '如果设置了 <code>type=index</code>，可以通过传递 <code>index</code> 属性来自定义索引。',
        type: 'number / Function(index)',
        value: '—',
        default: '—',
      }, {
        attr: 'column-key',
        desc: 'column 的 key，如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'label',
        desc: '显示的标题',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'prop',
        desc: '对应列内容的字段名，也可以使用 property 属性，同时也作为列显示开关对应列的标识。',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'width',
        desc: '对应列的宽度',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'min-width',
        desc: '对应列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'fixed',
        desc: '列是否固定在左侧或者右侧，true 表示固定在左侧',
        type: 'string / boolean',
        value: 'true / left / right',
        default: '—',
      }, {
        attr: 'render-header',
        desc: '列标题 Label 区域渲染使用的 Function',
        type: 'Function(h, { column, $index })',
        value: '—',
        default: '—',
      }, {
        attr: 'sortable',
        desc: '对应列是否可以排序，如果设置为 \'custom\'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件',
        type: 'boolean / string',
        value: 'true / false / \'custom\'',
        default: 'false',
      }, {
        attr: 'sort-method',
        desc: '对数据进行排序的时候使用的方法，仅当 sortable 设置为 true 的时候有效，需返回一个数字，和 Array.sort 表现一致',
        type: 'Function(a, b)',
        value: '—',
        default: '—',
      }, {
        attr: 'sort-by',
        desc: '指定数据按照哪个属性进行排序，仅当 sortable 设置为 true 且没有设置 sort-method 的时候有效。如果 sort-by 为数组，则先按照第 1 个属性排序，如果第 1 个相等，再按照第 2 个排序，以此类推',
        type: 'string / array / Function(row, index)',
        value: '—',
        default: '—',
      }, {
        attr: 'sort-orders',
        desc: '数据在排序时所使用排序策略的轮转顺序，仅当 sortable 为 true 时有效。需传入一个数组，随着用户点击表头，该列依次按照数组中元素的顺序进行排序',
        type: 'array',
        value: '数组中的元素需为以下三者之一：<code>ascending</code> 表示升序，<code>descending</code> 表示降序，<code>null</code> 表示还原为原始顺序',
        default: '[\'ascending\', \'descending\', null]',
      }, {
        attr: 'resizable',
        desc: '对应列是否可以通过拖动改变宽度（需要在 sec-table 上设置 border 属性为真）',
        type: 'boolean',
        value: '—',
        default: 'true',
      }, {
        attr: 'formatter',
        desc: '用来格式化内容',
        type: 'Function(row, column, cellValue, index)',
        value: '—',
        default: '—',
      }, {
        attr: 'show-overflow-tooltip',
        desc: '当内容过长被隐藏时显示 tooltip',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'align',
        desc: '对齐方式',
        type: 'string',
        value: 'left / center / right',
        default: 'left',
      }, {
        attr: 'header-align',
        desc: '表头对齐方式，若不设置该项，则使用表格的对齐方式',
        type: 'string',
        value: 'left / center / right',
        default: '—',
      }, {
        attr: 'class-name',
        desc: '列的 className',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'label-class-name',
        desc: '当前列标题的自定义类名',
        type: 'string',
        value: '—',
        default: '—',
      }, {
        attr: 'selectable',
        desc: '仅对 type=selection 的列有效，类型为 Function，Function 的返回值用来决定这一行的 Checkbox 是否可以勾选',
        type: 'Function(row, index)',
        value: '—',
        default: '—',
      }, {
        attr: 'reserve-selection',
        desc: '仅对 type=selection 的列有效，类型为 Boolean，为 true 则会在数据更新之后保留之前选中的数据（需指定 <code>row-key</code>）',
        type: 'object',
        value: '—',
        default: 'false',
      }, {
        attr: 'filters',
        desc: '数据过滤的选项，数组格式，数组中的元素需要有 text 和 value 属性。',
        type: 'Array[{ text, value }]',
        value: '—',
        default: '—',
      }, {
        attr: 'filter-placement',
        desc: '过滤弹出框的定位',
        type: 'string',
        value: '与 Tooltip 的 <code>placement</code> 属性相同',
        default: '—',
      }, {
        attr: 'filter-multiple',
        desc: '数据过滤的选项是否多选',
        type: 'boolean',
        value: '—',
        default: 'true',
      }, {
        attr: 'filter-method',
        desc: '数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示。',
        type: 'Function(value, row, column)',
        value: '—',
        default: '—',
      }, {
        attr: 'filter-value',
        desc: '选中的数据过滤项，如果需要自定义表头过滤的渲染方式，可能会需要此属性。',
        type: 'Array',
        value: '—',
        default: '—',
      }, {
        attr: 'always-show',
        desc: '列显示开关对应列是否永久显示',
        type: 'boolean',
        value: '—',
        default: 'false',
      }, {
        attr: 'initial-hide',
        desc: '列显示开关对应列初始状态下是否隐藏',
        type: 'boolean',
        value: '—',
        default: 'false',
      }],
      tableColumnScopedSlot: [{
        name: '—',
        desc: '自定义列的内容，参数为 { row, column, $index }',
      }, {
        name: 'header',
        desc: '自定义表头的内容，参数为 { column, $index }',
      }],
    };
  },
};
</script>
