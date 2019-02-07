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
  return (to, from, next) => {
    if (
      to.path === "/game" &&
      (!store.getters["game/getCurrentPlayer"] ||
        !store.getters["game/getCurrentChapter"])
    ) {
      next("/");
    } else {
      next();
    }
  };
}

export { getNavigationGuard };
