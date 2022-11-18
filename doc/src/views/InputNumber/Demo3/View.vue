<template>
  <sec-input-number v-model="num" :step="2"></sec-input-number>
</template>

<script>
export default {
  data() {
    return {
      num: 5,
    };
  },
};
</script>
