<template>
  <div class="home">
    <v-layout class="ui" column>
      <h2>Select Game Slot:</h2>
      <Option :data="newGame" />
    </v-layout>
  </div>
</template>

<script>
import OptionComponent from "@/components/Option";
import { Option } from "@/class/Option";
import { mapActions } from "vuex";

export default {
  name: "home",
  components: { Option: OptionComponent },
  data() {
    return {
      newGame: new Option("#     NEW GAME     #", () => {
        this.$router.push("new");
      })
    };
  },
  methods: {
    ...mapActions("game", ["toChapter"])
  }
};
</script>
<style scoped>
h2 {
  padding: 10px;
  padding-bottom: 0;
}
</style>
