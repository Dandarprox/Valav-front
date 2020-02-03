<template>
  <div>
    <div class="content">
      <accordion
        class="accordion__list"
        v-for="(item, index) in accordionItems"
        :key="item.title"
        :startsActive="index == 0"
        :title="item.title"
        :elements="item.elements"></accordion>
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
import Accordion from '../../components/ui/Accordion.vue';

@Component({
  components: {
    Accordion
  }
})
export default class Catalog extends titleMixin {
  accordionItems = [
    {
      title: 'Cafeterías',
      elements: [
        'Matemáticas',
        'Biología',
        'Cafetería central',
      ],
    },
    {
      title: 'Fotocopiadoras',
      elements: [
        'Aulas de ingeniería',
        'Biología',
        'Química',
      ],
    },
    {
      title: 'Tiendas',
      elements: [
        'Tienda universitaria',
        'Libross | León de Greiff',
      ],
    },
  ]

  private psMounted() {
    this.setLayoutTitle('Catálogo');
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

.accordion__list {
  &:not(:first-child) {
    margin-top: 30px;
  }
}

</style>
