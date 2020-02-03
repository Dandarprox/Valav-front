<template>
  <div>
    <div class="menu__spacer">
      <div class="title__space"></div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>

    <custom-menu
      :elements="menu"></custom-menu>
  </div>
</template>

<script lang='ts'>
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';
import Menu from '../../components/shared/Menu.vue';

@Component({
  components: {
    'CustomMenu': Menu
  }
})
export default class ProviderIndex extends Vue {
  menu = [
    { title: 'Inicio', iconUrl: 'person.svg', path: 'provider-home'},
    { title: 'Verificación', iconUrl: 'check.svg', path: 'provider-validate'},
    { title: 'Catálogo', iconUrl: 'catalog.svg', path: 'provider-catalog'},
    { title: 'Historial', iconUrl: 'history.svg', path: 'provider-history'},
    { title: 'Mapa', iconUrl: 'map.svg', path: 'provider-map'},
  ]
}
</script>

<style lang='scss' scoped>

  

</style>
