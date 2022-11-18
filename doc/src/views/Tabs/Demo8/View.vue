<template>
  <div>
    <sec-form>
      <sec-form-item label="位置">
        <sec-radio-group v-model="position">
          <sec-radio-button label="top">top</sec-radio-button>
          <sec-radio-button label="right">right</sec-radio-button>
          <sec-radio-button label="bottom">bottom</sec-radio-button>
          <sec-radio-button label="left">left</sec-radio-button>
        </sec-radio-group>
      </sec-form-item>
      <sec-form-item label="样式">
        <sec-radio-group v-model="type">
          <sec-radio-button label="">普通</sec-radio-button>
          <sec-radio-button label="card">选项卡</sec-radio-button>
          <sec-radio-button label="border-card">卡片化</sec-radio-button>
        </sec-radio-group>
      </sec-form-item>
    </sec-form>
    <sec-tabs
      v-model="activeName"
      height="288px"
      :tabs="tabs"
      :tab-position="position"
      :type="type"
      @change="onChange"
    >
      <template #extra>
        <sec-btn type="text">新增</sec-btn>
      </template>
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
      position: 'left',
      type: '',
      tabs: [
        { label: '用户管理', name: 'first' },
        { label: '配置管理', name: 'second' },
        { label: '角色管理', name: 'third' },
        { label: '定时任务补偿', name: 'fourth' },
      ],
    };
  },
  methods: {
    onChange(active) {
      console.log(active);
    },
  },
};
</script>
