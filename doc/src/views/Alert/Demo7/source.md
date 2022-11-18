```vue
<template>
  <div>
    <sec-alert
      title="成功提示的文案"
      type="success"
      description="文字说明文字说明文字说明文字说明文字说明文字说明"
      show-icon
    ></sec-alert>
    <sec-alert
      title="消息提示的文案"
      type="info"
      description="文字说明文字说明文字说明文字说明文字说明文字说明"
      show-icon
    ></sec-alert>
    <sec-alert
      title="警告提示的文案"
      type="warning"
      description="文字说明文字说明文字说明文字说明文字说明文字说明"
      show-icon
    ></sec-alert>
    <sec-alert
      title="错误提示的文案"
      type="error"
      description="文字说明文字说明文字说明文字说明文字说明文字说明"
      show-icon
    ></sec-alert>
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
```