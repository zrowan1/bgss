import { createApp } from 'vue'
import { UploadMedia, UpdateMedia } from 'vue-media-upload';
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"



let app = createApp(App).use(router)

app.component('upload-media', UploadMedia);
app.component('update-media', UpdateMedia);

app.mount("#app")


/*app.component('upload-media', UploadMedia);
app.component('update-media', UpdateMedia);

createApp(App).use(router).mount('#app')*/
