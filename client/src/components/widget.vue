<template>
    <div :style="{'background-color': color}">
        <h6>{{ text }}</h6>
    </div>

</template>

<script setup>
    import { defineProps } from 'vue'
    import { defineExpose } from 'vue'

    const props = defineProps(['color', 'text'])
    //const configProps = ["bgColor", "textColor", "text", "size"];




</script>

<style scoped>
    div {
        background-color: white;
        color: white;
        margin: 4px;
        width: 100.69px
    }
</style>