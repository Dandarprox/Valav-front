<template>
  <div>
    <div>Productos existentes</div>
    <CatalogList
      v-model="list"
    />
    <div style="text-align: center">
      <div class="btn btn--s btn--outline">+ Añadir producto</div>
    </div>

    <div class="info-card">
      Actualmente tienes la siguiente conversión
      <br>
      <div style="text-align: center"><b>1 punto = 250 COP</b></div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';
import CatalogList from '../../../components/shared/CatalogList.vue';
import { titleMixin } from '../../../mixins/title';

@Component({
  components: {
    CatalogList,
  }
})
export default class Products extends titleMixin {
  list = [
    { name: 'Julián', points: 19, state: 'received' },
    { name: 'Julián', points: 13, state: 'given' },
    { name: 'Julián', points: 14, state: 'received' },
    { name: 'Julián', points: 15, state: 'given' },
    { name: 'Julián', points: 16, state: 'received' },
    { name: 'Julián', points: 17, state: 'given' },
    { name: 'Julián', points: 18, state: 'received' },
    { name: 'Julián', points: 19, state: 'given' },
  ]
}
</script>

<style lang="scss" scoped>

.info-card {
  background: $colorBlackLight;
  padding: 15px;
  margin: 3px;
}

</style>       