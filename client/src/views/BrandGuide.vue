<script setup>

    import widget from '@/components/widget.vue'
    import widgetHeader from '@/components/widgetHeader.vue'
    import widgetConfig from '@/components/widgetConfig.vue'
    import widgetColorPalette from '@/components/widgetColorPalette.vue'
    import { createApp, ref, onMounted } from 'vue'
    import router from '@/router'

    let naam = 4
    var isopen = ref()
    var waitForInput = ref()
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
    const CpaletteColors = ref([''])
    const CpropArray = ref(["bgColor", "textColor", "textContent", "textSize"])

    const widgets = ref([])

    /*{ id: 1, color: 'Red', text: 'widget1', type:0 },
        { id: 2, color: 'Blue', text: 'widget2', type:0 },
        { id: 3, color: 'Yellow', text: 'widget3', type:0 }*/

    function goToCms() {
        router.push({ name: 'Cms' })
    }

    function openConfig(propArray) {
        CpropArray.value = propArray
        isopen.value = true
    }
    function cancelWidgetAdd() {
        waitForInput.value = false
        isopen.value = false
    }
    function checkConfigInput(callback) {
        if (waitForInput.value === true && isopen.value === true) {
            setTimeout(checkConfigInput, 50, callback);
            return
        }
        else if (waitForInput.value === false && isopen.value === false) {
            return
        }
        isopen.value = false
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
        waitForInput.value = true
        checkConfigInput(addWidgetCallback)
    }

    function addWidgetHeaderPressed() {
        const propList = ["bgColor", "textColor", "textContent"];
        openConfig(propList);
        waitForInput.value = true
        checkConfigInput(addWidgetHeaderCallback)
    }

    

    function addWidgetHeaderCallback() {
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

    function addWidgetColorPalettePressed() {
        const propList = ["paletteColors"];
        openConfig(propList);
        waitForInput.value = true
        checkConfigInput(addWidgetColorPaletteCallback)
    }   



    function addWidgetColorPaletteCallback() {
        const colorArray = [...CpaletteColors.value]
        const newWidget = {
            id: naam,
            colors: colorArray,
            type: 2,
        };
        CpaletteColors.value = [];
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
            <widgetColorPalette v-else-if="widget.type === 2"
                                :colors="widget.colors">

            </widgetColorPalette>
        </template>
        <div class="widgetAdder">
            <div class="widgetAdder-content">
                <h2>Add Widget</h2>
                <!--<select style="width:100px;">
                  <option>Tekst</option>
                  <option>Header</option>
                  <option>Image</option>
                </select>-->

                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false">
                        Add Widget
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" @click="addWidgetPressed()">Text Widget</a></li>
                        <li><a class="dropdown-item" @click="addWidgetHeaderPressed()">Header Widget</a></li>
                        <li><a class="dropdown-item" @click="addWidgetColorPalettePressed()">Color Palette Widget</a></li>
                    </ul>
                </div>



            </div>
        </div>

        

        <widgetConfig v-model:textContent="CtextContent"
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
                      v-model:paletteColors ="CpaletteColors"
                      :open="isopen"
                      :propArray="CpropArray"
                      @cancel="cancelWidgetAdd"
                      @addWidget="waitForInput = !waitForInput"/>
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

  .dropdown-item {
      cursor: pointer;
  }
</style>