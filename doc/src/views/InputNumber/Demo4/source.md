```vue
<template>
  <sec-input-number v-model="num" :step="2" step-strictly></sec-input-number>
</template>

<script>
export default {
  data() {
    return {
      num: 2,
    };
  },
};
</script>
```