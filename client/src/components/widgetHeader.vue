<template>
    <div class="widgetDiv">
        <h1 :style="{'color': Color}">
            {{text}} Hi
        </h1>
    </div>

</template>

<script setup>
    import { defineProps } from 'vue'

    const props = defineProps(['Color', 'text'])


</script>

<style scoped>
    .widgetDiv {
        color: white;
        background: green;
        margin: 4px;
        width: 400px;
    }
</style>