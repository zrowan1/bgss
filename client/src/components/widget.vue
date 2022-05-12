<template>
    <div :style="{'background-color': color}">
        <h6>{{ text }}</h6>
        <button @click="$emit('remove-click', id)">Remove</button>
        <button @click="$emit('editwidget')">edit</button>
    </div>

</template>

<script setup>
    import { defineProps } from 'vue'
    import { defineExpose } from 'vue'

    const props = defineProps(['color', 'text','id'])
    




</script>

<style scoped>
    div {
        background-color: white;
        color: white;
        margin: 4px;
        height: 100px;
        border: solid;
        border-color: black;
    }



    h6 {
      font-size: large;
      padding: 5px;
      margin: 0;
    }
</style>