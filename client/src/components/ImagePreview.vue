<template>
    <div>
        <div class="imagePreviewWrapper"
             :style="{ 'background-image': `url(${previewImage})` }">
        </div>

        <input ref="fileInput"
               type="file"
               @input="pickFile">
    </div>
</template>

<script>
export default {
  data() {
      return {
        previewImage: null
      };
    },
  methods: {
      pickFile () {
          let input = this.$refs.fileInput
          console.log(input.files)
        let file = input.files
        if (file && file[0]) {
          let reader = new FileReader
          reader.onload = e => {
            this.previewImage = e.target.result
          }
          reader.readAsDataURL(file[0])
        }
      }
  }
}
</script>

<style scoped>
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