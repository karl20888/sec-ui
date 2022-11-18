<template>
  <div>
    <sec-radio v-model="radio" label="禁用" disabled>备选项</sec-radio>
    <sec-radio v-model="radio" label="选中且禁用" disabled>备选项</sec-radio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: '选中且禁用',
    };
  },
};
</script>
