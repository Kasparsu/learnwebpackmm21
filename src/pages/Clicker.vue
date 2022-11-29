<template>
  <div class="columns">
    <div class="column is-one-third has-text-centered">
        <b>{{displayCookies}} cookies</b>
        <br>
        <b>{{displayCps}} cookies per second</b>
        <img @click="cookieClick()" :class="{'click': clickClass}" src="https://www.picng.com/upload/cookie/png_cookie_11811.png">
    </div>
    <div class="column">
        <button @click="upgrade(0.1, 10, 1)" class="button is-primary" :disabled="cookies<10">Buy 0.1 cps for 10 cookies</button>
        <button @click="upgrade(1, 100, 1)" class="button is-primary" :disabled="cookies<100">Buy 1 cps for 100 cookies</button>
        <button @click="upgrade(10, 1000, 1)" class="button is-primary" :disabled="cookies<1000">Buy 10 cps for 1000 cookies</button>
        <button @click="upgrade(100, 10000, 1)" class="button is-primary" :disabled="cookies<10000">Buy 100 cps for 10000 cookies</button>
        <button @click="upgrade(1000, 100000, 1)" class="button is-primary" :disabled="cookies<100000">Buy 1000 cps for 100000 cookies</button>
    </div>
  </div>
</template>

<script>
export default {
    created(){
        setInterval(()=>{
            this.cookies += this.cps;
        }, 1000);
    },
    data(){
        return {
            clickClass: false,
            cookies: 0,
            cps: 0,
            times: 0,
        }
    },
    computed: {
        displayCookies(){
            return parseFloat(this.cookies.toFixed(1));
        },
        displayCps(){
            return parseFloat(this.cps.toFixed(1));
        }
    },
    mounted() {

    },
    //Sound FX
    methods: {
        cookieClick(){
            let audio = new Audio('https://www.fesliyanstudios.com/play-mp3/387');
            this.cookies++;
            this.clickClass = true;
            audio.play();
            setTimeout(()=> {
                this.clickClass = false;
            }, 100);
        },
        upgrade(cps, cost, times){
            if(this.cookies >= cost){
                this.cookies -= cost;
                this.cps += cps;
                if(cps == 0.1 && this.times == 0){
                    this.times++;
                    let audio = new Audio('https://cdn.pixabay.com/audio/2021/08/09/audio_364cfa6e8b.mp3?filename=medieval-fanfare-6826.mp3');
                    audio.play();
                    alert("Congratulations! You have bought your first upgrade!");
                }
                if(cps == 1 && this.times == 1){
                    this.times++;
                    let audio = new Audio('https://cdn.pixabay.com/audio/2021/08/09/audio_364cfa6e8b.mp3?filename=medieval-fanfare-6826.mp3');
                    audio.play();
                    alert("Congratulations! You have bought your first upgrade!");
                }
                if(cps == 10 && this.times == 2){
                    this.times++;
                    let audio = new Audio('https://cdn.pixabay.com/audio/2021/08/09/audio_364cfa6e8b.mp3?filename=medieval-fanfare-6826.mp3');
                    audio.play();
                    alert("Congratulations! You have bought your first upgrade!");
                }
                if(cps == 100 && this.times == 3){
                    this.times++;
                    let audio = new Audio('https://cdn.pixabay.com/audio/2021/08/09/audio_364cfa6e8b.mp3?filename=medieval-fanfare-6826.mp3');
                    audio.play();
                    alert("Congratulations! You have bought your first upgrade!");
                }
                if(cps == 1000 && this.times == 4){
                    this.times++;
                    let audio = new Audio('https://cdn.pixabay.com/audio/2021/08/09/audio_364cfa6e8b.mp3?filename=medieval-fanfare-6826.mp3');
                    audio.play();
                    alert("Congratulations! You have bought your first upgrade!");
                }

            }
        }
    }
}
</script>

<style scoped>
    img.click {
        transform: scale(0.9);
    }
</style>
