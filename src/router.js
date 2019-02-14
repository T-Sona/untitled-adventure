import Vue from "vue";
import Router from "vue-router";
import Game from "./views/Game.vue";
import Home from "./views/Home.vue";
import NewGame from "./views/NewGame.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/new",
      name: "new-game",
      component: NewGame
    },
    {
      path: "/game",
      name: "game",
      component: Game
    },
    {
      path: "/not-found",
      name: "404: Page Not Found",
      component: () => import("./views/NotFound.vue")
    }
  ]
});

function getNavigationGuard(store) {
  return (to, _, next) => {
    if (to.path === "/game") {
      const currentPlayer = store.getters["game/getCurrentPlayer"];

      if (!currentPlayer) {
        const player = JSON.parse(sessionStorage.getItem("player"));

        if (!player) {
          next("");
        } else {
          store.dispatch("game/updatePlayer", player);
        }
      }

      const currentChapter = store.getters["game/getCurrentChapter"];

      if (!currentChapter) {
        const chapter = sessionStorage.getItem("chapter");
        if (chapter) {
          const success = store.dispatch("game/toChapter", chapter);

          if (!success) {
            next("");
          }
        }
      }
    }
    next();
  };
}

export { getNavigationGuard };
