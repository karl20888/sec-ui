<template>
  <div>
    <sec-btn @click="resetDateFilter">清除日期过滤器</sec-btn>
    <sec-btn @click="clearFilter">清除所有过滤器</sec-btn>
    <sec-table ref="filterTable" class="mt10" :data="tableData">
      <sec-table-column
        label="日期"
        prop="date"
        width="180"
        column-key="date"
        sortable
        :filters="[
          {text: '2016-05-01', value: '2016-05-01'},
          {text: '2016-05-02', value: '2016-05-02'},
          {text: '2016-05-03', value: '2016-05-03'},
          {text: '2016-05-04', value: '2016-05-04'},
        ]"
        :filter-method="filterHandler"
      ></sec-table-column>
      <sec-table-column label="地址" prop="address"></sec-table-column>
      <sec-table-column
        label="标签"
        width="100"
        filter-placement="bottom-end"
        :filters="[
          { text: '家', value: '家' },
          { text: '公司', value: '公司' },
        ]"
        :filter-method="filterTag"
      >
        <template #default="{ row }">
          <sec-tag :type="row.tag === '家' ? 'primary' : 'success'">{{ row.tag }}</sec-tag>
        </template>
      </sec-table-column>
    </sec-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        tag: '家',
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        tag: '公司',
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        tag: '家',
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        tag: '公司',
      }],
    };
  },
  methods: {
    resetDateFilter() {
      this.$refs.filterTable.clearFilter('date');
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter();
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    filterHandler(value, row, column) {
      const { property } = column;
      return row[property] === value;
    },
  },
};
</script>
