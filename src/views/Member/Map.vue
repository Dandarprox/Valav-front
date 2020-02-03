<template>
  <div>
    <div ref="map" id="map"></div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
import { titleMixin } from "../../mixins/title";
import "googlemaps";

import { neutralBlue } from "../../assets/map-styles/neutral-blue";

@Component({})
export default class Map extends titleMixin {
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

  private psMounted() {
    this.setLayoutTitle("Mapa");
    this.showBackButton = false;
  }

  activated() {
    this.psMounted();
  }
}
</script>

<style lang='scss'>
#map {
  width: 100%;
  height: calc(100vh - #{$titleSpace} - #{$menuHeight});
}

.gm-style-iw-d {
  color: black;
}

</style>
