<template>
  <sec-btn plain @click="openHTML">使用 HTML 片段</sec-btn>
</template>

<script>
export default {
  methods: {
    openHTML() {
      this.$message({
        message: '<strong>这是 <i>HTML</i> 片段</strong>',
        dangerouslyUseHTMLString: true,
      });
    },
  },
};
</script>
