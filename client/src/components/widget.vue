<template>
    <div :style="{'background-color': bgColor}">
        <h6>{{ text }}</h6>
        <!--<button @click="$emit('remove-click', index)">Remove</button>-->
    </div>

</template>

<script setup>
    import { defineProps } from 'vue'

    const props = defineProps(['bgColor', 'text'])
</script>

<style>
    div {
        background-color: white;
        color: white;
        margin: 4px;
        width: 100.69px
    }
</style>