<template>
  <div>
    <sec-color-picker v-model="color" size="large"></sec-color-picker>
    <sec-color-picker v-model="color" size="medium"></sec-color-picker>
    <sec-color-picker v-model="color"></sec-color-picker>
    <sec-color-picker v-model="color" size="mini"></sec-color-picker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: '#F08300',
    };
  },
};
</script>

<style lang="less" scoped>
.sec-color-picker + .sec-color-picker {
  margin-left: 20px;
}
</style>
