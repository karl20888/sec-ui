```vue
<template>
  <div>
    <sec-table
      ref="singleTable"
      highlight-current-row
      :data="tableData"
      @current-change="handleCurrentChange"
    >
      <sec-table-column type="index" width="50"></sec-table-column>
      <sec-table-column label="日期" prop="date" width="120"></sec-table-column>
      <sec-table-column label="姓名" prop="name" width="120"></sec-table-column>
      <sec-table-column label="地址" prop="address"></sec-table-column>
    </sec-table>
    <div class="mt20">
      <sec-btn @click="setCurrent(tableData[1])">选中第二行</sec-btn>
      <sec-btn @click="setCurrent()">取消选择</sec-btn>
    </div>
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
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
      }],
      currentRow: null,
    };
  },
  methods: {
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row);
    },
    handleCurrentChange(val) {
      this.currentRow = val;
    },
  },
};
</script>
```