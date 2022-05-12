<template>
    <div class="widget-outer" :style="{'background-color': bgColor, 'padding-top': marginTop, 'padding-bottom': marginBottom, 'height': widgetHeight}">
        <div class="widget-inner" :style="{'background-color': bgColor}">
            <div v-for="color in colors" :key="color" :style="{'background-color': color}"/>
        </div>
    </div>
    

</template>

<script setup>
    import { defineProps } from 'vue'

    const props = defineProps(['colors', 'bgColor', 'marginTop', 'marginBottom', 'widgetHeight'])
    




</script>

<style scoped>
    
    .widget-inner {
        display: flex;
        flex-wrap: nowrap;
        height: 100%;
    }

    .widget-inner > div {
        width: 100px;
        margin: 0px;
        height:100%;
    }
    .widget-outer {
        display: flex;
        align-items: center;
        justify-content: center
    }

   
</style>