<template>
  <div style="background:#ECECEC; padding:30px">
    <a-card :title="ipInfo.query" :bordered="false" style="width: 300px">
      <p>国家：{{ ipInfo.country }}</p>
      <p>地区：{{ ipInfo.regionName }}</p>
      <p>城市：{{ ipInfo.city }}</p>
      <p>供应商：{{ ipInfo.isp }}</p>
    </a-card>
  </div>
</template>

<script>
import { getIpInfo } from "@/http/client.js";

export default {
  data() {
    return {
      ipInfo: {
        status: "success",
        country: "China",
        countryCode: "CN",
        region: "BJ",
        regionName: "Beijing",
        city: "Beijing",
        zip: "",
        lat: 39.9288,
        lon: 116.3889,
        timezone: "Asia/Shanghai",
        isp: "China Unicom Beijing Province Network",
        org: "",
        as: "AS4808 China Unicom Beijing Province Network",
        query: "111.192.175.194"
      }
    };
  },
  mounted() {
    getIpInfo().then(json => (this.ipInfo = json));
  }
};
</script>

<style></style>
