<template>
    <modal @close="$emit('close')">
        <p class="image is-4by3">
            <img :src="src" alt="">
        </p>
    </modal>
</template>

<script>
import Modal from './Modal.vue'
export default {
  components: { Modal },
    props: ['src']
}
</script>

<style>

</style>