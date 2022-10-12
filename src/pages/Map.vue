<template>
  <div id="map"></div>
</template>

<script>
import { Loader } from "@googlemaps/js-api-loader"
export default {
    mounted(){
        const loader = new Loader({
            apiKey: "AIzaSyCFZquZ6fD9XiCi_1Pv9KVBhu5Qj8ukpy4",
            version: "weekly"
        });

        loader.load().then(() => {
            map = new google.maps.Map(document.getElementById("map"), {
                center: { lat: -34.397, lng: 150.644 },
                zoom: 8,
            });
        });

    }
}
</script>

<style scoped>
#map {
  height: 600px;
}
</style>