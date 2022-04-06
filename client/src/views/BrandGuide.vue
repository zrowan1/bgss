<script setup>

    import widget from '@/components/widget.vue'
    import { ref } from 'vue'
    import router from '@/router'

    const widgetCount = ref(2)
    const widgetBgColor = ref('blue')

    function addWidget() {
        widgetCount.value++
    }

    function removeWidget() {
        widgetCount.value--
    }

    function checkClick(i) {
        console.log(i)
    }

    function goToCms() {
        router.push({ name: 'Cms'})
    }
</script>

<script>

</script>
<template id="app">

<div>
    <button @click="goToCms()"> Ga Terug</button>
</div>

    <widget
            v-for="(i, index) in widgetCount"
            :key="index"
            @h1-click="(n) => checkClick(n)"
            @h6-click="(n) => checkClick(n)"
            :bgColor="widgetBgColor"
            text="Super coole widget bru">
        {{ i }} - {{ index }}
    </widget>
    <select v-model="widgetBgColor">
        <option value="red">Red</option>
        <option value="blue">Blue</option>
    </select>
    <button @click="addWidget()">Add Widget</button>
    <button @click="removeWidget">Remove Widget</button>

</template>