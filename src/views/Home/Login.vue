<template>
  <div>
    <div class="title__space"></div>
    <div class="content">Por favor, escoge tu rol
      <option-selector-group
        v-model="loginRol"
        defaultValue="member"
        :options="rolOptions"
      >
      </option-selector-group>

      <custom-input
        placeholder="Nombre de usuario"
        v-model="loginForm.username"
      ></custom-input>
      <custom-input
        placeholder="Contraseña"
        v-model="loginForm.password"
        type="password"
      ></custom-input>

      <div class="btn__container--vertical">
        <div 
          @click="login"
          class="btn btn--solid">Ingresar</div>
      </div>

      <CustomModal
        ref="modal"
        :title="modalTitle"
        :content="modalContent">
        <div 
          @click="retryLogin"
          class="btn btn--solid">Continuar</div>
      </CustomModal>

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
import OptionSelectorGroup from '../../components/ui/OptionSelectorGroup.vue';
import { validObjectFields } from '../../utilities/validators';
import { Modal } from '../../types/general';

@Component({
  components: {
    OptionSelectorGroup,
    'CustomInput': Input,
  }
})
export default class Login extends titleMixin {
  rolOptions = [
    { label: 'Miembro de la UNAL', value: 'member' },
    { label: 'Prestador de servicio', value: 'provider' },
  ];
  loginForm = {
    username: '',
    password: ''
  };
  loginRol = 'member';
  modalTitle = '';
  modalContent = '';

  login() {
    if (!validObjectFields(this.loginForm)) {
      console.log('is valid');
      // Unsuccessful login
      this.modalTitle = 'Error de registro';
      this.modalContent = 'Los datos ingresados nos son válidos.';
      (this.$refs.modal as Modal).show();
    } else {
      // Successful login
      this.$router.push({name: `${this.loginRol}-home`});
    }
  }

  retryLogin() {
    (this.$refs.modal as Modal).hide();
  }

  onGoBack() {
    this.$router.go(-1);
  }

  beforeMount() {
    this.setLayoutTitle('Ingreso');
  }

  mounted() {
    this.showBackButton = true;
  }
}
</script>

<style lang="scss" scoped>

  

</style>
