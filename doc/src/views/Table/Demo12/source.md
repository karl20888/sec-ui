```vue
<template>
  <sec-table
    :data="tableData"
    :model.sync="filter"
    :filter-max="2"
    @filterChange="onFilterChange"
    @refresh="onRefresh"
  >
    <template #filter>
      <sec-form-item label="日期" prop="date" :default-value="null">
        <sec-date-picker
          v-model="filter.date"
          value-format="yyyy-MM-dd"
        ></sec-date-picker>
      </sec-form-item>
      <sec-form-item label="姓名" prop="name">
        <sec-input v-model="filter.name"></sec-input>
      </sec-form-item>
      <sec-form-item label="省份" prop="province">
        <sec-select v-model="filter.province">
          <sec-option label="上海" value="上海"></sec-option>
          <sec-option label="北京" value="北京"></sec-option>
        </sec-select>
      </sec-form-item>
      <sec-form-item label="市区" prop="city">
        <sec-select v-model="filter.city">
          <sec-option label="普陀区" value="普陀区"></sec-option>
          <sec-option label="朝阳区" value="朝阳区"></sec-option>
        </sec-select>
      </sec-form-item>
      <sec-form-item label="地址" prop="address">
        <sec-input v-model="filter.address"></sec-input>
      </sec-form-item>
      <sec-form-item label="邮箱" prop="zip">
        <sec-input v-model="filter.zip"></sec-input>
      </sec-form-item>
    </template>
    <template #extra>
      <sec-btn type="primary">新增</sec-btn>
    </template>
    <sec-table-column label="日期" prop="date" width="150" fixed></sec-table-column>
    <sec-table-column label="姓名" prop="name" width="120"></sec-table-column>
    <sec-table-column label="省份" prop="province" width="120"></sec-table-column>
    <sec-table-column label="市区" prop="city" width="120"></sec-table-column>
    <sec-table-column label="地址" prop="address" min-width="300"></sec-table-column>
    <sec-table-column label="邮箱" prop="zip" width="120"></sec-table-column>
  </sec-table>
</template>

<script>
export default {
  data() {
    return {
      filter: {
        date: null,
        name: '',
        province: '',
        city: '',
        address: '',
        zip: '',
      },
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
  methods: {
    onFilterChange(filter) {
      console.log(filter);
    },
    onRefresh() {
      console.log(this.filter);
    },
  },
};
</script>
```