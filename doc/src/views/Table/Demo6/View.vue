<template>
  <sec-table :data="tableData" border>
    <sec-table-column label="日期" prop="date" width="150" fixed></sec-table-column>
    <sec-table-column label="姓名" prop="name" width="120"></sec-table-column>
    <sec-table-column label="省份" prop="province" width="120"></sec-table-column>
    <sec-table-column label="市区" prop="city" width="120"></sec-table-column>
    <sec-table-column label="地址" prop="address" min-width="300"></sec-table-column>
    <sec-table-column label="邮箱" prop="zip" width="120"></sec-table-column>
    <sec-table-column label="操作" width="100" fixed="right">
      <template #default="{ row }">
        <sec-btn type="text" @click="handleClick(row)">查看</sec-btn>
        <sec-btn type="text">编辑</sec-btn>
      </template>
    </sec-table-column>
  </sec-table>
</template>

<script>
export default {
  methods: {
    handleClick(row) {
      console.log(row);
    },
  },

  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333,
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333,
      }, {
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333,
      }],
    };
  },
};
</script>
