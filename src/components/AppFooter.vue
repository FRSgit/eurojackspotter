<template>
  <v-footer
      padless
      dark
      color="primary"
    >
    <v-row
      justify="center"
      no-gutters
    >
      <v-col
        class="py-4 text-center"
        cols="12"
      >
        <small class="mr-2" v-text="currentYear" /> —
        <v-btn
          href="https://www.frsource.org/"
          title="Click to open author's webpage"
          target="_blank"
          text
          x-small
        >
          <span class="mr-2">FRSource</span>
          <v-icon x-small>mdi-open-in-new</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AppFooter',
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
});
</script>
