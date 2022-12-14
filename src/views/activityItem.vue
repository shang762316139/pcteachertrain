<!--
* @description 
* @fileName activityItem.vue
* @author shang
* @date 2022/12/12 17:50:40
!-->
<template>
  <div class="activityItem">
    <div class="banner">
      <div class="bannerCon">
        <div class="nav">
          <div class="nav1 navv">当前位置:</div>
          <div class="nav2 navv">首页</div>
          <div class="nav3 navv">/</div>
          <div class="nav4 navv">培训活动</div>
          <div class="nav5 navv">/</div>
          <div class="nav6 navv">活动详情</div>
        </div>
        <div class="banner-p">
          <div class="title">高新区教师信息化在线课程</div>
          <div class="message">
            <div class="p1">
              <div class="p1-title">主办单位:</div>
              <div class="p1-content">郑州市高新区</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="activityItemMain">
      <div class="mainOne"></div>
      <div class="mainTwo">
        <van-tabs
          v-model="active"
          line-height="3px"
          line-width="51px"
          title-active-color="#317cfb"
          title-inactive-color="#595959"
          @rendered="navHandle"
          @change="navHandle"
        >
          <van-tab
            :title="item.title"
            v-for="item in navContent"
            :key="item.type"
          ></van-tab>
        </van-tabs>
      </div>

      <keep-alive>
        <component v-bind:is="view"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import testActivity from "../components/testActivity";
import courseLearning from "../components/courseLearning";
import briefIntroduction from "../components/briefIntroduction";

export default {
  data() {
    return {
      activestate: "001",
      active: 0,
      view: testActivity,
      navContent: [
        {
          type: "01",
          title: "活动简介",
          componentId: briefIntroduction,
        },
        {
          type: "02",
          title: "课程学习",
          componentId: courseLearning,
        },
        {
          type: "03",
          title: "活动测试",
          componentId: testActivity,
        },
      ],
    };
  },

  components: { testActivity, courseLearning, briefIntroduction },

  computed: {},

  //mounted: {},

  methods: {
    navHandle(key, v) {
      console.log(key, v, "key--v");
      this.view = this.navContent[key].componentId;

      // this.navContent[key].navChildren;
    },
  },
};
</script>
<style lang='scss' scoped>
.activityItem {
  width: 100%;
  //   height: 100%;
  background: #efefef;
  .banner {
    width: 100%;
    height: 300px;
    background: linear-gradient(108deg, #3386ff 0%, #6aa5f9 100%);
    opacity: 0.73;

    .bannerCon {
      height: 300px;
      width: 1200px;
      border: 1px solid red;
      margin: 0 auto;
      .nav {
        font-family: PingFang SC-Regular, PingFang SC;
        font-weight: 400;
        color: #ffffff;
        font-size: 14px;
        margin: 24px 0 26px;
        display: flex;
        .navv {
          height: 22px;
          line-height: 22px;
        }

        .nav2 {
          margin-left: 8px;
        }
        .nav3 {
          margin: 0 8px;
        }
        .nav5 {
          margin: 0 8px;
        }
      }
      .banner-p {
        display: flex;
        flex-direction: column;
        align-items: center;
        .title {
          width: 804px;
          border: 1px solid red;
          // height: 126px;
          font-size: 64px;
          // margin: 0 auto;
          font-family: jiangxizhuokai-Regular, jiangxizhuokai;
          font-weight: 400;
          line-height: 64px;
          margin-bottom: 35px;
          text-shadow: 0px 4px 4px rgba(7, 25, 119, 0.25);
          background: linear-gradient(
            180deg,
            #ffffff 0%,
            rgba(255, 255, 255, 0) 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .message {
          border: 1px solid red;
          // min-width: 521px;
          .p1 {
            display: flex;
            font-size: 28px;
            font-family: PingFang SC-Semibold, PingFang SC;
            font-weight: 600;
            color: #ffffff;
            line-height: 50px;
            text-shadow: 0px 2px 4px rgba(9, 29, 134, 0.25);
            .p1-title {
              margin-right: 20px;
            }
          }
        }
      }
    }
  }
  .activityItemMain {
    width: 1200px;
    margin: 16px auto;
    background: #efefef;
    .mainOne {
      height: 84px;
      background: #ffffff;
      border-radius: 12px 12px 12px 12px;
      margin-top: 19px;
    }
    .mainTwo {
      border-radius: 6px 6px 6px 6px;
      .van-tabs {
        ::v-deep .van-tabs__wrap {
          height: 70px;
          // border: 1px solid rgb(1, 28, 149);
          display: flex;
          align-items: center;

          .van-tabs__nav--line {
            // height: 0px;
            padding-bottom: 0px;
            align-items: center;
            width: 100%;
            background: #efefef;
            .van-tab {
              width: 120px;
              height: 32px;
              font-size: 18px;
              flex: none;
              font-family: PingFang SC-Regular, PingFang SC;
              font-weight: 400;
              color: #595959;
              margin-right: 12px;
              // border: 1px solid red;
            }
          }
          .van-tabs__line {
            bottom: 7px;
            background: #317cfb;
          }
        }
        // ::v-deep .van-tabs__content {
        //   height: 72px;
        //   // border: 1px solid rgb(198, 3, 162);
        //   display: flex;
        //   align-items: center;
        //   background: #f0f5fc;
        //   border-radius: 6px 6px 6px 6px;
        //   .van-tab__pane {
        //     display: flex;
        //     align-items: center;
        //   }
        // }
      }
    }
  }
}
</style>