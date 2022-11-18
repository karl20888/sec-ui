<template>
  <sec-pager v-model="pager"></sec-pager>
</template>

<script>
export default {
  data() {
    return {
      pager: {
        page: 1,
        pageSize: 10,
        total: 1000,
      },
    };
  },
};
</script>
