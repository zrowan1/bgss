<template>
    <div class="colorContainer">
        <div  v-for="color in colors" :key="color" :style="{'background-color': color  }">

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
    .colorContainer {
        display: flex;
        flex-wrap: nowrap;
    }

    .colorContainer > div {
        width: 100px;
        height:500px;
        border: none;
        margin: 0px;
    }


    h6 {
      font-size: large;
      padding: 5px;
      margin: 0;
    }
</style>