<template>
    <div class="columns">
        <div class="column is-one-third has-text-centered">
            <b>{{displayCookies}} Cookies</b><br>
            <b>{{displayCps}} CPS (cookies per second)</b><br>
            <b>{{displayClick}} CPC (cookies per click)</b>
            <img @click="cookiesClick()" :class="{'click': clickClass}" src="https://www.picng.com/upload/cookie/png_cookie_11811.png" alt="cookie">
        </div>
        <div class="column">
        <button @click="Upgrade(0.1, Cps1Cost)" class="button is-primary" :disabled="cookies<Cps1Cost">Buy 0.1 cps for {{Cps1Cost}} cookies</button>
        <button @click="UpgradeClick(1, Cpc1Cost)" class="button is-primary" :disabled="cookies<Cpc1Cost">Buy +1 cookies per every click for {{Cpc1Cost}} cookies</button><br>
        </div>
    </div>
</template>

<script>
export default {
    created(){
        setInterval(()=> {
            this.cookies += this.cps;
        }, 1000);
    },
    computed: {
        displayCookies(){
            return parseFloat(this.cookies.toFixed(1));
        },
        displayCps(){
            return parseFloat(this.cps.toFixed(1));
        },
        displayClick(){
            return parseFloat(this.click.toFixed(1));
        },
    },
    data(){
        return{
            clickClass: false,
            cookies: 0,
            cps: 0,
            click: 1,
            Cpc1Cost: 10,
            Cps1Cost: 10,
        }
    },
    methods: {
        cookiesClick(){
            this.cookies += this.click;
            this.clickClass = true;
            setTimeout(()=> {
                this.clickClass = false;
            }, 100);
        },
        Upgrade(cps, cost){
            if (this.cookies >= cost) {
                this.cookies -= cost;
                this.cps += cps;
                this.Cps1Cost++;
            }
        },
        UpgradeClick(click, cost){
            if (this.cookies >= cost) {
                this.cookies -= cost;
                this.click += click;
                this.Cpc1Cost++;
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