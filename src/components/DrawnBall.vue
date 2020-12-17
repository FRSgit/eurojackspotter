<template>
  <v-avatar
    :color="color"
    size="62"
    class="white--text headline mr-2 mb-4"
  >
    {{ number }}
  </v-avatar>
</template>

<script lang="ts">
import Vue from 'vue';

const colors = ['purple', 'indigo', 'blue darken-2', 'deep-purple', 'secondary', 'green darken-3'];

export default Vue.extend({
  name: 'DrawnBall',
  props: {
    number: {
      type: Number,
      required: true,
    },
  },
  computed: {
    color() {
      const number = this.number as number;
      return colors[number % colors.length];
    }
  }
});
</script>
