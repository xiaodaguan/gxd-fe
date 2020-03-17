<template>
    <div>
        <a-list itemLayout="horizontal" :dataSource="data.content">
            <a-list-item slot="renderItem" slot-scope="item">
                <a-list-item-meta
                        :description="item.content.substr(0,256) +'    '+ (new Date(item.createTime)).Format('yyyy-MM-dd hh:mm:ss.S')">
                    <a slot="title" @click="handleClick(item)">{{ item.title }}</a>
                </a-list-item-meta>
            </a-list-item>
        </a-list>
    </div>
</template>

<script>
    import {getPosts, validateToken} from "@/http/client.js";

    export default {
        name: "post-list",
        data() {
            return {
                uId: 0,
                data: {
                    "content": [
                        {
                            "id": 1,
                            "title": "TEST",
                            "authorId": 1,
                            "createTime": 1584453253000,
                            "updateTime": 1584453253000,
                            "readCount": 0,
                            "likeCount": 0,
                            "dissCount": 0,
                            "content": "哈喽 沃欧德",
                            "tags": "test,生活"
                        }
                    ],
                    "pageable": {
                        "sort": {
                            "sorted": true,
                            "unsorted": false,
                            "empty": false
                        },
                        "pageNumber": 0,
                        "pageSize": 10,
                        "offset": 0,
                        "paged": true,
                        "unpaged": false
                    },
                    "last": true,
                    "totalPages": 1,
                    "totalElements": 1,
                    "first": true,
                    "sort": {
                        "sorted": true,
                        "unsorted": false,
                        "empty": false
                    },
                    "numberOfElements": 1,
                    "size": 10,
                    "number": 0,
                    "empty": false
                }
            };
        },
        mounted() {
            var token = this.$cookies.get("token");
            if (!token) {
                return;
            }
            validateToken(token)
                .then(r => {
                    this.uId = r.data;
                    return this.uId;
                }).then(id => {
                getPosts(id, 0, 10)
                    .then(j => {
                        // console.log(j);
                        this.data = j.data;
                    })
            })
            ;


        },
        methods: {
            handleClick(item) {
                this.$router.push({path: "/contents/detail/" + item.name});
            }
        }
    };
    Date.prototype.Format = function (fmt) { //author: meizz
        var o = {
            "M+": this.getMonth() + 1, //月份
            "d+": this.getDate(), //日
            "h+": this.getHours(), //小时
            "m+": this.getMinutes(), //分
            "s+": this.getSeconds(), //秒
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度
            "S": this.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    };

</script>

<style></style>
