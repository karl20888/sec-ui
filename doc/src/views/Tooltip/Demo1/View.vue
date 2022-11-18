<template>
  <div class="box">
    <div class="top">
      <sec-tooltip class="item" content="Top Left 提示文字" placement="top-start">
        <sec-btn>上左</sec-btn>
      </sec-tooltip>
      <sec-tooltip class="item" content="Top Center 提示文字" placement="top">
        <sec-btn>上边</sec-btn>
      </sec-tooltip>
      <sec-tooltip class="item" content="Top Right 提示文字" placement="top-end">
        <sec-btn>上右</sec-btn>
      </sec-tooltip>
    </div>
    <div class="left">
      <sec-tooltip class="item" content="Left Top 提示文字" placement="left-start">
        <sec-btn>左上</sec-btn>
      </sec-tooltip>
      <sec-tooltip class="item" content="Left Center 提示文字" placement="left">
        <sec-btn>左边</sec-btn>
      </sec-tooltip>
      <sec-tooltip class="item" content="Left Bottom 提示文字" placement="left-end">
        <sec-btn>左下</sec-btn>
      </sec-tooltip>
    </div>

    <div class="right">
      <sec-tooltip class="item" content="Right Top 提示文字" placement="right-start">
        <sec-btn>右上</sec-btn>
      </sec-tooltip>
      <sec-tooltip class="item" content="Right Center 提示文字" placement="right">
        <sec-btn>右边</sec-btn>
      </sec-tooltip>
      <sec-tooltip class="item" content="Right Bottom 提示文字" placement="right-end">
        <sec-btn>右下</sec-btn>
      </sec-tooltip>
    </div>
    <div class="bottom">
      <sec-tooltip class="item" content="Bottom Left 提示文字" placement="bottom-start">
        <sec-btn>下左</sec-btn>
      </sec-tooltip>
      <sec-tooltip class="item" content="Bottom Center 提示文字" placement="bottom">
        <sec-btn>下边</sec-btn>
      </sec-tooltip>
      <sec-tooltip class="item" content="Bottom Right 提示文字" placement="bottom-end">
        <sec-btn>下右</sec-btn>
      </sec-tooltip>
    </div>
  </div>
</template>

<style lang="less" scoped>
.box {
  width: 400px;

  .top {
    text-align: center;
  }

  .left {
    float: left;
    width: 60px;
  }

  .right {
    float: right;
    width: 60px;
  }

  .bottom {
    clear: both;
    text-align: center;
  }

  .item {
    margin: 4px;
  }
}
</style>
