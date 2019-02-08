<template>
  <div class="ui output">
    <p v-for="(text, index) in currentText.split('\n')" v-bind:key="index">
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Output",
  props: {
    text: {
      required: true,
      type: Array
    }
  },
  data() {
    return {
      currentText: ""
    };
  },
  methods: {
    writeFirst(text) {
      const first = text.charAt(0);
      if (first) {
        this.currentText += first;
        setTimeout(
          () => {
            this.writeFirst(text.substring(1));
          },
          /[.,?!\n]/.test(first) ? 0 : 0
        );
      } else {
        this.$emit("printed");
      }
    },
    write(textRaw) {
      const text = textRaw.join("\n");
      this.writeFirst(text);
    }
  },
  watch: {
    text(textRaw) {
      this.currentText = "";
      this.write(textRaw);
    }
  },
  mounted() {
    this.write(this.text);
  }
};
</script>
<style scoped>
.output {
  min-height: 30rem;
  margin-bottom: 15px;
}
p {
  margin-bottom: 3px;
  min-height: 0.5rem;
}
</style>
