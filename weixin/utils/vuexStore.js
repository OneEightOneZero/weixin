let Vuex = require('./vuex.js');
let Vue = require('./vue.js');
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 0,
    skill: ['a', 'b', 'c'],
    age: 6
  },
  mutations: {
    editAge(state, data) {
      state.age = data
    }
  },
  getters: {},
  actions: {
    setAge(context, data) {
      context.commit('editAge', data)
    },
  }
})

export default new Vue({
  store
})