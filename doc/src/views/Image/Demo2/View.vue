<template>
  <div class="demo-image__placeholder">
    <div class="block">
      <span class="demonstration">默认</span>
      <sec-image :src="src"></sec-image>
    </div>
    <div class="block">
      <span class="demonstration">自定义</span>
      <sec-image :src="src">
        <template #placeholder>
          <div class="image-slot">
            加载中<span class="dot">...</span>
          </div>
        </template>
      </sec-image>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
    };
  },
};
</script>

<style lang="less" scoped>
.block {
  display: inline-block;
  width: 50%;
  padding: 30px 0;
  border-right: 1px solid #eff2f6;
  text-align: center;
  vertical-align: top;

  &:last-child {
    border-right: none;
  }
}

.demonstration {
  display: block;
  margin-bottom: 20px;
  font-size: 14px;
  color: #8492a6;
}

.sec-image {
  width: 300px;
  height: 200px;
}

@keyframes dot {
  0% {
    width: 0;
    margin-right: 1em
  }

  to {
    width: 1em;
    margin-right: 0
  }
}

:deep(.image-slot) {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #f5f7fa;
  color: #909399;
  font-size: 14px;

  .dot {
    animation: dot 2s steps(3, start) infinite;
    overflow: hidden;
  }
}
</style>
