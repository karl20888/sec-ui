<template>
  <div>
    <sec-btn type="primary" @click="open">点我打开</sec-btn>
    <sec-drawer ref="drawer" title="我是外面的 Drawer" size="50%">
      <sec-btn @click="open2">打开里面的！</sec-btn>
      <sec-drawer
        ref="drawer2"
        title="我是里面的"
        size="50%"
        before-close-tip
      >
        <p>_(:зゝ∠)_</p>
      </sec-drawer>
    </sec-drawer>
  </div>
</template>

<script>
export default {
  methods: {
    open() {
      this.$refs.drawer.open();
    },
    open2() {
      this.$refs.drawer2.open();
    },
  },
};
</script>
