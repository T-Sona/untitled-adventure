import * as chapters from "@/chapters";

export default {
  state: {
    currentChapter: null,
    currentPlayer: null
  },
  getters: {
    getCurrentChapter: state => state.currentChapter,
    getCurrentPlayer: state => state.currentPlayer
  },
  actions: {
    async toChapter({ commit, state }, chapterString) {
      const getChapter = chapters[`ch${chapterString}`];
      const chapter = getChapter(state.currentPlayer);
      console.log(state.currentPlayer);
      console.log(chapter);
      if (chapter) {
        commit("setChapter", chapter);
      }
    },
    updatePlayer({ commit }, player) {
      commit("setPlayer", player);
    }
  },
  mutations: {
    setChapter(state, chapter) {
      state.currentChapter = chapter;
    },
    setPlayer(state, player) {
      state.currentPlayer = player;
    }
  },
  namespaced: true
};
