<template>
  <div>
    <div>Promociones vigentes</div>
    <CatalogList
      v-model="list"
    />
    <div style="text-align: center">
      <div class="btn btn--s btn--outline">+ Añadir promoción</div>
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

@Component({
  components: {
    CatalogList,
  }
})
export default class Products extends Vue {
  list = [
    { name: 'Fotocopias', points: 19, state: 'received' },
    { name: 'Fotocopias', points: 13, state: 'given' },
    { name: 'Fotocopias', points: 14, state: 'received' },
    { name: 'Fotocopias', points: 15, state: 'given' },
    { name: 'Fotocopias', points: 16, state: 'received' },
    { name: 'Fotocopias', points: 17, state: 'given' },
    { name: 'Fotocopias', points: 18, state: 'received' },
    { name: 'Fotocopias', points: 19, state: 'given' },
  ]
}
</script>

<style lang="scss" scoped>

</style>       