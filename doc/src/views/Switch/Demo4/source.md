```vue
<template>
  <div>
    <sec-switch v-model="value1" disabled></sec-switch>
    <sec-switch v-model="value2" disabled></sec-switch>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: true,
      value2: false,
    };
  },
};
</script>

<style lang="less" scoped>
.sec-switch {
  margin-right: 20px;
}
</style>
```