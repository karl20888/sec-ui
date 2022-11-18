```vue
<template>
  <div>
    <sec-btn type="text" @click="$refs.table.open()">打开嵌套表格的 Drawer</sec-btn>
    <sec-btn type="text" @click="$refs.form.open()">打开嵌套表单的 Drawer</sec-btn>
    <sec-drawer ref="table" title="我嵌套了表格！" size="50%">
      <sec-table :data="gridData">
        <sec-table-column label="日期" prop="date" width="150"></sec-table-column>
        <sec-table-column label="姓名" prop="name" width="200"></sec-table-column>
        <sec-table-column label="地址" prop="address"></sec-table-column>
      </sec-table>
    </sec-drawer>
    <sec-drawer
      ref="form"
      title="我嵌套了表单！"
      :before-close="handleClose"
      direction="ltr"
    >
      <sec-form :model="form" label-width="80px" extra-width="20px">
        <sec-form-item label="活动名称">
          <sec-input v-model="form.name"></sec-input>
        </sec-form-item>
        <sec-form-item label="活动区域">
          <sec-select v-model="form.region" placeholder="请选择活动区域" class="wf">
            <sec-option label="区域一" value="shanghai"></sec-option>
            <sec-option label="区域二" value="beijing"></sec-option>
          </sec-select>
        </sec-form-item>
      </sec-form>
      <template #footer>
        <sec-btn @click="cancelForm">取消</sec-btn>
        <sec-btn type="primary" @click="$refs.form.closeDrawer()" :loading="loading">
          {{ loading ? '提交中...' : '确定' }}
        </sec-btn>
      </template>
    </sec-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      gridData: [
        { date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-04', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-01', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-03', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
      ],
      form: {
        name: '',
        region: '',
      },
      timer: null,
    };
  },
  methods: {
    handleClose(done) {
      if (!this.loading) {
        this.$confirm('确定要提交表单吗？').then(() => {
          this.loading = true;
          this.timer = setTimeout(() => {
            done();
            setTimeout(() => {
              this.loading = false;
            }, 400);
          }, 2000);
        }).catch(() => {});
      }
    },
    cancelForm() {
      this.loading = false;
      this.$refs.form.close();
      clearTimeout(this.timer);
    },
  },
};
</script>
```