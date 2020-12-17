<template functional>
  <v-col
    lg="6"
    offset-lg="3"
    tag="section"
  >
    <v-card>
      <v-card-title>
        <h2 class="headline">Eurojackpot</h2>
      </v-card-title>

      <v-card-subtitle>Eurojackpot is a transnational European lottery launched in March 2012.</v-card-subtitle>

      <v-card-actions>
        <v-btn text :to="{name: 'Results'}">Check results</v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
