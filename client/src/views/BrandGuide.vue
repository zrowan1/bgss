<script setup>

    import widget from '@/components/widget.vue'
    import widgetHeader from '@/components/widgetHeader.vue'
    import widgetConfig from '@/components/widgetConfig.vue'
    import { createApp, ref } from 'vue'
    import router from '@/router'

    //const widgetBgColor = ref('blue')
    let naam = 4
    const isopen = ref(false)
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
    function addWidget() {
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

    function addWidgetHeader() {
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

<template id="test">

  <div class="body">
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
    <button @click="isopen = true"> Open popup</button>

    <button @click="addWidget()">Add Widget</button>
    <button @click="addWidgetHeader()">Add Header Widget</button>

    <widgetConfig v-model:text="text" v-model:color="color" :open="isopen" @close="isopen = !isopen">
      <h1>
        dit is een popup
      </h1>
    </widgetConfig>
  </div>
</template> 

<style scoped>
  .body { 
    width: 1140px;
    margin: 10px auto;
  }
</style>