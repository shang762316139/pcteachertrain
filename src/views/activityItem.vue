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
      <div class="mainThree">
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
      <div class="mainFour">
        <div
          class="mainFourItem"
          v-for="(item, index) in this.$store.state.trainingActivity.filter(
            (item) => item.operation.type == '2'
          )"
          :key="item.type"
          :style="{ marginRight: (index + 1) % 3 == 0 ? '0px' : '17px' }"
          @click="activityItem(item.key)"
        >
          <div class="mainFourItemOne"></div>
          <div class="mainFourItemTwo">
            {{ item.activeTitle }}
          </div>

          <div class="mainFourItemThree">
            <div class="mainFourItemThree-L">{{ item.times }}</div>
            <div class="mainFourItemThree-R">{{ item.people }}</div>
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
      active: 0,
      searchVal: "",
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
    };
  },

  components: {},

  computed: {},

  //mounted: {},

  methods: {
    navHandle(key, v) {
      console.log(key, v, "key--v");
      // this.navContent[key].navChildren;
    },
    onSearch() {
      console.log(this.searchVal, "v------v");
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
    .mainThree {
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
    .mainFour {
      border: 1px solid red;
      margin-top: 16px;
      display: flex;
      flex-wrap: wrap;

      .mainFourItem {
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
        .mainFourItemOne {
          width: 348px;
          height: 157px;
          border: 1px solid forestgreen;
        }
        .mainFourItemTwo {
          margin: 17px 0 9px;
          height: 25px;
          font-size: 18px;
          font-family: PingFang SC-Medium, PingFang SC;
          font-weight: 500;
          color: #000000;
          line-height: 21px;
        }
        .mainFourItemThree {
          font-size: 14px;
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.65);
          // border: 1px solid rgb(0, 139, 39);

          display: flex;
          justify-content: space-between;
          .mainFourItemThree-L {
            // width: 85px;
            height: 20px;
            // margin-right: 92px;
            line-height: 16px;
            // border: 1px solid darkmagenta;
          }
          .mainFourItemThree-R {
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