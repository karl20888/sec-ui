<template>
  <sec-popover placement="right" width="400">
    <sec-table :data="gridData">
      <sec-table-column width="150" property="date" label="日期"></sec-table-column>
      <sec-table-column width="100" property="name" label="姓名"></sec-table-column>
      <sec-table-column width="300" property="address" label="地址"></sec-table-column>
    </sec-table>
    <template #reference>
      <sec-btn>click 激活</sec-btn>
    </template>
  </sec-popover>
</template>

<script>
export default {
  data() {
    return {
      gridData: [{
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
};
</script>
