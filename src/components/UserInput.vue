<template>
  <div class="ui input">
    <v-layout v-if="active" justify-space-between column>
      <v-flex id="input-text">{{ text }}</v-flex>
      <v-flex class="input-options">
        <v-layout wrap>
          <Option
            class="md6"
            v-for="(option, index) in options"
            v-bind:key="`option_${index}`"
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
    },
    active: {
      required: true,
      type: Boolean
    }
  }
};
</script>
