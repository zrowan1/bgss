<script setup>
    import { useRouter } from 'vue-router'
    import { onUnmounted, ref } from 'vue'
    import router from '@/router'
    import BrandGuide from '@/views/BrandGuide.vue'
    
    
</script>

<script>

    function goToBrand() {
        router.push({ name: 'BrandGuide' })
    }
    
</script>


<template>
<router-view />
    <h1> Hier komt de CMS </h1>
    <div>
    </div>
    <div>
        <button @click="goToBrand()"> Ga naar Brand Guide </button>
    </div>
</template>