<template>
  <div class="sec-login">
    <canvas-background></canvas-background>
    <div class="sec-login-container">
      <div class="sec-login-header">
        <slot name="header">
          <img src="@/assets/logo.png" :alt="brand">
        </slot>
      </div>
      <div class="sec-login-main">
        <slot name="banner">
          <div v-if="banner.length" class="sec-login-banner">
            <el-carousel arrow="never">
              <el-carousel-item
                v-for="(item, index) in banner"
                :key="index"
              >
                <div class="sec-login-banner-item">
                  <el-image :src="item.src"></el-image>
                  <strong>{{ item.label }}</strong>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
        </slot>
        <div class="sec-login-wrap">
          <div class="sec-login-box">
            <slot name="title">
              <sec-image :src="logo" class="sec-login-title"></sec-image>
            </slot>
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  Carousel as ElCarousel,
  CarouselItem as ElCarouselItem,
  Image as ElImage,
} from 'element-ui';
import CanvasBackground from './CavasBackground.vue';
import logo from '@/assets/logo.png';

export default {
  name: 'SecLogin',
  componentName: 'SecLogin',
  components: {
    ElCarousel,
    ElCarouselItem,
    ElImage,
    CanvasBackground,
  },
  props: {
    brand: {
      type: String,
      default: '后台管理系统',
    },
    banner: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      logo,
    };
  },
};
</script>
