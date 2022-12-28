// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })
import Vue from "vue";
import Vuex from "vuex";
//需要使用插件一次
Vue.use(Vuex);
//state:仓库存储数据的地方
const state = {
  trainingActivity: [],

  ishow: true,
};
//mutations：存放了可以修改state中数据的方法，且仅支持同步操作，修改state的唯一手段
const mutations = {
  muaCtivityData(state, payloade) {
    state.trainingActivity = payloade;
  },
  userAnswer({ trainingActivity }, payloade) {
    console.log(trainingActivity, "trainingActivity");
    const activity = trainingActivity.filter(
      (item) => item.key == payloade.key
    );
    console.log(payloade, "payloade");
    const test = activity[0].getAddTest.addStestData.filter(
      (item) => item.testId == payloade.testId
    );
    test[0].userAnswer = payloade.userAnswer;
    test[0].usercorrect = payloade.usercorrect;
    console.log(payloade.usercorrect, "test[0].usercorrect");
  },
  clearAnswer({ trainingActivity }, payloade) {
    console.log(trainingActivity, "trainingActivity");
    const activity = trainingActivity.filter(
      (item) => item.key == payloade.key
    );
    console.log(payloade, "payloade");
    const test = activity[0].getAddTest.addStestData.filter(
      (item) => item.testId == payloade.testId
    );
    test[0].userAnswer = payloade.userAnswer;
  },
  // 刷新页面让userAnswer为空
  // newUserAnswer({ trainingActivity }, { key }) {
  //   const activity = trainingActivity.filter((item) => item.key == key);
  //   activity[0].getAddTest.addStestData.forEach((item) => {
  //     item.userAnswer = "";
  //     item.usercorrect = "";
  //   });
  // },

  // result1({ trainingActivity }, payloade) {
  //   const activity = trainingActivity.filter(
  //     (item) => item.key == payloade.key
  //   );

  //   activity[0].getAddTest.addStestData.forEach((item) => {
  //     item.usercorrect = payloade.usercorrect;
  //   });
  // },
  result2({ trainingActivity }, payloade) {
    const activity = trainingActivity.filter(
      (item) => item.key == payloade.key
    );
    activity[0].getAddTest.WorngNum = payloade.WorngNum;
    activity[0].getAddTest.rightNum = payloade.rightNum;
    activity[0].getAddTest.answerScore = payloade.answerScore;
    activity[0].getAddTest.userAnswerStat = payloade.userAnswerStat;
  },
  useTime({ trainingActivity }, payloade) {
    const activity = trainingActivity.filter(
      (item) => item.key == payloade.key
    );
    activity[0].getAddTest.hour = payloade.hour;
    activity[0].getAddTest.minute = payloade.minute;
    activity[0].getAddTest.second = payloade.second;
  },
  result3({ trainingActivity }, payloade) {
    const activity = trainingActivity.filter(
      (item) => item.key == payloade.key
    );
    activity[0].getAddTest.situation.push(payloade);
    console.log(activity[0].getAddTest.situation, "result3");
  },
  errorArr({ trainingActivity }, payloade) {
    const activity = trainingActivity.filter(
      (item) => item.key == payloade.key
    );
    activity[0].getAddTest.addStestData = payloade.errorArr;
  },
};
//actions:同mutations类似，可以书写自己的业务逻辑，也可以处理异步，不直接更变数据状态，而是提交到mutations，由mutations进行变更
const actions = {
  activityData(content) {
    console.log(content, "content");
    // console.log(paylode,"paylode")
    // setTimeout(() => {
    //   const gettotalData = JSON.parse(localStorage.getItem("totalData"))
    //   content.commit("muaCtivityData", gettotalData)
    // }, 1000);
    const gettotalData = JSON.parse(localStorage.getItem("totalData2"));
    console.log(gettotalData, "gettotalData");
    content.commit("muaCtivityData", gettotalData);
  },
};
//getters:理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
const getters = {
  doneTodos(state) {
    return state.todos.filter((todo) => todo.done);
  },
};

//对外暴露Store类的一个实例
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
