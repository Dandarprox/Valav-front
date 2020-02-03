<template>
  <div>
    <div class="content">
      Filtrar
      <div class="btn__container--horizontal">
        <div class="btn btn--s btn--outline" @click="filterDate">Por fecha</div>
        <div class="btn btn--s btn--outline" @click="filterPoints">Por puntos</div>
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

@Component({
  components: {
    HistoryList,
    CustomModal
  }
})
export default class ProviderHistory extends titleMixin {
  list: historyList[] = [
    { name: 'Julián', points: 12, state: 'received' },
    { name: 'Julián', points: 12, state: 'given' },
    { name: 'Julián', points: 12, state: 'received' },
    { name: 'Julián', points: 12, state: 'given' },
    { name: 'Julián', points: 12, state: 'received' },
    { name: 'Julián', points: 12, state: 'given' },
    { name: 'Julián', points: 12, state: 'received' },
    { name: 'Julián', points: 12, state: 'given' },
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

  filterPoints() {
    this.filter = 'points';

    (this.$refs.modal as Modal).show(); 
  }
}
</script>

<style lang='scss' scoped>

  

</style>
