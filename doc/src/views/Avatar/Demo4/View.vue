<template>
  <div class="demo-fit">
    <div v-for="fit in fits" :key="fit" class="block">
      <span class="title">{{ fit }}</span>
      <sec-avatar shape="square" :size="100" :fit="fit" :src="url"></sec-avatar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    };
  },
};
</script>

<style lang="less" scoped>
.demo-fit {
  display: flex;
  text-align: center;
  justify-content: space-between;

  .block {
    flex: 1;
    display: flex;
    flex-direction: column;
    flex-grow: 0;
  }

  .title {
    margin-bottom: 10px;
    color: #8492a6;
  }
}
</style>
