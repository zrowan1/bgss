<script setup>

    import widget from '@/components/widget.vue'
    import widgetHeader from '@/components/widgetHeader.vue'
    import widgetConfig from '@/components/widgetConfig.vue'
    import { createApp, ref, onMounted } from 'vue'
    import router from '@/router'

    const widgetBgColor = ref('blue')
    let naam = 4
    var isopen = ref()
    const text = ref('')
    const color = ref('')

    


    const widgets = ref([
        { id: 1, color: 'Red', text: 'widget1', type:0 },
        { id: 2, color: 'Blue', text: 'widget2', type:0 },
        { id: 3, color: 'Yellow', text: 'widget3', type:0 }
    ])



    




    function goToCms() {
        router.push({ name: 'Cms' })
    }

    function openConfig() {
        isopen.value = true

        

        



    }
    function checkConfigInput(callback) {
        if (isopen.value === true) {
            setTimeout(checkConfigInput, 50, callback);
            console.log("waiting")
            return
        }
        //waitForInput_Cache = isopen.value;
        console.log("done waiting")
        callback();
    }


    

    function addWidgetCallback() {
        console.log("widget added");
        const newWidget = {
            id: naam,
            color: color.value,
            text: text.value,
            type: 0,
        };
        widgets.value.push(newWidget)
        console.log(widgets.value.length);
        naam++;
    }

    function addWidgetPressed() {
        openConfig();
        checkConfigInput(addWidgetCallback)
    }

    function addWidgetHeaderPressed() {
        openConfig();
        checkConfigInput(addWidgetHeaderCallback)
    }

    

    function addWidgetHeaderCallback() {
        console.log("header added");
        const newWidget = {
            id: naam,
            color: color.value,
            text: text.value,
            type: 1,
        };
        widgets.value.push(newWidget)
        console.log(widgets.value.length);
        naam++;

    }



</script>

<template>


    <div>
        <button @click="goToCms()"> Ga Terug</button>
    </div>
    <template v-for="widget in widgets"
              :key="widget.id">
        <widget v-if="widget.type === 0"
                :color="widget.color"
                :text="widget.text">
        </widget>
        <widgetHeader v-else-if="widget.type === 1"
                      :color="widget.color"
                      :text="widget.text">

        </widgetHeader>
    </template>
    <button @click="openConfig()"> Open popup</button>

    <button @click="addWidgetPressed()">Add Widget</button>
    <button @click="addWidgetHeaderPressed()">Add Header Widget</button>

    <widgetConfig v-model:text="text" v-model:color="color" :open="isopen" @close="isopen = !isopen">
        <h1>
            dit is een popup
        </h1>
    </widgetConfig>
</template>