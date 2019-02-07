<template>
  <v-flex>
    <div
      class="button option"
      :class="{
        secondary: secondary === null || secondary === true,
        disabled: disabled === null || disabled === true
      }"
      @click="clicked"
    >
      <p>{{ data.text }}</p>
    </div>
  </v-flex>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Option",
  props: {
    data: {
      required: true,
      type: Object
    },
    secondary: {
      required: false,
      type: Boolean
    },
    disabled: {
      required: false,
      type: Boolean
    }
  },
  computed: {
    ...mapGetters("game", { player: "getCurrentPlayer" })
  },
  methods: {
    ...mapActions("game", ["toChapter"]),
    clicked() {
      this.$emit("click");
      var nextChapter = this.data.action(this.player);
      if (nextChapter && nextChapter !== "home") {
        this.toChapter(nextChapter);
        this.$router.push("game");
      } else if (nextChapter === "home") {
        this.$router.push("/");
      }
    }
  }
};
</script>
<style>
.option {
  height: 3rem;
  width: calc(100% - 1rem);
}
</style>
