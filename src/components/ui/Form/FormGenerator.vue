<template>
  <div>
    <custom-input
      v-for="(value, key) in localValues"
      :key="key"
      :placeholder="localValues[key].label"
      :type="localValues[key].type"
      v-model="localValues[key].value">
    </custom-input>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "vue-property-decorator"
import Input from './Input.vue';
import { options, formField } from '../../../types/general';

@Component({
  model: {
    prop: 'data'
  },
  components: {
    'CustomInput': Input
  }
})
export default class FormGenerator extends Vue {
  @Prop({
    required: true,
    default: () => []
  })
  fields!: formField[];

  localValues: {[key: string]: {}} = {};

  created() {
    this.fields.forEach(key => {
      this.localValues[key.value] = {
        label: key.label,
        type: key.value,
        value: ''
      };
    });
  }


}
</script>

<style lang="scss" scoped>

  

</style>
