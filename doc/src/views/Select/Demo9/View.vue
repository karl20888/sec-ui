<template>
  <sec-select
    v-model="value"
    placeholder="请输入关键词"
    multiple
    filterable
    remote
    reserve-keyword
    :remote-method="remoteMethod"
    :loading="loading"
  >
    <sec-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    ></sec-option>
  </sec-select>
</template>

<script>
import {
  map,
  filter,
  toLower,
  includes,
} from 'lodash';

export default {
  data() {
    return {
      options: [],
      value: [],
      list: [],
      loading: false,
      states: ['Alabama', 'Alaska', 'Arizona',
        'Arkansas', 'California', 'Colorado',
        'Connecticut', 'Delaware', 'Florida',
        'Georgia', 'Hawaii', 'Idaho', 'Illinois',
        'Indiana', 'Iowa', 'Kansas', 'Kentucky',
        'Louisiana', 'Maine', 'Maryland',
        'Massachusetts', 'Michigan', 'Minnesota',
        'Mississippi', 'Missouri', 'Montana',
        'Nebraska', 'Nevada', 'New Hampshire',
        'New Jersey', 'New Mexico', 'New York',
        'North Carolina', 'North Dakota', 'Ohio',
        'Oklahoma', 'Oregon', 'Pennsylvania',
        'Rhode Island', 'South Carolina',
        'South Dakota', 'Tennessee', 'Texas',
        'Utah', 'Vermont', 'Virginia',
        'Washington', 'West Virginia', 'Wisconsin',
        'Wyoming'],
    };
  },
  mounted() {
    this.list = map(this.states, (item) => ({
      value: `value:${item}`,
      label: `label:${item}`,
    }));
  },
  methods: {
    remoteMethod(query) {
      if (query !== '') {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.options = filter(this.list, (item) => includes(
            toLower(item.label),
            toLower(query),
          ));
        }, 200);
      } else {
        this.options = [];
      }
    },
  },
};
</script>
