<template>
    <div class="columns is-multiline">
        <div v-for="character in characters" :key="character.id" class="column is-one-quarter">
            <character-card></character-card>
        </div>   
    </div>
</template>

<script>
import axios from 'axios';
import CharacterCard from '../components/CharacterCard.vue';
export default {
  components: { CharacterCard },
    created(){
        axios.get('https://rickandmortyapi.com/api/character').then(res => {
            console.log(res.data);
            this.info = res.data.info;
            this.characters = res.data.results;
        });
    },
    data(){
        return {
            info: {},
            characters: [] 
        }
    }
}
</script>

<style>

</style>