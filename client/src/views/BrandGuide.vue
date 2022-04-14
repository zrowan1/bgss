<script setup>

    import widget from '@/components/widget.vue'
    import { ref } from 'vue'
    import router from '@/router'
    import popup from '@/components/popup.vue'
 
    const widgetBgColor = 'blue'
    const widgetText = ref(["1", "2", "3"]);
    const isopen = ref(false)

    let naam = 4

    const widgets = ref([
        { id: 1, bgColor: 'Red', text: 'widget1' },
        { id: 2, bgColor: 'Blue', text: 'widget2' },
        { id: 3, bgColor: 'Yellow', text: 'widget3' }
    ])

    function goToCms() {
        router.push({ name: 'Cms' })
    }
    function addWidget() {
        var color = document.getElementById("input1").value;
        const newWidget = {
            id: naam,
            bgColor: color,
            text: 'widget' + naam,
        };
        widgets.value.push(newWidget)
        console.log(widgets.value.length);
        naam++;
    }

    /*function removeWidget(plek) {
        widgetText.value.splice(plek, 1)
    }*/

    function checkClick(i) {
        console.log(i)
    }
</script>

<template>


    <div>
        <button @click="goToCms()"> Ga Terug</button>
    </div>
    <widget v-for="widget in widgets"
            :key="widget.id"
            :bgColor="widget.bgColor"
            :text="widget.text">
    </widget>
   
    <input id="input1" />
    <button @click="addWidget()">Add Widget</button>
    <button @click="isopen = true"> Open popup</button>

    <popup :open="isopen" @close="isopen = !isopen">
        <h1>
            dit is een popup
        </h1>
    </popup>
</template>
<style scoped>
    h1 {
        color: green;
       }
</style>