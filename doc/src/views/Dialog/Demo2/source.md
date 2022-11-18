```vue
<template>
  <div>
    <!-- Table -->
    <sec-btn type="text" @click="$refs.tableDialog.open()">打开嵌套表格的 Dialog</sec-btn>

    <sec-dialog ref="tableDialog" title="收货地址">
      <sec-table :data="gridData">
        <sec-table-column property="date" label="日期" width="150"></sec-table-column>
        <sec-table-column property="name" label="姓名" width="200"></sec-table-column>
        <sec-table-column property="address" label="地址"></sec-table-column>
      </sec-table>
    </sec-dialog>

    <!-- Form -->
    <sec-btn type="text" @click="$refs.formDialog.open()">打开嵌套表单的 Dialog</sec-btn>

    <sec-dialog ref="formDialog" title="收货地址">
      <sec-form :model="form" label-width="120px">
        <sec-form-item label="活动名称">
          <sec-input v-model="form.name"></sec-input>
        </sec-form-item>
        <sec-form-item label="活动区域">
          <sec-select v-model="form.region" placeholder="请选择活动区域">
            <sec-option label="区域一" value="shanghai"></sec-option>
            <sec-option label="区域二" value="beijing"></sec-option>
          </sec-select>
        </sec-form-item>
      </sec-form>
      <template #footer>
        <sec-btn @click="close">取消</sec-btn>
        <sec-btn type="primary" @click="close">确定</sec-btn>
      </template>
    </sec-dialog>
  </div>
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
      form: {
        name: '',
        region: '',
      },
    };
  },
  methods: {
    close() {
      this.$refs.formDialog.close();
    },
  },
};
</script>
```