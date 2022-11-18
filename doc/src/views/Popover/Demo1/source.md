```vue
<template>
  <div>
    <sec-popover
      title="标题"
      width="200"
      placement="top-start"
      trigger="hover"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    >
      <template #reference>
        <sec-btn>hover 激活</sec-btn>
      </template>
    </sec-popover>
    <sec-popover
      title="标题"
      width="200"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    >
      <template #reference>
        <sec-btn>click 激活</sec-btn>
      </template>
    </sec-popover>
    <sec-popover
      ref="popover"
      title="标题"
      width="200"
      placement="right"
      trigger="focus"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    ></sec-popover>
    <sec-btn v-popover:popover>focus 激活</sec-btn>
    <sec-popover
      v-model="visible"
      title="标题"
      width="200"
      trigger="manual"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    >
      <template #reference>
        <sec-btn @click="visible = !visible">手动激活</sec-btn>
      </template>
    </sec-popover>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
};
</script>

<style lang="less" scoped>
.sec-btn {
  margin-left: 10px;
}
</style>
```