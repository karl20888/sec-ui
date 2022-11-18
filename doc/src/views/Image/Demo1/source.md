```vue
<template>
  <div>
    <div class="block" v-for="fit in fits" :key="fit">
      <span class="demonstration">{{ fit }}</span>
      <sec-image :src="url" :fit="fit"></sec-image>
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
.block {
  display: inline-block;
  width: 20%;
  padding: 30px 0;
  border-right: 1px solid #eff2f6;
  text-align: center;
  vertical-align: top;
}

.demonstration {
  display: block;
  margin-bottom: 20px;
  color: #8492a6;
}

.sec-image {
  width: 100px;
  height: 100px;
}
</style>
```