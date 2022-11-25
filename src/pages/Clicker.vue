<template>
    <div class="columns">
        <div class="column is-one-third has-text-centered">
            <button class="button2" style="width: 40%; height: 8%;">{{stones}} STONES</button><br>
            <button class="button2" style="width: 40%; height: 8%;">{{sps}} STONES PER SECOND</button>  
            <br>
            <br>
            <img @click="stoneClick()" :class="{'click': clickClass}" src="https://www.animatedimages.org/data/media/1096/animated-click-here-sign-and-button-image-0042.gif">   
        </div>
        <div class="column" style="width: 100%;">
            <button class="button1" style="width: 30%; height: 15%;">SPS SHOP!</button>
            <br> 
            <br> 
            <button @click="upgrade(0.1, 10)" class="button is-dark" :disabled="stones<10" style="width: 30%; height: 10%;">Buy 0.1 sps for 10 stones</button>        
            <br> 
            <br> 
            <button @click="upgrade(1, 100)" class="button is-dark" :disabled="stones<100" style="width: 30%; height: 10%;">Buy 1 sps for 100 stones</button> 
            <br>
            <br>
            <button @click="upgrade(10, 1000)" class="button is-dark" :disabled="stones<1000" style="width: 30%; height: 10%;">Buy 10 sps for 1000 stones</button> 
            <br>   
            <br>  
            <button @click="upgrade(100, 10000)" class="button is-dark" :disabled="stones<10000" style="width: 30%; height: 10%;">Buy 100 sps for 10000 stones</button> 
            <br>
            <br>
            <button @click="upgrade(1000, 100000)" class="button is-dark" :disabled="stones<100000" style="width: 30%; height: 10%;">Buy 1000 sps for 100000 stones</button>
            <br>
            <br>
            <button @click="upgrade(1000, 100000)" class="button is-dark" :disabled="stones<1000000" style="width: 30%; height: 10%;">Buy 10000 sps for 1000000 stones</button>
            <br>
            <br>
            <br>
            <button @click="upgrade2(0, 0)" class="button is-dark" :disabled="stones<1" style="width: 30%; height: 10%;">GO BACK TO START</button>       
        </div>
    </div>

  
</template> 

<script>
export default {
    created(){
        setInterval(()=>{
            this.stones += this.sps;
            this.stones = parseFloat(this.stones.toFixed(1));
        }, 1000);
    },
    data(){
        return {
            clickClass: false,
            stones: 0,
            sps: 0
        }
    },
    computed: {
        displaystones(){
            return parseFloat(this.stones.toFixed(1));
        },
        displaysps(){
            return parseFloat(this.sps.toFixed(1));
        },
    },
    methods: {
        stoneClick(){
            this.stones++;
            this.clickClass = true;
            setTimeout(()=> {
                this.clickClass = false;
            }, 100);
        },
        upgrade(sps, cost){
            if(this.stones >= cost){
                this.stones -= cost;
                this.sps += sps;
            }
        },
        upgrade2(sps, cost){
            if(this.stones >= cost){         
            let confirmAction = confirm("Are you sure?");
                if (confirmAction) {
                alert("Restarted!");
                this.sps = 0;
                this.stones = 0;
                } else {
                alert("Keep going!");
                }
            }
        },
    }
}
</script>

<style scoped>
img.click {
    transform: scale(0.9);
}
.button {
    border-radius : 25px;
    background-color: rgba(83, 6, 6, 0.699);    
}
.button1 {
    font-size : 40px;
    background-color: rgba(83, 6, 6, 0.699);
    color: white;
    border-radius : 100px;
}
.button2 {
    border-radius : 10px;
    background-color: rgba(148, 56, 56, 0.699);
    height : 30px;
    color: white;
}   
</style>
