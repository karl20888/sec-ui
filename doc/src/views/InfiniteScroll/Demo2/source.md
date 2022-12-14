```vue
<template>
  <div class="infinite-list-wrapper">
    <ul
      class="list"
      v-infinite-scroll="load"
      infinite-scroll-disabled="disabled"
    >
      <li v-for="i in count" :key="i" class="list-item">{{ i }}</li>
    </ul>
    <p v-if="loading">加载中...</p>
    <p v-if="noMore">没有更多了</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 10,
      loading: false,
    };
  },
  computed: {
    noMore() {
      return this.count >= 20;
    },
    disabled() {
      return this.loading || this.noMore;
    },
  },
  methods: {
    load() {
      this.loading = true;
      setTimeout(() => {
        this.count += 2;
        this.loading = false;
      }, 2000);
    },
  },
};
</script>

<style lang="less" scoped>
.infinite-list-wrapper {
  height: 300px;
  text-align: center;
  overflow: auto;

  .list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background-color: #fff6f6;
    color: #ff8484;

    + .list-item {
      margin-top: 10px;
    }
  }
}
</style>
```