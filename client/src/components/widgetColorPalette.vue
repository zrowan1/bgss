<template>
    <div>
        <div v-for="color in colors" :key="color">
        
            <div :style="{'width': '50px', 'height': '50px', 'background-color': color  }"/>
        </div>
    </div>

</template>

<script setup>
    import { defineProps } from 'vue'

    const props = defineProps(['colors'])
    




</script>

<style scoped>
    div {
        background-color: white;
        color: white;
        margin: 4px;
        border: solid;
        border-color: black;
    }



    h6 {
      font-size: large;
      padding: 5px;
      margin: 0;
    }
</style>