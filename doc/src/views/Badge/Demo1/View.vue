<template>
  <div>
    <sec-badge class="item" :value="12">
      <sec-btn>评论</sec-btn>
    </sec-badge>
    <sec-badge class="item" :value="3">
      <sec-btn>回复</sec-btn>
    </sec-badge>
    <sec-badge type="primary" class="item" :value="1">
      <sec-btn>评论</sec-btn>
    </sec-badge>
    <sec-badge type="warning" class="item" :value="2">
      <sec-btn>回复</sec-btn>
    </sec-badge>
    <sec-dropdown trigger="click">
      <span class="sec-dropdown-link">
        点我查看<i class="el-icon-caret-bottom ml5"></i>
      </span>
      <sec-dropdown-menu>
        <sec-dropdown-item class="clearfix">
          评论
          <sec-badge class="mark" :value="12"></sec-badge>
        </sec-dropdown-item>
        <sec-dropdown-item class="clearfix">
          回复
          <sec-badge class="mark" :value="3"></sec-badge>
        </sec-dropdown-item>
      </sec-dropdown-menu>
    </sec-dropdown>
  </div>
</template>

<style lang="less" scoped>
.item {
  margin-right: 40px;
}

.sec-dropdown-link {
  cursor: pointer;
  color: #F08300;
}
</style>
