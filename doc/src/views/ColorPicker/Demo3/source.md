```vue
<template>
  <sec-color-picker
    v-model="color"
    show-alpha
    :predefine="predefineColors"
  ></sec-color-picker>
</template>

<script>
export default {
  data() {
    return {
      color: 'rgba(255, 69, 0, .68)',
      predefineColors: [
        '#ff4500',
        '#ff8c00',
        '#ffd700',
        '#90ee90',
        '#00ced1',
        '#1e90ff',
        '#c71585',
        'rgba(255, 69, 0, .68)',
        'rgb(255, 120, 0)',
        'hsv(51, 100, 98)',
        'hsva(120, 40, 94, .5)',
        'hsl(181, 100%, 37%)',
        'hsla(209, 100%, 56%, .73)',
        '#c7158577',
      ],
    };
  },
};
</script>
```