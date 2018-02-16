<template>
  <section class="pa4 code">
    <div class="bg-white-90 pa4">
      <div class="f1">Kentico Cloud sample</div>
      <div class="f3">Selected Person: {{selectedCafe.street && selectedCafe.street.text}} is #{{selected}}</div>

    </div>
    <div class="flex flex-wrap ph2 justify-between bg-white-80">
      <div :key="cafe.id" v-for="cafe in cafes">
        <Card :cafe="cafe"></Card>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'
import Card from '~/components/Card.vue'
import { Cafe } from '~/models'
import { State, Getter } from 'vuex-class'

@Component({
  components: {
    Card
  }
})
export default class extends Vue {
  @State selected:boolean
  @State cafes:Cafe[]
  @Getter selectedCafe:Cafe
}
</script>
