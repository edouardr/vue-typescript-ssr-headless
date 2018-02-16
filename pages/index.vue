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
import Component from "nuxt-class-component";
import Vue from "vue";
import { Getter, State } from "vuex-class";
import Card from "~/components/Card.vue";
import { Cafe } from "~/models";

@Component({
  components: {
    Card,
  },
})
export default class extends Vue {
  @State public selected: boolean;
  @State public cafes: Cafe[];
  @Getter public selectedCafe: Cafe;

  public head() {

    if (!this.cafes.length) {
      return {
        title: "null",
      };
    }

    return {
      meta: [
          { hid: "description", name: "description", content: this.cafes[0].phone.text },
        ],
      title: this.cafes[0].street.text,
    };
  }
}
</script>
