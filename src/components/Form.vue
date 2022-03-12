<template>
  <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-row :gutter="10">
      <a-col :span="12">
        <a-input v-model:value="modelRef.name" placeholder="Currency" />
      </a-col>
      <a-col :span="12">
        <a-select v-model:value="modelRef.region" placeholder="Currency type">
            <a-select-option value="shanghai">Zone one</a-select-option>
            <a-select-option value="beijing">Zone two</a-select-option>
          </a-select>
      </a-col>
    </a-row>
    <a-divider type="vertical" />
    <a-row :gutter="10">
      <a-col :span="12">
        <a-input v-model:value="modelRef.name" placeholder="Currency" />
      </a-col>
      <a-col :span="12">
         <a-select v-model:value="modelRef.region" placeholder="Currency type">
            <a-select-option value="shanghai">Zone one</a-select-option>
            <a-select-option value="beijing">Zone two</a-select-option>
          </a-select>
      </a-col>
    </a-row>
  </a-form>
</template>

<script lang="ts">
import { defineComponent, reactive, toRaw } from 'vue';

export default defineComponent({
  setup() {
    const modelRef = reactive({
      name: '',
      region: undefined,
      type: [],
    });
    const submit = () => {
      console.log(toRaw(modelRef));
    }
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      modelRef,
      submit,
    };
  },
});
</script>