<template>
    <div class="widget-outer" @mouseover="hover=true" @mouseleave="hover=false">
        <div class="widget-inner imagePreviewWrapper" :style="{ 'background-image': `url(${previewImage})` }">
>

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
    const configProps = defineProps(['fileInput', 'id'])
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

    .imagePreviewWrapper {
        width: 250px;
        height: 250px;
        display: block;
        cursor: pointer;
        margin: 0 auto 30px;
        background-size: cover;
        background-position: center center;
    }
</style>