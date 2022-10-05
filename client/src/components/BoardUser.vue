<template>
  <h3 style="margin-top: 30px; margin-bottom: 15px;">{{ content }}</h3>
  <template v-if="!error">
    <Chart />
    <CryptoMarket />
    <!-- <Snaps/> -->
    <Screener/>
  </template>
</template>

<script>
import UserService from "../services/user.service";
import { Chart, CryptoMarket, Screener } from 'vue-tradingview-widgets';

export default {
  name: "User",
  components: {
    Chart,
    CryptoMarket,
    Screener
  },
  data() {
    return {
      content: "",
      error: true,
    };
  },
  mounted() {
    UserService.getUserBoard().then(
      (response) => {
        this.content = response.data;
        this.error = false;
      },
      (error) => {
        const isError = (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message

        this.content = isError || error.toString();
      }
    );
  },
};
</script>
