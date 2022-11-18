<template>
  <div>
    <sec-alert type="success" title="成功提示的文案"></sec-alert>
    <sec-alert type="info" title="消息提示的文案"></sec-alert>
    <sec-alert type="warning" title="警告提示的文案"></sec-alert>
    <sec-alert type="error" title="错误提示的文案"></sec-alert>
  </div>
</template>

<style lang="less" scoped>
.sec-alert {
  margin-top: 20px;

  &:first-child {
    margin-top: 0;
  }
}
</style>
