```vue
<template>
  <div>
    <sec-radio v-model="radio" label="1">备选项</sec-radio>
    <sec-radio v-model="radio" label="2">备选项</sec-radio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: '1',
    };
  },
};
</script>
```