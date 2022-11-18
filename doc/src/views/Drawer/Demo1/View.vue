<template>
  <div>
    <sec-radio-group v-model="direction">
      <sec-radio label="ltr">从左往右开</sec-radio>
      <sec-radio label="rtl">从右往左开</sec-radio>
      <sec-radio label="ttb">从上往下开</sec-radio>
      <sec-radio label="btt">从下往上开</sec-radio>
    </sec-radio-group>
    <sec-btn type="primary" class="ml15" @click="open">点我打开</sec-btn>
    <sec-drawer
      ref="drawer"
      title="我是标题"
      :direction="direction"
      :before-close="handleClose"
    >
      <p>我来啦</p>
    </sec-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      direction: 'rtl',
    };
  },
  methods: {
    open() {
      this.$refs.drawer.open();
    },
    close() {
      this.$refs.drawer.close();
    },
    handleClose(done) {
      this.$confirm('确认关闭？').then(() => {
        done();
      }).catch(() => {});
    },
  },
};
</script>
