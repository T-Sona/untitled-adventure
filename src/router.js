import Vue from "vue";
import Router from "vue-router";
import Game from "./views/Game.vue";
import Home from "./views/Home.vue";
import NewGame from "./views/NewGame.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/game",
      name: "game",
      component: Game
    },
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
      path: "/not-found",
      name: "404: Page Not Found",
      component: () => import("./views/NotFound.vue")
    }
  ]
});
