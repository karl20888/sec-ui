<template>
  <sec-popover
    v-model="visible"
    placement="top"
    width="160"
  >
    <p>这是一段内容这是一段内容确定删除吗？</p>
    <div class="tar">
      <sec-btn type="text" size="mini" @click="visible = false">取消</sec-btn>
      <sec-btn type="primary" size="mini" @click="visible = false">确定</sec-btn>
    </div>
    <template #reference>
      <sec-btn>删除</sec-btn>
    </template>
  </sec-popover>
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
