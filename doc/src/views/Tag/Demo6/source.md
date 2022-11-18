```vue
<template>
  <div>
    <sec-tag
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      state
    >{{ item.label }}</sec-tag>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { type: '', label: '标签一' },
        { type: 'success', label: '标签二' },
        { type: 'info', label: '标签三' },
        { type: 'danger', label: '标签四' },
        { type: 'warning', label: '标签五' },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.sec-tag + .sec-tag {
  margin-left: 10px;
}
</style>
```