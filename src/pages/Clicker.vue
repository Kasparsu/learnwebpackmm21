

<template>

  <div class="columns">
    <div class="column is-one-third has-text-centered">
       
        
    </div>
    <div class="column1">
        
       <b>{{displayCookies}} Kitkats</b>
        <br>
        <b>{{displayCps}}Clicks persecond</b>
        <br>
        <b>Total amount of clicks:{{clicks}}</b>
       

        <div>
        <img @click="cookieClick()" :class="{'click': clickClass}" :src="img">
        </div>
        
    </div>
    <div class="column3">
          <button @click="upgrade(1, 10)" class="button is-primary" :disabled="cookies<10">Buy 1 cps for 10 KitKats</button>
        <br>
        <button @click="upgrade(10, 100)" class="button is-primary" :disabled="cookies<100">Buy 10 cps for 100 KitKats</button>
        <br>
        <button @click="upgrade(100, 1000)" class="button is-primary" :disabled="cookies<1000">Buy 100 cps for 1000 KitKats</button>
        <br>
        <button @click="upgrade(1000, 10000)" class="button is-primary" :disabled="cookies<10000">Buy 1000 cps for 10000 KitKats</button>
        <br>
        <button @click="upgrade1(0,0)" class="button is-primary" :disabled="cookies<1">Buy a KitKat for 1000000</button>
    </div>
  </div>
</template>

<script type="text/javascript">








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
            clicks: 0,
            img: "https://abestore.ee/23430-medium_default/kitkat-415g.jpg"
            
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
            this.clicks++;
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
      
      upgrade1(cps, cost){
            if(this.cookies >= cost){
                this.cookies -= cost;
                this.cps += cps;
                alert('You got a KitKat');
                this.img="https://cdn.dribbble.com/users/1878524/screenshots/15732577/media/018cdd4e74cbb183ff6eda179b098dec.gif?compress=1&resize=400x300&vertical=top"

            }
        }



    }
}

</script>

<style scoped>
    img.click {
        transform: scale(0.9);
        transition: all 0.0001s ease-in-out;
    }
    


    
</style>
