<template>
  <a-layout>
    <a-layout-content>
      <a-row type="flex" justify="center" :gutter="16">
        <a-col :span="8">
          <a-card>
            <a-skeleton v-if="!allCoins.length" />
            <Table v-else :data="allCoins" />
          </a-card>
        </a-col>
        <a-col :span="4">
          <a-card>
            <Form />
          </a-card>
        </a-col>
      </a-row>
    </a-layout-content>
  </a-layout>
</template>

<script lang="ts">
import { TCoin } from "@/types";

import { defineComponent, onBeforeMount, ref } from 'vue';
import Form from '@/components/Form.vue';
import Table from '@/components/Table.vue';
import Api from '@/api/index.ts';
import { AxiosResponse } from "axios";

export default defineComponent({
  name: 'App',
  components: {
    Form,
    Table,
  },
  setup() {
    const allCoins = ref<TCoin[] | []>([]);

    onBeforeMount(() => {
      Api.get()
          .then((response: AxiosResponse) => {
            console.log(22222, response);
            const coins: TCoin[] = response.data.Data?.map((coin: any) => {
              const {Name: name, FullName: fullName, ImageUrl: imgUrl} = coin.CoinInfo;
              const {PRICE: price, VOLUME24HOUR: volume24Hour} = coin.RAW.USD;

              const buildCoin: TCoin = {
                name,
                fullName,
                imgUrl: `https://cryptocompare.com/${imgUrl}`,
                price: price.toFixed(3),
                volume24Hour: volume24Hour.toFixed(3),
                key: name,
              }

              return buildCoin;
            });
            allCoins.value = coins;
          })
          .catch((error) => {
            console.log(error);
          });
    })
    return {
        allCoins,
      }
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
