<template>
  <div>
    <sec-btn type="primary" @click="open">点我打开</sec-btn>
    <sec-drawer ref="drawer" title="我是标题" :with-header="false" before-close-tip>
      我来啦！
    </sec-drawer>
  </div>
</template>

<script>
export default {
  methods: {
    open() {
      this.$refs.drawer.open();
    },
  },
};
</script>
