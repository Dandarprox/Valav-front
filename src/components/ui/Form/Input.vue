<template>
  <div class="input__wrapper">
    <div class="input__placeholder">{{ placeholder }}</div>
    <input
      autocomplete="off"
      autofill="off"
      class="input" 
      @input="handleInput"
      :type="type" 
      v-model="localValue">
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "vue-property-decorator"

@Component({
  model: {
    prop: 'value'
  }
})
export default class Input extends Vue {
  @Prop({
    default: ''
  })
  placeholder!: string;
  @Prop()
  value!: number | string;
  @Prop({
    default: 'text'
  })
  type!: string;

  localValue: number | string = '';

  mounted() {
    this.localValue = this.value;
  }

  handleInput(value: number | string) {
    this.$emit('input', this.localValue);
  }

}
</script>

<style lang="scss" scoped>

.input__wrapper {
  width: 100%;
  display: inline-block;
  position: relative;
  margin: 20px 0;
}

.input__placeholder {
  color: white;
  font-size: 17px;
  position: absolute;
  bottom: 100%;
  margin: 3px 0;
  left: 0;
}

.input {
  background: transparent;
  height: 30px;
  border: 0;
  border-bottom: 1px solid $colorBlue;
  caret-color: white;
  width: 100%;
  color: white;
  padding: 0 3px;
  padding-bottom: 2px;

  &:focus {
    border-width: 3px;
    padding-bottom: 0;
    outline: 0;
  }

}

</style>
