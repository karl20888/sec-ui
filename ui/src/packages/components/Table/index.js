import Table from './src/Table.vue';

Table.install = (Vue) => {
  Vue.component(Table.componentName, Table);
};

export default Table;
