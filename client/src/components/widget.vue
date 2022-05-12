<template>
    <div class="widget-outer" :style="{'background-color': bgColor, 'padding-top': marginTop, 'padding-bottom': marginBottom, 'height': widgetHeight}" @mouseover="hover=true" @mouseleave="hover=false">
        <div class="widget-inner">
            <p :style="{'background-color': bgColor, 'color': textColor, 'font-family': textFont, 'font-size': fontSize}">{{textContent}}</p>
        </div>
        <div v-if="hover" class="configButtons">
            <button @click="$emit('remove-click', id)">-</button>
            <button @click="$emit('editwidget')">#</button>
        </div>
    </div>

</template>

<script setup>
    import { defineProps } from 'vue'
    import { ref } from 'vue'
    const configProps = defineProps(['textContent', 'textColor', 'bgColor', 'textFont', 'fontSize', 'marginTop', 'marginBottom', 'borderType', 'borderSize', 'borderColor', 'widgetHeight', 'id'])
    const hover = ref(false)



</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Koulen&display=swap');

    .widget-inner {
        text-align: center;
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

    p {
        margin: 0px;
    }
</style>