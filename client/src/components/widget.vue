<template>
    <div :style="{'background-color': color}">
        <h6>{{ text }}</h6>
    </div>

</template>

<script setup>
    import { defineProps } from 'vue'

    const props = defineProps(['color', 'text'])
</script>

<style scoped>
    div {
        background-color: white;
        color: white;
        margin: 4px;
        width: 100.69px
    }
</style>