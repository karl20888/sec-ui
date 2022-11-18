import Avatar from './src/Avatar.vue';

Avatar.install = (Vue) => {
  Vue.component(Avatar.componentName, Avatar);
};

export default Avatar;
