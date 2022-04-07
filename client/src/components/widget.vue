<template>
    <div :style="{'background-color': bgColor}">
        <h1 @click="$emit('h1-click', text)">
            <slot />
        </h1>
        <h6 @click="$emit('h6-click', index)">{{ text }}</h6>
        <button @click="$emit('remove-click', index)">Remove</button>
    </div>

</template>

<script setup>
    import { defineProps } from 'vue'

    const props = defineProps(['bgColor', 'text', 'index'])
</script>

<style>
    div {
        background-color: white;
        color: white;
        margin: 4px;
        width: 100.69px
    }
</style>