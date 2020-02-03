<template>
  <div>
    <div class="start__content">
      <div class="status-card">
        Bienvenido
        <div class="status-card__division">
          <div class="status-card__column">
            <div class="status-card__message status-card__message--s">Puntos entregados</div>
            <div class="status-card__points status-card__points--s">10.000 pts</div>

          </div>
          <div class="status-card__column">
            <div class="status-card__message status-card__message--s">Puntos redimidos</div>
            <div class="status-card__points status-card__points--s">5.000 pts</div>
          </div>
        </div>

      </div>
      <div style="margin: 10px 0">Productos mas populares:</div>
      <Catalog
        :products="productList"
      />
    </div>
  </div>
</template>

<script lang='ts'>
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';
import { titleMixin } from '../../mixins/title';
import Catalog from '../../components/shared/Catalog.vue';
import { product } from '../../types/general';

@Component({
  components: {
    Catalog
  }
})
export default class ProviderHome extends titleMixin {
  productList: product[] = [
    { title: 'Fotocopias', value: 50 },
    { title: 'Fotocopias', value: 50 },
    { title: 'Fotocopias', value: 50 },
    { title: 'Fotocopias', value: 50 },
  ];

  psMounted() {
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

<style lang='scss' scoped>

  

</style>
