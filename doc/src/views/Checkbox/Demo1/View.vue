<template>
  <!-- `checked` 为 true 或 false -->
  <sec-checkbox v-model="checked">备选项</sec-checkbox>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
    };
  },
};
</script>
