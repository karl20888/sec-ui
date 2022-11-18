```vue
<template>
  <sec-table :data="tableData">
    <sec-table-column label="日期" width="180">
      <template #default="{ row }">
        <i class="el-icon-time"></i>
        <span class="ml10">{{ row.date }}</span>
      </template>
    </sec-table-column>
    <sec-table-column label="姓名" width="180">
      <template #default="{ row }">
        <sec-popover trigger="hover" placement="top">
          <p>姓名：{{ row.name }}</p>
          <p>住址：{{ row.address }}</p>
          <template #reference>
            <sec-tag size="medium">{{ row.name }}</sec-tag>
          </template>
        </sec-popover>
      </template>
    </sec-table-column>
    <sec-table-column label="操作">
      <template #default="{ row, $index }">
        <sec-btn
          size="mini"
          @click="handleEdit($index, row)"
        >编辑</sec-btn>
        <sec-btn
          type="danger"
          size="mini"
          @click="handleDelete($index, row)"
        >删除</sec-btn>
      </template>
    </sec-table-column>
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
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
};
</script>
```