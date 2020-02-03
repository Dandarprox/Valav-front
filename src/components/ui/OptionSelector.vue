<template>
  <div
    style="text-align: center;" 
    @click.native="toggleValue">
    <div class="btn" :class="{
        'btn--solid': design == 'solid',
        'btn--outline': design == 'outline'
      }">{{ label }}<div class="selector">
      <div
        v-show="localActive"   
        class="selector__ball"></div>
      </div>    
    </div> 
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
  Watch
} from "vue-property-decorator" 

@Component({
  model: {
    prop: 'isActive',
    event: 'toggle'
  }
})
/** 
 * @defaultName: Super componente chidori
**/
export default class OptionSelector extends Vue {
 /** 
  * Etiqueta para nombrar cosas
 **/
  @Prop({
    type: [String, Number],
    required: true,
    default: ''
  })
  label!: string | number;
  @Prop({
    type: Boolean,  
  })
  isActive!: boolean;
  @Prop({
    type: String,
    required: false,
    default: 'solid'
  })
  design!: 'solid' | 'outline';
  localActive: boolean = false;

  toggleValue() {
    this.localActive = !this.localActive;
    this.$emit('toggle', this.localActive);
  }

  @Watch('isActive')
  onIsActiveChange(value: boolean) {
    this.localActive = value;
  }

  mounted() {
    this.localActive = this.isActive;
  }
}
</script>

<style lang="scss" scoped>

.btn {
  position: relative;
  min-width: 230px;
}
  
.selector {
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  @include circular(10px);
  background: white;
}

.selector__ball {
  @include circular(6px);
  margin: 2px;
  transition: 0.3s;
  background: $colorBlue;
}
  
</style>
