```vue
<template>
  <div>
    <div class="block">
      <span class="demonstration">显示总数</span>
      <sec-pager v-model="pager" layout="total, prev, pager, next"></sec-pager>
    </div>
    <div class="block">
      <span class="demonstration">调整每页显示条数</span>
      <sec-pager
        v-model="pager"
        layout="sizes, prev, pager, next"
        :page-sizes="[100, 200, 300, 400]"
      ></sec-pager>
    </div>
    <div class="block">
      <span class="demonstration">直接前往</span>
      <sec-pager
        v-model="pager"
        layout="prev, pager, next, jumper"
      ></sec-pager>
    </div>
    <div class="block">
      <span class="demonstration">完整功能</span>
      <sec-pager
        v-model="pager"
        layout="total, sizes, prev, pager, next, jumper"
        :page-sizes="[100, 200, 300, 400]"
      ></sec-pager>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pager: {
        page: 1,
        pageSize: 100,
        total: 1000,
      },
    };
  },
};
</script>
```