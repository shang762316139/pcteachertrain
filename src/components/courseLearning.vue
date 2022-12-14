<!--
* @description 
* @fileName courseLearning.vue
* @author shang
* @date 2022/12/13 12:39:24
!-->
<template>
  <div>
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
        v-for="(item, index) in this.$store.state.trainingActivity[
          parseInt(this.$route.query.id - 1)
        ].getAddTest.addStestData"
        :key="item.type"
        :style="{ marginRight: (index + 1) % 3 == 0 ? '0px' : '17px' }"
        @click="activityItem(item.key)"
      >
        <div class="mainFourItemOne"></div>
        <div class="mainFourItemTwo">
          {{ item.questionStem }}
        </div>

        <div class="mainFourItemThree">
          <div class="mainFourItemThree-L">{{ item.times }}</div>
          <div class="mainFourItemThree-R">{{ item.people }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      searchVal: "",
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
    activityItem(id) {
      console.log(id, "id2");
    },
    onSearch() {
      console.log(this.searchVal, "v------v");
    },
    stateChange(v) {
      console.log(v, "ccc");
    },
  },
};
</script>
  <style lang='scss' scoped>
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
</style>