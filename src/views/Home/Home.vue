<template>
  <div>
    <div class="main-image">
      <div class="logo" ref="logo">
        <img src="../../assets/Logo_contrast_blue.png" alt="">
      </div>
    </div>

    <div
      v-show="!isSelectingRol" 
      class="btn__container--vertical">
      <div
        @click="toLogin" 
        class="btn btn--solid">Ingresar</div>
      <div 
        @click="toSignup" 
        class="btn btn--outline">Registrarse</div>
    </div>
    
    <div
      v-show="isSelectingRol" 
      class="btn__container--vertical">
      <option-selector
        @click.native="toSignup('member')"
        label="Usuario de la comunidad"></option-selector>
      <option-selector
        @click.native="toSignup('provider')"
        design="outline"
        label="Proveedor  de servicio"></option-selector>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "vue-property-decorator"
import { Power2, Elastic, TweenMax } from 'gsap/all';

import { mixins } from 'vue-class-component';
import { titleMixin } from '../../mixins/title';

import OptionSelector from '../../components/ui/OptionSelector.vue';
import OptionSelectorGroup from '../../components/ui/OptionSelectorGroup.vue';

@Component({
  components: {
    OptionSelector,
  }
})
export default class Home extends titleMixin {
  isSelectingRol = false;

  toSignup(rol: string) {
    this.$router.push({ name: 'signup', params: { rol } });
  }

  toLogin() {
    this.$router.push({ name: 'login' });
  }

  selectRol() {
    this.isSelectingRol = true;
    this.showBackButton = true;
  }

  deselectRol() {
    this.isSelectingRol = false;
    this.showBackButton = false;
  }

  onGoBack() {
    this.deselectRol();
    this.animateLogo();
  }

  mounted() {
    this.setLayoutTitle('Bienvenido');
    this.animateLogo();
    this.showBackButton = false;
  }

  animateLogo() {
    const logo = this.$refs.logo;
    TweenMax.from(logo, 0.8,
      {
        opacity: 0,
        yPercent: 50,
        ease:  Elastic.easeOut.config( 1, 0.3)
      }
    ).delay(3);
  }
}
</script>

<style lang="scss" scoped>

.main-image {
  position: relative;
  background: url('../../assets/Building trans.png');
  background-size: cover;
}

.logo {
  top: 130px;
  left: 50%;
  transform: translateX(-50%);
}

</style>
