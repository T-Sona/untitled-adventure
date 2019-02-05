<template>
  <div class="home">
    <v-layout class="ui" column>
      <h2>Your Name:</h2>
      <v-flex>
        <input class="txt-input" type="text" v-model="name" />
      </v-flex>
      <h2>Your Gender:</h2>
      <v-flex>
        <v-layout>
          <v-flex class="gender" xs6>
            <img
              :class="{ 'is-active': gender === 'female' }"
              src="@/assets/female.png"
              @click="gender = gender === 'female' ? '' : 'female'"
            />
          </v-flex>
          <v-flex class="gender" xs6>
            <img
              :class="{ 'is-active': gender === 'male' }"
              src="@/assets/male.png"
              @click="gender = gender === 'male' ? '' : 'male'"
            />
          </v-flex>
        </v-layout>
      </v-flex>
      <div>
        <h2>Your Skills:</h2>
        ({{ skillPoints }} skill points left)
      </div>
      <v-flex>
        <v-layout column>
          <div v-for="skill in Object.keys(skills)" v-bind:key="skill">
            {{ skill }}: {{ skills[skill] }}
          </div>
        </v-layout>
      </v-flex>

      <v-flex>
        <v-layout>
          <Option :data="cancel" secondary :disabled="!name || !gender" />
          <Option :data="go" :disabled="!name || !gender" />
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import OptionComponent from "@/components/default/Option";
import { Option } from "@/class/Option";
import { Character, Skills } from "@/class/Character";
import { mapActions } from "vuex";

export default {
  name: "new-game",
  components: { Option: OptionComponent },
  data() {
    return {
      name: "",
      gender: "",
      skillPoints: 10,
      skills: {
        str: 0,
        int: 0,
        agi: 0
      },
      go: new Option("GO", this.createGame),
      cancel: new Option("CANCEL", () => "home")
    };
  },
  methods: {
    ...mapActions("game", ["updatePlayer"]),
    createGame() {
      let skills = new Skills();
      Object.keys(this.skills).forEach(skill => {
        skills[skill] = this.skills[skill];
      });
      this.updatePlayer(new Character(this.name, this.gender, skills));
      this.$router.push("game");
      return "1";
    }
  }
};
</script>
<style scoped>
h2 {
  display: inline-block;
  padding: 1rem;
  padding-bottom: 0;
}
.txt-input {
  margin: 0.5rem 1rem 0.5rem 1rem;
  width: calc(100% - 2rem);
}

.gender {
  text-align: center;
  cursor: pointer;
}

.gender img {
  opacity: 0.4;
  max-height: 15rem;
}

.gender img:hover {
  opacity: 0.8;
}
.is-active {
  opacity: 1 !important;
}
</style>
