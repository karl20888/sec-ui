<template>
  <sec-table
    v-model="model"
    row-key="id"
    :pager.sync="pager"
    :data="tableData"
  >
    <template #control>
      <sec-btn type="danger">删除</sec-btn>
    </template>
    <sec-table-column label="日期" prop="date" width="180" always-show></sec-table-column>
    <sec-table-column label="姓名" prop="name" width="180" initial-hide></sec-table-column>
    <sec-table-column label="地址" prop="address"></sec-table-column>
  </sec-table>
</template>

<script>
export default {
  data() {
    return {
      model: {
        checkAll: true,
      },
      pager: {},
      tableData: [{
        id: '1',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        id: '2',
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
      }, {
        id: '3',
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
      }, {
        id: '4',
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
      }],
    };
  },
};
</script>
