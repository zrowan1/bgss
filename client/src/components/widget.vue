<template>
    <div class="widget-outer" :style="{'background-color': bgColor, 'padding-top': marginTop, 'padding-bottom': marginBottom, 'height': widgetHeight}">
        <div class="widget-inner">
            <p :style="{'background-color': bgColor, 'color': textColor, 'font-family': textFont, 'font-size': fontSize}">{{textContent}}</p>
        </div>
    </div>

</template>

<script setup>
    import { defineProps } from 'vue'

    const configProps = defineProps(['textContent', 'textColor', 'bgColor', 'textFont', 'fontSize', 'marginTop', 'marginBottom', 'borderType', 'borderSize', 'borderColor', 'widgetHeight'])

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
    }


    p {
        margin: 0px;
    }
</style>