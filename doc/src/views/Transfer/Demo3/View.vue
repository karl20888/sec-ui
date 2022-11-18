<template>
  <div>
    <p class="tac mb20">使用 render-content 自定义数据项</p>
    <div class="tac">
      <sec-transfer
        v-model="value"
        filterable
        :left-default-checked="[2, 3]"
        :right-default-checked="[1]"
        :render-content="renderFunc"
        :titles="['Source', 'Target']"
        :button-texts="['到左边', '到右边']"
        :format="{
          noChecked: '${total}',
          hasChecked: '${checked}/${total}',
        }"
        :data="data"
        @change="handleChange"
      >
        <template #left-footer>
          <sec-btn class="transfer-footer">操作</sec-btn>
        </template>
        <template #right-footer>
          <sec-btn class="transfer-footer">操作</sec-btn>
        </template>
      </sec-transfer>
    </div>
    <p class="tac mb20 mt50">使用 scoped-slot 自定义数据项</p>
    <div class="tac">
      <sec-transfer
        v-model="value4"
        filterable
        :left-default-checked="[2, 3]"
        :right-default-checked="[1]"
        :titles="['Source', 'Target']"
        :button-texts="['到左边', '到右边']"
        :format="{
          noChecked: '${total}',
          hasChecked: '${checked}/${total}',
        }"
        :data="data"
        @change="handleChange"
      >
        <template #default="{ option }">
          {{ option.key }} 3- {{ option.label }}
        </template>
        <template #left-footer>
          <sec-btn class="transfer-footer">操作</sec-btn>
        </template>
        <template #right-footer>
          <sec-btn class="transfer-footer">操作</sec-btn>
        </template>
      </sec-transfer>
    </div>
  </div>
</template>

<script>
import { times } from 'lodash';

export default {
  data() {
    return {
      data: times(15, (i) => {
        const key = i + 1;
        return {
          key,
          label: `备选项 ${key}`,
          disabled: key % 4 === 0,
        };
      }),
      value: [1],
      value4: [1],
      renderFunc(h, option) {
        return h('span', `${option.key} - ${option.label}`);
      },
    };
  },

  methods: {
    handleChange(value, direction, movedKeys) {
      console.log(value, direction, movedKeys);
    },
  },
};
</script>

<style lang="less" scoped>
.sec-transfer {
  display: inline-block;
  text-align: left;
}

.transfer-footer {
  margin-left: 20px;
  padding: 6px 5px;
}
</style>
