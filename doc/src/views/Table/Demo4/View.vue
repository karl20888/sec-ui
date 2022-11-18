<template>
  <sec-table
    class="demo-table-row-class"
    :data="tableData"
    :row-class-name="tableRowClassName"
  >
    <sec-table-column label="日期" prop="date" width="180"></sec-table-column>
    <sec-table-column label="姓名" prop="name" width="180"></sec-table-column>
    <sec-table-column label="地址" prop="address"></sec-table-column>
  </sec-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }],
    };
  },
  methods: {
    tableRowClassName({ rowIndex }) {
      if (rowIndex === 1) {
        return 'warning-row';
      }
      if (rowIndex === 3) {
        return 'success-row';
      }
      return '';
    },
  },
};
</script>

<style lang="less">
.demo-table-row-class {
  .warning-row {
    background: oldlace;
  }

  .success-row {
    background: #f0f9eb;
  }
}
</style>
