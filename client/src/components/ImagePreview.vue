<template>
    <div>
        <div class="imagePreviewWrapper"
             :style="{ 'background-image': `url(${previewImage})` }">
        </div>

        <input ref="fileInput"
               type="file"
               @input="pickFile">
    </div>
</template>

<script setup>
    import { createApp, ref, onMounted, defineProps } from 'vue'

    const fileInput = ref(null)
    function pickFile() {
        let input = fileInput.value.file
    }
</script>

<style scoped>
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