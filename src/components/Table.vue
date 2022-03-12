<template>
    <a-table :columns="columns" :data-source="data">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'imgUrl'">
          <img :src="record.imgUrl" :class="$style.img" />
      </template>
      <template v-else-if="column.key === 'price'">
        <span>${{record.price}}</span>
      </template>
      <template v-else-if="column.key === 'volume24Hour'">
        <span>${{record.volume24Hour}}</span>
      </template>
      </template>
  </a-table>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { TCoin } from "@/types";
import { columns, colors } from '@/constants/table.ts';

export default defineComponent({
  props: {
    data: {
      type: Array as PropType<TCoin[]>,
      required: true,
    }
  },
  setup() {
    return {
      columns,
    };
  },
});
</script>

<style module>
.img {
  width: 24px;
  height: 24px;
}
</style>