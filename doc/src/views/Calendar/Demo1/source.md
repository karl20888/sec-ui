```vue
<template>
  <sec-calendar v-model="value"></sec-calendar>
</template>

<script>
export default {
  data() {
    return {
      value: new Date(),
    };
  },
};
</script>
```