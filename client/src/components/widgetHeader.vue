<template>
    <div class="widget-outer" :style="{'background-color': bgColor, 'padding-top': marginTop, 'padding-bottom': marginBottom, 'height': widgetHeight}" @mouseover="hover=true" @mouseleave="hover=false">
        <div class="widget-inner">
            <h1 :style="{'background-color': bgColor, 'color': textColor, 'font-family': textFont, 'font-size': fontSize}">{{textContent}}</h1>
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

    const configProps = defineProps(['textContent', 'textColor', 'bgColor', 'textFont', 'fontSize', 'marginTop', 'marginBottom', 'borderType', 'borderSize', 'borderColor', 'widgetHeight','id'])
    const hover = ref(false)

</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Koulen&display=swap');
    .widget-inner {
        display: flex;
        text-align: center;
        margin: auto;
        
    }
    .widget-outer {
        display: flex;
        position: relative;
    }
    .configButtons {
        display: flex;
        position: absolute;
        top: 0;
        right: 0;
    }

    h1 {
      margin: 0px;
    }
</style>