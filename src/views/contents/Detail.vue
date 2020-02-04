<template>
  <div>
    文章详情:{{ aid }}
    <Detail :aid="aid"></Detail>
  </div>
</template>

<script>
import Detail from "@/components/contents/PostDetail";
export default {
  data() {
    return {
      aid: ""
    };
  },
  mounted() {
    this.aid = this.$route.params.id;
  },
  components: {
    Detail
  }
};
</script>

<style></style>
