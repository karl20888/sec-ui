```vue
<template>
  <div>
    <sec-table border :data="tableData" :span-method="arraySpanMethod">
      <sec-table-column label="ID" prop="id" width="180"></sec-table-column>
      <sec-table-column label="姓名" prop="name"></sec-table-column>
      <sec-table-column label="数值 1" prop="amount1" sortable></sec-table-column>
      <sec-table-column label="数值 2" prop="amount2" sortable></sec-table-column>
      <sec-table-column label="数值 3" prop="amount3" sortable></sec-table-column>
    </sec-table>
    <sec-table border class="mt20" :data="tableData" :span-method="objectSpanMethod">
      <sec-table-column label="ID" prop="id" width="180"></sec-table-column>
      <sec-table-column label="姓名" prop="name"></sec-table-column>
      <sec-table-column label="数值 1（元）" prop="amount1"></sec-table-column>
      <sec-table-column label="数值 2（元）" prop="amount2"></sec-table-column>
      <sec-table-column label="数值 3（元）" prop="amount3"></sec-table-column>
    </sec-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        id: '12987122',
        name: '王小虎',
        amount1: '234',
        amount2: '3.2',
        amount3: 10,
      }, {
        id: '12987123',
        name: '王小虎',
        amount1: '165',
        amount2: '4.43',
        amount3: 12,
      }, {
        id: '12987124',
        name: '王小虎',
        amount1: '324',
        amount2: '1.9',
        amount3: 9,
      }, {
        id: '12987125',
        name: '王小虎',
        amount1: '621',
        amount2: '2.2',
        amount3: 17,
      }, {
        id: '12987126',
        name: '王小虎',
        amount1: '539',
        amount2: '4.1',
        amount3: 15,
      }],
    };
  },
  methods: {
    arraySpanMethod({ rowIndex, columnIndex }) {
      if (rowIndex % 2 === 0) {
        if (columnIndex === 0) {
          return [1, 2];
        }
        if (columnIndex === 1) {
          return [0, 0];
        }
      }
      return undefined;
    },
    objectSpanMethod({ rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1,
          };
        }
        return {
          rowspan: 0,
          colspan: 0,
        };
      }
      return undefined;
    },
  },
};
</script>
```