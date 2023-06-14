<template>
  <div class="columns">
    <div class="column is-one-third has-text-centered">
        <b>{{displayCookies}} Cookies </b>
        <b>{{displayCps}} Cookies per second </b>
        <img @click="cookieClick()" :class="{'click': clickClass}" src="https://purepng.com/public/uploads/medium/purepng.com-american-cookiecookieamericandelicioussnacksweetyummybiscuit-21525886868nqaab.png">
    </div>
    
    <div class="column"> 
        <button @click="upgrade(0.1, 10)" class="button is-primary" :disabled="cookies<10">Buy 0.1 cps for 10 cookies</button>
         <button @click="upgrade(1, 100)" class="button is-primary" :disabled="cookies<100">Buy 1 cps for 100 cookies</button>
          <button @click="upgrade(10, 1000)" class="button is-primary" :disabled="cookies<1000">Buy 10 cps for 1000 cookies</button>
           <button @click="upgrade(100, 10000)" class="button is-primary" :disabled="cookies<10000">Buy 100 cps for 10000 cookies</button>
            <button @click="upgrade(1000, 100000)" class="button is-primary" :disabled="cookies<100000">Buy 1000 cps for 100000 cookies</button>
             <button @click="upgrade(10000, 1000000)" class="button is-primary" :disabled="cookies<1000000">Buy 10000 cps for 1000000 cookies</button>
              <button @click="upgrade(1000000)" class="button is-danger" :disabled="cookies<25000000">Buy Pear Upgrade for 25000000 cookies</button>
    </div>
  </div>
</template>

<script>
export default {
    created(){
        setInterval(()=>{
            this.cookies += this.cps;
            this.cookies = parseFloat(this.cookies.toFixed(1));
        }, 500);
    },
    data(){
        return{
            clickClass: false,
            cookies: 0,
            cps: 0
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
    methods: {
        cookieClick(){
            this.cookies++;
            this.clickClass= true;
            setTimeout(()=> {
                this.clickClass= false;
            }, 200);
        },
        upgrade(cps, cost){
            if(this.cookies >= cost){
                this.cookies -= cost;
                this.cps += cps;
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
