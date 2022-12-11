<!--
* @description 
* @fileName PC.vue
* @author shang
* @date 2022/12/07 18:24:37
!-->
<template>
  <div class="PC">
    <div class="PcNav">
      <div class="PcNav-con">
        <div class="navOne">
          <!-- <img src="../assets/logo.png" alt="" /> -->
        </div>
        <div class="navTwo">教师培训</div>
        <div
          class="navThree"
          v-for="(item, index) in navCon.nav"
          :key="index"
          @click="
            navCon.currentIndex = index;
            navCon.view = item.componentId;
          "
          :class="{ highLight: navCon.currentIndex == index }"
        >
          {{ item.title }}
        </div>
        <!-- <router-view></router-view> -->
      </div>
      <keep-alive>
        <component v-bind:is="navCon.view"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import college from "../components/college";
import trainingActivity from "../components/trainingActivity";
export default {
  data() {
    return {
      navCon: {
        view: "college",
        currentIndex: 0,
        nav: [
          { type: "1", title: "优教学院", componentId: "college" },
          {
            type: "2",
            title: "培训活动",
            componentId: "trainingActivity",
          },
        ],
      },
    };
  },

  components: {
    college,
    trainingActivity,
  },

  computed: {},

  //mounted: {},

  methods: {},
};
</script>

<style lang='scss' scoped>
.PC {
  width: 100%;
  //   height: 100%;
  background: #efefef;
  .PcNav {
    background: #fff;
    .PcNav-con {
      width: 1200px;
      margin: 0 auto;
      border: 1px solid red;
      height: 100px;
      display: flex;
      align-items: center;
      .navOne {
        width: 72px;
        height: 90px;
        background: url("../assets/logo.png") no-repeat center center;
        background-size: cover;
      }
      .navTwo {
        width: 165px;
        height: 28px;
        font-size: 30px;
        font-weight: 400;
        color: #000000;
        font-family: zihun35hao-jindianyahei-Regular, zihun35hao-jindianyahei;
        margin: 0 23px 0 8px;
      }
      .navThree {
        height: 34px;
        font-size: 24px;
        width: 100px;
        margin-right: 50px;
        margin-top: 39px;
        color: #000;
        cursor: pointer;
      }
      .highLight {
        color: #317cfb;
      }
    }
  }
}
</style>