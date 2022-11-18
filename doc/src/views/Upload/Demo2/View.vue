<template>
  <sec-upload
    class="avatar-uploader"
    action="https://jsonplaceholder.typicode.com/posts/"
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload"
  >
    <img v-if="imageUrl" :src="imageUrl" alt="头像" class="avatar">
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
  </sec-upload>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: '',
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
  },
};
</script>

<style lang="less" scoped>
.avatar-uploader :deep(.el-upload) {
  position: relative;
  overflow: hidden;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    border-color: #409eff;
  }
}

.avatar-uploader-icon {
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
  font-size: 28px;
  color: #8c939d;
}

.avatar {
  display: block;
  width: 178px;
  height: 178px;
}
</style>
