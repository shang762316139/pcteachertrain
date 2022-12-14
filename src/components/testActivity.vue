<!--
* @description 
* @fileName testActivity.vue
* @author shang
* @date 2022/12/13 12:39:24
!-->
<template>
  <div>
    <div class="mainTop">
      <div class="mainTopOne"></div>
      <div class="mainTopTwo">线上答题</div>
      <div class="mainTopThree"></div>
    </div>
    <div class="mainFour">
      <!-- <div
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
      </div> -->
      <div class="mainFourleft">
        <div class="fourLeftcon">
          <div class="fourLeftOne">
            <div class="fourLeftOne1">单项选择题</div>
            <div class="fourLeftOne2">(5分)</div>
          </div>
          <div class="fourLeftTwo">
            <div class="title">
              全体人员上主题为《教育之道
              校长之道》党课，从对“功成不必在我，功成必定有我”的理解引入，与大家交流，作为校长该如何扛起新时代背景下教育发展的历史重任
              ？
            </div>
            <div class="optionsItem">
              <p class="optionsItemLeft">A</p>
              <p class="optionsItemMiddle"></p>
              <p class="optionsItemRight">功成不必在我，功成必定有我</p>
            </div>
          </div>
          <div class="fourLeftThree">
            <van-pagination
              v-model="currentPage"
              :page-count="12"
              mode="simple"
            >
              <template #prev-text>
                <div class="prevIcon"></div>
                <div class="prev">上一题</div>
              </template>
              <template #next-text>
                <div class="prev">下一题</div>
                <div class="prevIcon"></div>
              </template>
            </van-pagination>
          </div>
        </div>
      </div>
      <div class="mainFourRight">
        <div class="fourRightOne">
          <div class="fourRightTopLeft"></div>
          <div class="fourRightTopRight">04:30</div>
        </div>
        <div class="fourRightTwo">
          <div class="fourRightTwo-1">
            <div class="fourRightTwo-1-item">
              <span class="title">总题数:</span>
              <span>45题</span>
            </div>
            <div class="fourRightTwo-1-item">
              <span class="title">总分:</span>
              <span>120分</span>
            </div>
            <div class="fourRightTwo-1-item">
              <span class="title">答题时长:</span>
              <span>100分钟</span>
            </div>
          </div>
          <div class="fourRightTwo-2">查看本地答题情况</div>
        </div>
        <div class="fourRightThree">
          <div class="fourRightThreeL">题号列表</div>
          <div class="fourRightThreeR">答对自动跳转下一题</div>
        </div>
        <div class="fourRightFour"></div>
        <div class="fourRightFive">
          <div class="fourFiveItem">
            <div class="fourRightCon">1</div>
            <p class="postionConten">当前题</p>
          </div>
          <div class="fourFiveItem">
            <div class="fourRightCon">1</div>
            <p class="postionConten">当前题</p>
          </div>
          <div class="fourFiveItem">
            <div class="fourRightCon">1</div>
            <p class="postionConten">当前题</p>
          </div>
          <div class="fourFiveItem">
            <div class="fourRightCon">1</div>
            <p class="postionConten">当前题</p>
          </div>
          <div class="fourFiveItem">
            <div class="fourRightCon">1</div>
            <p class="postionConten">当前题</p>
          </div>
        </div>
        <div class="fourRightSix">提交答卷</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: "1",
    };
  },

  components: {},

  computed: {},

  //mounted: {},

  methods: {
    activityItem(id) {
      console.log(id, "id2");
    },
  },
};
</script>
<style lang='scss' scoped>
.mainTop {
  height: 54px;
  background: #ffffff;
  border-radius: 4px 4px 4px 4px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  .mainTopOne {
    width: 4px;
    height: 18px;
    background: #0c90f8;
    border-radius: 3px 3px 3px 3px;
    margin: 0 12px 0 16px;
  }
  .mainTopTwo {
    height: 22px;
    font-size: 16px;
    font-family: PingFang SC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(12, 12, 12, 0.85);
  }
  .mainTopThree {
    height: 36px;
    background: #fd9841;
    border-radius: 18px 18px 18px 18px;
    font-size: 16px;
    font-family: Source Han Sans CN-Regular, Source Han Sans CN;
    font-weight: 400;
    color: #ffffff;
    line-height: 36px;
  }
}
.mainFour {
  border: 1px solid red;
  margin-top: 16px;
  display: flex;
  //   flex-wrap: wrap;

  //   .mainFourItem {
  //     box-sizing: border-box;
  //     width: 388px;
  //     height: 270px;
  //     padding: 20px 20px 0 20px;
  //     background: #ffffff;
  //     border-radius: 6px 6px 6px 6px;
  //     margin-right: 18px;
  //     display: flex;
  //     flex-direction: column;
  //     margin-bottom: 16px;

  //     box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
  //     .mainFourItemOne {
  //       width: 348px;
  //       height: 157px;
  //       border: 1px solid forestgreen;
  //     }
  //     .mainFourItemTwo {
  //       margin: 17px 0 9px;
  //       height: 25px;
  //       font-size: 18px;
  //       font-family: PingFang SC-Medium, PingFang SC;
  //       font-weight: 500;
  //       color: #000000;
  //       line-height: 21px;
  //     }
  //     .mainFourItemThree {
  //       font-size: 14px;
  //       font-family: PingFang SC-Regular, PingFang SC;
  //       font-weight: 400;
  //       color: rgba(0, 0, 0, 0.65);
  //       // border: 1px solid rgb(0, 139, 39);

  //       display: flex;
  //       justify-content: space-between;
  //       .mainFourItemThree-L {
  //         // width: 85px;
  //         height: 20px;
  //         // margin-right: 92px;
  //         line-height: 16px;
  //         // border: 1px solid darkmagenta;
  //       }
  //       .mainFourItemThree-R {
  //         // width: 68px;
  //         height: 20px;
  //         line-height: 16px;
  //         // border: 1px solid rgb(0, 139, 83);
  //       }
  //     }
  //   }
  .mainFourleft {
    // width: 920px;
    // border: 1px solid rgb(81, 0, 255);
    box-sizing: border-box;
    // height: 781px;
    background: #ffffff;
    border-radius: 4px 4px 4px 4px;
    padding: 16px 17px 13px 16px;
    .fourLeftcon {
      width: 888px;
      height: 781px;
      background: #ffffff;
      border-radius: 4px 4px 4px 4px;
      //   display: flex;
      opacity: 1;
      border: 1px solid rgba(0, 0, 0, 0.06);
      padding: 24px 33px 0px 16px;
      box-sizing: border-box;

      .fourLeftOne {
        display: flex;
        height: 22px;
        font-size: 14px;
        font-family: PingFang SC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.45);
        line-height: 22px;
        .fourLeftOne1 {
          margin-right: 5px;
        }
      }
      .fourLeftTwo {
        margin: 20px 0px 58px;
        border: 1px solid forestgreen;
        .title {
          width: 839px;
          height: 66px;
          font-size: 18px;
          font-family: PingFang SC-Semibold, PingFang SC;
          font-weight: 600;
          color: #131415;
          line-height: 32px;
          margin-bottom: 18px;
        }
        .optionsItem {
          width: 663px;
          //   height: 58px;
          background: #ffffff;
          border-radius: 12px 12px 12px 12px;
          opacity: 1;
          border: 1px solid rgba(0, 0, 0, 0.15);
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          .optionsItemLeft {
            margin: 0 8px 0 16px;
            font-size: 18px;
            font-family: PingFang SC-Medium, PingFang SC;
            font-weight: 500;
            color: rgba(0, 0, 0, 0.85);
          }
          .optionsItemMiddle {
            width: 1px;
            height: 16px;
            background: rgba(0, 0, 0, 0.15);
            margin-right: 9px;
          }
          .optionsItemRight {
            // width: 280px;
            // height: 25px;
            font-size: 16px;
            font-family: Microsoft YaHei-Regular, Microsoft YaHei;
            font-weight: 400;
            color: rgba(0, 0, 0, 0.85);
            line-height: 25px;
            border: 1px solid sandybrown;
          }
        }
      }
      .fourLeftThree {
        margin-top: 58px;
        width: 342px;
        height: 53px;
        // border: 1px solid rgb(30, 210, 123);
        margin: 0 auto;
        display: flex;
        align-items: center;
        .van-pagination {
          display: flex;
          align-items: center;
          ::v-deep .van-pagination__item {
            min-width: 118px;
          }
          ::v-deep .van-pagination__prev {
            // width: 118px;
            height: 53px;
            background: #f7f7f7;
            // border: 1px solid rgb(33, 5, 148);
            border-radius: 50px 5px 5px 50px;
            .prevIcon {
              width: 35px;
              height: 26px;
              background: #f7f7f7;
              //   border: 1px solid red;
              margin-right: 2px;
              background: url("../assets/Icon／24／Line／icon24-line2-left.png")
                no-repeat center;
              //   img {
              //     width: 100%;
              //     height: 100%;
              //   }
            }
            .prev {
              width: 60px;
              height: 26px;
              font-size: 20px;
              font-family: Microsoft YaHei-Regular, Microsoft YaHei;
              font-weight: 400;
              color: #999999;
              // border: 1px solid sienna;
            }
          }
          ::v-deep .van-pagination__page-desc {
            width: 54px;
            height: 47px;
            text-align: left;
            font-size: 26px;
            font-family: Microsoft YaHei-Regular, Microsoft YaHei;
            font-weight: 400;
            color: #1c1f21;
            margin: 0 26px 0 26px;
            // border: 1px solid darkmagenta;
          }
          ::v-deep .van-pagination__next {
            // width: 118px;
            height: 53px;
            background: #317cfb;
            // border: 1px solid rgb(33, 5, 148);
            border-radius: 5px 50px 50px 5px;
            .prevIcon {
              width: 35px;
              height: 26px;
              background: #f7f7f7;
              //   border: 1px solid red;
              margin-right: 2px;
              //   img {
              //     width: 100%;
              //     height: 100%;
              //   }
              background: url("../assets/Icon／24／Line／icon24-line2-left备份.png")
                no-repeat center;
            }
            .prev {
              width: 60px;
              height: 26px;
              font-size: 20px;
              font-family: Microsoft YaHei-Regular, Microsoft YaHei;
              font-weight: 400;
              color: #ffffff;
              margin-left: 13px;
              // border: 1px solid sienna;
            }
          }
        }
      }
    }
  }
  .mainFourRight {
    border: 1px solid rgb(0, 255, 94);
    margin-left: 12px;
    width: 268px;
    height: 701px;
    background: #ffffff;
    .fourRightOne {
      width: 268px;
      height: 50px;
      background: #ffecd4;
      display: flex;
      //   flex-direction: column;
      align-items: center;
      justify-content: center;
      .fourRightTopLeft {
        width: 36px;
        height: 36px;
        background: url("../assets/编组\ 14.png") no-repeat center center;
      }
      .fourRightTopRight {
        width: 56px;
        height: 36px;
        line-height: 36px;
        font-size: 21px;
        font-family: PingFang SC-Regular, PingFang SC;
        font-weight: 400;
        color: #ff9000;
      }
    }
    .fourRightTwo {
      width: 245px;
      height: 112px;
      background: linear-gradient(
        204deg,
        #c9ddff 0%,
        rgba(152, 214, 250, 0.17) 100%
      );
      border-radius: 8px 8px 8px 8px;
      margin: 13px 11px 23px 12px;
      padding: 9px 0 0 22px;
      box-sizing: border-box;
      .fourRightTwo-1 {
        display: flex;
        font-family: PingFang SC-Medium, PingFang SC;
        font-weight: 500;
        color: #131415;
        font-size: 14px;
        flex-wrap: wrap;
        // border: 1px solid rgb(0, 255, 94);
        .fourRightTwo-1-item {
          line-height: 24px;
          margin-right: 23px;
          .title {
            margin-right: 4px;
          }
        }
      }
      .fourRightTwo-2 {
        width: 164px;
        height: 36px;
        background: #ffffff;
        border-radius: 1000px 1000px 1000px 1000px;
        margin: 0 auto;
        cursor: pointer;
        margin-top: 8px;
        font-size: 14px;
        font-family: PingFang SC-Regular, PingFang SC;
        font-weight: 400;
        color: #c0c4cc;
        line-height: 36px;
        text-align: center;
      }
    }
    .fourRightThree {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 12px;
      padding-right: 9px;
      margin-top: 23px;
      border: 1px solid red;
      .fourRightThreeL {
        width: 72px;
        height: 25px;
        font-size: 18px;
        font-family: PingFang SC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(13, 13, 13, 0.65);
      }
      .fourRightThreeR {
        width: 126px;
        height: 20px;
        font-size: 14px;
        font-family: PingFang SC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(13, 13, 13, 0.65);
      }
    }
    .fourRightFour {
      width: 268px;
      height: 2px;
      background: #f6f6f6;
      margin-top: 12px;
    }
    .fourRightFive {
      // border: 1px solid red;
      padding: 20px 0px 0 12px;
      font-size: 18px;
      font-family: PingFang SC-Regular, PingFang SC;
      font-weight: 400;
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 33px;
      .fourFiveItem {
        width: 44px;
        height: 44px;
        margin-right: 20px;
        margin-bottom: 17px;
        position: relative;
        cursor: pointer;

        .fourRightCon {
          border-radius: 50%;
          width: 44px;
          height: 44px;
          background: #317cfb;
          border: 0px solid #317cfb;
          color: #ffffff;
          text-align: center;
          line-height: 44px;
        }
        .postionConten {
          position: absolute;
          top: 22px;
          left: 1px;
          width: 43px;
          height: 17px;
          background: #9dc2ff;
          font-size: 12px;
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          color: #000000;
          line-height: 17px;
        }
      }
    }
    .fourRightSix {
      width: 233px;
      height: 36px;
      background: #317cfb;
      font-size: 16px;
      font-family: PingFang SC-Medium, PingFang SC;
      font-weight: 500;
      color: #ffffff;
      line-height: 36px;
      text-align: center;
      margin: 0 auto;
      border-radius: 30px;
      cursor: pointer;
    }
  }
}
</style>