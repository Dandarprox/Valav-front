<template>
  <div>
    <div class="content">
      <OptionSelectorGroup
        v-model="catalogView"
        :options="catalogOptions"
        defaultValue="product"
      />
      <router-view/>
    </div>
  </div>
</template>

<script lang='ts'>
import {
  Component,
  Prop,
  Vue,
  Watch,
} from 'vue-property-decorator';
import { titleMixin } from '../../mixins/title';
import OptionSelectorGroup from '../../components/ui/OptionSelectorGroup.vue';

@Component({
  components: {
    OptionSelectorGroup,
  }
})
export default class ProviderCatalog extends titleMixin {
  catalogView = '';
  catalogOptions = [
    { label: 'Productos',  value: 'product' },
    { label: 'Promociones',  value: 'promo' },
  ]

  mounted() {
    this.psMounted();
  }

  @Watch('catalogView')
  onCatalogViewChange(value: string) {
    this.$router.push({ name: `provider-catalog-${value}`});
  }

  private psMounted() {
    this.setLayoutTitle('Catálogo');
    this.showBackButton = false;
  }

  activated() {
    this.psMounted();
  }
}
</script>

<style lang='scss' scoped>

  

</style>
