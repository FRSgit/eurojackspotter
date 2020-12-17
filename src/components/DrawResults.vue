<template>
  <ApolloQuery
    :query="gql => gql`
      query GetDrawResults($type: String, $date: String) {
        draw(type: $type, date: $date, limit: 1) {
          draws {
            date
            numbers
            jackpot
          }
        }
      }
    `"
    :update="data => data.draw.draws"
    :variables="{type, date}"
    v-slot="{result: {data: draws, error}, isLoading}"
    tag
  >
      <v-alert v-if="error" type="error">{{error}}</v-alert>
      <template v-else>
        <v-card
          :loading="!!isLoading && 'secondary'"
          v-for="{jackpot, date, numbers} in draws"
          :key="date"
        >
          <v-card-title class="primary white--text py-2 mb-3">
            <DrawHeading :jackpot="parseInt(jackpot)" />
          </v-card-title>

          <v-card-text class="py-4">
            <DrawnBall 
              v-for="number in numbers"
              :key="number"
              :number="parseInt(number)"
            />
            <div class="caption grey--text v-align-bottom">Numbers drawn on {{ date }}</div>
          </v-card-text>
        </v-card>
      </template>
  </ApolloQuery>
</template>

<script lang="ts">
import Vue from 'vue';
import DrawnBall from '@/components/DrawnBall.vue';
import DrawHeading from '@/components/DrawHeading.vue';

export default Vue.extend({
  name: 'DrawResults',
  components: {
    DrawnBall,
    DrawHeading
  },
  props: {
    type: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      default: '',
    },
  }
});
</script>
