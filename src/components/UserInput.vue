<template>
  <div class="ui">
    <v-layout justify-space-between column>
      <v-flex id="input-text">{{ text }}</v-flex>
      <v-flex class="input-options">
        <v-layout justify-space-around wrap>
          <Option
            class="md6"
            v-for="(option, index) in options"
            :key="`option_${index}`"
            :data="option"
            @click="$emit('click')"
          />
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Option from "./Option";

export default {
  name: "UserInput",
  components: { Option },
  props: {
    text: {
      required: true,
      type: String
    },
    options: {
      required: true,
      type: Array
    }
  }
};
</script>
