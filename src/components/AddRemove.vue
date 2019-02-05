<template>
  <v-flex class="add-remove-container">
    <v-flex class="add-remove-cell">{{ name }}: </v-flex>
    <v-flex class="add-remove-cell">
      <div
        class="button"
        :class="{ disabled: remove }"
        @click="$emit('remove')"
      >
        <p class="button-inner">-</p>
      </div>
    </v-flex>
    <v-flex class="add-remove-cell txt">
      <slot></slot>
    </v-flex>
    <v-flex class="add-remove-cell">
      <div class="button" :class="{ disabled: add }" @click="$emit('add')">
        <p class="button-inner">+</p>
      </div>
    </v-flex>
  </v-flex>
</template>

<script>
export default {
  name: "AddRemove",
  props: {
    add: {
      type: Boolean
    },
    name: {
      type: String
    },
    remove: {
      type: Boolean
    }
  }
};
</script>
<style scoped>
.button {
  height: 1.5rem;
  width: 1.5rem;
  margin-left: calc(50% - 0.75rem);
}
.button-inner {
  width: 100%;
  height: 100%;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}
.txt {
  width: 1.5rem;
  text-align: center;
}
.add-remove-container {
  background: rgba(255, 255, 255, 0.1);
  border: 1px grey solid;
  display: table;
  padding-left: 0.5rem;
  margin-top: 0.5rem;
}
.add-remove-cell {
  display: table-cell;
  vertical-align: middle;
  margin: auto;
}
</style>
