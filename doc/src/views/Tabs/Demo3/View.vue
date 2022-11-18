<template>
  <div>
    <el-tabs type="border-card" class="mb20">
      <el-tab-pane label="用户管理">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>
    <sec-tabs type="border-card" :tabs="tabs">
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
      activeName: 'first',
      tabs: [
        { label: '用户管理', name: 'first' },
        { label: '配置管理', name: 'second' },
        { label: '角色管理', name: 'third' },
        { label: '定时任务补偿', name: 'fourth' },
      ],
    };
  },
};
</script>
