<template>
  <div>
    <sec-alert title="成功提示的文案" type="success" show-icon></sec-alert>
    <sec-alert title="消息提示的文案" type="info" show-icon></sec-alert>
    <sec-alert title="警告提示的文案" type="warning" show-icon></sec-alert>
    <sec-alert title="错误提示的文案" type="error" show-icon></sec-alert>
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
