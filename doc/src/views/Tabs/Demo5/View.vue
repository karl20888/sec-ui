<template>
  <div>
    <el-tabs type="border-card" class="mb20">
      <el-tab-pane>
        <template #label>
          <i class="el-icon-date"></i>
          我的行程
        </template>
        我的行程
      </el-tab-pane>
      <el-tab-pane label="消息中心">消息中心</el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>
    <sec-tabs v-model="active" :tabs="tabs" type="border-card">
      <template #label="{ label, name }">
        <template v-if="name === 'a'">
          <i class="el-icon-date"></i>
          {{ label }}
        </template>
        <template v-else>
          {{ label }}
        </template>
      </template>
      <template v-if="active === 'a'">我的行程</template>
      <template v-if="active === 'b'">消息中心</template>
      <template v-if="active === 'c'">角色管理</template>
      <template v-if="active === 'd'">定时任务补偿</template>
    </sec-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 'a',
      tabs: [
        { label: '我的行程', name: 'a' },
        { label: '消息中心', name: 'b' },
        { label: '角色管理', name: 'c' },
        { label: '定时任务补偿', name: 'd' },
      ],
    };
  },
};
</script>
