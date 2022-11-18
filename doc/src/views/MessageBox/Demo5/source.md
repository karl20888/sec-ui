```vue
<template>
  <sec-btn type="text" @click="open">点击打开 Message Box</sec-btn>
</template>

<script>
export default {
  methods: {
    open() {
      this.$alert('<strong>这是 <i>HTML</i> 片段</strong>', 'HTML 片段', {
        dangerouslyUseHTMLString: true,
      });
    },
  },
};
</script>
```