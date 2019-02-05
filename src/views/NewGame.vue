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
        <v-layout justify-space-between>
          <Skill
            class="md3"
            v-for="skill in Object.keys(skills)"
            v-bind:key="skill"
            :add="skillPoints <= 0"
            :name="skill"
            :remove="skills[skill] == 0"
            @add="
              skills[skill]++;
              skillPoints--;
            "
            @remove="
              skills[skill]--;
              skillPoints++;
            "
          >
            {{ skills[skill] }}
          </Skill>
        </v-layout>
      </v-flex>

      <v-flex>
        <v-layout class="actions">
          <v-spacer />
          <Option
            class="md2"
            :data="cancel"
            secondary
            :disabled="!name || !gender"
          />
          <Option class="md2 ok-btn" :data="go" :disabled="!name || !gender" />
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import OptionComponent from "@/components/Option";
import AddRemoveComponent from "@/components/AddRemove";
import { Option } from "@/class/Option";
import { Character, Skills } from "@/class/Character";
import { mapActions } from "vuex";

export default {
  name: "new-game",
  components: { Skill: AddRemoveComponent, Option: OptionComponent },
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
.ui {
  padding: 1.5rem;
}

h2 {
  display: inline-block;
  padding-bottom: 0;
}

.txt-input {
  width: calc(100% - 2rem);
  margin-bottom: 1rem;
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
.actions {
  margin-top: 2rem;
}

.ok-btn {
  margin-right: -0.5rem;
}
</style>
