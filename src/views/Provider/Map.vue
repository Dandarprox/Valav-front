<template>
  <div>
    <div
      @click="addAddress = true" 
      class="options">
      <svg viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg"><path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm112 277.332031h-90.667969v90.667969c0 11.777344-9.554687 21.332031-21.332031 21.332031s-21.332031-9.554687-21.332031-21.332031v-90.667969h-90.667969c-11.777344 0-21.332031-9.554687-21.332031-21.332031s9.554687-21.332031 21.332031-21.332031h90.667969v-90.667969c0-11.777344 9.554687-21.332031 21.332031-21.332031s21.332031 9.554687 21.332031 21.332031v90.667969h90.667969c11.777344 0 21.332031 9.554687 21.332031 21.332031s-9.554687 21.332031-21.332031 21.332031zm0 0"/></svg>
    </div>
    <transition name="trfade">
      <div 
        v-show="addAddress"
        class="floating">
        <div
          @click="addAddress = false" 
          class="floating__cancel">x</div>
        <input type="text" placeholder="Escribe una dirección">
        <div class="btn btn--s btn--solid">Aceptar</div>
      </div>
    </transition>
    <div ref="map" id="map"></div>
  </div>
</template>

<script lang='ts'>
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';
import { titleMixin } from '../../mixins/title';
import { neutralBlue } from '../../assets/map-styles/neutral-blue';
import "googlemaps";

@Component({})
export default class ProviderMap extends titleMixin {
  mounted() {
    const API_KEY = "AIzaSyC-axBWJwdkOZ2S27hxQHDSTs6Dr62bv4s";
    const element = this.$refs.map as HTMLElement;
    const center = {
      lat: 4.6376440857167385,
      lng: -74.08390656005729
    };

    // @ts-ignore
    const googleMap = new google.maps.Map(element, {
      center,
      zoom: 16,
      styles: neutralBlue
    });

    const markersData = [
      {
        position: {
          lat: 4.6360132931286495,
          lng: -74.08488824855671
        },
        title: "Medicina"
      },
      {
        position: {
          lat: 4.634986693896691,
          lng: -74.08383145820484
        },
        title: "Derecho"
      },
      {
        position: {
          lat: 4.635970518190419,
          lng: -74.0807791043459
        },
        title: "SINDU"
      }
    ];
    const markers = markersData.map(marker => {
      const imarker = new google.maps.Marker({
        ...marker,
        map: googleMap
      });
      const info = new google.maps.InfoWindow({
        content: marker.title
      });

      imarker.addListener("click", () => {
        info.open(googleMap, imarker);
      });

      return imarker;
    });

    this.setLayoutTitle("Mapa");
    this.psMounted();
  }

  addAddress = false;

  private psMounted() {
    this.setLayoutTitle('Mapa');
    this.showBackButton = false;
  }

  searchAddress() {
    
  }

  activated() {
    this.psMounted();
  }
}
</script>

<style lang='scss' scoped>

.options {
  @include squared(30px);
  fill: white;
  position: absolute;
  right: 20px;
  transform: translateY(-50px);
  z-index: 3;
  cursor: pointer;
}

.floating {
  position: fixed;
  border-radius: 5px;
  background: $colorBlackLight;
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-flow: column nowrap;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;


  input {
    font-size: 18px;
    background: $colorBlackDark;
    padding: 5px 10px;
    text-align: center;
    color: white;
    border: 0;
    margin-bottom: 20px;
  }
}

.floating__cancel {
  @include circular(20px);
  @include flexCentered();
  background: $colorBlue;
  line-height: 0;
  top: 0;
  right: -10px;
  position: absolute;
  transform: translateY(-50%);
  color: white;
  padding: 2px;
  transition: .3s;

  &:hover {
    background: lighten($color: $colorBlue, $amount: 10%);
  }
}

</style>
