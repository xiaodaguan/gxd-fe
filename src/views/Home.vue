<template>
    <div>
        <a-timeline mode="alternate" style="padding-top: 50px; background-color: white">
            <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
            <a-timeline-item color="green">Solve initial network problems 2015-09-01</a-timeline-item>
            <a-timeline-item>
                <a-icon slot="dot" type="clock-circle-o" style="font-size: 16px;" />
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo.
            </a-timeline-item>
            <a-timeline-item color="red">Network problems being solved 2015-09-01</a-timeline-item>
            <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
            <a-timeline-item>
                <a-icon slot="dot" type="clock-circle-o" style="font-size: 16px;" />
                Technical testing 2015-09-01
            </a-timeline-item>
        </a-timeline>
        <div style="background-color: #ececec; padding: 20px;">
            <a-row :gutter="16">
                <a-col :span="8">
                    <a-card class="tl" title="Weather" :bordered="false">
                        <p>{{"城市: "+weatherInfo.cityname}}</p>
                        <p>{{"日期: "+weatherInfo.date}}</p>
                        <p>{{"温度: "+weatherInfo.temp+"°C/"+weatherInfo.tempf+"°F"}}</p>
                        <p>{{"天气: "+weatherInfo.weather}}</p>
                        <p>{{"湿度: "+weatherInfo.sd}}</p>
                        <p>风速: <span v-html="weatherInfo.wse"></span></p>
                        <p>{{"风向: "+weatherInfo.WD}}</p>
                    </a-card>
                </a-col>
                <a-col :span="8">
                    <a-card class="tl" title="Ip" :bordered="false">
                        <p>Ip：{{ ipInfo.query }}</p>
                        <p>国家：{{ ipInfo.country }}</p>
                        <p>地区：{{ ipInfo.regionName }}</p>
                        <p>城市：{{ ipInfo.city }}</p>
                        <p>供应商：{{ ipInfo.isp }}</p>
                        <p>坐标：{{ ipInfo.lon +", "+ipInfo.lat }}</p>
                    </a-card>
                </a-col>
                <a-col :span="8">
                    <a-card class="tl" title="Calendar" :bordered="false">
                        <div :style="{ width: '300px', border: '1px solid #d9d9d9', borderRadius: '4px' }">
                            <a-calendar :fullscreen="false"/>
                        </div>
                    </a-card>
                </a-col>
            </a-row>
        </div>
    </div>
</template>
<script>
    import {getIpInfo, getWeather, getCityId} from "@/http/client.js";

    export default {
        name: "home",
        mounted() {
            getIpInfo()
                .then(json => (this.ipInfo = json))
                .then(v => getCityId(this.ipInfo.city, this.ipInfo.regionName)
                    .then(res => {
                        this.cityId = res;
                        return res;
                    })
                    .then(v => getWeather(this.cityId)
                        .then(res => this.weatherInfo = res)
                    )
                );
            getIpInfo().then(json => (this.ipInfo = json));
        },
        data() {
            return {
                date: new Date(),
                ipInfo: {},
                cityId: "",
                weatherInfo: {
                    tempf: "37",
                    date: "03月08日(星期日)",
                    rain: "0.0",
                    limitnumber: "",
                    temp: "3",
                    city: "101070403",
                    cityname: "清原",
                    wse: "&lt;12km/h",
                    qy: "989",
                    aqi_pm25: "",
                    njd: "18km",
                    nameen: "qingyuan",
                    weathere: "Cloudy",
                    WD: "西风",
                    SD: "72%",
                    sd: "72%",
                    weathercode: "n01",
                    rain24h: "0",
                    weather: "多云",
                    aqi: "",
                    wde: "W",
                    time: "20:33",
                    WS: "2级"
                },

            };
        },
        computed: {}
    };
</script>
<style scoped>
    .tl {
        text-align: center;
        height: 440px;
    }



</style>
