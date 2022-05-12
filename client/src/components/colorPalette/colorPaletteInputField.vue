<template>
    <div>
        <input :value="paletteColor"
               @input="$emit('update:paletteColor', $event.target.value)" />
    </div>

</template>

<script setup>
    import { defineProps } from 'vue'
    import { defineEmits } from 'vue'
    

    const props = defineProps(['paletteColor'])
    const emits = defineEmits(['update:paletteColor'])
    




</script>

<style scoped>
    
</style>