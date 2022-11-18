```vue
<template>
  <div>
    <sec-radio-group v-model="isCollapse" class="mb20">
      <sec-radio-button :label="false">展开</sec-radio-button>
      <sec-radio-button :label="true">收起</sec-radio-button>
    </sec-radio-group>
    <sec-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
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
        <template #title>导航四</template>
      </sec-menu-item>
    </sec-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true,
    };
  },
  methods: {
    handlOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
```