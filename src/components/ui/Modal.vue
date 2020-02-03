<template>
  <transition name="slide-fade">
    <div class="modal__background" v-show="bgActive">

      <transition name="fade">
        <div class="modal" v-show="modalActive">
          <div class="title">{{ title }}</div>
          <div class="modal__content">{{ content }}</div>
          <div class="btn__container--horizontal container__spacer">
            <slot></slot>
          </div>
        </div>
      </transition>

    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class Modal extends Vue {
  @Prop({
    required: true
  })
  title!: string;
  @Prop({
    required: true
  })
  content!: string;
  /* 
    If notification mode should be triggered
  */
  @Prop({
    required: false
  })
  notification!: boolean;
  @Prop({
    default: 2000
  })
  displayTime!: number;

  bgActive = false;
  modalActive = false;

  show() {
    this.bgActive = true;
    setTimeout(() => {
      this.modalActive = true;
    }, 300);
  }

  hide() {
    this.bgActive = false;
    this.modalActive = false;
  }

  mounted() {}
}
</script>

<style lang="scss" scoped>
.modal__background {
  z-index: 0;
  top: 0;
  left: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(black, 0.6);
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px 30px;
  background: $colorBlackLight;
  box-shadow: 0px 5px 10px 3px rgba(white, 0.05);
  width: 70vw;
  font-size: 15px;

  .title {
    font-size: 26px;
  }
}

.modal__content {
  margin-top: 10px;
}

.container__spacer {
  margin-top: 7px;
}

// * Modal transitions
// Modal background
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

// Modal content
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter,
.fade-enter-leave-to {
  transform: translateY(-50px);
  opacity: 0;
}

</style>
