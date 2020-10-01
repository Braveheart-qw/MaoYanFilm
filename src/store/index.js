import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
      filmDataList: null,
      contentHeight: "0px",
      currentNavBar: "猫眼电影",
  },
    
  mutations: {
      saveFilmDataList(state , data){
        state.filmDataList = data;
      },
      setContentHeight(state , data){
          state.contentHeight = data;
      }
  },
  actions: {
      saveFilm(state , data){
        state.commit("saveFilmDataList" , data);
      }
  },

  modules: {
  }
})