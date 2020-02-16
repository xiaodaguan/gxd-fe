<template>
  <div>
    <a-input-search placeholder="搜索：装备名、特效、技能..." style="width: 50%" @search="onSearch" />
    <a-list class="demo-loadmore-list" itemLayout="horizontal" :dataSource="data">
      <a-list-item slot="renderItem" slot-scope="item">
        <a-list-item-meta :description="(item.suiteEffects && item.suiteEffects.length>1) ? item.suiteEffects: item.specialEffects">
          <a slot="title" :href="item.url">{{item.name}} - {{item.rarity}} - {{item.slot}}</a>
        </a-list-item-meta>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
import { queryD3Equip } from "@/http/client.js";
export default {
  data() {
    return {
      data: [{ name: "搜一下试试吧" }]
    };
  },
  methods: {
    onSearch(value) {
      queryD3Equip(value).then(data => {
        if (data) {
          this.data = data;
        } else {
          this.data = [{ name: "什么都没有搜到~" }];
        }
      });
    }
  }
};
</script>
