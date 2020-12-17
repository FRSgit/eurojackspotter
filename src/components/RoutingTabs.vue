<template>
  <v-tabs>
    <v-tab
      v-for="route in $router.options.routes"
      :key="route.path"
      :to="route.path"
      v-text="route.name"
    />
  </v-tabs>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'RoutingTabs'
});
</script>
