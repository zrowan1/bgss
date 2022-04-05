<template>
    <div :style="{'background-color': bgColor}">
        <h1 @click="$emit('h1-click', text)">
            <slot />
        </h1>
        <h6 @click="$emit('h6-click', 'Ik ben de H6')">{{ text }}</h6>
    </div>
</template>

<script setup>
    import { defineProps } from 'vue'

    const props = defineProps(['bgColor', 'text'])
</script>

<style>
div {
    background-color: black;
    color: white;
    margin: 4px;
    width: 100.69px
}
</style>