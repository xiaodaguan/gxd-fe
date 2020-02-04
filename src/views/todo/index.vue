<template>
  <a-collapse accordion>
    <a-collapse-panel v-for="(item, index) in data" :key="index" v-bind:header="item.content" defaultActiveKey="1" :bordered="false">
      <p>{{ item.desc }}</p>
    </a-collapse-panel>
  </a-collapse>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          id: 1,
          content: "买菜",
          desc: "测试todo",
          creator: "guanxiaoda",
          createTime: null,
          updateTime: null,
          status: 1,
          tags: "test"
        },
        {
          id: 2,
          content: "1324134124321",
          desc: "答复",
          creator: "关晓炟",
          createTime: "2020-02-01T14:05:42.000+0000",
          updateTime: "2020-02-01T14:05:42.000+0000",
          status: 2,
          tags: "测试"
        },
        {
          id: 4,
          content: "test content",
          desc: "dsafdsafdsa",
          creator: "test",
          createTime: "2020-02-01T13:48:25.000+0000",
          updateTime: "2020-02-01T13:48:25.000+0000",
          status: 0,
          tags: "test, work"
        }
      ],
      activeKey: ["1"]
    };
  }
};
</script>

<style></style>
