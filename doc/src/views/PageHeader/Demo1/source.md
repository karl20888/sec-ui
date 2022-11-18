```vue
<template>
  <sec-page-header content="详情页面" @back="goBack"></sec-page-header>
</template>

<script>
export default {
  methods: {
    goBack() {
      console.log('go back');
    },
  },
};
</script>
```