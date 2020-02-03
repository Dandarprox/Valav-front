<template>
  <div>
    <option-selector
      @click.native="setSelection(index)"
      v-for="(value, index) in values"
      :key="index"
      :label="options[index].label"
      :design="activeIndex == index ? 'solid' : 'outline'"
      v-model="values[index]"></option-selector>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "vue-property-decorator"
import OptionSelector from './OptionSelector.vue';
import { options } from '../../types/general';

@Component({
  model: {
    prop: 'value',
    event: 'selected'
  },
components: {
    OptionSelector
  }
})
export default class OptionSelectorGroup extends Vue {
  @Prop({
    required: true
  })
  value!: options | {};
  @Prop({
    required: true,
    default: [] 
  })
  options!: options[];
  @Prop({
    required: false,
    default: undefined
  })
  defaultValue!: string | number | boolean;

  values: boolean[] = [];
  activeIndex = -1;

  setSelection(index: number) {
    if (this.activeIndex != -1) {
      this.$set(this.values, this.activeIndex, false);
      this.$emit('selected', this.options[index].value);
    }

    this.activeIndex = index;
    this.values[index] = true;
  }

  beforeMount() {
    this.values = Array(this.options.length).fill(false);
    
    if (this.defaultValue) {
      for (let i = 0; i < this.options.length; i++) {
        if (this.options[i].value == this.defaultValue)
          this.activeIndex = i;
      }
    }
  }
}
</script>

<style lang="scss" scoped>

  

</style>
