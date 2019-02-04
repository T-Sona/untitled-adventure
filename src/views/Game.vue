<template>
  <div class="main">
    <v-layout>
      <v-flex md9>
        <Output :text="chapter.text" @printed="printed = true" />
        <UserInput
          :active="printed"
          :text="chapter.optionText"
          :options="chapter.options"
          @click="printed = false"
        />
      </v-flex>
      <v-flex md3></v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Output from "@/components/default/output/Output.vue";
import UserInput from "@/components/default/user/UserInput.vue";

export default {
  name: "game",
  components: { Output, UserInput },
  computed: {
    ...mapGetters("game", { chapter: "getCurrentChapter" })
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
