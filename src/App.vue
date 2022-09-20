<template>
    
    <input type="text" v-model="name">
    <button class="button" @click="items.push(name)">Add</button>
    <ul>
        <li v-for="(item,index) in items" :key="index">{{ item }}</li>
    </ul>
</template>

<script>
export default {
    data(){
        return {
            name: 'Kaspar Martin Suursalu',
            count: 0,
            items: ['piim', 'sai', 'viin', 'õlu']
        }
    }
}
</script>

<style>

</style>