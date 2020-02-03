<template>
  <div class="catalog">
    <div
      class="product__container"
      v-for="(product, index) in products"
      @click="selectProduct(index)"
      :key="index">
      <div class="product">
        <div class="product__points">{{ product.value }}</div>
        <div class="product__title">{{ product.title }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "vue-property-decorator"
import { product } from '../../types/general'

@Component({})
export default class Catalog extends Vue {
  @Prop({
    required: true
  })
  products!: product[];

  selectProduct(index: number) {
    this.$emit('select', this.products[index]);
  }
}
</script>

<style lang="scss" scoped>

.catalog {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 25px;
}

$product-padding: 12px;

.product {
  text-align: center;
  @include squared(75px);
  border-radius: 10px;
  background: $colorBlackLight;
  position: relative;
  padding: $product-padding;
}

.product__container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.product__points {
  font-size: 38px;
  color: $colorBlue;
}

.product__title {
  color: white;
  font-size: 12px;
  position: absolute;
  bottom: calc($product-padding + 2px);
  left: 50%;
  transform: translateX(-50%);
}

</style>
