<template>
  <sec-row>
    <sec-col
      v-for="(o, index) in 2"
      :key="o"
      :span="8"
      :offset="index > 0 ? 2 : 0"
    >
      <sec-card :body-style="{ padding: 0 }">
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" alt="图片" class="image">
        <div class="p14">
          <span>好吃的汉堡</span>
          <div class="bottom clearfix">
            <time class="time">{{ currentDate | dateFormat }}</time>
            <sec-btn type="text" class="button">操作按钮</sec-btn>
          </div>
        </div>
      </sec-card>
    </sec-col>
  </sec-row>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date(),
    };
  },
};
</script>

<style lang="less" scoped>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  display: block;
  width: 100%;
}

.p14 {
  padding: 14px;
}
</style>
