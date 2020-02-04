<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  components: {},
  props: {
    msg: String
  },
  data() {
    return {
      storeMsg: ""
    };
  }
};
</script>

<style scoped></style>
