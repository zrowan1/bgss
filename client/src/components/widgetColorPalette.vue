<template>
    <div class="widget-outer" :style="{'background-color': bgColor, 'padding-top': marginTop, 'padding-bottom': marginBottom, 'height': widgetHeight}" @mouseover="hover=true" @mouseleave="hover=false">
        <div class="widget-inner" :style="{'background-color': bgColor}">
            <div v-for="color in colors" :key="color" :style="{'background-color': color}"/>
        </div>
        <div v-if="hover" class="configButtons">
            <button @click="$emit('remove-click', id)">-</button>
            <button @click="$emit('editwidgetHeader')">#</button>
        </div>
    </div>
    

</template>

<script setup>
    import { defineProps } from 'vue'
    import { ref } from 'vue'

    const props = defineProps(['colors', 'bgColor', 'marginTop', 'marginBottom', 'widgetHeight','id'])
    const hover = ref(false)





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
        justify-content: center;
        position: relative;

    }
    .configButtons {
        display: flex;
        position: absolute;
        top: 0;
        right: 0;
    }

   
</style>