import Vue from 'vue';
import Popover from './src/Popover.vue';
import directive from './src/directive';

Vue.directive('popover', directive);

Popover.install = (vue) => {
  vue.directive('popover', directive);
  vue.component(Popover.componentName, Popover);
};

Popover.directive = directive;

export default Popover;
