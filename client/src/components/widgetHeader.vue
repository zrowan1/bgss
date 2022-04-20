<template>
    <div class="widgetDiv">
        <h1 :style="{'color': color}">
            {{text}}
        </h1>
    </div>

</template>

<script setup>
    import { defineProps } from 'vue'

    const props = defineProps(['color', 'text'])


</script>

<style scoped>
    .widgetDiv {
        color: white;
        background: black;
        margin: 4px;
        width: 50%;
        height: 50px;
        border: solid;
        border-color: red;
    }

    h1 {
      margin: 0;
    }
</style>