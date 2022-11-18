<template>
  <div>
    <sec-upload
      action="#"
      list-type="picture-card"
      :auto-upload="false"
    >
      <template #default>
        <i class="el-icon-plus"></i>
      </template>
      <template #file="{ file }">
        <img :src="file.url" alt="" class="el-upload-list__item-thumbnail">
        <span class="el-upload-list__item-actions">
          <span
            class="el-upload-list__item-preview"
            @click="handlePictureCardPreview(file)"
            @keydown="handlePictureCardPreview(file)"
          ><i class="el-icon-zoom-in"></i></span>
          <span
            v-if="!disabled"
            class="el-upload-list__item-delete"
            @click="handleDownload(file)"
            @keydown="handleDownload(file)"
          ><i class="el-icon-download"></i></span>
          <span
            v-if="!disabled"
            class="el-upload-list__item-delete"
            @click="handleRemove(file)"
            @keydown="handleRemove(file)"
          ><i class="el-icon-delete"></i></span>
        </span>
      </template>
    </sec-upload>
    <sec-dialog ref="dialog">
      <img :src="dialogImageUrl" alt="" width="100%">
    </sec-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogImageUrl: '',
      disabled: false,
    };
  },
  methods: {
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.$refs.dialog.open();
    },
    handleDownload(file) {
      console.log(file);
    },
  },
};
</script>
