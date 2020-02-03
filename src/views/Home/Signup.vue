<template>
  <div>
    <div class="title__space"></div>
    <div class="content">Por favor, escoge tu rol
      <option-selector-group
        defaultValue="member"
        :options="rolOptions"
        v-model="currentRol"
      >
      </option-selector-group>
      <!-- Member -->
      <div
        v-if="currentRol == 'member'">
        <custom-input
          placeholder="Nombre completo"
          v-model="signupForm.fullname"
        ></custom-input>
        <custom-input
          placeholder="Número TIUN"
          v-model="signupForm.tiun"
        ></custom-input>
        <custom-input
          placeholder="Nombre de usuario"
          v-model="signupForm.username"
          type="number"
        ></custom-input>
        <custom-input
          placeholder="Contraseña"
          v-model="signupForm.password"
          type="password"
        ></custom-input>
      </div>
      <!-- Provider -->
      <div v-else>
        <custom-input
          placeholder="Razón social"
          v-model="signupForm.social"
          type="number"
        ></custom-input>
        <custom-input
          placeholder="Nit"
          v-model="signupForm.nit"
        ></custom-input>
        <custom-input
          placeholder="Rut"
          v-model="signupForm.password"
        ></custom-input>
        <custom-input
          placeholder="Dirección"
          v-model="signupForm.address"
        ></custom-input>
        <custom-input
          placeholder="Correo"
          v-model="signupForm.email"
        ></custom-input>
        <custom-input
          placeholder="Tipo"
          v-model="signupForm.type"
        ></custom-input>
        <custom-input
          placeholder="Sector"
          v-model="signupForm.sector"
        ></custom-input>
        <custom-input
          placeholder="Usuario"
          v-model="signupForm.username"
        ></custom-input>
        <custom-input
          placeholder="Contraseña"
          v-model="signupForm.password"
          type="password"
        ></custom-input>
      </div>

      <div class="btn__container--vertical">
        <div class="btn btn--solid">Registarse</div>
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
import { titleMixin } from '../../mixins/title'

import { generateOptions } from '../../utilities/generators';
import Input from '../../components/ui/Form/Input.vue';
import FormGenerator from '../../components/ui/Form/FormGenerator.vue';
import OptionSelectorGroup from '../../components/ui/OptionSelectorGroup.vue';

@Component({
  components: {
    OptionSelectorGroup,
    'CustomInput': Input,
    FormGenerator
  }
})
export default class Login extends titleMixin {
  currentRol: string = 'member';
  rolOptions = [
    { label: 'Miembro de la UNAL', value: 'member' },
    { label: 'Prestador de servicio', value: 'provider' },
  ];
  
  signupForm = {
    fullname: '',
    tiun: '',
    username: '',
    password: ''
  }

  onGoBack() {
    this.$router.push({ name: 'home'});
  }

  mounted() {
    this.setLayoutTitle('Registro');
    this.showBackButton = true;
    this.currentRol = this.$route.params.rol;
  }
}
</script>

<style lang="scss" scoped>

  

</style>
