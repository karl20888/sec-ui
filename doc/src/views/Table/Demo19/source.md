```vue
<template>
  <sec-table :data="tableData">
    <sec-table-column type="expand">
      <template #default="{ row }">
        <sec-form inline label-position="left" class="demo-table-expand">
          <sec-form-item label="商品名称">{{ row.name }}</sec-form-item>
          <sec-form-item label="所属店铺">{{ row.shop }}</sec-form-item>
          <sec-form-item label="商品 ID">{{ row.id }}</sec-form-item>
          <sec-form-item label="店铺 ID">{{ row.shopId }}</sec-form-item>
          <sec-form-item label="商品分类">{{ row.category }}</sec-form-item>
          <sec-form-item label="店铺地址">{{ row.address }}</sec-form-item>
          <sec-form-item label="商品描述">{{ row.desc }}</sec-form-item>
        </sec-form>
      </template>
    </sec-table-column>
    <sec-table-column label="商品名称" prop="name"></sec-table-column>
    <sec-table-column label="描述" prop="desc"></sec-table-column>
  </sec-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        id: '12987122',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333',
      }, {
        id: '12987123',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333',
      }, {
        id: '12987125',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333',
      }, {
        id: '12987126',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333',
      }],
    };
  },
};
</script>

<style lang="less" scoped>
.demo-table-expand .sec-form-item {
  width: 50%;
  margin-right: 0;
  margin-bottom: 0;

  :deep(.el-form-item__label) {
    width: 90px;
    color: #99a9bf;
  }
}
</style>
```