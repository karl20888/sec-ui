<template>
  <div>
    <sec-dropdown>
      <sec-btn type="primary">
        更多菜单
        <i class="el-icon-arrow-down ml5"></i>
      </sec-btn>
      <sec-dropdown-menu>
        <sec-dropdown-item>黄金糕</sec-dropdown-item>
        <sec-dropdown-item>狮子头</sec-dropdown-item>
        <sec-dropdown-item>螺蛳粉</sec-dropdown-item>
        <sec-dropdown-item>双皮奶</sec-dropdown-item>
        <sec-dropdown-item>蚵仔煎</sec-dropdown-item>
      </sec-dropdown-menu>
    </sec-dropdown>
    <sec-dropdown split-button type="primary" class="ml15" @click="handleClick">
      更多菜单
      <sec-dropdown-menu>
        <sec-dropdown-item>黄金糕</sec-dropdown-item>
        <sec-dropdown-item>狮子头</sec-dropdown-item>
        <sec-dropdown-item>螺蛳粉</sec-dropdown-item>
        <sec-dropdown-item>双皮奶</sec-dropdown-item>
        <sec-dropdown-item>蚵仔煎</sec-dropdown-item>
      </sec-dropdown-menu>
    </sec-dropdown>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      console.log('button click');
    },
  },
};
</script>

<style lang="less" scoped>
.sec-dropdown {
  vertical-align: middle;
}
</style>
