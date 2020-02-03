<template>
  <div id="app">
    <div
      v-if="showBackButton"
      @click="goBack" 
      class="btn__back"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0,0H24V24H0Z" fill="none"/><path d="M20,11H7.83l5.59-5.59L12,4,4,12l8,8,1.41-1.41L7.83,13H20Z" fill="#2c8cec"/></svg>Atrás</div>

    <div class="title title__view">{{ getMainTitle }}</div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { titleMixin } from './mixins/title';
import Component from 'vue-class-component';
import { mapGetters, mapState, mapActions, mapMutations } from 'vuex';

@Component({
  computed: {
    ...mapGetters([
      'getMainTitle'
    ]),
    ...mapState([
      'showBackButton'
    ])
  },
  methods: mapMutations([
    'goBack'
  ]) 
})
export default class App extends titleMixin {
  goBack!: Function;

  handleBack(event: Event) {
    event.stopPropagation();
    this.goBack();
  }
}
</script>

<style lang="scss">
// Load fonts

@font-face {
  font-family: 'SFProDisplay';
  src: url('./fonts/SFPro/SFProDisplay-Light.ttf');
  font-weight: lighter;
  font-style: normal;
}

@font-face {
  font-family: 'SFProDisplay';
  src: url('./fonts/SFPro/SFProDisplay-LightItalic.ttf');
  font-weight: lighter;
  font-style: oblique;
}

@font-face {
  font-family: 'SFProDisplay';
  src: url('./fonts/SFPro/SFProDisplay-Regular.ttf');
  font-weight: lighter;
  font-style: normal;
}

@font-face {
  font-family: 'SFProDisplay';
  src: url('./fonts/SFPro/SFProDisplay-Bold.ttf');
  font-weight: bold;
  font-style: normal;
}

* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  font-family: 'SFProDisplay', 'Consolas', Courier;
  background-color: $colorBlackDark;
  color: white;
}

.title__view {
  position: absolute;
  top: 60px;
  left: 30px;
}

</style>