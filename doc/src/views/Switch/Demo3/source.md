```vue
<template>
  <sec-tooltip :content="`Switch value: ${value}`" placement="top">
    <sec-switch
      v-model="value"
      active-value="100"
      inactive-value="0"
    ></sec-switch>
  </sec-tooltip>
</template>

<script>
export default {
  data() {
    return {
      value: '100',
    };
  },
};
</script>
```