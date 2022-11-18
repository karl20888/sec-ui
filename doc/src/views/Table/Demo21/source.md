```vue
<template>
  <sec-table :data="tableData">
    <sec-table-column label="Date" prop="date"></sec-table-column>
    <sec-table-column label="Name" prop="name"></sec-table-column>
    <sec-table-column align="right">
      <template #header>
        <sec-input v-model="search" size="mini" placeholder="输入关键字搜索"></sec-input>
      </template>
      <template #default="{ row, $index }">
        <sec-btn size="mini" @click="handleEdit($index, row)">Edit</sec-btn>
        <sec-btn type="danger" size="mini" @click="handleDelete($index, row)">Delete</sec-btn>
      </template>
    </sec-table-column>
  </sec-table>
</template>

<script>
import { filter, toLower, includes } from 'lodash';

export default {
  data() {
    return {
      data: [{
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
      search: '',
    };
  },
  computed: {
    tableData() {
      if (this.search) {
        return filter(this.data, ({ name }) => includes(toLower(name), toLower(this.search)));
      }
      return this.data;
    },
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