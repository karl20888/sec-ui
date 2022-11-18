```vue
<template>
  <sec-color-picker v-model="color" show-alpha></sec-color-picker>
</template>

<script>
export default {
  data() {
    return {
      color: 'rgba(19, 206, 102, .8)',
    };
  },
};
</script>
```