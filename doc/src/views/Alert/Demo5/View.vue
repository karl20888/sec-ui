<template>
  <div>
    <sec-alert title="成功提示的文案" type="success" center show-icon></sec-alert>
    <sec-alert title="消息提示的文案" type="info" center show-icon></sec-alert>
    <sec-alert title="警告提示的文案" type="warning" center show-icon></sec-alert>
    <sec-alert title="错误提示的文案" type="error" center show-icon></sec-alert>
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
