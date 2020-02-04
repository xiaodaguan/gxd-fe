<template>
  <div>
    <Markdown v-model="content" />
  </div>
</template>

<script>
import { getPost } from "@/http/client.js";
import Markdown from "vue-meditor";

export default {
  props: ["aid"],
  components: {
    Markdown
  },
  data() {
    return {
      content: "# loading... \r\n(多刷几次如果还出不来就是github api挂了)"
    };
  },
  watch: {
    aid: function(newVal) {
      if (newVal) {
        getPost(newVal).then(s => (this.content = s));
      }
    }
  },
  mounted() {}
};
</script>

<style></style>
