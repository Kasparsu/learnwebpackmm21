<template>
    <div class="columns">
        <div class="column is-one-third has-text-centered">
            <b>{{displayCookies}} Cookies</b><br>
            <b>{{displayCps}} CPS (cookies per second)</b><br>
            <b>{{displayClick}} CPC (cookies per click)</b>
            <img @click="cookiesClick()" :class="{'click': clickClass}" src="https://www.picng.com/upload/cookie/png_cookie_11811.png" alt="cookie">
        </div>
        <div class="column">
        <button @click="Upgrade(0.1, 0)" class="button is-primary" :disabled="cookies<this.cpsCosts[0]">Buy 0.1 cps for {{this.cpsCosts[0]}} cookies</button><br>
        <button @click="Upgrade(1, 1)" class="button is-primary" :disabled="cookies<this.cpsCosts[1]">Buy 1 cps for {{this.cpsCosts[1]}} cookies</button><br>
        <button @click="Upgrade(10, 2)" class="button is-primary" :disabled="cookies<this.cpsCosts[2]">Buy 10 cps for {{this.cpsCosts[2]}} cookies</button><br>
        <button @click="Upgrade(100, 3)" class="button is-primary" :disabled="cookies<this.cpsCosts[3]">Buy 100 cps for {{this.cpsCosts[3]}} cookies</button><br>
        <br>
        <button @click="UpgradeClick(1, 0)" class="button is-primary" :disabled="cookies<this.cpcCosts[0]">Buy +1 cookies per every click for {{this.cpcCosts[0]}} cookies</button><br>
        <button @click="UpgradeClick(1, 1)" class="button is-primary" :disabled="cookies<this.cpcCosts[1]">Buy +1 cookies per every click for {{this.cpcCosts[1]}} cookies</button><br>
        <button @click="UpgradeClick(1, 2)" class="button is-primary" :disabled="cookies<this.cpcCosts[2]">Buy +1 cookies per every click for {{this.cpcCosts[2]}} cookies</button><br>
        <button @click="UpgradeClick(1, 3)" class="button is-primary" :disabled="cookies<this.cpcCosts[3]">Buy +1 cookies per every click for {{this.cpcCosts[3]}} cookies</button><br>
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
            cpsCosts:[/*1*/ 10, /*2*/100, /*3*/1000, /*4*/10000],
            cpcCosts:[/*1*/ 10, /*2*/100, /*3*/1000, /*4*/10000],
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
        Upgrade(cps, index){
            if (this.cookies >= this.cpsCosts[index]) {
                this.cookies -=  this.cpsCosts[index];
                this.cps += cps;
                 this.cpsCosts[index] *= 1.1;
                console.log(this.cpsCosts[index]);
            }
        },
        UpgradeClick(click, index){
            if (this.cookies >= this.cpcCosts[index]) {
                this.cookies -= this.cpcCosts[index];
                this.click += click;
                this.cpcCosts[index] *= 1.1;
                console.log(this.cpcCosts[index]);
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