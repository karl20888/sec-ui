import TableColumn from '../Table/src/TableColumn.vue';

TableColumn.install = (Vue) => {
  Vue.component(TableColumn.componentName, TableColumn);
};

export default TableColumn;
