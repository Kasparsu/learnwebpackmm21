<template>
    <button class="button is-primary" @click="goToHome">Go To Home</button>
    <google-map :center="center" :zoom="zoom" @centerChanged="updateCenter" @zoomChanged="updateZoom">
        <google-map-marker :pos="{ lat: 59.4269112, lng: 24.743487 }"></google-map-marker>
    </google-map>
</template>

<script>
import GoogleMap from '../components/GoogleMap.vue'
import GoogleMapMarker from '../components/GoogleMapMarker.vue';
export default {
  components: { GoogleMap, GoogleMapMarker },
  data(){
    return {
        center: { lat: 59.4269112, lng: 24.743487 },
        zoom: 18
    }
  },
  methods:{
    goToHome(){
        this.center={lat:59.410645, lng: 24.605453};
        this.zoom=18;
    },
    updateCenter(newCenter){
        this.center = newCenter;
    },
    updateZoom(newZoom){
        this.zoom = newZoom;
    }
  }

}
</script>

<style>

</style>