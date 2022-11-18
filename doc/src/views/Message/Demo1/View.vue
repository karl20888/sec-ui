<template>
  <div>
    <sec-btn plain @click="open">打开消息提示</sec-btn>
    <sec-btn plain @click="openVn">VNode</sec-btn>
  </div>
</template>

<script>
export default {
  methods: {
    open() {
      this.$message('这是一条消息提示');
    },
    openVn() {
      const h = this.$createElement;
      this.$message({
        message: h('p', null, [
          h('span', null, '内容可以是 '),
          h('i', { style: 'color: teal' }, 'VNode'),
        ]),
      });
    },
  },
};
</script>
