<template>
  <div class="columns">
    <div class="column is-one-third has-text-centered">
        <b>{{displayCookies}} Cats</b>
        <br>
        <b>{{displayCps}} Cat cookies per second</b>
        <img @click="cookieClick()" :class="{'click': clickClass}" src="https://i.pinimg.com/originals/3f/9c/df/3f9cdf91725f86fbdee9106c30cae0e0.png">
    </div>
    <div class="column">
        <h1><strong>Buy cps for cats</strong></h1>
        <h2>Makes game little easier</h2>
        <button @click="upgrade(1, 10)" class="button is-primary is-light  is-rounded" :disabled="cookies<10">🍪Buy 10 cps for 10 cats🍪</button>
        <button @click="upgrade(10, 100)" class="button is-link is-light  is-rounded" :disabled="cookies<100">🍪Buy 100 cps for 100 cats🍪</button>
        <button @click="upgrade(100, 1000)" class="button is-success is-light  is-rounded" :disabled="cookies<1000">🍪Buy 1000 cps for 1000 cats🍪</button>
        <button @click="upgrade(1000, 10000)" class="button is-warning is-light  is-rounded" :disabled="cookies<10000">🍪Buy 10000 cps for 10000 cats🍪</button>
        <button @click="upgrade(10000, 100000)" class="button is-danger is-light  is-rounded" :disabled="cookies<100000">🍪Buy 100000 cps for 100000 cats🍪</button>
    </div>
      <div class="column2">
        <h1><strong>Add half more cookies and start eating 1 cookie per second</strong></h1>
        <h2>Makes game little harder</h2>
        <button @click="upgrade2(1, 50)" class="button is-primary is-medium" :disabled="cookies<50">😾Add +50 cat cookies and Eat -1 cps click for 50 cats🍪</button>
        <button @click="upgrade2(2, 250)" class="button is-link  is-medium" :disabled="cookies<250">😾Add +250 cat cookies and Eat -1 cps click for 250 cats🍪</button>
        <button @click="upgrade2(3, 2500)" class="button is-success is-medium" :disabled="cookies<2500">😾Add +2500 cat cookies and Eat -1 cps click for 2500 cats🍪</button>
        <button @click="upgrade2(4, 25000)" class="button is-warning  is-medium" :disabled="cookies<25000">😾Add +25000 cat cookies and Eat -1 cps click for 25000 cats🍪</button>
        <button @click="upgrade2(5, 250000)" class="button is-danger  is-medium" :disabled="cookies<250000">😾Add +250000 cat cookies and Eat -1 cps click for 250000 cats🍪</button>
    </div>
  </div>
  <div class="notification is-warning is-light">
  <strong> NB!</strong> Kui küpsised jooksevad negatiivseteks siis oled võlas ja pead clickima kuni jälle küpsised on positiivsed.
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
            click: 1
        }
    },
    computed: {
        displayCookies(){
            return parseFloat(this.cookies.toFixed(1));
        },
        displayCps(){
            return parseFloat(this.cps.toFixed(1));
        },
    },
    methods: {
        cookieClick(){
            this.cookies++;
            this.clickClass = true;
            setTimeout(()=> {
                this.clickClass = false;
            }, 100);
        },
        upgrade(cps, cost){
            if(this.cookies >= cost){
                this.cookies -= cost;
                this.cps += cps;
            }
        },
        upgrade2(cps, cost){
            if(this.cookies >= cost){
                this.cookies += cost;
                this.cps -= cps;
               
            
            }
        },
        
    }
}

</script>

<style scoped>
    img.click {
        transform: scale(0.9);
    }
    
</style>
