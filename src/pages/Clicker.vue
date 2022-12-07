<template>
    <div class="columns">
        <div class="column is-one-third has-text-centered">
            <b>{{clicks}} clicks</b>  
            <br>
            <b>{{cps}} Diamonds per second</b>  
            <img @click="clickClick()" :class="{'click': clickClass}" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/be02a4e3-e357-4bde-b048-3a8a59e11d49/d2mcev3-5ac40603-bd13-49ed-b235-859ee4fd46cb.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JlMDJhNGUzLWUzNTctNGJkZS1iMDQ4LTNhOGE1OWUxMWQ0OVwvZDJtY2V2My01YWM0MDYwMy1iZDEzLTQ5ZWQtYjIzNS04NTllZTRmZDQ2Y2IucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.LJLK_Ka0GIqVx1C0RwYv7vvE4Vgc3BuYUdttCUAJ3RM">   
        </div>
        <div class="column">
            <button @click="upgrade(1, 10)" class="button" :disabled="clicks<10">Buy 1 cps for 10 diamonds</button>     
            <br>
            <br>
            <button @click="upgrade(10, 100)" class="button" :disabled="clicks<100">Buy 10 cps for 100 diamonds</button> 
            <br>
            <br>
            <button @click="upgrade(100, 500)" class="button" :disabled="clicks<500">Buy 100 cps for 500 diamonds</button>
            <br>  
            <br>    
            <button @click="upgrade(1000, 1500)" class="button" :disabled="clicks<1500">Buy 1000 cps for 1500 diamonds</button> 
            <br>
            <br>
            <button @click="reloadPage" class="button" :disabled="clicks<2000">Winner Winner Chicken dinner</button>

        </div>
    </div>
</template>
<script>

export default {
    created(){
        setInterval(()=>{
            this.clicks += this.cps;
            this.clicks = parseFloat(this.clicks.toFixed(1));


        }, 1000);
        
    },
    data(){
        return {
            clickClass: false,
            clicks: 0,
            cps: 0

        }
    },
    methods: {
        clickClick(){
            this.clicks++;
            this.clickClass = true;
            setTimeout(()=> {
                this.clickClass = false;
            }, 100);
        },
        reloadPage() {
      window.location.reload();
       },

        upgrade(cps, cost){
            if(this.clicks >= cost){
                this.clicks -= cost;
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

    button {
    background: #428BCA;
    color: #fff;
    font-family: Sans-serif;
    font-size: 20px;
    height: 60px;
    width: 320px;
    line-height: 60px;
    margin: 25px 25px;
    text-align: center;
    border: 0;
    transition: all 0.3s ease 0s;
}

button:hover {
  background: #e000fd;
}
</style>
