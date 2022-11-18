```vue
<template>
  <div>
    <el-tabs v-model="activeName" type="card" class="mb20" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
    <sec-tabs v-model="activeName" type="card" :tabs="tabs" @change="onChange">
      <template v-if="activeName === 'first'">用户管理</template>
      <template v-else-if="activeName === 'second'">配置管理</template>
      <template v-else-if="activeName === 'third'">角色管理</template>
      <template v-else-if="activeName === 'fourth'">定时任务补偿</template>
    </sec-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: 'second',
      tabs: [
        { label: '用户管理', name: 'first' },
        { label: '配置管理', name: 'second' },
        { label: '角色管理', name: 'third' },
        { label: '定时任务补偿', name: 'fourth' },
      ],
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    onChange(active) {
      console.log(active);
    },
  },
};
</script>
```