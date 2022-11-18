<template>
  <div class="demo-menu">
    <sec-menu
      mode="horizontal"
      :default-active="activeIndex"
      @select="handleSelect"
    >
      <sec-menu-item index="1">处理中心</sec-menu-item>
      <sec-submenu index="2">
        <template #title>我的工作台</template>
        <sec-menu-item index="2-1">选项1</sec-menu-item>
        <sec-menu-item index="2-2">选项2</sec-menu-item>
        <sec-menu-item index="2-3">选项3</sec-menu-item>
        <sec-submenu index="2-4">
          <template #title>选项4</template>
          <sec-menu-item index="2-4-1">选项1</sec-menu-item>
          <sec-menu-item index="2-4-2">选项2</sec-menu-item>
          <sec-menu-item index="2-4-3">选项3</sec-menu-item>
        </sec-submenu>
      </sec-submenu>
      <sec-menu-item index="3" disabled>消息中心</sec-menu-item>
      <sec-menu-item index="4">
        <a href="https://www.ele.me" target="_blank">订单中心</a>
      </sec-menu-item>
    </sec-menu>
    <div class="line"></div>
    <sec-menu
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :default-active="activeIndex2"
      @select="handleSelect"
    >
      <sec-menu-item index="1">处理中心</sec-menu-item>
      <sec-submenu index="2">
        <template #title>我的工作台</template>
        <sec-menu-item index="2-1">选项1</sec-menu-item>
        <sec-menu-item index="2-2">选项2</sec-menu-item>
        <sec-menu-item index="2-3">选项3</sec-menu-item>
        <sec-submenu index="2-4">
          <template #title>选项4</template>
          <sec-menu-item index="2-4-1">选项1</sec-menu-item>
          <sec-menu-item index="2-4-2">选项2</sec-menu-item>
          <sec-menu-item index="2-4-3">选项3</sec-menu-item>
        </sec-submenu>
      </sec-submenu>
      <sec-menu-item index="3" disabled>消息中心</sec-menu-item>
      <sec-menu-item index="4">
        <a href="https://www.ele.me" target="_blank">订单中心</a>
      </sec-menu-item>
    </sec-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="less" scoped>
.sec-menu {
  padding-left: 55px;

  :deep(.el-submenu .el-submenu__title:hover) {
    background-color: #fff;
  }
}

.line {
  height: 1px;
  background-color: #e0e6ed;
  margin: 35px -24px;
}
</style>
