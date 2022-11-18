```vue
<template>
  <sec-radio-group v-model="radio">
    <sec-radio :label="3">备选项</sec-radio>
    <sec-radio :label="6">备选项</sec-radio>
    <sec-radio :label="9">备选项</sec-radio>
  </sec-radio-group>
</template>

<script>
export default {
  data() {
    return {
      radio: 3,
    };
  },
};
</script>
```