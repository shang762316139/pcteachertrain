<!--
* @description 
* @fileName college.vue
* @author shang
* @date 2022/12/07 19:15:15
!-->
<template>
  <div class="college">
    <div class="banner"></div>
    <div class="collegeMain">
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
          >
            <template default>
              <div class="childrenOne">全部主题</div>
              <div
                class="childrenTwo"
                v-for="ite in item.navChildren"
                :key="ite.type"
                @click="navChildren(ite.type)"
              >
                {{ ite.title }}
              </div>
            </template>
          </van-tab>
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
          v-for="(item, index) in contentList"
          :key="item.type"
          :style="{ marginRight: (index + 1) % 4 == 0 ? '0px' : '20px' }"
        >
          <div class="mainThreeItemOne"></div>
          <div class="mainThreeItemTwo">{{ item.title }}</div>

          <div class="mainThreeItemThree">
            <div class="mainThreeItemThree-L">{{ item.time }}</div>
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
      active: 0,
      activestate: "001",
      searchVal: "",
      navContent: [
        {
          type: "01",
          title: "全部课程",
          navChildren: [
            {
              type: "001",
              title: "资源获取与处理",
            },
            {
              type: "002",
              title: "课件设计与制作",
            },
            {
              type: "003",
              title: "微课设计与制作",
            },
            {
              type: "004",
              title: "极简教育技术",
            },
            {
              type: "005",
              title: "学科教学工具",
            },
          ],
        },
        {
          type: "02",
          title: "通知课程",
        },
        {
          type: "03",
          title: "教学科学",
        },
        {
          type: "04",
          title: "教育管理",
        },
        {
          type: "05",
          title: "专项技能",
        },
      ],
      state: [
        { type: "001", title: "最新" },
        { type: "002", title: "热度" },
      ],
      contentList: [
        {
          type: "001",
          title: "优教学生字B端介绍",
          img: "",
          time: "2022-09-09",
          people: "178人已学",
        },
        {
          type: "002",
          title: "优教学生字B端介绍",
          img: "",
          time: "2022-09-09",
          people: "178人已学",
        },
        {
          type: "003",
          title: "优教学生字B端介绍",
          img: "",
          time: "2022-09-09",
          people: "178人已学",
        },
        {
          type: "004",
          title: "优教学生字B端介绍",
          img: "",
          time: "2022-09-09",
          people: "178人已学",
        },
        {
          type: "005",
          title: "优教学生字B端介绍",
          img: "",
          time: "2022-09-09",
          people: "178人已学",
        },
      ],
    };
  },

  components: {},

  computed: {},
  created() {},
  //mounted: {},

  methods: {
    navHandle(key, v) {
      console.log(key, v, "key--v");
      // this.navContent[key].navChildren;
    },
    navChildren(key) {
      console.log(key, "key");
    },
    stateChange(v) {
      console.log(v, "ccc");
    },
    onSearch() {
      console.log(this.searchVal, "v------v");
    },
  },
};
</script>
<style lang='scss' scoped>
.college {
  width: 100%;
  margin: 0 auto;
  background: #efefef;

  .banner {
    height: 300px;
    background: url("../assets/banner-优教学院\ \(1\).png") no-repeat center
      center;
    background-size: cover;
  }
  .collegeMain {
    width: 1200px;
    margin: 16px auto;
    background: #efefef;

    border: 2px solid forestgreen;
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
        ::v-deep .van-tabs__content {
          height: 72px;
          // border: 1px solid rgb(198, 3, 162);
          display: flex;
          align-items: center;
          background: #f0f5fc;
          border-radius: 6px 6px 6px 6px;

          .van-tab__pane {
            display: flex;
            align-items: center;
            .childrenOne {
              width: 96px;
              height: 32px;
              background: #d6e5fe;
              border-radius: 100px 100px 100px 100px;
              opacity: 1;
              color: #317cfb;
              font-weight: bolder;
              text-align: center;
              line-height: 32px;
              margin: 0 19px;
            }

            .childrenTwo {
              height: 24px;
              font-size: 16px;
              font-family: PingFang SC-Regular, PingFang SC;
              font-weight: 400;
              color: #131415;
              line-height: 24px;
              margin: 0 19px;
              cursor: pointer;
            }
          }
        }
      }
    }
    .mainTwo {
      width: 100%;
      height: 60px;
      background: #ffffff;
      border-radius: 6px 6px 6px 6px;
      font-family: PingFang SC-Regular, PingFang SC;
      // border: 1px solid red;
      margin: 16px 0;
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
              height: 32px;
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
        width: 284px;
        height: 270px;
        padding: 20px 20px 0 20px;
        background: #ffffff;
        border-radius: 6px 6px 6px 6px;
        margin-right: 20px;
        display: flex;
        flex-direction: column;
        margin-bottom: 16px;

        box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
        .mainThreeItemOne {
          width: 245px;
          height: 163px;
          border: 1px solid forestgreen;
        }
        .mainThreeItemTwo {
          margin: 17px 0 9px;
          height: 25px;
          font-size: 18px;
          font-family: PingFang SC-Medium, PingFang SC;
          font-weight: 500;
          color: #000000;
          line-height: 21px;
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