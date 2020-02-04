<template>
  <div>
    <a-list itemLayout="horizontal" :dataSource="posts">
      <a-list-item slot="renderItem" slot-scope="item">
        <a-list-item-meta>
          <a slot="title" @click="handleClick(item)">{{ item.name }}</a>
        </a-list-item-meta>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
import { getPosts } from "@/http/client.js";

export default {
  name: "post-list",
  data() {
    return {
      posts: [{ loading: "..." }]
    };
  },
  mounted() {
    getPosts()
      .then(j => {
        // console.log(j);
        return j;
      })
      .then(j => j.sort(compare))
      .then(j => (this.posts = j));
  },
  methods: {
    handleClick(item) {
      this.$router.push({ path: "/contents/detail/" + item.name });
    }
  }
};

function compare(a, b) {
  var aDate = new Date(a.name.substring(0, 10).replace(/-/, "/"));
  var bDate = new Date(b.name.substring(0, 10).replace(/-/, "/"));
  return bDate - aDate;
}
</script>

<style></style>
