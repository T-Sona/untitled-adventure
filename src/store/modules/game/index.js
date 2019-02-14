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
    toChapter({ commit, state }, chapterString) {
      const getChapter = chapters[`ch${chapterString}`];
      const chapter = getChapter(state.currentPlayer);

      if (chapter) {
        window.sessionStorage.setItem("chapter", chapter.id);
        commit("setChapter", chapter);
        return true;
      } else {
        return false;
      }
    },
    updatePlayer({ commit }, player) {
      window.sessionStorage.setItem("player", JSON.stringify(player));
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
