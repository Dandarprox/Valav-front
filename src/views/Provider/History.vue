<template>
  <div>
    <div class="content">
      Filtrar
      <div class="btn__container--horizontal">
        <FilterButton
          name="Por fecha"
          @order="filterDate"
        />
        <FilterButton
          name="Por puntos"
          @order="filterPoints"
        />
      </div>

      <history-list
        v-model="list"></history-list>
    </div>

    <custom-modal
      ref="modal"
      title="Filtrar"
      content="Selecciona una opción de filtrado">
      <template v-show="filter == 'date'">
        
      </template>
      <template v-show="filter == 'points'">
        
      </template>
    </custom-modal>
  </div>
</template>

<script lang='ts'>
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';
import { titleMixin } from '../../mixins/title';
import { historyList, Modal } from '../../types/general';

import HistoryList from '../../components/shared/HistoryList.vue';
import CustomModal from '../../components/ui/Modal.vue';
import FilterButton from '../../components/ui/FilterButton.vue';

@Component({
  components: {
    HistoryList,
    CustomModal,
    FilterButton,
  }
})
export default class ProviderHistory extends titleMixin {
  list: historyList[] = [
    { name: 'Julián', points: 19, state: 'received' },
    { name: 'Julián', points: 13, state: 'given' },
    { name: 'Julián', points: 14, state: 'received' },
    { name: 'Julián', points: 15, state: 'given' },
    { name: 'Julián', points: 16, state: 'received' },
    { name: 'Julián', points: 17, state: 'given' },
    { name: 'Julián', points: 18, state: 'received' },
    { name: 'Julián', points: 19, state: 'given' },
  ];
  filter = 'date';

  psMounted() {
    this.setLayoutTitle('Historial');
    this.showBackButton = false;
  }

  mounted() {
    this.psMounted();
  }

  activated() {
    this.psMounted();
  }

  filterDate() {
    
  }

  filterPoints(direction: boolean) {
    this.list = Object.assign([], this.list.sort((a: historyList, b: historyList) => direction ? a.points - b.points : b.points - a.points));
  }
}
</script>

<style lang='scss' scoped>

  

</style>
