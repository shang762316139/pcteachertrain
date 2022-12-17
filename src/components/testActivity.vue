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
      <div class="mainTopThree">
        <p class="p1"></p>
        <p class="p2">获得证书</p>
      </div>
    </div>
    <div class="mainFour">
      <div class="mainFourleft">
        <!--  -->
        <div class="fourLeftcon">
          <!--  v-for="(item, index) in this.storeGetAddTest().addStestData"
            :key="index" -->
          <div class="testQuestions">
            <div class="fourLeftOne">
              <div class="fourLeftOne1">
                {{
                  this.patternTitle(
                    this.storeGetAddTest().addStestData[currentPage - 1]
                  )
                }}
                <!-- {{this.storeGetAddTest().addStestData[currentPage - 1]}} -->
              </div>
              <div class="fourLeftOne2">
                ({{
                  this.storeGetAddTest().addStestData[currentPage - 1].score
                }}分)
              </div>
              <!-- this.storeGetAddTest() -->
            </div>
            <div class="fourLeftTwo">
              <div class="title">
                {{ storeGet.addStestData[currentPage - 1].questionStem }}
              </div>
              <!-- 单选 -->
              <div
                v-show="
                  storeGet.addStestData[currentPage - 1].questionCode == '1'
                "
              >
                <div
                  class="optionsItem"
                  v-for="ite in storeGet.addStestData[currentPage - 1].choice"
                  :key="ite.code"
                  @click="
                    choiceClick(
                      ite.type,
                      storeGet.addStestData[currentPage - 1].testId
                    )
                  "
                  :class="{ optionsItemBord: borCode == ite.type }"
                >
                  <!-- -->

                  <p class="optionsItemLeft">{{ ite.type }}</p>
                  <p class="optionsItemMiddle"></p>
                  <p class="optionsItemRight">{{ ite.content }}</p>
                </div>
              </div>
              <!-- 多选 -->
              <div
                v-show="
                  storeGet.addStestData[currentPage - 1].questionCode == '2'
                "
              >
                <div
                  class="optionsItem"
                  v-for="ite in storeGet.addStestData[currentPage - 1].choice"
                  :key="ite.code"
                  @click="
                    choiceClick2(
                      ite.type,
                      storeGet.addStestData[currentPage - 1].testId
                    )
                  "
                >
                  <p class="optionsItemLeft">{{ ite.type }}</p>
                  <p class="optionsItemMiddle"></p>
                  <p class="optionsItemRight">{{ ite.content }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="fourLeftThree">
            <button
              class="pageLeft"
              @click="preChange(currentPage)"
              :class="currentPage == 1 ? 'disabledc1' : ''"
            >
              <div class="prevIcon"></div>
              <div class="prev">上一题</div>
            </button>
            <div class="pageMiddle">
              <span class="span1">{{ currentPage }}</span>
              <span class="span2"
                >/{{ storeGetAddTest().addStestData.length }}</span
              >
            </div>

            <button
              class="pageRight"
              @click="pageNextChange(currentPage)"
              :class="
                currentPage == storeGetAddTest().addStestData.length
                  ? 'disabledc'
                  : ''
              "
            >
              <div class="prev">下一题</div>
              <div class="prevIcon"></div>
            </button>
          </div>
        </div>
      </div>
      <div class="mainFourRight">
        <div class="fourRightOne">
          <div class="fourRightTopLeft"></div>
          <!-- <div class="fourRightTopRight">04:30</div> -->
          <van-count-down class="fourRightTopRight" :time="time" />
        </div>
        <div class="fourRightTwo">
          <div class="fourRightTwo-1">
            <div class="fourRightTwo-1-item">
              <span class="title">总题数:</span>
              <span>{{ this.storeGetAddTest().addStestData.length }}题</span>
            </div>
            <div class="fourRightTwo-1-item">
              <span class="title">总分:</span>
              <span>{{ this.totleScore() }}分</span>
            </div>
            <div class="fourRightTwo-1-item">
              <span class="title">答题时长:</span>
              <span>{{ this.storeGetAddTest().times }}</span>
            </div>
          </div>
          <div class="fourRightTwo-2">查看本次答题情况</div>
        </div>
        <div class="fourRightThree">
          <div class="fourRightThreeL">题号列表</div>
          <div class="fourRightThreeR">答对自动跳转下一题</div>
        </div>
        <div class="fourRightFour"></div>
        <div class="fourRightFive">
          <div
            class="fourFiveItem"
            v-for="(item, index) in this.storeGetAddTest().addStestData"
            :key="item.testId"
          >
            <div
              ref="s"
              :class="[index == 0 ? 'fourRightCon2' : 'fourRightCon1']"
            >
              <!-- :class="[index == 0 ? 'fourRightCon3' : 'fourRightCon2']" -->

              {{ index + 1 }}
            </div>
            <p class="postionConten" v-show="currentPage == index + 1">
              当前题
            </p>
          </div>
        </div>
        <div class="fourRightSix" @click="totalChange(currentPage)">
          提交答卷
        </div>
      </div>
      <!-- 提交答卷弹框 -->
      <div class="submitVisible">
        <el-dialog
          title="提示"
          :visible.sync="submitVisible"
          width="600px"
          :before-close="cancel"
          custom-class="submitDialog"
        >
          <div class="imgs">
            <img src="../assets/Icon／Fill／Check-Circle-Fill.png" alt="" />
          </div>
          <span>此操作将提交该试卷，是否提交？ </span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="cancel">取 消</el-button>
            <el-button type="primary" @click="submit">确 定</el-button>
          </span>
        </el-dialog>
      </div>

      <!-- 确定弹框 -->
      <div class="sureVisible">
        <el-dialog
          title="提示"
          :visible.sync="sureVisible"
          width="600px"
          :before-close="surecancel"
          custom-class="sureDialog"
        >
          <div class="top1">
            <div class="top1Left">
              <span class="span1">得分:</span>
              <span class="span2">96</span>
              <span class="span1">分</span>
            </div>
            <div class="top1Right">
              <span class="span1">用时:</span>
              <span class="span2">01</span>
              <span class="span1">时</span>
              <span class="span2">96</span>
              <span class="span1">分</span>
              <span class="span2">06</span>
              <span class="span1">秒</span>
            </div>
          </div>
          <div class="top2">
            <div class="top2Left">
              <span class="span1">答题数量:</span>
              <span class="span2">45</span>
              <span class="span1">题</span>
            </div>
            <div class="top2Middle">
              <span class="span1">答对:</span>
              <span class="span2">29</span>
              <span class="span1">题</span>
            </div>
            <div class="top2Right">
              <span class="span1">答错:</span>
              <span class="span2">29</span>
              <span class="span1">题</span>
            </div>
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="lookHandle">查看错题</el-button>
          </span>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,

      // 点击选项边框变蓝
      borCode: "",
      time: parseFloat(this.storeGetAddTest().times) * 60 * 60 * 1000,
      // 存答案
      saveanswerArr: [],
      checkBox: [],
      // checkboxGroup1: [],
      storeGet: "",
      // 提交弹框
      submitVisible: false,
      // 确定弹框
      sureVisible: false,
    };
  },

  components: {},

  computed: {},
  created() {
    console.log(this.$store.state.trainingActivity, "....");
    this.$nextTick(() => {
      this.storeGet = this.storeGetAddTest();
      console.log(this.storeGetAddTest(), "llll===");
      console.log(this.storeGetAddTest().addStestData, "xxx===");
    });
  },
  mounted() {},
  //mounted: {},

  methods: {
    // 处理数组里重复的对象
    removeDuplicates(arr) {
      const result = [];
      const duplicatesIndices = [];

      // 循环遍历原始数组中的每个项
      arr.forEach((current, index) => {
        if (duplicatesIndices.includes(index)) return;

        result.push(current);

        // 循环遍历数组中当前项之后的其他项
        for (
          let comparisonIndex = index + 1;
          comparisonIndex < arr.length;
          comparisonIndex++
        ) {
          const comparison = arr[comparisonIndex];
          const currentKeys = Object.keys(current);
          const comparisonKeys = Object.keys(comparison);

          // 检查对象中的键数
          if (currentKeys.length !== comparisonKeys.length) continue;

          // 检查关键字名称
          const currentKeysString = currentKeys.sort().join("").toLowerCase();
          const comparisonKeysString = comparisonKeys
            .sort()
            .join("")
            .toLowerCase();
          if (currentKeysString !== comparisonKeysString) continue;

          // 检查值
          let valuesEqual = true;
          for (let i = 0; i < currentKeys.length; i++) {
            const key = currentKeys[i];
            if (current[key] !== comparison[key]) {
              valuesEqual = false;
              break;
            }
          }
          if (valuesEqual) duplicatesIndices.push(comparisonIndex);
        }
      });

      return result;
    },
    storeGetAddTest() {
      const id = this.$route.query.id;
      const storeGet = this.$store.state.trainingActivity.filter(
        (item) => item.key == id
      );
      // console.log(storeGet, "storeGet");
      //问题的对象，里面有addStestData数组
      return storeGet[0].getAddTest; //此活动下的试题信息
    },
    patternTitle(item) {
      console.log(item, "item,item");
      if (item.questionCode == "1") {
        return "单项选择题";
      } else if (item.questionCode == "2") {
        return "多项选择题";
      } else if (item.questionCode == "3") {
        return "判断题";
      } else {
        return "填空题";
      }
    },
    // 总分
    totleScore() {
      let score = 0;
      score = this.storeGetAddTest().addStestData.reduce(
        (prev, cur) => prev + cur.score,
        0
      );
      return score;
    },
    choiceClick(v, ID, e) {
      console.log(v, "vv"); //选中的选项
      console.log(ID, "ID"); //试题ID

      // 改变颜色
      let answer = {};
      // answer.singleChoice = v;
      answer.ID = ID;
      e = e || window.event;
      let isActive = e.target.getAttribute("class").includes("optionsItemBord");
      if (isActive) {
        e.target.classList.remove("optionsItemBord");
        answer.singleChoice = "";
      } else {
        // e.target.classList.add("optionsItemBord");
        this.borCode = v;
        answer.singleChoice = v;
      }

      this.saveanswerArr = this.saveanswerArr.filter(
        (item) => item.ID != answer.ID
      );
      this.saveanswerArr.push(answer);
      // this.removeDuplicates(this.saveanswerArr);
      console.log(this.saveanswerArr, "this.saveanswerArr1");
    },
    choiceClick2(v, ID, e) {
      console.log(v, "vv"); //选中的选项
      console.log(ID, "ID"); //试题ID
      // console.log(v, "vv");
      e = e || window.event;
      let isActive = e.target.getAttribute("class").includes("optionsItemBord");
      if (isActive) {
        e.target.classList.remove("optionsItemBord");
        const index = this.checkBox.indexOf(v);
        this.checkBox.splice(index, 1);
        console.log(this.checkBox, "this.checkBox1");
      } else {
        e.target.classList.add("optionsItemBord");
        this.checkBox.push(v);
        console.log(this.checkBox, "this.checkBox2");
      }

      let answer = {};
      answer.ID = ID;
      answer.checkBox = this.checkBox;
      // console.log(answer, "answer");
      this.saveanswerArr = this.saveanswerArr.filter(
        (item) => item.ID != answer.ID
      );
      this.saveanswerArr.push(answer);
      console.log(this.saveanswerArr, "this.saveanswerArr2");
    },

    preChange(page) {
      console.log(page, "page2");
      if (this.currentPage + 1 == page) {
        this.$refs.s[4].classList.add("fourRightCon3");
      }
      page--;
      this.currentPage = page;
      this.$refs.s[page].classList.add("fourRightCon3");
      console.log(this.$refs.s[page], "this.$refs.s[page ]");
    },
    pageNextChange(page) {
      console.log(page, "page");
      page++;
      this.currentPage = page;
      // console.log(this.$refs.s[page - 1], "this.$refs.s[page - 1]");
      // console.log(this.$refs.s[page - 2], "this.$refs.s[page - 2]");
      // console.log(this.$refs.s[page - 3], "this.$refs.s[page-3 ]");

      // console.log(this.$refs.s[page], "this.$refs.s[page ]");

      this.$refs.s[page - 2].classList.add("fourRightCon3");
      this.$refs.s[page - 1].classList.add("fourRightCon2");
    },
    totalChange() {
      // console.log(page, "page");
      this.submitVisible = true;
      console.log(this.saveanswerArr, "this.saveanswerArr--00");
      localStorage.setItem("saveAnswerArr", JSON.stringify(this.saveanswerArr));
    },
    activityItem(id) {
      console.log(id, "id2");
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(() => {
          done();
        })
        .catch(() => {});
    },
    submit() {
      this.submitVisible = false;
      setTimeout(() => {
        this.sureVisible = true;
      }, 500);
    },
    cancel() {
      this.submitVisible = false;
    },
    surecancel() {
      this.sureVisible = false;
    },
    lookHandle() {
      this.sureVisible = false;
    },
  },
};
</script>
<style lang='scss' scoped>
.mainTop {
  height: 54px;
  background: #ffffff;
  border-radius: 4px 4px 4px 4px;
  // margin-bottom: 12px;
  display: flex;
  align-items: center;
  position: relative;
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
    width: 140px;
    height: 36px;
    background: #fd9841;
    border-radius: 18px 18px 18px 18px;
    font-size: 16px;
    font-family: Source Han Sans CN-Regular, Source Han Sans CN;
    font-weight: 400;
    color: #ffffff;
    line-height: 36px;
    position: absolute;
    right: 12px;
    display: flex;
    align-items: center;
    .p1 {
      width: 24px;
      height: 24px;
      margin-left: 18px;
      background: url("../assets/Frame\(1\).png") no-repeat center center;
    }
    .p2 {
      font-size: 16px;
      font-family: Source Han Sans CN-Regular, Source Han Sans CN;
      font-weight: 400;
      color: #ffffff;
      margin-left: 4px;
    }
  }
}
.mainFour {
  // border: 1px solid red;
  margin-top: 16px;
  display: flex;
  .mainFourleft {
    // width: 920px;
    // border: 1px solid rgb(81, 0, 255);
    box-sizing: border-box;
    height: 888px;
    background: #ffffff;
    border-radius: 4px 4px 4px 4px;
    padding: 16px 17px 13px 16px;
    .fourLeftcon {
      width: 888px;
      // height: 781px;
      background: #ffffff;
      border-radius: 4px 4px 4px 4px;
      //   display: flex;
      opacity: 1;
      border: 1px solid rgba(0, 0, 0, 0.06);
      padding: 24px 33px 0px 16px;
      box-sizing: border-box;
      .testQuestions {
        // height: 508px;
        // border: 1px solid salmon;
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
          // border: 1px solid forestgreen;
          .title {
            width: 839px;
            // height: 66px;
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
            cursor: pointer;
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
              // border: 1px solid sandybrown;
            }
          }
          //边框颜色改变
          .optionsItemBord {
            border: 1px solid #317cfb;
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

        .pageLeft {
          width: 118px;
          height: 53px;
          background: #f7f7f7;
          display: flex;
          align-items: center;
          border-radius: 50px 5px 5px 50px;
          border: none;
          cursor: pointer;

          .prevIcon {
            width: 35px;
            height: 26px;
            background: #f7f7f7;
            //   border: 1px solid red;
            margin-right: 2px;
            background: url("../assets/Icon／24／Line／icon24-line2-left.png")
              no-repeat center;
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
        .pageMiddle {
          width: 76px;
          height: 47px;
          font-size: 26px;
          font-family: Microsoft YaHei-Regular, Microsoft YaHei;
          font-weight: 400;
          line-height: 47px;
          margin-left: 26px;
          margin-right: 4px;
          // border: 1px solid red;
          .span1 {
            color: #1c1f21;
          }
          .span2 {
            color: #999999;
          }
        }
        .pageRight {
          // width: 118px;
          height: 53px;
          background: #317cfb;
          // border: 1px solid rgb(33, 5, 148);
          border-radius: 5px 50px 50px 5px;
          display: flex;
          align-items: center;
          border: none;
          cursor: pointer;
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
        .disabledc1 {
          pointer-events: none;
        }
        .disabledc {
          pointer-events: none;
          background: #6d9ef3;
        }
      }
    }
  }
  .mainFourRight {
    // border: 1px solid rgb(0, 255, 94);
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
        // width: 56px;
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
      // border: 1px solid red;
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
      align-content: flex-start;
      height: 344px;
      overflow-y: auto;
      .fourFiveItem {
        width: 44px;
        height: 44px;
        margin-right: 20px;
        margin-bottom: 17px;
        box-sizing: border-box;
        position: relative;
        cursor: pointer;
        // border: 1px solid #317cfb;
        // border-radius: 50%;
        // line-height: 44px;
        // text-align: center;
        .fourRightCon1 {
          border-radius: 50%;
          width: 44px;
          height: 44px;
          background: #ffffff;
          border: 1px solid #317cfb;
          color: rgba(0, 0, 0, 0.65);
          text-align: center;
          line-height: 44px;
        }
        .fourRightCon2 {
          border-radius: 50%;
          width: 44px;
          height: 44px;
          background: #eaf2ff;
          border: 1px solid #317cfb;
          color: rgba(0, 0, 0, 0.65);
          text-align: center;
          line-height: 44px;
        }
        .fourRightCon3 {
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
  .submitVisible {
    ::v-deep .submitDialog {
      // border: 1px solidred;
      height: 300px;
      .el-dialog__header {
        display: flex;
        align-items: center;
        height: 56px;
        // border: 1px solid darkblue;
        border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        // line-height: 56px;
        font-size: 16px;
        font-family: PingFang SC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.85);
        padding: 0;
        padding-left: 24px;
        .el-dialog__headerbtn {
          width: 16px;
          height: 16px;
        }
      }
      .el-dialog__body {
        height: 192px;
        // border: 1px solid seagreen;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        .imgs {
          width: 80px;
          height: 80px;
          margin: 26px 0 20px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        span {
          display: inline-block;
        }
      }
      .el-dialog__footer {
        display: flex;
        align-items: center;
        justify-content: end;
        .dialog-footer {
          .el-button {
            width: 74px;
            height: 32px;
            padding: 0;
          }
          .el-button--default {
            // border: 1px solid rgba(0, 0, 0, 0.15);
            font-size: 14px;
            font-family: PingFang SC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(0, 0, 0, 0.65);
            line-height: 32px;
          }
          .el-button--primary {
            background: #1890ff;
            font-size: 14px;
            font-family: PingFang SC-Regular, PingFang SC;
            font-weight: 400;
            color: #ffffff;
            line-height: 32px;
          }
        }
      }
    }
  }
  .sureVisible {
    ::v-deep .sureDialog {
      height: 341px;
      .el-dialog__header {
        display: flex;
        align-items: center;
        height: 56px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        font-size: 16px;
        font-family: PingFang SC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.85);
        padding: 0;
        padding-left: 24px;
        .el-dialog__headerbtn {
          width: 16px;
          height: 16px;
        }
      }
      .el-dialog__body {
        padding: 0;
        display: flex;
        // justify-content: center;
        flex-direction: column;
        align-items: center;
        .top1 {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 51px;
          margin-top: 25px;

          .top1Left {
            width: 139px;
            padding: 0 5px;
            box-sizing: border-box;
            .span1 {
              font-size: 20px;
              font-family: PingFang SC-Medium, PingFang SC;
              font-weight: 500;
              color: #131415;
            }
            .span2 {
              font-size: 40px;
              font-family: PingFang SC-Medium, PingFang SC;
              font-weight: bolder;
              color: #317cfb;
              padding: 0 5px;
            }
          }
          .top1Right {
            // width: 139px;
            padding: 0 5px;
            box-sizing: border-box;
            margin-left: 43px;
            .span1 {
              font-size: 20px;
              font-family: PingFang SC-Medium, PingFang SC;
              font-weight: 500;
              color: #131415;
            }
            .span2 {
              font-size: 40px;
              font-family: PingFang SC-Medium, PingFang SC;
              font-weight: bolder;
              color: #317cfb;
              padding: 0 5px;
            }
          }
        }
        .top2 {
          margin-top: 38px;
          margin-left: 17px;
          margin-bottom: 44px;
          align-items: center;
          width: 469px;
          height: 58px;
          background: #eaf2ff;
          border-radius: 6px 6px 6px 6px;
          display: flex;
          justify-content: space-around;
          .top2Left {
            width: 135px;
            height: 30px;
            font-size: 16px;
            font-family: PingFang SC-Regular, PingFang SC;
            font-weight: 400;
            color: #000000;
            line-height: 30px;
            padding: 0 5px;
            box-sizing: border-box;
            .span2 {
              font-size: 20px;
              font-family: PingFang SC-Regular, PingFang SC;
              font-weight: 600;
              color: #477df3;
              margin: 0px 8px;
            }
          }
          .top2Middle {
            width: 105px;
            height: 30px;
            font-size: 16px;
            font-family: PingFang SC-Regular, PingFang SC;
            font-weight: 400;
            color: #000000;
            line-height: 30px;
            padding: 0 5px;
            box-sizing: border-box;
            .span2 {
              font-size: 20px;
              font-family: PingFang SC-Regular, PingFang SC;
              font-weight: 600;
              color: #47f389;
              margin: 0px 8px;
            }
          }
          .top2Right {
            // border: 1px solid blueviolet;
            width: 105px;
            height: 30px;
            font-size: 16px;
            font-family: PingFang SC-Regular, PingFang SC;
            font-weight: 400;
            color: #000000;
            line-height: 30px;
            padding: 0 5px;
            box-sizing: border-box;
            .span2 {
              font-size: 20px;
              font-family: PingFang SC-Regular, PingFang SC;
              font-weight: 600;
              color: red;
              margin: 0px 8px;
            }
          }
        }
      }
      .el-dialog__footer {
        padding: 0;
        display: flex;
        justify-content: center;
        .dialog-footer {
          .el-button {
            padding: 0;
          }
          .el-button--default {
            display: none;
          }
          .el-button--primary {
            background: #1890ff;
            font-size: 14px;
            font-family: PingFang SC-Regular, PingFang SC;
            font-weight: 400;
            color: #ffffff;
            line-height: 32px;
            width: 222px;
            height: 40px;
            border-radius: 1000px 1000px 1000px 1000px;
          }
        }
      }
    }
  }
}
</style>