<template>
    <simple-pagination @prev="prev()" @next="next()" :info="info"></simple-pagination>
    <full-pagination :info="info" :current="currentPage" @goToPage="goToPage"></full-pagination>
     <div class="columns is-multiline">
        <div v-for="character in characters" :key="character.id" class="column is-one-quarter">
            <character-card :character="character"></character-card>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import CharacterCard from '../components/CharacterCard.vue';
    import SimplePagination from '../components/SimplePagination.vue';
    import FullPagination from '../components/FullPagination.vue';
    export default {
        components: { CharacterCard, SimplePagination, FullPagination },
        created(){
            axios.get('https://rickandmortyapi.com/api/character').then(res => {
                console.log(res.data);
                this.info = res.data.info
                this.characters = res.data.results
            });
        },
        data(){
            return {
                info: {},
                characters: [],
                currentPage: 1
            }
        },
        methods: {
            getPage(url){
                axios.get(url).then(res=> {
                    console.log(res.data);
                    this.info = res.data.info;
                    this.characters = res.data.results;
                });
            },
            prev(){
                this.currentPage--;
                this.getPage(this.info.prev);
            },
            next(){
                this.currentPage++;
                this.getPage(this.info.next);
            },
            goToPage(page){
                this.currentPage=page;
                this.getPage('https://rickandmortyapi.com/api/character?page='+ page);
            }
        }
    }
</script>

<style>

</style>