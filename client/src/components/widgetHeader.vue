<template>
    <div class="widget-outer" :style="{'background-color': bgColor, 'padding-top': marginTop, 'padding-bottom': marginBottom, 'height': widgetHeight}">
        <div class="widget-inner">
            <h1 :style="{'background-color': bgColor, 'color': textColor, 'font-family': textFont, 'font-size': fontSize}">{{textContent}}</h1>
        </div>
    </div>

</template>

<script setup>
    import { defineProps } from 'vue'
    
    const configProps = defineProps(['textContent', 'textColor', 'bgColor', 'textFont', 'fontSize', 'marginTop', 'marginBottom', 'borderType', 'borderSize', 'borderColor', 'widgetHeight'])

</script>

<style scoped>

    .widget-inner {
        text-align: center;
        
    }
    .widget-outer {
        display: flex;
        align-items: center;
        justify-content: center;
    }


    h1 {
      margin: 0px;
    }
</style>