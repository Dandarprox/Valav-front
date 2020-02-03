<template>
  <div class="menu">
    <router-link
      tag="div"
      v-for="(element) in elements" 
      :key="element.title" 
      :to="{ name: element.path }"
      active-class="menu__item--active"
      class="menu__item">
      <img :src="getImgUrl(element.iconUrl)" alt="">
      <div class="menu__item__title">{{ element.title }}</div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class Menu extends Vue {
  @Prop({
    required: true
  })
  elements!: { title: string; iconUrl: string, path: string }[];

  getImgUrl(imagePath: string) {
    return require(`@/assets/menu-icons/${imagePath}`);
  }
}
</script>

<style lang="scss" scoped>
.menu {
  z-index: 2;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 65px;
  background: $colorBlackLight;
  display: flex;

  .menu__item {
    &:not(:last-child) {
      border-right: 1px solid $colorBlackDark;
    }
  }
}

.menu__item__title {
  color: white;
  font-size: 13px;
}

.menu__item {
  position: relative;
  flex: 1 0;

  img {
    @include squared(31px);
    @extend %absoluteCentered;
    top: calc(50% - 9px);
    filter: invert(1);
  }

  .menu__item__title {
    @extend %absoluteCentered;
    top: calc(50% + 12px);
  }
}

.menu__item--active {
  &::after {
    @include squared(30px);
    content: '';
    position: absolute;
    background: $colorBlue;
    bottom: 0;
    left: 50%;
    border-radius: 50%;
    transform: translate(-50%, 75%)
  }
}

</style>
