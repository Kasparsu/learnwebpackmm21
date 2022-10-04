<template>
  <div class="columns">
    <div class="column is-one-third has-text-centered">
        <b>{{displayBananas}} bananas</b>
        <br>
        <b>{{displayCps}} bananas per second</b>
        <img @click="bananasClick()" :class="{'click': clickClass}" src="https://th.bing.com/th/id/R.20292bd2eba57b9e5b38e1407756baa9?rik=Z3pc1e5j20RTIg&pid=ImgRaw&r=0">
    </div>
    
    <div class="column">
        <button @click="upgrade(0.1, 10)" class="button is-primary" :disabled="bananas<10">Buy 0.1 cps for 10 bananas</button>
        <button @click="upgrade(1, 100)" class="button is-primary" :disabled="bananas<100">Buy 1 cps for 100 bananas</button>
        <button @click="upgrade(10, 1000) " class="button is-primary" :disabled="bananas<1000">Buy 10 cps for 1000 bananas</button>
        <button @click="upgrade(100, 10000)" class="button is-primary" :disabled="bananas<10000">Buy 100 cps for 10000 bananas</button>
        <button @click="upgrade(1000, 100000), ach()" class="button is-primary" :disabled="bananas<100000">Buy 1000 cps for 100000 bananas</button>
    </div>
  </div>
  <div v-if="achTime==1" class="notification">
  <button class="delete" @click="ach()"></button>
  Achievement <strong>Get this achievement by buying the last upgrade, Are you happy you have wasted time playing this game? </strong><a></a>
</div>
</template>

<script>
export default {
    created(){
        setInterval(()=>{
            this.bananas += this.cps;
        }, 1000);
    },
    data(){
        return {
            clickClass: false,
            bananas: 0,
            cps: 0,
            achTime: 0,
        }
    },
    computed: {
        displayBananas(){
            return parseFloat(this.bananas.toFixed(1));
        },
        displayCps(){
            return parseFloat(this.cps.toFixed(1));
        }
    },
    methods: {
        bananasClick(){
            this.bananas++;
            this.clickClass = true;
            setTimeout(()=> {
                this.clickClass = false;
            }, 100);
        },
        upgrade(cps, cost){
            if(this.bananas >= cost){
                this.bananas -= cost;
                this.cps += cps;
            }
        },
        ach(){
            this.achTime++;
        }
    }
}
</script>

<style scoped>
    img.click {
        transform: scale(0.9);
    }
</style>