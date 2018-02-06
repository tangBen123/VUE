import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) ;
const state = {
  count:2,
  headShow:true,
  showLoading:false,
  navClass:[true,false,false,false],
  show:false
} ;
const actions = {
  add:({commit})=>{
    commit('add') ;
  },
  milus:({commit})=>{
    commit("milus") ;
  },
  headShow:({commit})=>{
    commit('headShow') ;
  },
  showLoading:({commit})=>{
    commit('showLoading')  ;
  },
  hideLoading:({commit})=>{
    commit('hideLoading') ;
  },
  tran:({commit})=>{
    commit("tran")
  }
} ;
const mutations = {
  add(state){
    state.count++ ;
  },
  milus(state){
    if(state.count < 1){
      alert("不能再见了") ;
    }else {
      state.count-- ;
    }
  },
  headShow(state){
    state.headShow = false ;
  },
  showLoading(state){
    state.showLoading = true ;
  },
  hideLoading(state){
    state.showLoading = false ;
  },
  tran:(state)=>{
    state.show = !state.show ;
  }
} ;
const getters = {
  count:(state)=>{
    return state.count
  },
  show:(state)=>{
    return state.headShow
  },
  showLoading:(state)=>{
    return state.showLoading
  },
  tran(state){
    return state.show
  }
} ;
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
