```vue
<template>
  <div>
    <sec-checkbox v-model="checked1" disabled>备选项1</sec-checkbox>
    <sec-checkbox v-model="checked2" disabled>备选项</sec-checkbox>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked1: false,
      checked2: true,
    };
  },
};
</script>
```