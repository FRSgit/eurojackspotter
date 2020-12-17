<template>
  <v-container>
    <v-row>
      <v-col cols="12" offset="0" md="3" lg="2">
        <DrawDateSelector v-model="drawDate" :type="type" />
      </v-col>
      <v-col cols="12" offset-md="1" md="8" lg="9">
        <DrawResults :type="type" :date="drawDate" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import DrawDateSelector from '@/components/DrawDateSelector.vue';
import DrawResults from '@/components/DrawResults.vue';

export default Vue.extend({
  name: 'EurojackpotResults',
  components: {
    DrawDateSelector,
    DrawResults,
  },
  data() {
    return {
      type: 'eurojackpot',
      drawDate: void 0,
    };
  },
});
</script>
