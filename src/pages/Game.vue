<template>
  <canvas 
    tabindex=0
    ref="canvas" 
    height="700" 
    width="1300" 
    @keydown="keyDown"
    @keyup="keyUp"></canvas>
</template>

<script>
export default {
    mounted(){
        this.ctx = this.$refs['canvas'].getContext('2d');
        setInterval(()=>{
            if(this.keysDown.a){
                this.x--;
            }
            if(this.keysDown.d){
                this.x++;
            }
            if(this.keysDown.s){
                this.y++;
            }
            if(this.keysDown.w){
                this.y--;
            }
            this.draw();
        },0);
    },
    data(){
        return {
            ctx: null,
            x: 95,
            y: 50,
            keysDown: {
                a: false,
                d: false,
                s: false,
                w: false
            }
        }
    },
    methods: {
        draw(){
            let clear = {
                x1: this.x-22<0 ? 0 : this.x-22,
                y1: this.y-22<0 ? 0 : this.y-22,
            }
            this.ctx.clearRect(clear.x1, clear.y1, 44, 44);
            this.ctx.beginPath();
            this.ctx.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            this.ctx.fillStyle = 'red';
            this.ctx.fill();
        },
        keyDown(event){
            if(event.code == 'KeyD'){
                this.keysDown.d = true;
            }
            if(event.code == 'KeyA'){
                this.keysDown.a = true;
            }
            if(event.code == 'KeyS'){
                this.keysDown.s = true;
            }
            if(event.code == 'KeyW'){
                this.keysDown.w = true;
            }
        },
        keyUp(event){
            if(event.code == 'KeyD'){
                this.keysDown.d = false;
            }
            if(event.code == 'KeyA'){
                this.keysDown.a = false;
            }
            if(event.code == 'KeyS'){
                this.keysDown.s = false;
            }
            if(event.code == 'KeyW'){
                this.keysDown.w = false;
            }
        },
        
    }
}
</script>

<style scoped>
    canvas {
        border: 3px dashed black;
    }
</style>