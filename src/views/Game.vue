<template>
  <div class="main">
    <v-layout>
      <v-flex xs12 md9>
        <Output :text="chapter.text" @printed="printed = true" />
        <UserInput
          v-if="printed"
          :text="chapter.optionText"
          :options="chapter.options"
          @click="printed = false"
        />
      </v-flex>
      <v-flex hidden-sm-and-down md3>
        <CharacterBar :player="player" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import CharacterBar from "@/components/CharacterBar";
import Output from "@/components/Output";
import UserInput from "@/components/UserInput";

export default {
  name: "game",
  components: { CharacterBar, Output, UserInput },
  computed: {
    ...mapGetters("game", {
      chapter: "getCurrentChapter",
      player: "getCurrentPlayer"
    })
  },
  beforeUpdate() {
    if (!this.chapter) {
      this.$router.push("home");
    }
  },
  data() {
    return {
      printed: false
    };
  }
};
</script>
