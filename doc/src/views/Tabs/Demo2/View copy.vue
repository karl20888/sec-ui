<template>
  <div>
    <sec-tabs
      v-model="active"
      type="border-card"
      :tabs="tabs"
      @change="onChange"
    >
      <template #label="{ label, name }">
        {{ label }} - {{ name }}
      </template>
      <template #extra>
        <sec-btn type="primary">新建主题</sec-btn>
      </template>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
      <p>lalala</p>
    </sec-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 'a',
      tabs: [
        { label: '用户管理', name: 'a' },
        { label: '配置管理', name: 'b' },
        { label: '角色管理', name: 'c' },
        { label: '定时任务补偿', name: 'd' },
      ],
    };
  },
  methods: {
    onChange(name) {
      console.log(name);
    },
  },
};
</script>
