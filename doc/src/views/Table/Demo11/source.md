```vue
<template>
  <div>
    <sec-table
      ref="multipleTable"
      :data="tableData"
      @selection-change="handleSelectionChange"
    >
      <sec-table-column type="selection" width="55"></sec-table-column>
      <sec-table-column label="日期" prop="date" width="120"></sec-table-column>
      <sec-table-column label="姓名" prop="name" width="120"></sec-table-column>
      <sec-table-column
        label="地址"
        prop="address"
        show-overflow-tooltip
      ></sec-table-column>
    </sec-table>
    <div class="mt20">
      <sec-btn @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</sec-btn>
      <sec-btn @click="toggleSelection()">取消选择</sec-btn>
    </div>
  </div>
</template>

<script>
import { each } from 'lodash';

export default {
  data() {
    return {
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
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
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }],
      multipleSelection: [],
    };
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        each(rows, (row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
  },
};
</script>
```