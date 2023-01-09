<template>
  <div class="columns">
    <div class="column is-one-third has-text-centered">
        <b>{{displayJuiceboxes}} juiceboxes</b>
        <br>
        <b>{{displayCps}} Juiceboxes per second</b>
        <img @click="juiceboxClick()" :class="{'click': clickClass}"  src="https://clipart.world/wp-content/uploads/2022/06/Juice-Box-Clipart-Transparent.png">
    </div>
    <section class="shop-container">
        <h2 class="pad">Store</h2>
        <div class="store-list">
        </div>
        <div class="columnye">
        <button @click="upgrade(0.1,10)" class="button is-warning is-medium is-fullwidth" :disabled="juiceboxes <=9" onclick="" >Buy 0.1 cps for 10 🧃</button>
        <br>
        <button @click="upgrade(0.3,50)" class="button is-warning is-medium is-fullwidth" :disabled="juiceboxes <=49" onclick="" >Buy 0.3 cps for 50 🧃</button>
        <br>
        <button @click="upgrade(1,100)" class="button is-warning is-medium is-fullwidth" :disabled="juiceboxes <=99">Buy 1 cps for 100 🧃</button>
        <br>
        <button @click="upgrade(3,500)" class="button is-warning is-medium is-fullwidth" :disabled="juiceboxes <=499">Buy 3 cps for 500 🧃</button>
        <br>
        <button @click="upgrade(10,1000)" class="button is-warning is-medium is-fullwidth" :disabled="juiceboxes <=999">Buy 10 cps for 1k 🧃</button>
        <br>
        <button @click="upgrade(30,5000)" class="button is-warning is-medium is-fullwidth" :disabled="juiceboxes <=4999">Buy 30 cps for 5k 🧃</button>
        <br>
        <button @click="upgrade(100,10000)" class="button is-warning is-medium is-fullwidth" :disabled="juiceboxes <=9999">Buy 100 cps for 10k 🧃</button>
        <br>
        <button @click="upgrade(1000,100000)" class="button is-warning is-medium is-fullwidth" :disabled="juiceboxes <=99999">Buy 1k cps for 100k 🧃</button>
        <br>
        <button @click="upgrade(10000,1000000)" class="button is-warning is-medium is-fullwidth" :disabled="juiceboxes <=999999">Buy 10k cps for 1M 🧃</button>
        <br>
        <button @click="upgrade(100000,10000000)" class="button is-warning is-medium is-fullwidth" :disabled="juiceboxes <=9999999">Buy 100k cps for 10M 🧃</button>
        <br>
        <button @click="upgrade(1000000,100000000)" class="button is-warning is-medium is-fullwidth" :disabled="juiceboxes <=99999999">Buy 1M cps for 100M 🧃</button>
        <br>
        <button @click="upgrade(10000000,1000000000)" class="button is-warning is-medium is-fullwidth" :disabled="juiceboxes <=999999999">Buy 10M cps for 1B 🧃</button>
        <br>
          
    </div>
    </section>
  </div>
  <div class="juicebox_n_cps_background"></div>

  <article class="message is-warning">
  <div class="message-header">
    <p>Funny Buttons</p>
  </div>
  <div>
    <button onclick="window.location.href='https://youtu.be/dQw4w9WgXcQ'" class="button is-warning is-medium is-fullwidth" >🧃🧃🧃</button>
    <br>
    <button onclick="window.location.href='https://download.skype.com/s4l/download/win/Skype-8.91.0.404.exe'" class="button is-warning is-medium is-fullwidth">🧃🧃🧃</button>
  </div>
</article>



<article class="message is-warning">
  <div class="message-header">
    <p>Funny Buttons</p>
  </div>
  <div>
    <button @click="upgrade1(juiceboxes,1000)" class="button is-warning is-medium is-fullwidth" :disabled="(juiceboxes <=999)">🧃🧃🧃</button>
    <br>
    <button @click="upgrade2(2,0)" class="button is-warning is-medium is-fullwidth" :disabled="(juiceboxes <=99999)">🧃🧃🧃</button>
  </div>
</article>

</template>

<script>



export default {

    created(){
        setInterval(() => {
            this.juiceboxes += this.cps;
            this.juiceboxes = parseFloat (this.juiceboxes.toFixed(1));
        }, 1000);
    },
    data(){
        return {
            clickClass:false,
            juiceboxes: 0,
            cps: 0,
        }
    },
    computed:{
        displayJuiceboxes(){
            return parseFloat(this.juiceboxes.toFixed(1));
        },
        displayCps(){
            return parseFloat(this.cps.toFixed(1));
    },
},
    methods:{
            juiceboxClick(){
                this.juiceboxes++;
                this.clickClass = true;
                setTimeout(()=> {
                    this.clickClass = false;
                }, 50);
            },
            upgrade(cps, cost){
                if(this.juiceboxes >= cost){
                    this.juiceboxes -= cost;
                    this.cps += cps;
                }
            },
            upgrade1(cost){
                if(this.juiceboxes >= cost){
                    this.juiceboxes -= cost;
                }
            },
            upgrade2(cps,cost){
                if(this.juiceboxes >= cost){
                    this.juiceboxes =- cost;
                    this.cps *= cps;
                    
                }
            }
        },
}
</script>

<style scoped>


    .juicebox_n_cps_background {
        background-color: rgba(0, 0, 0, 0.579);
        width: 2000px;
        height: 120px;
        margin-top: -54.5%;
        margin-left: -20%;
        
    }

    b {
        color: white;
        font-size: 24px;
        
    }
    .column{
        margin-left: 35%;
        margin-top: -4%;
    }

    img{
        margin-top: 10%;
        transition: 1.5s;
        opacity: 50%;
        animation-name: floating;
        animation-duration: 3s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
    }

    img:hover{
        transition: 0.6s;
        opacity: 100%;
    }
    img.click {
        transition: 1s;
        animation: floating2;
        animation-duration: 0.5s;
        
    }

        .shop-container {
        position:relative;
        background: rgba(0, 0, 0, 0.377);
        color: white;
        width: 500px;
        overflow-y: scroll;
        height: 577.5px;
        top: 61px;
        left: 124px;
        
        
        
    }

        .shop-container::before {
            position: absolute;
            content: "X";
            top: 0;
            left: 0;
            padding: 15px 30px;
            transform: translateX(-100%);
            z-index: 1000;
            
        }

        h2{
            text-align: center;
            font-size: 24px;
            font-weight: bold;
            background: #111;
        }

        .pad {
            padding: 15px 30px;
        }

        .store-list {
            display: flex;
            flex-direction: column;
            overflow-y:auto;
        }

        .message-body {
            font-size: 18px;
        }
        .message {
            margin-left: -11%;
            width: 25%;
            height: 200px;
            transition: 1.5s;
            opacity: 30%;
        }

        .message:hover {
            transform: scale(1.1);
            margin-left: 0.01%;
            margin-top: 1%;
            opacity: 100%;
        }

        @keyframes floating {
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(0, 15px); }
    100%   { transform: translate(0, -0px); }   
}

@keyframes floating2 {
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(0, 10px); }
    100%   { transform: translate(0, -0px); }   
}


</style>
