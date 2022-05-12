<template>
    <div class="popup" v-show="open">
        <div class="popup-inner">
            <div class="popup-content">
                <slot />

                <div class="divider">
                    <h2>Input</h2>
                    <hr />
                </div>

                <div class="input" v-if="propArray.includes('textContent')">
                    <h3>Text Content</h3>
                    <input :value="textContent"
                           @input="$emit('update:textContent', $event.target.value)" />
                </div>

                <div class="input" v-if="propArray.includes('textColor')">
                    <h3>Text Color</h3>
                    <input :value="textColor"
                           @input="$emit('update:textColor', $event.target.value)" />
                </div>
                <div class="input" v-if="propArray.includes('bgColor')">
                    <h3>Background Color</h3>
                    <input :value="bgColor"
                           @input="$emit('update:bgColor', $event.target.value)" />
                </div>

                <div class="input" v-if="propArray.includes('textFont')">
                    <h3>Font</h3>
                    <input :value="textFont"
                           @input="$emit('update:textFont', $event.target.value)" />
                </div>

                <div class="input" v-if="propArray.includes('textSize')">
                    <h3>Font Size</h3>
                    <input :value="textSize"
                           @input="$emit('update:textSize', $event.target.value)" />
                </div>

                <div class="input" v-if="propArray.includes('marginTop')">
                    <h3>Top Margin</h3>
                    <input :value="marginTop"
                           @input="$emit('update:marginTop', $event.target.value)" />
                </div>

                <div class="input" v-if="propArray.includes('marginBottom')">
                    <h3>Bottom Margin</h3>
                    <input :value="marginBottom"
                           @input="$emit('update:marginBottom', $event.target.value)" />
                </div>

                <div class="input" v-if="propArray.includes('borderType')">
                    <h3>Border Type</h3>
                    <input :value="borderType"
                           @input="$emit('update:borderType', $event.target.value)" />
                </div>

                <div class="input" v-if="propArray.includes('borderSize')">
                    <h3>Border Size</h3>
                    <input :value="borderSize"
                           @input="$emit('update:borderSize', $event.target.value)" />
                </div>

                <div class="input" v-if="propArray.includes('borderColor')">
                    <h3>Border Color</h3>
                    <input :value="borderColor"
                           @input="$emit('update:borderColor', $event.target.value)" />
                </div>

                <div class="input" v-if="propArray.includes('widgetHeight')">
                    <h3>Widget Height</h3>
                    <input :value="widgetHeight"
                           @input="$emit('update:widgetHeight', $event.target.value)" />
                </div>

                <div class="input" v-if="propArray.includes('paletteColors')">
                    <h3>Color Palette</h3>
                    <div class="input-group mb-3">
                        <button class="btn btn-outline-secondary" @click="amountOfColors++" type="button">+</button>
                        <button class="btn btn-outline-secondary" @click="amountOfColors--" type="button">-</button>
                        <h5>Amount of colors in palette: {{amountOfColors}}</h5>
                    </div>
                    <colorPaletteInputField v-for='index in parseInt(amountOfColors)' v-model:paletteColor="paletteColors[index]" @input="$emit('update:paletteColors', paletteColors)" :key='index' />
                </div>
                <button type="button" @click="$emit('addWidget')"> Add Widget </button>
                <button type="button" @click="$emit('cancel')"> Cancel </button>
            </div>
        </div>
    </div>


</template>

<script setup>
    import { ref } from 'vue'
    import { defineProps } from 'vue'
    import { defineEmits } from 'vue'
    import colorPaletteInputField from '@/components/colorPalette/colorPaletteInputField.vue'


    //const props = defineProps(['color', 'text', 'open', 'background'])
    const props = defineProps(['textContent', 'textColor', 'bgColor', 'textFont', 'textSize', 'marginTop', 'marginBottom', 'borderType', 'borderSize', 'borderColor', 'widgetHeight', 'paletteColors', 'propArray', 'open'])
    const emits = defineEmits(['update:textContent', 'update:textColor', 'update:bgColor', 'update:textFont', 'update:textSize', 'update:marginTop', 'update:marginBottom', 'update:borderType', 'update:borderSize', 'update:borderColor', 'update:widgetHeight', 'update:paletteColors'])
    const amountOfColors = ref(1)
    const paletteColors = ref([])
    const paletteColorsArray = ref([])

</script>


<style scoped>
    h3 {
      margin: 0;
    }
    
    h2 {
      margin: 0;
    }

    .input {
      margin: 10px 0;
    }

    .divider {
      margin-bottom: 15px;
    }

    .divider-bot {
      margin-top: 15px;
    }


    .configDiv input {
        width: 90%;
        margin: 0;
        padding: 0;
    }
    
    ::before,
    ::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .popup {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
        z-index: 1;
    }

    .popup-inner {
        max-width: 500px;
        margin: 2rem auto;
    }

    .popup-content {
        background-color: turquoise;
        position: relative;
        background-clip: padding-box;
        border-radius: 0.3rem;
        border: 1px solid rgba(0,0,0,0.3);
        padding: 1rem;
    }
</style>