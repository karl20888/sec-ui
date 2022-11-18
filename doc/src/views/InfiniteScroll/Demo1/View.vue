<template>
  <ul class="infinite-list" v-infinite-scroll="load">
    <li v-for="i in count" :key="i" class="infinite-list-item">{{ i }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    load() {
      this.count += 2;
    },
  },
};
</script>

<style lang="less" scoped>
.infinite-list {
  height: 300px;
  overflow-y: auto;
}

.infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background-color: #e8f3fe;
  margin: 10px;
  color: #7dbcfc;
}
</style>
