<template>
    <div class="columns">
        <div class="column is-one-third has-text-centered">
            <b>{{displayCookies}} cookies</b>
            <br>
            <b>{{displayCps}} cookies per second</b>
            <br>
            <b>{{clickPer}} cookies per click</b>
            <img @click="cookieClick()" :class="{'click': clickClass}" src="https://www.picng.com/upload/cookie/png_cookie_11811.png">
        </div>
        <div class="column">
            <button @click="upgrade(0.1, 10)" class="button is-primary" :disabled="cookies<10">Buy 0.1 cps for 10 cookies</button>
            <button @click="upgrade(1, 100)" class="button is-primary" :disabled="cookies<100">Buy 1 cps for 100 cookies</button>
            <button @click="upgrade(10, 1000)" class="button is-primary" :disabled="cookies<1000">Buy 10 cps for 1000 cookies</button>
            <button @click="upgrade(100, 10000)" class="button is-primary" :disabled="cookies<10000">Buy 100 cps for 10000 cookies</button>
            <button @click="upgrade(1000, 100000)" class="button is-primary" :disabled="cookies<100000">Buy 1000 cps for 100000 cookies</button>
            <button @click="clickUpgrade(1, 25)" class="button is-primary" :disabled="cookies<25">Buy +1 per click for 25 cookies</button>
            <button @click="clickUpgrade(2, 50)" class="button is-primary" :disabled="cookies<50">Buy +2 per click for 50 cookies</button>
            <button @click="clickUpgrade(5, 250)" class="button is-primary" :disabled="cookies<250">Buy +5 per click for 250 cookies</button>
            <button @click="clickUpgrade(10, 2500)" class="button is-primary" :disabled="cookies<2500">Buy +10 per click for 2500 cookies</button>
            <button @click="clickUpgrade(100, 25000)" class="button is-primary" :disabled="cookies<25000">Buy +100 per click for 25000 cookies</button>
        </div>
    </div>
</template>

<script>
export default {
    created(){
        setInterval(()=>{
            this.cookies += this.cps;
            this.cookies = parseFloat(this.cookies.toFixed(1));
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
        clickPer(){
            return parseFloat(this.click.toFixed(1));
        }
    },
    methods: {
        cookieClick(){
            this.cookies += this.click;
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
        clickUpgrade(click, cost){
            this.cookies - cost;
            if(this.cookies >=cost){
                this.click += click;
                this.cookies -= cost;
            }
        }
    }
}
</script>

<style>
    img.click {
        transform: scale(0.9);
    }
</style>
