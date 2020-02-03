<template>
  <div></div>
</template>

<script lang='ts'>
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';
import { titleMixin } from '../../mixins/title';

@Component({})
export default class ProviderMap extends titleMixin {
  mounted() {
    this.psMounted();
  }

  private psMounted() {
    this.setLayoutTitle('Mapa');
    this.showBackButton = false;
  }

  activated() {
    this.psMounted();
  }
}
</script>

<style lang='scss' scoped>

   

</style>
