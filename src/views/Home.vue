<template>
  <div>
    <a-carousel autoplay>
      <div class="wapp" :class="period">
        <WeatherApp :class="period"></WeatherApp>
        <AppCredits :year="year" :class="period"></AppCredits>
      </div>
      <!-- <div><h3>Hello</h3></div>
      <div><h3>This is</h3></div>
      <div><h3>gxd</h3></div> -->
    </a-carousel>
    <div style="background-color: #ececec; padding: 20px;">
      <a-row :gutter="16">
        <a-col :span="8">
          <a-card title="Card title" :bordered="false">
            <p>card content</p>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card title="Card title" :bordered="false">
            <p>card content</p>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card title="Card title" :bordered="false">
            <p>card content</p>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import WeatherApp from "@/components/weather/WeatherApp";
import AppCredits from "@/components/weather/AppCredits";

export default {
  name: "home",
  components: { WeatherApp, AppCredits },

  data() {
    return {
      date: new Date()
    };
  },

  computed: {
    year() {
      return this.date.getFullYear();
    },
    period() {
      let hour = this.date.getHours();
      return hour > 5 && hour < 18 ? "app--day" : "app--night";
    }
  }
};
</script>
<style>
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 256px;
  line-height: 256px;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: rgb(46, 46, 46);
}

/** Global **/
@import url("https://fonts.googleapis.com/css?family=Open+Sans");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgba(255, 255, 255, 0.9);
}

a {
  text-decoration: none;
  color: inherit;
  transition: color 0.2s ease-in;
}

/** App **/
.wapp {
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
}

.app--day {
  /*background: linear-gradient(to bottom right, #6CB9C8, #6CB9C8) no-repeat;*/
  background-color: #6cb9c8;
}

.app--night {
  /*background: linear-gradient(to bottom right, #484F60, #484F60) no-repeat;*/
  background-color: #484f60;
}

.app--day a:hover {
  color: rgba(46, 146, 167, 0.9);
}

.app--night a:hover {
  color: rgba(0, 0, 0, 0.5);
}
</style>
