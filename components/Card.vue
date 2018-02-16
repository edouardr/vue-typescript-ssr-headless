<template>
  <div class="ba b--black-20 mw5 ma2">
    <img :src="'https://robots.johnlindquist.com/' + cafe.photo.assets[0].url" />
    <div class="flex flex-column items-center pa2 b--black-20">
      <div class="f4">{{cafe.street && cafe.street.text}}</div>
      <button @click="select(cafe.id)" class="w-100 bg-blue dim mv2 pv2 bn pointer">Select</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'
import { Prop } from 'vue-property-decorator'
import { Action } from 'vuex-class'
import { Cafe } from '~/models'

@Component({})
export default class Card extends Vue {
  @Prop() cafe: Cafe
  @Action select
}
</script>
