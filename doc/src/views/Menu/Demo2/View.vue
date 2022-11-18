<template>
  <sec-row class="tac">
    <sec-col :span="12">
      <h5>默认颜色</h5>
      <sec-menu
        default-active="2"
        @open="handleOpen"
        @close="handleClose"
      >
        <sec-submenu index="1">
          <template #title>
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <sec-menu-item-group>
            <template #title>分组一</template>
            <sec-menu-item index="1-1">选项1</sec-menu-item>
            <sec-menu-item index="1-2">选项2</sec-menu-item>
          </sec-menu-item-group>
          <sec-menu-item-group title="分组2">
            <sec-menu-item index="1-3">选项3</sec-menu-item>
          </sec-menu-item-group>
          <sec-submenu index="1-4">
            <template #title>选项4</template>
            <sec-menu-item index="1-4-1">选项1</sec-menu-item>
          </sec-submenu>
        </sec-submenu>
        <sec-menu-item index="2">
          <i class="el-icon-menu"></i>
          <template #title>导航二</template>
        </sec-menu-item>
        <sec-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <template #title>导航三</template>
        </sec-menu-item>
        <sec-menu-item index="4">
          <i class="el-icon-setting"></i>
          <template #title>导航4</template>
        </sec-menu-item>
      </sec-menu>
    </sec-col>
    <sec-col :span="12">
      <h5>自定义颜色</h5>
      <sec-menu
        default-active="2"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        @open="handleOpen"
        @close="handleClose"
      >
        <sec-submenu index="1">
          <template #title>
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <sec-menu-item-group>
            <template #title>分组一</template>
            <sec-menu-item index="1-1">选项1</sec-menu-item>
            <sec-menu-item index="1-2">选项2</sec-menu-item>
          </sec-menu-item-group>
          <sec-menu-item-group title="分组2">
            <sec-menu-item index="1-3">选项3</sec-menu-item>
          </sec-menu-item-group>
          <sec-submenu index="1-4">
            <template #title>选项4</template>
            <sec-menu-item index="1-4-1">选项1</sec-menu-item>
          </sec-submenu>
        </sec-submenu>
        <sec-menu-item index="2">
          <i class="el-icon-menu"></i>
          <template #title>导航二</template>
        </sec-menu-item>
        <sec-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <template #title>导航三</template>
        </sec-menu-item>
        <sec-menu-item index="4">
          <i class="el-icon-setting"></i>
          <template #title>导航4</template>
        </sec-menu-item>
      </sec-menu>
    </sec-col>
  </sec-row>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="less" scoped>
h5 {
  margin-top: 10px;
  margin-bottom: 1.67em;
  color: #8492a6;
}

.sec-menu {
  display: inline-block;
  text-align: left;
  width: 240px;
  min-height: 400px;
}
</style>
