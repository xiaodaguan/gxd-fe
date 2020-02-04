<template>
  <div>
    <a-card title="Login" :bordered="false" style="width: 300px; margin: auto; margin-top: 10px;">
      <a-input v-model="name" placeholder="name" />
      <a-input-password v-model="pass" placeholder="pass" />
      <a-divider />
      <a-button type="primary" @click="handleClick">登录</a-button>
    </a-card>
  </div>
</template>

<script>
import { login } from "@/http/client.js";

export default {
  name: "login",
  data() {
    return {
      name: "",
      pass: ""
    };
  },
  methods: {
    handleClick() {
      login(this.name, this.pass).then(j => {
        if (j.success) {
          this.$cookies.set("token", j.data);
          location.reload();
        }
      });
    }
  }
};
</script>
