<template>
  <sec-dropdown @command="handleCommand">
    <span class="text-primary">
      下拉菜单<i class="el-icon-arrow-down ml5"></i>
    </span>
    <sec-dropdown-menu>
      <sec-dropdown-item command="a">黄金糕</sec-dropdown-item>
      <sec-dropdown-item command="b">狮子头</sec-dropdown-item>
      <sec-dropdown-item command="c">螺蛳粉</sec-dropdown-item>
      <sec-dropdown-item command="d" disabled>双皮奶</sec-dropdown-item>
      <sec-dropdown-item command="e" divided>蚵仔煎</sec-dropdown-item>
    </sec-dropdown-menu>
  </sec-dropdown>
</template>

<script>
export default {
  methods: {
    handleCommand(command) {
      this.$message(`click on item ${command}`);
    },
  },
};
</script>
