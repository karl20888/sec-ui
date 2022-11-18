<template>
  <div class="node" @click="add" @keydown.enter="add">
    内部Add：{{ num }}
  </div>
</template>

<script>
export default {
  inject: ['getGraph', 'getNode'],
  data() {
    return {
      num: 0,
    };
  },
  mounted() {
    const node = this.getNode();
    const { num } = node.getData();
    this.num = num;
    node.on('change:data', ({ current }) => {
      this.num = current.num;
    });
  },
  methods: {
    add() {
      const node = this.getNode();
      const { num } = node.getData();
      node.setData({
        num: num + 1,
      });
    },
  },
};
</script>

<style lang="less" scoped>
.node {
  width: 100%;
  height: 100%;
  border: 1px solid #c8c8c8;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
