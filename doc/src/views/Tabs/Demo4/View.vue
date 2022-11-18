<template>
  <div>
    <sec-radio-group v-model="tabPosition" class="mb20">
      <sec-radio-button label="top">top</sec-radio-button>
      <sec-radio-button label="right">right</sec-radio-button>
      <sec-radio-button label="bottom">bottom</sec-radio-button>
      <sec-radio-button label="left">left</sec-radio-button>
    </sec-radio-group>
    <el-tabs :tab-position="tabPosition" class="mb20" style="height: 200px;">
      <el-tab-pane label="用户管理">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>
    <sec-tabs v-model="active" :tabs="tabs" :tab-position="tabPosition" height="200px">
      <template v-if="active === 'a'">用户管理</template>
      <template v-if="active === 'b'">配置管理</template>
      <template v-if="active === 'c'">角色管理</template>
      <template v-if="active === 'd'">定时任务补偿</template>
    </sec-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabPosition: 'left',
      active: 'a',
      tabs: [
        { label: '用户管理', name: 'a' },
        { label: '配置管理', name: 'b' },
        { label: '角色管理', name: 'c' },
        { label: '定时任务补偿', name: 'd' },
      ],
    };
  },
};
</script>
