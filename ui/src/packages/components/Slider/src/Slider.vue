<template>
  <Slider class="sec-slider" v-bind="$attrs" v-on="$listeners"></Slider>
</template>

<script>
import { Slider } from 'element-ui';

export default {
  name: 'ElSlider',
  componentName: 'SecSlider',
  inheritAttrs: false,
  components: {
    Slider,
  },
};
</script>
