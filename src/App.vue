<template>
  <v-app>
    <v-app-bar
      app
      fixed
      shrink-on-scroll
      fade-img-on-scroll	
      prominent
      color="primary"
      src="https://picsum.photos/1920/1080?random"
      dark
    >
      <template #img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-toolbar-title class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-4"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="1.5em"
        />
        Eurojackspotter
      </v-toolbar-title>

      <template #extension>
        <RoutingTabs />
      </template>
    </v-app-bar>

    <v-main class="light-blue lighten-5">
      <router-view />
    </v-main>
    
    <AppFooter />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import RoutingTabs from '@/components/RoutingTabs.vue';
import AppFooter from '@/components/AppFooter.vue';

export default Vue.extend({
  name: 'App',
  components: {
    RoutingTabs,
    AppFooter,
  }
});
</script>
