<template>
  <div>
    <div class="start__content">
      Bienvenido Julián
      <div class="status-card">
        <div class="status-card__message">Tienes</div>
        <div class="status-card__points">10.000</div>
        <div class="status-card__message status-card__message--solid">Cafeteria 1</div>
      </div>
      <div style="margin: 10px 0">Últimos servicios utilizados:</div>
      <catalog
        :products="productList"
      >
      </catalog>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "vue-property-decorator"
import { titleMixin } from '../../mixins/title'
import { product } from '../../types/general';

import Catalog from '../../components/shared/Catalog.vue';

@Component({
  components: {
    Catalog
  }
})
export default class MemberHome extends titleMixin {
  productList: product[] = [
    { title: 'Fotocopias', value: 50 },
    { title: 'Fotocopias', value: 50 },
    { title: 'Fotocopias', value: 50 },
    { title: 'Fotocopias', value: 50 },
  ];

  private psMounted() {
    this.setLayoutTitle('Inicio');
    this.showBackButton = false;
  }

  mounted() {
    this.psMounted();
  }

  activated() {
    this.psMounted();
  }
}
</script>

<style lang="scss" scoped>

</style>
