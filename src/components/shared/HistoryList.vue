<template>
  <div>
    <transition-group tag="div" name="trlist">
      <div
        v-for="(item, index) in list"
        :key="item.index" 
        class="history-item">
        <div class="history-item__name">{{ item.name }}</div>
        <div class="history-item__points">{{ item.points }} pts</div>
        <svg
          class="history-item__state--in"
          :class="{'history-item__state--out': item.state == 'given'}" 
          xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
      </div>
    </transition-group>
  </div>
</template>

<script lang='ts'>
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';
import { historyList } from '../../types/general';
import _ from 'lodash';

@Component({
  model: {
    prop: 'list',
    event: 'filter'
  }
})
export default class HistoryList extends Vue {
  @Prop({
    required: true,
    default: () => []
  })
  list!: (historyList & { index: number }) [];

  created() {
    // SetIndex
    const list = _.cloneDeep(this.list);
    list.forEach((val, idx) => {
      val.index = idx;
    });
    this.$emit('filter', list);
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

</style>
