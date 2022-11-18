<template>
  <div>
    <div class="tag-group">
      <span class="tag-group-title">Dark</span>
      <sec-tag
        v-for="item in items"
        :key="item.label"
        :type="item.type"
        effect="dark"
      >{{ item.label }}</sec-tag>
    </div>
    <div class="tag-group">
      <span class="tag-group-title">Plain</span>
      <sec-tag
        v-for="item in items"
        :key="item.label"
        :type="item.type"
        effect="plain"
      >{{ item.label }}</sec-tag>
    </div>
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

.tag-group {
  display: flex;
  align-items: center;

  + .tag-group {
    margin-top: 10px;
  }
}

.tag-group-title {
  width: 45px;
  color: #606266;
}
</style>
