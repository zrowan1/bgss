<script setup>

    import widget from '@/components/widget.vue'
    import widgetHeader from '@/components/widgetHeader.vue'
    import widgetConfig from '@/components/widgetConfig.vue'
    import { ref } from 'vue'
    import router from '@/router'

    const widgetBgColor = ref('blue')
    let naam = 4
    const isopen = ref(false)
    const textHeader = ref('')

    const widgets = ref([
        { id: 1, bgColor: 'Red', text: 'widget1' },
        { id: 2, bgColor: 'Blue', text: 'widget2' },
        { id: 3, bgColor: 'Yellow', text: 'widget3' }
    ])

    function goToCms() {
        router.push({ name: 'Cms' })
    }
    function addWidget() {
        const newWidget = {
            id: naam,
            bgColor: widgetBgColor.value,
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

    /*var quill = new Quill('#editor', {
        modules: {
            toolbar: '#toolbar'
        }
    });

    var customButton = document.querySelector('#custom-button');
    customButton.addEventListener('click', function () {
        console.log('Clicked!');
    });*/

</script>


<template>

    <!--<div id="toolbar">
         Add buttons as you would before
        <button class="ql-bold"></button>
        <button class="ql-italic"></button>-->
    <!--But you can also add your own-->
    <!--<button id="custom-button"></button>
    </div>
    <div id="editor"></div>-->

    <div>
        <button @click="goToCms()"> Ga Terug</button>
    </div>
    <widget v-for="widget in widgets"
            :key="widget.id"
            :bgColor="widget.bgColor"
            :text="widget.text">
    </widget>
    <!--<select v-model="widgetBgColor">
        <option value="red">Red</option>
        <option value="blue">Blue</option>
    </select>-->
    <input v-model="widgetBgColor" />
    <button @click="addWidget()">Add Widget</button>
    <!--<widgetConfig v-model:Text="textHeader" />-->
    <h1>{{textHeader}}</h1>
    <button @click="isopen = true"> Add widget</button>

    <widgetConfig v-model:Text="textHeader" :open="isopen" @close="isopen = !isopen">
        <h1>
            Vul hier je gegevens in
        </h1>
    </widgetConfig>
</template>