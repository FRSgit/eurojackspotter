<template>
  <v-row>
    <v-col cols="12" md="auto">
      <v-icon
        color="white"
        class="mr-4"
        :size="iconSize"
      >mdi-cash</v-icon>
      <h1 class="headline d-inline-block va-middle">Eurojackpot results</h1>
    </v-col>
    <v-col class="d-flex align-baseline justify-end">
      <span class="caption text-uppercase mr-4 align-self-start">
        Jackpot
      </span>
      <span
        class="display-2 mr-2"
        v-text="formattedJackpot"
      />
      <template v-if="$vuetify.breakpoint.mobile">
        Mill.
      </template>
      &euro;
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'DrawnHeading',
  props: {
    jackpot: {
      type: Number,
      required: true,
    },
  },
  computed: {
    iconSize() {
      return (this.$vuetify as Vue['$vuetify']).breakpoint.mobile
        ? '36'
        : '64';
    },
    formattedJackpot() {
      const jackpot = this.jackpot as number;
      return (this.$vuetify as Vue['$vuetify']).breakpoint.mobile
        ? jackpot / 1000000
        : jackpot;
    },
  }
});
</script>
