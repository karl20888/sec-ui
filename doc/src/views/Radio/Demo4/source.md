```vue
<template>
  <div>
    <sec-row>
      <sec-radio-group v-model="radio1" size="large">
        <sec-radio-button label="北京"></sec-radio-button>
        <sec-radio-button label="天津"></sec-radio-button>
        <sec-radio-button label="上海"></sec-radio-button>
        <sec-radio-button label="深圳"></sec-radio-button>
      </sec-radio-group>
    </sec-row>
    <sec-row class="mt20">
      <sec-radio-group v-model="radio2" size="medium">
        <sec-radio-button label="北京"></sec-radio-button>
        <sec-radio-button label="天津"></sec-radio-button>
        <sec-radio-button label="上海"></sec-radio-button>
        <sec-radio-button label="深圳"></sec-radio-button>
      </sec-radio-group>
    </sec-row>
    <sec-row class="mt20">
      <sec-radio-group v-model="radio3">
        <sec-radio-button label="北京"></sec-radio-button>
        <sec-radio-button label="天津"></sec-radio-button>
        <sec-radio-button label="上海"></sec-radio-button>
        <sec-radio-button label="深圳"></sec-radio-button>
      </sec-radio-group>
    </sec-row>
    <sec-row class="mt20">
      <sec-radio-group v-model="radio4" size="mini">
        <sec-radio-button label="北京"></sec-radio-button>
        <sec-radio-button label="天津"></sec-radio-button>
        <sec-radio-button label="上海"></sec-radio-button>
        <sec-radio-button label="深圳"></sec-radio-button>
      </sec-radio-group>
    </sec-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio1: '北京',
      radio2: '北京',
      radio3: '北京',
      radio4: '北京',
    };
  },
};
</script>
```