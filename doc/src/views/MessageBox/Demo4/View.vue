<template>
  <sec-btn type="text" @click="open">点击打开 Message Box</sec-btn>
</template>

<script>
/* eslint-disable no-param-reassign */

export default {
  methods: {
    open() {
      const h = this.$createElement;
      this.$msgbox({
        title: '消息',
        message: h('p', null, [
          h('span', null, '内容可以是 '),
          h('i', { style: 'color: teal' }, 'VNode'),
        ]),
        showCancelButton: true,
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonLoading = true;
            instance.confirmButtonText = '执行中...';
            setTimeout(() => {
              done();
              setTimeout(() => {
                instance.confirmButtonLoading = false;
              }, 300);
            }, 3000);
          } else {
            done();
          }
        },
      }).then((action) => {
        this.$message.info(`action: ${action}`);
      }).catch(() => {});
    },
  },
};
</script>
