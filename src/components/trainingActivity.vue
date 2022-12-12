<!--
* @description 
* @fileName trainingActivity.vue
* @author shang
* @date 2022/12/07 19:16:10
!-->
<template>
  <div class="trainingActivity">
    <div class="banner"></div>
    <div class="trainingMain">
      <div class="mainOne">
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
      <div class="mainTwo">
        <van-tabs
          v-model="activestate"
          line-height="2px"
          line-width="40px"
          title-active-color="#317cfb"
          title-inactive-color="#595959"
          @change="stateChange"
        >
          <van-tab
            :title="item.title"
            v-for="item in state"
            :key="item.type"
          ></van-tab>
        </van-tabs>
        <div class="twoForm">
          <div class="twoFormOne">
            <van-search
              v-model="searchVal"
              show-action
              left-icon=""
              placeholder="资源名称搜索"
              @search="onSearch"
            >
              <template #action>
                <div @click="onSearch">搜索</div>
              </template>
            </van-search>
          </div>
          <div class="twoFormTwo">共 <span>1000</span> 条结果</div>
        </div>
      </div>
      <div class="mainThree">
        <div
          class="mainThreeItem"
          v-for="(item, index) in this.$store.state.trainingActivity.filter(
            (item) => item.operation.type == '2'
          )"
          :key="item.type"
          :style="{ marginRight: (index + 1) % 3 == 0 ? '0px' : '17px' }"
          @click="activityItem(item.key)"
        >
          <div class="mainThreeItemOne"></div>
          <div class="mainThreeItemTwo">
            <p class="title">{{ item.activeTitle }}</p>
            <p
              :class="{
                btnState1: handlingTime(item) == '0',
                btnState2: handlingTime(item) == '1',
                btnState3: handlingTime(item) == '2',
              }"
            >
              {{ showStatus(handlingTime(item)) }}
            </p>
          </div>

          <div class="mainThreeItemThree">
            <div class="mainThreeItemThree-L">{{ item.times }}</div>
            <div class="mainThreeItemThree-R">{{ item.people }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activestate: "001",
      searchVal: "",
      active: 0,

      navContent: [
        {
          type: "01",
          title: "全部",
        },
        {
          type: "02",
          title: "校级",
        },
        {
          type: "03",
          title: "市级",
        },
        {
          type: "04",
          title: "区级",
        },
      ],
      state: [
        { type: "001", title: "最新" },
        { type: "002", title: "热度" },
      ],
      // contentList: [
      //   {
      //     type: "001",
      //     title: "中原区活动",
      //     img: "",
      //     time: "2022-09-09",
      //     people: "178人已学",
      //     state: "0", //未开始
      //   },
      //   {
      //     type: "002",
      //     title: "金水区活动",
      //     img: "",
      //     time: "2022-09-09",
      //     people: "178人已学",
      //     state: "1", //进行中
      //   },
      //   {
      //     type: "003",
      //     title: "高新区活动",
      //     img: "",
      //     time: "2022-09-09",
      //     people: "178人已学",
      //     state: "2", //已结束
      //   },
      //   {
      //     type: "004",
      //     title: "荥阳活动",
      //     img: "",
      //     time: "2022-09-09",
      //     people: "178人已学",
      //     state: "0", //未开始
      //   },
      // ],
    };
  },

  components: {},

  computed: {},
  created() {
    this.$store.dispatch("activityData");

    // console.log(this.handlingTime(), "////");
    // setTimeout(() => {
    //   this.handlingTime();
    // }, 2000);
  },
  //mounted: {},

  methods: {
    navHandle(key, v) {
      console.log(key, v, "key--v");
      // this.navContent[key].navChildren;
    },
    onSearch() {
      console.log(this.searchVal, "v------v");
    },
    stateChange(v) {
      console.log(v, "ccc");
    },
    showStatus(state) {
      switch (state) {
        case "0":
          return "未开始";
        case "1":
          return "进行中";
        case "2":
          return "已结束";
      }
    },

    //处理时间
    handlingTime(ite) {
      const nowTime = Date.parse(new Date()); //此刻时间
      const start_time = Date.parse(new Date(ite.startTime)); //任务开始时间
      const end_time = Date.parse(new Date(ite.endTime)); //任务结束时间
      console.log(nowTime, "nowTime");
      console.log(start_time, "start_time");
      console.log(end_time, "end_time");

      if (nowTime > end_time) {
        //任务结束
        return "2";
      } else if (nowTime < start_time) {
        return "0"; //未开始
      } else {
        return "1"; //进行中
      }
    },
    activityItem(id) {
      console.log(id, "id");
      this.$router.push({ name: "activityItem", query: { id: id } });
      // this.$store.commit("ishowChage");
    },
  },
};
</script>
<style lang='scss' scoped>
.trainingActivity {
  width: 100%;
  margin: 0 auto;
  background: #efefef;
  .banner {
    height: 300px;
    background: url("../assets/banner-优教学院\ \(1\).png") no-repeat center
      center;
    background-size: cover;
  }
  .trainingMain {
    width: 1200px;
    margin: 16px auto;
    background: #efefef;
    // border: 2px solid forestgreen;
    .mainOne {
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
    .mainTwo {
      width: 100%;
      height: 60px;
      background: #ffffff;
      border-radius: 6px 6px 6px 6px;
      font-family: PingFang SC-Regular, PingFang SC;
      // border: 1px solid red;
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      ::v-deep .van-tabs__wrap {
        height: 60px;
        .van-tabs__nav {
          padding-left: 9px;

          .van-tab {
            // margin: 12px 24px 12px 0px;
            flex: 0;
            height: 60px;
            // border: 1px solid gold;
            position: static;
            margin: 0 24px;
            .van-tab__text--ellipsis {
              display: flex;
              justify-content: center;
              height: 22px;
              width: 36px;
            }
          }
          .van-tabs__line {
            bottom: 0px;
            background: #317cfb;
          }
        }
        .van-tabs__nav--line {
          padding-bottom: 0px;
        }
      }
      .twoForm {
        width: 348px;
        height: 40px;
        margin-left: 648px;
        display: flex;
        align-items: center;
        box-sizing: border-box;

        .twoFormOne {
          width: 252px;
          height: 100%;

          .van-search {
            padding: 0px;
            height: 100%;

            border: 1px solid #317cfb;
            border-radius: 4px;
            margin-right: 12px;
            .van-search__content {
              width: 161px;
              // height: 32px;
              height: 100%;
              background: #fff;
              color: #c0c4cc;
              padding-left: 12px;
              box-sizing: border-box;
              font-size: 14px;
              font-weight: 400;

              font-family: PingFang SC-Regular, PingFang SC;
            }
            .van-search__action {
              width: 92px;
              // height: 40px;
              border: 1px solid #317cfb;

              height: 100%;
              background: #317cfb;
              font-size: 14px;
              font-family: PingFang SC-Medium, PingFang SC;
              font-weight: 500;
              color: #ffffff;
              text-align: center;
              line-height: 40px;
              padding: 0;
            }
          }
        }
        .twoFormTwo {
          font-size: 12px;
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          color: #606266;
          line-height: 60px;
          span {
            color: #317cfb;
          }
        }
      }
    }
    .mainThree {
      border: 1px solid red;
      margin-top: 16px;
      display: flex;
      flex-wrap: wrap;

      .mainThreeItem {
        box-sizing: border-box;
        width: 388px;
        height: 270px;
        padding: 20px 20px 0 20px;
        background: #ffffff;
        border-radius: 6px 6px 6px 6px;
        margin-right: 18px;
        display: flex;
        flex-direction: column;
        margin-bottom: 16px;

        box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
        .mainThreeItemOne {
          width: 348px;
          height: 157px;
          border: 1px solid forestgreen;
        }
        .mainThreeItemTwo {
          display: flex;
          justify-content: space-between;
          .title {
            margin: 17px 0 9px;
            width: 162px;
            height: 25px;
            font-size: 18px;
            font-family: PingFang SC-Medium, PingFang SC;
            font-weight: 500;
            color: #000000;
            line-height: 21px;
          }
          .btnState1 {
            width: 56px;
            height: 22px;
            text-align: center;
            line-height: 22px;
            font-size: 12px;
            background: #fffbe6;
            border-radius: 2px 2px 2px 2px;
            opacity: 1;
            border: 1px solid #ffe58f;
          }
          .btnState2 {
            width: 56px;
            height: 22px;
            text-align: center;
            line-height: 22px;
            font-size: 12px;
            background: #f6ffed;
            border-radius: 2px 2px 2px 2px;
            opacity: 1;
            border: 1px solid #b7eb8f;
          }
          .btnState3 {
            width: 56px;
            height: 22px;
            text-align: center;
            line-height: 22px;
            font-size: 12px;
            background: #f5f7fa;
            border-radius: 2px 2px 2px 2px;
            opacity: 1;
            border: 1px solid #c7c7c7;
          }
        }
        .mainThreeItemThree {
          font-size: 14px;
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.65);
          // border: 1px solid rgb(0, 139, 39);

          display: flex;
          justify-content: space-between;
          .mainThreeItemThree-L {
            // width: 85px;
            height: 20px;
            // margin-right: 92px;
            line-height: 16px;
            // border: 1px solid darkmagenta;
          }
          .mainThreeItemThree-R {
            // width: 68px;
            height: 20px;
            line-height: 16px;
            // border: 1px solid rgb(0, 139, 83);
          }
        }
      }
    }
  }
}
</style>