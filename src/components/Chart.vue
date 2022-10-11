<template>
  <canvas ref="myCanvas" width="600" height="300"></canvas> 
</template>

<script>
import Chart from 'chart.js/auto';
export default {
    props: ['data', 'labels'],
    mounted(){
        let canvas = this.$refs['myCanvas'];
        console.log(canvas);
        this.chart = new Chart(canvas, {
            type: 'line',
            data: {
                labels: this.labels,
                datasets: [{
                    label: '# of Votes',
                    data: this.data,
                }]
            }
        });
    },
    data(){
        return {
            chart: null
        }
    },
    watch: {
        data(newData, oldData){
            this.chart.data.datasets[0].data = this.data
            this.chart.update();
        }
    }
}
</script>

<style>

</style>