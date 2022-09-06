<template>
<div class="time">
    <current-time></current-time>
    <material-button>butt</material-button>
</div>

</template>

<script>
import CurrentTime from '../components/CurrentTime.vue';
import MaterialButton from '../components/MaterialButton.vue';


export default{
    components: {MaterialButton, CurrentTime},

}

</script>

<style scoped>
.time{
    max-width: fit-content;
    max-height: fit-content;
}
</style>