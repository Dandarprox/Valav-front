<template>
  <div class="accordion">
    <div
      @click="isActive = !isActive" 
      :class="{'accordion__title--active': isActive}"
      class="accordion__title">
      <svg 
        class="accordion__title__icon" 
        :class="{'accordion__title__icon--active': isActive}"
        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.12 9.29L12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z"/></svg>
      {{ title }}
    </div>
    <div
      :class="{'accordion__content--active': isActive}" 
      class="accordion__content">
      <div
        v-for="element in elements"
        :key="element"
        class="accordion__content__item">{{ element }}</div>
    </div>
  </div>
</template>

<script lang='ts'>
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';

@Component({})
export default class Accordion extends Vue {
  @Prop({
    required: true
  })
  title!: string;
  @Prop({
    required: true
  })
  elements!: string[];
  @Prop({
    default: false
  })
  startsActive!: boolean;

  isActive = false;

  beforeMount() {
    this.isActive = this.startsActive;
  }
}
</script>

<style lang='scss' scoped>

$contentTransition: 0.7s ease-in-out;

.accordion {
  border-radius: 9px;
  background: $colorBlackLight;
  padding: 15px 17px;
  box-shadow: 0 2px 5px 2px rgba($color: #000000, $alpha: 0.15);
}

.accordion__title {
  position: relative;
  padding-bottom: 15px;
  font-size: 18px;
  transition: $contentTransition;

  &::after {
    content: '';
    width: 100%;
    height: 1px;
    background: $colorBlackDark;
    left: 50%;
    bottom: 0;
    position: absolute;
    transform: translate(-50%, 50%);
  }
}

.accordion__title--active {
  color: $colorBlue;
}

svg.accordion__title__icon {
  @include squared(28px);
  position: absolute;
  right: 0px;
  top: 0px;
  transform: rotate(0deg) ;
  transform-origin: center center;
  transition: $contentTransition;
  fill: white;
}

svg.accordion__title__icon--active {
  fill: $colorBlue;
  transform: rotate(180deg) ;
}

.accordion__content {
  max-height: 0;
  transition: $contentTransition;
  overflow: hidden;
}

.accordion__content--active {
  transition: $contentTransition;
  max-height: 500px;
}

.accordion__content__item {
  background: $colorBlackDark;
  border-radius: 5px;
  margin: 15px 0;
  padding: 5px 30px;
}

</style>
