<template>
  <v-container fluid id="app">
    <v-flex id="header" class="ui">
      <v-layout class="fl-left">
        <div id="logo">
          <img src="./assets/logo.png" />
        </div>
        <div>
          Untitled Adventure
        </div>
      </v-layout>
      <v-flex class="fl-right" hidden-md-and-up>
        <div class="button menu-btn">
          <img class="menu-icon" src="./assets/menu_male.png" alt="menu" />
        </div>
      </v-flex>
    </v-flex>
    <router-view />
  </v-container>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      //
    };
  }
};
</script>
<style>
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
  background-color: rgba(200, 200, 200, 0.3);
}
.menu-btn:hover {
  background-color: rgba(200, 200, 200, 0.5);
}

.menu-icon {
  display: table-cell;
  vertical-align: middle;
  margin-left: calc(50% - 1.25rem);
  max-height: 2.5rem;
}

#app {
  background-color: rgb(44, 42, 39) !important;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
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

.ui {
  background-color: rgb(74, 78, 74);
  border-radius: 3px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.4);
  color: white;
  font-family: "Courier New", Courier, monospace;
  font-weight: 600;
  padding: 10px;
  width: 100%;
}

.button {
  cursor: pointer;
  background-color: rgba(150, 150, 150, 0.3);
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.4);
  margin: 0.5rem;
  display: table;
}
.button p {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}
.button.secondary {
  box-shadow: none;
  background: none;
}
.button:hover {
  background-color: rgba(150, 150, 150, 0.5);
}
.button:active {
  background-color: rgba(150, 150, 150, 0.8);
  box-shadow: 1px 1px 0px 0px rgba(0, 0, 0, 0.4);
}
.button.disabled {
  pointer-events: none;
  opacity: 0.5;
}

.txt-input {
  background-color: rgba(150, 150, 150, 0.3);
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.4) inset;
  padding: 0.5rem;
  display: table;
}
</style>
