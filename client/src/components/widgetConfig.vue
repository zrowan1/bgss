<template>
    <div>
        <div>
            <h3>Header</h3>
            <input 
                   placeholder="edit me"
                   :value="Text"
                   @input="$emit('update:Text', $event.target.value)"/>
        </div>
        <div>
            <h3>Header color</h3>
            <input placeholder="edit me" />
        </div>
        <!--<div>
            <h3>Text</h3>
            <textarea v-model="Paragraph" placeholder="add multiple lines"></textarea>
        </div>-->
        <div>
            <h1 :style="{'color': Color}">{{ Text }}</h1>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import { defineProps } from 'vue'
    import {defineEmits} from 'vue'

    const props = defineProps(['Color', 'Text'])
    const emits = defineEmits(['update:Text'])


</script>


<style scoped>
    div {
        background: turquoise;
        color: black;
        width: 200px;
        margin: 0;
        padding: 2px;
    }

    .configDiv input {
        width: 90%;
        margin: 0;
        padding: 0;
    }

    textarea {
        width: 90%;
        height: 200px;
    }

    .test {
    }
</style>