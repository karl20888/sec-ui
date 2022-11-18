<template>
  <div>
    <sec-form label-width="40px">
      <sec-form-item label="尺寸">
        <sec-radio-group v-model="size">
          <sec-radio label="mini">mini（默认）</sec-radio>
          <sec-radio label="samll">small</sec-radio>
          <sec-radio label="medium">medium</sec-radio>
          <sec-radio :label="100">数字100</sec-radio>
          <sec-radio label="200">字符串200</sec-radio>
          <sec-radio label="300px">300px</sec-radio>
          <sec-radio label="90%">90%</sec-radio>
        </sec-radio-group>
      </sec-form-item>
      <sec-form-item>
        <sec-btn type="primary" @click="$refs.drawer.open()">打开抽屉</sec-btn>
      </sec-form-item>
    </sec-form>
    <sec-drawer ref="drawer" title="标题" :size="size">
      内容
    </sec-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      size: 'mini',
    };
  },
};
</script>
