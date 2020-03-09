<template style="width: 200px">
    <div>
        <a-menu :defaultSelectedKeys="['1']" :defaultOpenKeys="['sub1']" mode="inline" theme="dark"
                :inlineCollapsed="collapsed">
            <!-- lv1 -->
            <a-menu-item v-for="item1 in noChildrenList(menus)" :key="item1.name" @click="handleClick(item1)">
                {{ item1.text }}
            </a-menu-item>
            <a-sub-menu v-for="item1 in hasChildrenList(menus)" :key="item1.name">
        <span slot="title"
        ><a-icon type="align-left"/><span>{{ item1.text }}</span></span
        >
                <!-- lv2 -->
                <a-menu-item v-for="item2 in noChildrenList(item1.children)" :key="item2.name"
                             @click="handleClick(item2)">
                    {{ item2.text }}
                </a-menu-item>
                <a-sub-menu v-for="item2 in hasChildrenList(item1.children)" :key="item2.name">
          <span slot="title"
          ><a-icon type="tags"/><span>{{ item2.text }}</span></span
          >
                    <!-- lv3 -->
                    <a-menu-item v-for="item3 in noChildrenList(item2.children)" :key="item3.name"
                                 @click="handleClick(item3)">
                        {{ item3.text }}
                    </a-menu-item>
                </a-sub-menu>
            </a-sub-menu>
            <a-menu-item v-if="auth" @click="logout()">
                登出
            </a-menu-item>
        </a-menu>
    </div>
</template>
<script>
    import routes from "@/router/routes";
    import {validateToken} from "@/http/client.js";

    export default {
        data() {
            return {
                collapsed: true,
                auth: false,
                menus: []
            };
        },
        beforeMount() {
            this.getParams();
            this.validate();
        },
        methods: {
            handleClick(item) {
                // console.log("click", item);
                this.$router.push({path: item.path});
            },
            getParams() {
                this.menus = routes;
            },
            hasChildrenList(list) {
                var res = list.filter(o => o.children && o.menu);
                if (!this.auth) {
                    res = res.filter(o => !o.needLogin);
                }
                return res;
            },
            noChildrenList(list) {
                var res = list.filter(o => !o.children && o.menu);
                if (!this.auth) {
                    res = res.filter(o => !o.needLogin);
                }
                return res;
            },
            toggleCollapsed() {
                this.collapsed = !this.collapsed;
            },
            validate() {
                var token = this.$cookies.get("token");
                if (!token) {
                    return;
                }
                validateToken(token).then(s => (this.auth = s));
            },
            logout() {
                this.$cookies.remove("token");
                location.reload();
            }
        },
        computed: {},
        watch: {
            // openKeys(val) {
            //   console.log("openKeys", val);
            // }
        }
    };
</script>
