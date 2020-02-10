<template>
  <div>
    <transition-group tag="div" name="trlist">
      <div
        v-for="(item) in list"
        :key="item.index" 
        class="history-item">
        <div class="history-item__name">{{ item.name }}</div>
        <div class="history-item__points">{{ item.points }} pts</div>
        
        <svg
          @click="edit(item.index)" 
          class="catalog__icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 469.336 469.336" style="enable-background:new 0 0 469.336 469.336;" xml:space="preserve"> <g> <g> <path d="M456.836,76.168l-64-64.054c-16.125-16.139-44.177-16.17-60.365,0.031L45.763,301.682 c-1.271,1.282-2.188,2.857-2.688,4.587L0.409,455.73c-1.063,3.722-0.021,7.736,2.719,10.478c2.031,2.033,4.75,3.128,7.542,3.128 c0.979,0,1.969-0.136,2.927-0.407l149.333-42.703c1.729-0.5,3.302-1.418,4.583-2.69l289.323-286.983 c8.063-8.069,12.5-18.787,12.5-30.192S464.899,84.237,456.836,76.168z M285.989,89.737l39.264,39.264L120.257,333.998 l-14.712-29.434c-1.813-3.615-5.5-5.896-9.542-5.896H78.921L285.989,89.737z M26.201,443.137L40.095,394.5l34.742,34.742 L26.201,443.137z M149.336,407.96l-51.035,14.579l-51.503-51.503l14.579-51.035h28.031l18.385,36.771 c1.031,2.063,2.708,3.74,4.771,4.771l36.771,18.385V407.96z M170.67,390.417v-17.082c0-4.042-2.281-7.729-5.896-9.542 l-29.434-14.712l204.996-204.996l39.264,39.264L170.67,390.417z M441.784,121.72l-47.033,46.613l-93.747-93.747l46.582-47.001 c8.063-8.063,22.104-8.063,30.167,0l64,64c4.031,4.031,6.25,9.385,6.25,15.083S445.784,117.72,441.784,121.72z"/> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>
        <svg 
          @click="removeConfirm(item.index)"
          class="catalog__icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"> <g> <g> <g> <polygon points="353.574,176.526 313.496,175.056 304.807,412.34 344.885,413.804 			"/> <rect x="235.948" y="175.791" width="40.104" height="237.285"/> <polygon points="207.186,412.334 198.497,175.049 158.419,176.52 167.109,413.804 			"/> <path d="M17.379,76.867v40.104h41.789L92.32,493.706C93.229,504.059,101.899,512,112.292,512h286.74 c10.394,0,19.07-7.947,19.972-18.301l33.153-376.728h42.464V76.867H17.379z M380.665,471.896H130.654L99.426,116.971h312.474 L380.665,471.896z"/> </g> </g> </g> <g> <g> <path d="M321.504,0H190.496c-18.428,0-33.42,14.992-33.42,33.42v63.499h40.104V40.104h117.64v56.815h40.104V33.42 C354.924,14.992,339.932,0,321.504,0z"/> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>
      </div>
    </transition-group>

    <CustomModal
      ref="modal"
      :title="modalTitle"
      :content="modalContent"
    >
      <div class="btn__container--vertical">
        <div @click="remove" class="btn btn--solid">Aceptar</div>
        <div @click="hideModal" class="btn btn--solid">Cancelar</div>
      </div>
    </CustomModal>
  </div>
</template>

<script lang='ts'>
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';
import { historyList, Modal } from '../../types/general';
import _ from 'lodash';
import HistoryList from './HistoryList.vue';
import { titleMixin } from '../../mixins/title';

@Component({
  model: {
    prop: 'list',
    event: 'filter'
  }
})
export default class CatalogList extends titleMixin {
  @Prop({
    required: true,
    default: () => []
  })
  list!: (historyList & { index: number }) [];

  modalTitle = '';
  modalContent = '';

  toRemove = -1;

  created() {
    // SetIndex
    const list = _.cloneDeep(this.list);
    list.forEach((val, idx) => {
      val.index = idx;
    });
    this.$emit('filter', list);
  }

  hideModal() {
    (this.$refs.modal as Modal).hide();
  }
  
  removeConfirm(idx: number) {
    this.modalTitle = 'Eliminar elemento';
    this.modalContent = '¿Desea confirmar la eliminación?';
    (this.$refs.modal as Modal).show();

    this.toRemove = idx;
  }

  remove() {
    const idx = this.toRemove;
    const filtered = this.list.filter((e: historyList & { index: number }) => { 
      return e.index != idx
    });

    this.hideModal();
    setTimeout(() => {
      this.$emit('filter', filtered);
    }, 500);
  }
}
</script>

<style lang='scss' scoped>

.history-item {
  display: flex;
  border-radius: 5px;
  background: $colorBlackLight;
  box-shadow: 0 2px 5px 2px rgba($color: #000000, $alpha: 0.1);
  padding: 5px 11px;
  margin: 8px 0;
  position: relative;
  transition: .3s;
}

.history-item__name {
  width: 55%;
}

.history-item__points {
  width: 30%;
  font-weight: bold;
}

.history-item__state {
  width: 15%;
}

.history-item__name,
.history-item__points {
  display: flex;
  align-items: center;
}


.history-item__state--in {
  fill: green;
  transform: rotate(-90deg)
}

.history-item__state--out {
  fill: red;
  transform: rotate(90deg)
}

.catalog__icon {
  @include squared(16px);
  fill: $colorBlue;
  margin: 0 5px;
}

</style>
