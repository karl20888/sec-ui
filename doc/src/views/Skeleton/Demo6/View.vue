<template>
  <div style="width: 400px;">
    <p class="mb15">
      <sec-btn @click="setLoading">点击重新加载</sec-btn>
    </p>
    <sec-skeleton animated style="width: 400px;" :loading="loading" :count="3">
      <template #template>
        <sec-skeleton-item variant="image" style="width: 400px; height: 267px;"></sec-skeleton-item>
        <div style="padding: 14px;">
          <sec-skeleton-item variant="h3" style="width: 50%;"></sec-skeleton-item>
          <div
            style="
              display: flex;
              align-items: center;
              justify-items: space-between;
              margin-top: 16px;
              height: 16px;
            "
          >
            <sec-skeleton-item variant="text" style="margin-right: 16px;"></sec-skeleton-item>
            <sec-skeleton-item variant="text" style="width: 30%;"></sec-skeleton-item>
          </div>
        </div>
      </template>
      <sec-card
        v-for="item in lists"
        :key="item.name"
        :body-style="{
          'padding': '0',
          'margin-bottom': '1px',
        }"
      >
        <img :src="item.imgUrl" alt="image" class="multi-content">
        <div style="padding: 14px;">
          <span>{{ item.name }}</span>
          <div class="card-header">
            <span class="time">{{ currentDate }}</span>
            <sec-btn type="text" class="button">操作按钮</sec-btn>
          </div>
        </div>
      </sec-card>
    </sec-skeleton>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      currentDate: '2021-06-01',
      lists: [],
    };
  },
  mounted() {
    this.loading = false;
    this.lists = [{
      imgUrl: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
      name: '鹿',
    }, {
      imgUrl: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
      name: '马',
    }, {
      imgUrl: 'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
      name: '山狮',
    }];
  },
  methods: {
    setLoading() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },
  },
};
</script>

<style lang="less" scoped>
.sec-card {
  margin-bottom: 15px;
}

.multi-content {
  display: block;
  width: 400px;
  height: 267px;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  line-height: 12px;
}

.time {
  font-size: 12px;
  color: #999;
}

.button {
  padding: 0;
  min-height: auto;
}
</style>
