<script setup>

    import widget from '@/components/widget.vue'
    import widgetHeader from '@/components/widgetHeader.vue'
    import widgetConfig from '@/components/widgetConfig.vue'
    import widgetColorPalette from '@/components/widgetColorPalette.vue'
    import { createApp, ref, onMounted } from 'vue'
    import router from '@/router'
    let editindex = -1
    let naam = 4
    let edit = false
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
    function removeWidget(plek) {
        widgets.value.splice(plek, 1)
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
        if (editindex >= 0) {
            edit = true
        }
        const newWidget = {
            id: naam,
            textContent: CtextContent.value,
            textColor: CtextColor.value,
            bgColor: CbgColor.value,
            textFont: CtextFont.value,
            fontSize: CtextSize.value,
            marginTop: CmarginTop.value,
            marginBottom: CmarginBottom.value,
            widgetHeight: CwidgetHeight.value,
            type: 0,
        };
        if (edit === false) {
            widgets.value.push(newWidget)
            console.log(widgets.value.length);
            naam++;
        }
        else {
            widgets.value.splice(editindex, 1)
            widgets.value.splice(editindex, 0, newWidget)
            edit = false
        }
    }

    function addWidgetPressed(index) {
        editindex = index
        const propList = ["textContent", "textColor", "bgColor", "textFont", "fontSize", "marginTop", "marginBottom", "widgetHeight"];
        openConfig(propList);
        waitForInput.value = true
        checkConfigInput(addWidgetCallback)
    }

    function addWidgetHeaderPressed(index) {
        editindex = index
        const propList = ["textContent", "textColor", "bgColor", "textFont", "fontSize", "marginTop", "marginBottom", "widgetHeight"];
        openConfig(propList);
        waitForInput.value = true
        checkConfigInput(addWidgetHeaderCallback)
    }

    

    function addWidgetHeaderCallback() {
        if (editindex >= 0) {
            edit = true
        }
        const newWidget = {
            id: naam,
            textContent: CtextContent.value,
            textColor: CtextColor.value,
            bgColor: CbgColor.value,
            textFont: CtextFont.value,
            fontSize: CtextSize.value,
            marginTop: CmarginTop.value,
            marginBottom: CmarginBottom.value,
            widgetHeight: CwidgetHeight.value,
            type: 1,
        };
        if (edit === false) {
            widgets.value.push(newWidget)
            console.log(widgets.value.length);
            naam++;
        }
        else {
            widgets.value.splice(editindex, 1)
            widgets.value.splice(editindex, 0, newWidget)
            edit = false
        }
    }

    function addWidgetColorPalettePressed(index) {
        editindex = index
        const propList = ["paletteColors", "bgColor", "marginTop", "marginBottom", "widgetHeight"];
        openConfig(propList);
        waitForInput.value = true
        checkConfigInput(addWidgetColorPaletteCallback)
    }   



    function addWidgetColorPaletteCallback() {
        if (editindex >= 0) {
            edit = true
        }
        const colorArray = [...CpaletteColors.value]
        const newWidget = {
            id: naam,
            colors: colorArray,
            bgColor: CbgColor.value,
            marginTop: CmarginTop.value,
            marginBottom: CmarginBottom.value,
            widgetHeight: CwidgetHeight.value,
            type: 2,
        };
        if (edit === false) {
            widgets.value.push(newWidget)
            console.log(widgets.value.length);
            naam++;
        }
        else {
            widgets.value.splice(editindex, 1)
            widgets.value.splice(editindex, 0, newWidget)
            edit = false
        }
    }




</script>

<template>


    <div class="body">
        <div>
            <button @click="goToCms()"> Ga Terug</button>
        </div>
        <template v-for="(widget,index) in widgets"
                  :key="widget.id">
            <widget v-if="widget.type === 0"
                    :textContent="widget.textContent"
                    :textColor="widget.textColor"
                    :bgColor="widget.bgColor"
                    :textFont="widget.textFont"
                    :fontSize="widget.fontSize"
                    :marginTop="widget.marginTop"
                    :marginBottom="widget.marginBottom"
                    :widgetHeight="widget.widgetHeight"
                    :id="index"
                    v-on:remove-click="(n) => removeWidget(n)"
	                v-on:editwidget="(n) => addWidgetPressed(index)"
                    >
            </widget>
            <widgetHeader v-else-if="widget.type === 1"
                          :textContent="widget.textContent"
                          :textColor="widget.textColor"
                          :bgColor="widget.bgColor"
                          :textFont="widget.textFont"
                          :fontSize="widget.fontSize"
                          :marginTop="widget.marginTop"
                          :marginBottom="widget.marginBottom"
                          :widgetHeight="widget.widgetHeight"
                          :id="index"
                          v-on:remove-click="(n) => removeWidget(n)"
	                      v-on:editwidgetHeader="(n) => addWidgetHeaderPressed(index)">

                          

            </widgetHeader>
            <widgetColorPalette v-else-if="widget.type === 2"
                                :colors="widget.colors"
                                :bgColor="widget.bgColor"
                                :marginTop="widget.marginTop"
                                :marginBottom="widget.marginBottom"
                                :widgetHeight="widget.widgetHeight"
                                :id="index"
                                 v-on:remove-click="(n) => removeWidget(n)"
	                             v-on:editwidgetcolorPalette="(n) => addWidgetColorPalettePressed(index)">
                                >

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