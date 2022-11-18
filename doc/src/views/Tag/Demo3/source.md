```vue
<template>
  <div>
    <sec-tag
      v-for="tag in dynamicTags"
      :key="tag"
      size="large"
      closable
      @close="handleClose(tag)"
    >{{ tag }}</sec-tag>
    <sec-input
      v-if="inputVisible"
      v-model="inputValue"
      ref="saveTagInput"
      class="input-new-tag"
      trim
      @keyup.enter.native="handleInputConfirm"
      @blur="handleInputConfirm"
    ></sec-input>
    <sec-btn v-else class="button-new-tag" @click="showInput">+ New Tag</sec-btn>
  </div>
</template>

<script>
import { includes } from 'lodash';

export default {
  data() {
    return {
      dynamicTags: ['标签一', '标签二', '标签三'],
      inputVisible: false,
      inputValue: '',
    };
  },
  methods: {
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },
    showInput() {
      this.inputVisible = true;
      this.$nextTick(() => {
        this.$refs.saveTagInput.focus();
      });
    },
    handleInputConfirm() {
      const { inputValue } = this;
      if (inputValue) {
        if (includes(this.dynamicTags, inputValue)) {
          this.$message.error('已含有此标签');
        } else {
          this.dynamicTags.push(inputValue);
        }
      }
      this.inputVisible = false;
      this.inputValue = '';
    },
  },
};
</script>

<style lang="less" scoped>
.sec-tag + .sec-tag {
  margin-left: 10px;
}

.button-new-tag {
  margin-left: 10px;
}

.input-new-tag {
  width: 90px;
  margin-left: 10px;
}
</style>
```