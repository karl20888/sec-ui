```vue
<template>
  <div>
    <sec-table border show-summary :data="tableData">
      <sec-table-column label="ID" prop="id" width="180"></sec-table-column>
      <sec-table-column label="姓名" prop="name"></sec-table-column>
      <sec-table-column label="数值 1" prop="amount1" sortable></sec-table-column>
      <sec-table-column label="数值 2" prop="amount2" sortable></sec-table-column>
      <sec-table-column label="数值 3" prop="amount3" sortable></sec-table-column>
    </sec-table>
    <sec-table
      class="mt20"
      height="200"
      border
      show-summary
      :data="tableData"
      :summary-method="getSummaries"
    >
      <sec-table-column label="ID" prop="id" width="180"></sec-table-column>
      <sec-table-column label="姓名" prop="name"></sec-table-column>
      <sec-table-column label="数值 1（元）" prop="amount1"></sec-table-column>
      <sec-table-column label="数值 2（元）" prop="amount2"></sec-table-column>
      <sec-table-column label="数值 3（元）" prop="amount3"></sec-table-column>
    </sec-table>
  </div>
</template>

<script>
import {
  each,
  map,
  every,
  isNaN,
  reduce,
} from 'lodash';

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
    getSummaries(param) {
      const { columns, data } = param;
      const sums = [];
      each(columns, (column, index) => {
        if (index === 0) {
          sums[index] = '总价';
        } else {
          const values = map(data, (item) => Number(item[column.property]));
          if (every(values, (value) => isNaN(value))) {
            sums[index] = 'N/A';
          } else {
            sums[index] = reduce(values, (prev, curr) => {
              const value = Number(curr);
              if (isNaN(value)) {
                return prev;
              }
              return prev + curr;
            }, 0);
            sums[index] += ' 元';
          }
        }
      });
      return sums;
    },
  },
};
</script>
```