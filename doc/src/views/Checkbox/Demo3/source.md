```vue
<template>
  <sec-checkbox-group v-model="checkList">
    <sec-checkbox label="复选框 A"></sec-checkbox>
    <sec-checkbox label="复选框 B"></sec-checkbox>
    <sec-checkbox label="复选框 C"></sec-checkbox>
    <sec-checkbox label="禁用" disabled></sec-checkbox>
    <sec-checkbox label="选中且禁用" disabled></sec-checkbox>
  </sec-checkbox-group>
</template>

<script>
export default {
  data() {
    return {
      checkList: ['选中且禁用', '复选框 A'],
    };
  },
};
</script>
```