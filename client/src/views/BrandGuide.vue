<script setup>

    import widget from '@/components/widget.vue'
    import widgetHeader from '@/components/widgetHeader.vue'
    import widgetConfig from '@/components/widgetConfig.vue'
    import { createApp, ref, onMounted } from 'vue'
    import router from '@/router'

    let naam = 4
    var isopen = ref()
    const CtextContent = ref('')
    const CtextColor = ref('')
    const CbgColor = ref('')
    const CtextFont = ref('')
    const CtextSize = ref('')
    const CmarginTop = ref('')
    const CmarginBottom = ref('')
    const CborderType = ref('')
    const CborderSize = ref('')
    const CborderColor = ref('')
    const CwidgetHeight = ref('')
    const CpropArray = ref(["bgColor", "textColor", "textContent", "textSize"])

    const widgets = ref([
        { id: 1, color: 'Red', text: 'widget1', type:0 },
        { id: 2, color: 'Blue', text: 'widget2', type:0 },
        { id: 3, color: 'Yellow', text: 'widget3', type:0 }
    ])

    function goToCms() {
        router.push({ name: 'Cms' })
    }

    function openConfig(propArray) {
        CpropArray.value = propArray
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
            color: CbgColor.value,
            text: CtextContent.value,
            type: 0,
        };
        widgets.value.push(newWidget)
        console.log(widgets.value.length);
        naam++;
    }

    function addWidgetPressed() {
        const propList = ["bgColor", "textColor", "textContent", "textSize"];
        openConfig(propList);
        checkConfigInput(addWidgetCallback)
    }

    function addWidgetHeaderPressed() {
        const propList = ["bgColor", "textColor", "textContent"];
        openConfig(propList);
        checkConfigInput(addWidgetHeaderCallback)
    }

    

    function addWidgetHeaderCallback() {
        console.log("header added");
        const newWidget = {
            id: naam,
            color: CtextColor.value,
            text: CtextContent.value,
            background: CbgColor.value,
            type: 1,
        };
        widgets.value.push(newWidget)
        console.log(widgets.value.length);
        naam++;
    }



</script>

<template>

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
                    :text="widget.text"
                    :background="widget.background">

      </widgetHeader>
    </template>
    <div class="widgetAdder">
      <div class="widgetAdder-content">
        <h2>Add Widget</h2>
        <!--<select style="width:100px;">
          <option>Tekst</option>
          <option>Header</option>
          <option>Image</option>
        </select>-->
      
        <div>

          <button @click="addWidgetPressed()">Add Widget</button>
          <button @click="addWidgetHeaderPressed()">Add Header Widget</button>
        </div>
      </div>
    </div>

    <widgetConfig 
                  v-model:textContent="CtextContent" 
                  v-model:textColor="CtextColor" 
                  v-model:bgColor="CbgColor"
                  v-model:textFont="CtextFont"
                  v-model:textSize="CtextSize"
                  v-model:marginTop="CmarginTop"
                  v-model:marginBottom="CmarginBottom"
                  v-model:borderType="CborderType"
                  v-model:borderSize="CborderSize"
                  v-model:borderColor="CborderColor"
                  v-model:widgetHeight="CwidgetHeight"
                  :open="isopen"
                  :propArray="CpropArray"
                  @close="isopen = !isopen"/>
  </div>
</template> 

<style scoped>
  .body { 
    width: 1140px;
    margin: 10px auto;
  }

  .widgetAdder {
    border: solid;
    border-color: black;
    margin: 4px;
  }

  .widgetAdder-content {
    padding: 5px;
    text-align: center;
  }
</style>