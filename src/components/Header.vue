<template>
  <v-flex id="header" class="ui">
    <v-layout class="fl-left">
      <div id="logo">
        <a href="">
          <img src="@/assets/logo.png" />
        </a>
      </div>
      <div @click="$router.push('')">
        <a href="">
          Untitled Adventure
        </a>
      </div>
    </v-layout>
    <v-flex class="fl-right" hidden-md-and-up>
      <div v-if="ingame" class="button menu-btn">
        <img class="menu-icon" src="@/assets/menu.png" alt="menu" />
      </div>
    </v-flex>
  </v-flex>
</template>

<script>
export default {
  name: "Header",
  computed: {
    ingame() {
      return this.$route.path === "/game";
    }
  }
};
</script>

<style scoped>
a {
  color: unset;
  text-decoration: unset;
}

.fl-left {
  float: left;
}

.fl-right {
  float: right;
}

.menu-btn {
  width: 3rem;
  height: 3rem;
  display: table;
  background-color: rgba(200, 200, 200, 0.5) !important;
}

.menu-btn:hover {
  background-color: rgba(250, 250, 250, 0.5) !important;
}

.menu-icon {
  display: table-cell;
  vertical-align: middle;
  margin-left: calc(50% - 1.25rem);
  max-height: 2.5rem;
}

#header {
  margin-bottom: 10px;
  font-family: cursive;
  font-weight: 200;
  font-size: 1.5rem;
  display: table;
}

#header div {
  margin: 0;
  display: table-cell;
  vertical-align: middle;
}

#logo {
  width: 4rem;
}

#logo img {
  vertical-align: middle;
  height: 3rem;
}
</style>
