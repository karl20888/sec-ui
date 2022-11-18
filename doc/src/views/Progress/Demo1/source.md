```vue
<template>
  <div>
    <sec-progress :percentage="50"></sec-progress>
    <sec-progress :percentage="100" :format="format"></sec-progress>
    <sec-progress :percentage="100" status="success"></sec-progress>
    <sec-progress :percentage="100" status="warning"></sec-progress>
    <sec-progress :percentage="50" status="exception"></sec-progress>
  </div>
</template>

<script>
export default {
  methods: {
    format(percentage) {
      return percentage === 100 ? '满' : `${percentage}%`;
    },
  },
};
</script>

<style lang="less" scoped>
.sec-progress {
  width: 350px;
  margin-bottom: 15px;
}
</style>
```