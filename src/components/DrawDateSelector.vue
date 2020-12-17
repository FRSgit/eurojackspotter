<template>
  <ApolloQuery
    :query="gql => gql`
      query GetDrawDates($type: String!) {
        drawDates(type: $type, limit: -1) {
          draws {
            date
          }
        }
      }
    `"
    :update="data => data.drawDates.draws.map(({date}) => date)"
    :variables="{type}"
    v-slot="{result: {data: drawDates, error}, isLoading}"
    tag
  >
    <v-alert v-if="error" type="error">{{error}}</v-alert>
    <v-sheet
      v-else-if="!!isLoading"
      color="white"
      class="pa-1"
      elevation="2"
      rounded
    >
      <v-skeleton-loader type="button" />
    </v-sheet>
    <v-select
      v-else
      :value="value || getDefaultValue(drawDates)"
      @input="v => $emit('input', v)"
      :items="drawDates"
      label="Choose draw date"
      solo
    />
  </ApolloQuery>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'DrawDateSelector',
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      required: true
    },
  },
  methods: {
    getDefaultValue(drawDates: string[]) {
      const drawDate = drawDates[0] ?? '';
      this.$emit('input', drawDate);
      return drawDate;
    }
  }
});
</script>
