<template>
  <sec-btn plain @click="open">使用 HTML 片段</sec-btn>
</template>

<script>
export default {
  methods: {
    open() {
      this.$notify({
        title: 'HTML 片段',
        message: '<strong>这是 <i>HTML</i> 片段</strong>',
        dangerouslyUseHTMLString: true,
      });
    },
  },
};
</script>
