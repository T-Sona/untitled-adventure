<template>
  <div class="ui">
    <h2>
      <img
        class="banner"
        v-if="player.gender === 'male'"
        src="@/assets/male.png"
      />
      <img class="banner" v-else src="@/assets/female.png" />
      <p>{{ player.name }}</p>
    </h2>
    <h3>Main Skills</h3>
    <hr />
    <v-layout row wrap>
      <v-flex xs12 md10>Strength:</v-flex>
      <v-flex>{{ player.skills.str }}</v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 md10>Intelligence:</v-flex>
      <v-flex>{{ player.skills.int }}</v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 md10>Agility:</v-flex>
      <v-flex>{{ player.skills.agi }}</v-flex>
    </v-layout>
    <br />
    <h3>Support Skills</h3>
    <hr />
    <v-layout row wrap>
      <v-flex xs12 md10>Language:</v-flex>
      <v-flex>{{ player.skills.lan }}</v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 md10>Lockpicking:</v-flex>
      <v-flex>{{ player.skills.lpk }}</v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 md10>Sneak:</v-flex>
      <v-flex>{{ player.skills.snk }}</v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 md10>Speech:</v-flex>
      <v-flex>{{ player.skills.spe }}</v-flex>
    </v-layout>
    <br />
    <h3>Magic Skills</h3>
    <hr />
    <v-layout row wrap>
      <v-flex xs12 md10>Fire:</v-flex>
      <v-flex>{{ player.skills.fir }}</v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 md10>Water:</v-flex>
      <v-flex>{{ player.skills.wtr }}</v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 md10>Air:</v-flex>
      <v-flex>{{ player.skills.air }}</v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 md10>Earth:</v-flex>
      <v-flex>{{ player.skills.ear }}</v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 md10>Life:</v-flex>
      <v-flex>{{ player.skills.lif }}</v-flex>
    </v-layout>
    <v-layout class="mt2" row wrap>
      <v-flex xs6>
        <div class="button">
          <img class="char-btn" src="@/assets/bag.png" />
        </div>
      </v-flex>
      <v-flex xs6>
        <div class="button">
          <img class="char-btn" src="@/assets/equip.png" />
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "character-bar",
  props: {
    player: {
      required: true,
      type: Object
    }
  }
};
</script>
<style scoped>
.ui {
  width: calc(100% - 1rem);
  height: 100%;
  margin-left: 1rem;
}

h2 {
  display: table;
}

hr {
  border-color: #777;
}

p {
  padding-left: 1rem;
  display: table-cell;
  vertical-align: middle;
}

.banner {
  max-height: 2rem;
}

.char-btn {
  width: 4rem;
  height: 4rem;
}

.button {
  background-color: rgba(200, 200, 200, 0.5);
  margin-left: calc(50% - 2rem);
}

.button:hover {
  background-color: rgba(250, 250, 250, 0.5);
}

.mt2 {
  margin-top: 2rem;
}
</style>
