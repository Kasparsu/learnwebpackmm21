<template>
  <div class="columns">
    <div class="column is-one-third has-text-centered">
        <b>{{displayBananas}} bananas</b>
        <br>
        <b>{{displayCps}} bananas per second</b>
        <br>
        <b>{{displayTotal}} Total bananas collected</b>
        <img @click="bananasClick()" :class="{'click': clickClass}" src="https://th.bing.com/th/id/R.20292bd2eba57b9e5b38e1407756baa9?rik=Z3pc1e5j20RTIg&pid=ImgRaw&r=0">
    </div>
    
    <div class="column">
        <button @click="upgrade(0.1, 10), ach(0)" class="button is-primary" :disabled="bananas<10">Buy 0.1 cps for 10 bananas</button>
        <button @click="upgrade(1, 100) " class="button is-primary" :disabled="bananas<100">Buy 1 cps for 100 bananas</button>
        <button @click="upgrade(10, 1000), ach(3) " class="button is-primary" :disabled="bananas<1000">Buy 10 cps for 1000 bananas</button>
        <button @click="upgrade(100, 10000), ach(5)" class="button is-primary" :disabled="bananas<10000">Buy 100 cps for 10000 bananas</button>
        <button @click="upgrade(1000, 100000), ach(1)" class="button is-primary" :disabled="bananas<100000">Buy 1000 cps for 100000 bananas</button>
    </div>
  </div>
<div v-if="achievements[1]== 1" class="notification">
  <button class="delete" @click="ach(1)"></button>
  Achievement <strong>Get this achievement by buying the last upgrade, Are you happy now i tried to warn you you just have wasted a lot of time playing this game this is it there is nothing else here</strong><a></a>
</div>
<div v-if="achievements[0]== 1" class="notification">
  <button class="delete" @click="ach(0)"></button>
  Achievement <strong>Get this achievement by buying the first upgrade, Baby steps</strong><a></a>
</div>

<div v-if="bananas >= 500| achievements[2]== 1" class="notification">
  <button class="delete" @click="ach(2)"></button>
  Achievement <strong>Get this achievement by getting 500 bananas, Going monkey mode</strong><a></a>
</div>

<div v-if="achievements[3]== 1" class="notification">
  <button class="delete" @click="ach(3)"></button>
  Achievement <strong>Get this achievement by buying the third upgrade, Just keep going(actually dont, just give up there's nothing special at the end)</strong><a></a>
</div>

<div v-if="bananas >= 1500| achievements[4]== 1" class="notification">
  <button class="delete" @click="ach(4)"></button>
  Achievement <strong>Get this achievement by getting 1500 bananas, You are going beyond monkey your super monkey</strong><a></a>
</div>

<div v-if="bananas >= 5000| achievements[5]== 1" class="notification">
  <button class="delete" @click="ach(5)"></button>
  Achievement <strong>Get this achievement by getting 5000 bananas, You are going beyond super monkey your super monkey 2</strong><a></a>
</div>

<div v-if="achievements[5]== 1" class="notification">
  <button class="delete" @click="ach(5)"></button>
  Achievement <strong>Get this achievement by buying the fourth upgrade, Im going to be honest just stop now there's nothing after that last upgrade there's no point going beyond this just stop</strong><a></a>
</div>

<div v-if="bananas >= 200000| achievements[5]== 1" class="notification">
  <button class="delete" @click="ach(5)"></button>
  Achievement <strong>WHY ARE YOU STILL HERE GET GOING</strong><a></a>
</div>

<div v-if="total >= 1000000| achievements[5]== 1" class="notification">
  <button class="delete" @click="ach(5)"></button>
  Achievement <strong>BRUH congrats u have earned the total banana achievement this can be obtained by having 1000000 total bananas you must be crazy but this truly is all there is to this game</strong><a></a>
</div>
</template>

<script>
export default {
    created(){
        setInterval(()=>{
            this.bananas += this.cps;
            this.total += this.cps;
        }, 1000);
    },
    data(){
        return {
            clickClass: false,
            bananas: 0,
            cps: 0,
            achievements: [0,0,0,0,0,0,0],
            total:0,

        }
    },
    computed: {
        displayBananas(){
            return parseFloat(this.bananas.toFixed(1));
        },
        displayCps(){
            return parseFloat(this.cps.toFixed(1));
        },
        displayTotal(){
            return parseFloat(this.total.toFixed(1));
        }
    },
    methods: {
        bananasClick(){
            this.bananas++;
            this.total++;
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
        ach(index){
            this.achievements[index]++;
        },
    }
}
</script>

<style scoped>
    img.click {
        transform: scale(0.9);
    }
</style>