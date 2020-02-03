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

<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "vue-property-decorator"
import { titleMixin } from '../../mixins/title';
import Menu from '../../components/shared/Menu.vue';

@Component({
  components: {
    'CustomMenu': Menu
  }
})
export default class MemberIndex extends titleMixin {
  menu = [
    { title: 'Inicio', iconUrl: 'person.svg', path: 'member-home'},
    { title: 'Catálogo', iconUrl: 'catalog.svg', path: 'member-catalog'},
    { title: 'Mapa', iconUrl: 'map.svg', path: 'member-map'},
  ]
}
</script>

<style lang="scss" scoped>

</style>
