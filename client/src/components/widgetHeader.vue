<template>
    <div class="widgetDiv" :style="{'background': background}">
        <h1 :style="{'color': color}">
            {{text}}
        </h1>
    </div>

</template>

<script setup>
  import { defineProps } from 'vue'

    const configProps = defineProps(['color', 'text', 'background'])


</script>

<style scoped>
    .widgetDiv {
        color: white;
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