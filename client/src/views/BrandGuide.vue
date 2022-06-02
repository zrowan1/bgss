<script setup>

    import widget from '@/components/widget.vue'
    import axios from 'axios'
    import widgetHeader from '@/components/widgetHeader.vue'
    import widgetConfig from '@/components/widgetConfig.vue'
    import widgetColorPalette from '@/components/widgetColorPalette.vue'
    import FilePreview from '@/components/ImagePreview';
    import { createApp, ref, onMounted, defineProps} from 'vue'
    import router from '@/router'
    let editindex = -1
    let naam = 0
    let edit = false
    const previewImage = ref()
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
    const fileInput = ref()



    const starbucksBg = [{ "id": 1, "textContent": "Starbucks", "textColor": "white", "bgColor": "#006241", "textFont": "Koulen", "fontSize": "70px", "marginTop": "30px", "marginBottom": "30px", "widgetHeight": "auto", "type": 1 },
        { "id": 2, "textContent": "As we evolve to meet beautifully diverse customers all over the world, our brand has evolved too. Here we introduce a fresh new design system that maintains the core elements of our brand while keeping our customers’ experience central to creative expression.  To achieve this, we’re thoughtfully incorporating beautiful, expressive moments with calm confidence in ways that are optimistic, joyful and recognizably Starbucks. By consistently utilizing the Siren logo, an expanded palette of greens rooted in our iconic green apron and a constrained family of harmonious typefaces, we bring purpose and cohesion to every interaction customers have with our brand.  From farmers, roasters and baristas to writers, designers and illustrators, we believe in the power of both coffee and art to connect people and communities. Our new creative expression marries the artful core of our brand with helping our customers where they are, on their terms.", "textColor": "black", "bgColor": "#d4e9e2", "textFont": "Koulen", "fontSize": "30px", "marginTop": "30px", "marginBottom": "30px", "widgetHeight": "auto", "type": 0 },
        { "id": 3, "textContent": "Colors", "textColor": "black", "bgColor": "#f2f0eb", "textFont": "Koulen", "fontSize": "60px", "marginTop": "60px", "marginBottom": "20px", "widgetHeight": "auto", "type": 1 },
        { "id": 4, "textContent": "Our green is iconic. Visible for blocks. It’s our most identifiable asset, from the color of our aprons to our logo.", "textColor": "black", "bgColor": "#f2f0eb", "textFont": "Koulen", "fontSize": "35px", "marginTop": "10px", "marginBottom": "20px", "widgetHeight": "auto", "type": 0 },
        { "id": 5, "textContent": "We’re leaning into a family of greens to leverage brand recognition. Fresh and inviting, this expanded palette nods subtly to our heritage and propels us into a global future. We always ensure a presence of brand greens, either within the composition or through the presence of a logo.", "textColor": "black", "bgColor": "#f2f0eb", "textFont": "Koulen", "fontSize": "25px", "marginTop": "2px", "marginBottom": "20px", "widgetHeight": "auto", "type": 0 },
        { "id": 6, "colors": ["#1e3932", "#006241", "#00754a", "#d4e9e2", "#ffffff", "#f9f9f9", "#f2f0eb", "#000000"], "bgColor": "#f2f0eb", "marginTop": "15px", "marginBottom": "20px", "widgetHeight": "400px", "type": 2 }]




    /*{ id: 1, color: 'Red', text: 'widget1', type:0 },
        { id: 2, color: 'Blue', text: 'widget2', type:0 },
        { id: 3, color: 'Yellow', text: 'widget3', type:0 }*/

    function goToCms() {
        router.push({ name: 'Cms' })
    }

    function loadStarbucksBg() {
        widgets.value = [...starbucksBg]
        naam = 7
    }

    function removeWidget(id) {
        let i = widgets.value.map(item => item.id).indexOf(id)
        console.log(i)
        widgets.value.splice(i, 1)
    }

    function openConfig(propArray) {
        CpropArray.value = propArray
        isopen.value = true
    }
    function cancelWidgetAdd() {
        waitForInput.value = false
        isopen.value = false
        edit = false
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
            naam++;
        }
        else {

            let i = widgets.value.map(item => item.id).indexOf(editindex)
            widgets.value.splice(i, 1)
            widgets.value.splice(i, 0, newWidget)
            naam++
            edit = false
        }
    }

    function fillConfig(id) {
        
        var oldWidget = getWidgetFromArray(id)
        CtextContent.value = oldWidget.textContent
        CtextColor.value = oldWidget.textColor
        CbgColor.value = oldWidget.bgColor
        CtextFont.value = oldWidget.textFont
        CtextSize.value = oldWidget.fontSize
        CmarginTop.value = oldWidget.marginTop
        CmarginBottom.value = oldWidget.marginBottom
        CborderType.value = oldWidget.borderType
        CborderSize.value = oldWidget.borderSize
        CborderColor.value = oldWidget.borderColor
        CwidgetHeight.value = oldWidget.widgetHeight
        //CpaletteColors.value = [...oldWidget.colors]
        
    }

    function addWidgetPressed(index) {
        editindex = index
        if (editindex >= 0) {
            edit = true
        }
        const propList = ["textContent", "textColor", "bgColor", "textFont", "fontSize", "marginTop", "marginBottom", "widgetHeight"];
        if (edit) {
            fillConfig(index)
        }
        openConfig(propList);
        waitForInput.value = true
        checkConfigInput(addWidgetCallback)
    }

    function addWidgetHeaderPressed(index) {
        editindex = index
        if (editindex >= 0) {
            edit = true
        }
        const propList = ["textContent", "textColor", "bgColor", "textFont", "fontSize", "marginTop", "marginBottom", "widgetHeight"];
        if (edit) {
            fillConfig(index)
        }
        openConfig(propList);
        waitForInput.value = true
        checkConfigInput(addWidgetHeaderCallback)
    }

    

    function addWidgetHeaderCallback() {
        
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
        if (!edit) {
            widgets.value.push(newWidget)
            console.log(widgets.value.length);
            naam++;
        }
        else {

            let i = widgets.value.map(item => item.id).indexOf(editindex)
            widgets.value.splice(i, 1)
            widgets.value.splice(i, 0, newWidget)
            naam++
            edit = false
        }
    }

    function addWidgetColorPalettePressed(index) {
        editindex = index
        if (editindex >= 0) {
            edit = true
        }
        const propList = ["paletteColors", "bgColor", "marginTop", "marginBottom", "widgetHeight"];
        if (edit) {
            fillConfig(index)
        }
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

            let i = widgets.value.map(item => item.id).indexOf(editindex)
            widgets.value.splice(i, 1)
            widgets.value.splice(i, 0, newWidget)
            naam++
            edit = false
        }
    }


    function getWidgetFromArray(id) {
        for (var i = 0; i < widgets.value.length; i++) {
            if (widgets.value[i].id === id) {
                return widgets.value[i]
            }
        }
    }



    function pickFile(event) {
        let file = event.target.files
        console.log(file)
        if (file && file[0]) {
            let reader = new FileReader
            reader.onload = e => {
                previewImage.value = e.target.result
                console.log(previewImage.value)
            }
            reader.readAsDataURL(file[0])
        }
    }

    

