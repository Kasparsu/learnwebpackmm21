<template>
    <img-modal v-if="active" @close="active=false" src="https://placekitten.com/800/600"></img-modal>
    <button class="button is-primary" @click="active=true">Open Modal</button>
    <img-modal v-if="active2" @close="active2=false" src="https://placebear.com/800/600"></img-modal>
    <button class="button is-primary" @click="active2=true">Open Modal2</button>
    <modal v-if="active3" @close="active3=false">
        <h1>afafaf</h1>
    </modal>
    <button class="button is-primary" @click="active3=true">Open Modal3</button>
</template>

<script>
import ImgModal from '../components/ImgModal.vue'
import Modal from '../components/Modal.vue'
export default {
  components: { Modal, ImgModal },
    data(){
        return {
            active: false,
            active2: false,
            active3: false
        }
    }
}
</script>

<style>

</style>