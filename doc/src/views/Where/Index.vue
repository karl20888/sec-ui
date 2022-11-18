<template>
  <sec-block class="doc-block">
    <DocDemo>
      <template #source>
        <Demo2></Demo2>
      </template>
    </DocDemo>
    <DocDemo>
      <template #source>
        <Demo1></Demo1>
      </template>
    </DocDemo>
  </sec-block>
</template>

<script>
import DocDemo from '../DocDemo.vue';
import Demo1 from './Demo1/View.vue';
import Demo2 from './Demo2/View.vue';

export default {
  components: {
    DocDemo,
    Demo1,
    Demo2,
  },
};
</script>