</script>

<template>


    <div class="body">
        <div>
            <button @click="goToCms()"> Ga Terug</button>
            <button @click="loadStarbucksBg()">Starbucks</button>

            <input type="file"
                   @change="pickFile">
            <div class="imagePreviewWrapper"
                 :style="{ 'background-image': `url(${previewImage})` }">
            </div>


        </div>
        <template v-for="widget in widgets"
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
                    :id="widget.id"
                    v-on:remove-click="(n) => removeWidget(n)"
                    v-on:editwidget="(n) => addWidgetPressed(widget.id)">
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
                          :id="widget.id"
                          v-on:remove-click="(n) => removeWidget(n)"
                          v-on:editwidgetHeader="(n) => addWidgetHeaderPressed(widget.id)">



            </widgetHeader>
            <widgetColorPalette v-else-if="widget.type === 2"
                                :colors="widget.colors"
                                :bgColor="widget.bgColor"
                                :marginTop="widget.marginTop"
                                :marginBottom="widget.marginBottom"
                                :widgetHeight="widget.widgetHeight"
                                :id="widget.id"
                                v-on:remove-click="(n) => removeWidget(n)"
                                v-on:editwidgetcolorPalette="(n) => addWidgetColorPalettePressed(widget.id)">
                >

            </widgetColorPalette>
        </template>
        <div class="widgetAdder">
            <div class="widgetAdder-content">
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
                      v-model:paletteColors="CpaletteColors"
                      :open="isopen"
                      :propArray="CpropArray"
                      @cancel="cancelWidgetAdd"
                      @addWidget="waitForInput = !waitForInput" />
    </div>
</template> 

<style scoped>

  .widgetAdder {
    margin: 4px;
  }

  .widgetAdder-content {
    padding: 5px;
    text-align: center;
  }

  .dropdown-item {
      cursor: pointer;
  }
    .imagePreviewWrapper {
        width: 250px;
        height: 250px;
        display: block;
        cursor: pointer;
        margin: 0 auto 30px;
        background-size: cover;
        background-position: center center;
    }
</style>