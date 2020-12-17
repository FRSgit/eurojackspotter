<template>
  <v-container>
    <HelloCard />
    <EurojackpotCard />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloCard from '@/components/HelloCard.vue';
import EurojackpotCard from '@/components/EurojackpotCard.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    HelloCard,
    EurojackpotCard,
  },
});
</script>
