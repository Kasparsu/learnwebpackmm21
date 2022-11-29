<template>
    <h2 id="inf">refreshi lehte</h2>
    <div id = "space"></div>
        <div class="columns">
            <div class="column is-half has-text-centered">
                <h1><b>Click to support Ukraine</b></h1>
                <b>{{clicks}} clicks</b>  
                <br>
                <b>{{cps}} clicks per second</b>  
                <img @click="clickClick()" :class="{'click': clickClass}" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/800px-Flag_of_Ukraine.svg.png">   
            </div>
            <div class="column1">
                <button onclick="changeImage()" @click="upgrade(0.1, 10)" class="button is-white" :disabled="clicks<10" >Buy 0.1 cps for 10 clicks</button>     
                <br>
                <br>
                <button @click="upgrade(1, 100)" class="button is-white" :disabled="clicks<100">Buy 1 cps for 100 clicks</button> 
                <br>
                <br>
                <button @click="upgrade(10, 1000)" class="button is-white" :disabled="clicks<1000">Buy 10 cps for 1000 clicks</button>
                <br>  
                <br>    
                <button @click="upgrade(100, 10000)" class="button is-white" :disabled="clicks<10000">Buy 100 cps for 10000 clicks</button> 
                <br>
                <br>
                <button @click="upgrade(1000, 100000)" class="button is-white" :disabled="clicks<100000">Buy 1000 cps for 100000 clicks</button> 
                <br>
                <br>
                <button @click="upgrade(10000, 1000000)" class="button is-white" :disabled="clicks<1000000">osta rakett</button>
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
            upgrade(cps, cost){
                if(this.clicks >= cost){
                    this.clicks -= cost;
                    this.cps += cps;
                }
            }
        }
    }
    window.onload = function () {
            var name = prompt("Mis su nimi on");
            
            var space = document.getElementById("space");
            
            space.innerHTML = name + " klikib selleks, et toetada Ukrainat";
    }
    </script>
    
    <style scoped>
        .button {
            color: rgb(255, 0, 0);
            background-color: rgb(19, 102, 23);
        }
        .column1 {
            position: absolute;
            left: 90%;
            top: 250px;
            scale: 150%;
        }
        img.click {
            transform: scale(0.9);
            transition: 0.5s;
        }
        #inf{
            position: absolute;
            top: 100%;
            left: 20%;
        }
        #space {
        position: absolute;
        left: 10%;
        top: 105%;
        text-align:center;
        font-size: 30px;
        border:5px solid;
        border-radius:10px;
        background-color: rgb(31, 51, 1);
        color: white;
        width:389px;
        height:150px;
    }
    </style>
