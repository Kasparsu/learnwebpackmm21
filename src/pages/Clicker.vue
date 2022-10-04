<template>
    
    
  <div class="columns">
    <div class="column is-one-third has-text-centered">
        <div class="stats">
            <h3>STATS</h3>
            <b>{{displayEggs}} Eggs</b>
            <br>
            <b>{{displayEps}} Eggs per second</b>
            <br>
            <b>{{displayEpc}} Eggs per click</b>
            <br>
            <br>
        </div>
            
          
        <img  @click="eggClick()" :class="{'click': clickClass}" src="https://th.bing.com/th/id/OIP.BUHA1f4EAWeLVeb0j5pElQHaHf?pid=ImgDet&rs=1">
    </div>
    <div class="column is-one-third">
        <div class="sign1">
            <h3>PASSIVE UPGRADE
                <br>
                (eggs per second)
            </h3>
        </div>
            <br>
            <button @click="upgrade(0.1, 10)" class="button is-primary button is-medium is-fullwidth" :disabled="eggs<10">Buy 0.1 eps for 10 eggs</button>
            <br>
            
            <button @click="upgrade(1, 100)" class="button is-primary button is-medium is-fullwidth" :disabled="eggs<100">Buy 1 eps for 100 eggs</button>
            <br>
            
            <button @click="upgrade(10, 1000)" class="button is-primary button is-medium is-fullwidth" :disabled="eggs<1000">Buy 10 eps for 1000 eggs</button>
            <br>
            
            <button @click="upgrade(100, 10000)" class="button is-primary button is-medium is-fullwidth" :disabled="eggs<10000">Buy 100 eps for 10000 eggs</button>
            <br>
            
            <button @click="upgrade(1000, 100000)" class="button is-primary button is-medium is-fullwidth" :disabled="eggs<100000">Buy 1000 eps for 100000 eggs</button>
            
    </div>
    
        <div class="column is-one-third">
                    <div class="sign2"> 
                        <h3>ACTIVE UPGRADES
                        <br>
                        (eggs per click)
                     
                        </h3>
                    </div>
            <br>
            <button @click="upgrade2(1,10)" class="button is-primary button is-medium is-fullwidth" :disabled="eggs<10">Buy +1 egg per click for 10 eggs</button>
            <br>
            
            <button @click="upgrade2(10,1000)" class="button is-primary button is-medium is-fullwidth" :disabled="eggs<1000">Buy +10 egg per click for 1000 eggs</button>
            <br>
            
            <button @click="upgrade2(100,10000)" class="button is-primary button is-medium is-fullwidth" :disabled="eggs<10000">Buy +100 egg per click for 10000 eggs</button>
            <br>
            
            <button @click="upgrade2(1000,100000)" class="button is-primary button is-medium is-fullwidth" :disabled="eggs<100000">Buy +1000 egg per click for 100000 eggs</button>
            <br>
            
            <button @click="upgrade2(10000,1000000)" class="button is-primary button is-medium is-fullwidth" :disabled="eggs<1000000">Buy +10K egg per click for 1000000 eggs</button>
            <br>
            
            
      
        </div>
  </div>
</template>

<script>
export default {
    created(){
        setInterval(()=>{
            this.eggs += this.eps;
            
        }, 1000);
    },
    data(){
        return {
            clickClass: false,
            eggs: 0,
            eps: 0,
            epc:1
            
            
        }
    },
    computed: {
        displayEggs(){
            return parseFloat(this.eggs.toFixed(1));
        },
        displayEps(){
            return parseFloat(this.eps.toFixed(1));
        },
        displayEpc(){
            return parseFloat(this.epc.toFixed(1));
    },

},
    methods: {
        eggClick(){
            this.eggs += this.epc;
                                                //Click on egg gives one egg
            this.clickClass = true;
            setTimeout(()=> {
                this.clickClass = false;    
            }, 100);                           //Time before you can make another click
        },

        
       
        
        upgrade(eps, cost){                   //eggs per secong, how much upgrade costs
            if(this.eggs >= cost){            //if you have more eggs than it costs = purchase available
                this.eggs -= cost;            // if you have less eggs than it costs = purchase unavailable
                this.eps += eps;
            }
        },

        
       
       

        upgrade2(epc, cost){             //eggs per click upgrade
            if(this.eggs >= cost){
                this.eggs -= cost;
                this.epc += epc;
                 
                
            }
        },

        

    },

       
        
   
  

}
        
</script>

<style scoped>

    

    img{
        margin-top: 40px;
    }



    img.click {
        animation: shake 0.5s;
        transform: scale(1.5);    
     }

    @keyframes shake {
     0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
    30% { transform: translate(3px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg); }
    70% { transform: translate(3px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(1px, 2px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
}

    

    

    .stats{
        background-image: url("https://th.bing.com/th/id/R.510e17aeecb96cec065b85edd7cf8ece?rik=NDAJFusljsY3UA&riu=http%3a%2f%2fgetdrawings.com%2fimage%2fwood-plank-drawing-55.jpg&ehk=6R3SZSHObJvEk9OksLZjPH%2bsl0atTUg9zV18fxomO7c%3d&risl=&pid=ImgRaw&r=0") ;
        border: 7px solid rgb(146, 82, 8);
        
    }

    


    .column2{
        margin-top: 12px;
    }

    
   
    h3{
       color: rgb(255, 255, 255);
       font-size: 23px;
       font-weight: bold;
       text-align: center;
       
       
    }
    
   .sign1{
    background-image: url("https://th.bing.com/th/id/R.510e17aeecb96cec065b85edd7cf8ece?rik=NDAJFusljsY3UA&riu=http%3a%2f%2fgetdrawings.com%2fimage%2fwood-plank-drawing-55.jpg&ehk=6R3SZSHObJvEk9OksLZjPH%2bsl0atTUg9zV18fxomO7c%3d&risl=&pid=ImgRaw&r=0") ;
        border: 7px solid rgb(146, 82, 8);
   }
   .sign2{
    background-image: url("https://th.bing.com/th/id/R.510e17aeecb96cec065b85edd7cf8ece?rik=NDAJFusljsY3UA&riu=http%3a%2f%2fgetdrawings.com%2fimage%2fwood-plank-drawing-55.jpg&ehk=6R3SZSHObJvEk9OksLZjPH%2bsl0atTUg9zV18fxomO7c%3d&risl=&pid=ImgRaw&r=0") ;
        border: 7px solid rgb(146, 82, 8);
   }
    

</style>