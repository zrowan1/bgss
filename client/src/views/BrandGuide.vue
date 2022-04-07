<script setup>

    import widget from '@/components/widget.vue'
    import { ref } from 'vue'
    import router from '@/router'

    const widgetBgColor = ref('blue')
    const widgetText = ref(["1", "2", "3"]);
    let naam = 4

    function goToCms() {
        router.push({ name: 'Cms' })
    }
    function addWidget() {
        widgetText.value.push(naam.toString())
        naam++
    }

    function removeWidget(plek) {
        widgetText.value.splice(plek, 1)
    }

    function checkClick(i) {
        console.log(i)
    }
</script>

<template>
    <div>
        <button @click="goToCms()"> Ga Terug</button>
    </div>
    <widget v-for="(i, index) in widgetText"
            :key="index"
            @h1-click="(n) => checkClick(n)"
            @h6-click="(n) => checkClick(n)"
            @remove-click="(n) => removeWidget(n)"
            :bgColor="widgetBgColor"
            :text="widgetText[index]"
            :index="index">
        {{ i }} - {{ index }}
    </widget>
    <select v-model="widgetBgColor">
        <option value="red">Red</option>
        <option value="blue">Blue</option>
    </select>
    <button @click="addWidget()">Add Widget</button>
</template>