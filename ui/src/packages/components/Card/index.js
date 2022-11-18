import Card from './src/Card.vue';

Card.install = (Vue) => {
  Vue.component(Card.componentName, Card);
};

export default Card;
