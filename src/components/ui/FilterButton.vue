<template>
  <div
    @click="toggleOrder"
    class="btn btn--s btn--outline">{{ name }}
    <svg 
      class="order"
      :class="{'order--up': orderUp}"
      xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';

@Component({})
export default class FilterButton extends Vue {
  @Prop({
    default: '',
    required: false,
  })
  name!: string;

  @Prop({
    default: false,
    required: false,
  })
  orderIcon!: string;

  orderUp = false;

  toggleOrder() {
    this.orderUp = !this.orderUp;
    this.$emit('order', this.orderUp);
  }
}
</script>

<style lang="scss" scoped>

.btn {
  position: relative;
  padding-right: 7px;
}

.order {
  position: absolute;
  top: 50%;
  right: 4px;
  fill: $colorBlue;
  transform: translateY(-51%) rotate(90deg);
  transform-origin: center center;
  transition: .3s;
}

.order--up {
  transform: translateY(-51%) rotate(-90deg);
  fill: lighten($color: $colorBlue, $amount: 25%)
}

</style>