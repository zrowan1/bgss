<template>
    <!--<div>
        <div>
            <h3>Header</h3>
            <input placeholder="edit me"
                   :value="Text"
                   @input="$emit('update:Text', $event.target.value)" />
        </div>
        <div>
            <h3>Header color</h3>
            <input placeholder="edit me" />
        </div>-->
        <!--<div>
            <h3>Text</h3>
            <textarea v-model="Paragraph" placeholder="add multiple lines"></textarea>
        </div>-->
        <!--<div>
            <h1 :style="{'color': Color}">{{ text }}</h1>
        </div>
    </div>-->

    <div class="popup" v-show="open">
        <div class="popup-inner">
          <div class="popup-content">
            <slot />
            <div class="divider">
              <h2 >Input</h2>
              <hr />
            </div>

            <div class="input">
              <h3>Header</h3>
              <input placeholder="edit me"
                     :value="text"
                     @input="$emit('update:text', $event.target.value)" />
            </div>

            <div class="divider-bot divider">
              <h2>Style</h2>
              <hr />
            </div>

            <div class="input">
              <h3>Header-color</h3>
              <input placeholder="edit me"
                     :value="color"
                     @input="$emit('update:color', $event.target.value)" />
            </div>
            <div class="input">
              <h3>Background-color</h3>
              <input placeholder="edit me"
                     :value="background"
                     @input="$emit('update:background', $event.target.value)" />
            </div>

            <!--<div>
      <h3>Text</h3>
      <textarea v-model="Paragraph" placeholder="add multiple lines"></textarea>
  </div>-->

            <button type="button" @click="$emit('close')"> close </button>
          </div>
        </div>
    </div>


</template>

<script setup>
    import { ref } from 'vue'
    import { defineProps } from 'vue'
    import {defineEmits} from 'vue'


    const props = defineProps(['color', 'text', 'open', 'background'])
    const emits = defineEmits(['update:text', 'update:background'])


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