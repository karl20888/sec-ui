```vue
<template>
  <sec-table :data="tableData">
    <sec-table-column type="index" :index="indexMethod"></sec-table-column>
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
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
        tag: '家',
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333,
        tag: '公司',
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333,
        tag: '家',
      }, {
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333,
        tag: '公司',
      }],
    };
  },
  methods: {
    indexMethod(index) {
      return index * 2;
    },
  },
};
</script>
```