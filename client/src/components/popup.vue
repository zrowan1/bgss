<template>
	<div class="popup" v-show="open">
		<div class="popup-inner">	
			<div class="popup-content"> 
			<slot />	
			<button type="button" @click="$emit('close')"> close </button>
			</div>	
		 </div>
	</div>
</template>

<script setup>
	import { defineProps } from 'vue'
    const props = defineProps(['open'])
</script>

<style scoped>
	
	::before,
	::after{
	margin: 0;
	padding: 0;
	box-sizing : border-box;
	}
	.popup{
     position: fixed;
	top : 0;
	left : 0;
	width : 100%;
	height: 100%;
	overflow-x : hidden;
	overflow-y : auto;
	z-index: 1;
	}
	.popup-inner{
	max-width: 500px;
	margin: 2rem auto;
	}
	.popup-content{
		background-color: gray;
	position: relative;
	background-clip: padding-box;
	border-radius: 0.3rem;
	border: 1px solid rgba(0,0,0,0.3);
	padding: 1rem;

	}
	</style>