import { createWebHistory, createRouter} from "vue-router"
import App from "@/App.vue"
import BrandGuide from "@/views/BrandGuide.vue"
import PageNotFound from '@/views/PageNotFound.vue'
import Cms from '@/views/Cms.vue'

const routes = [
    {
        path: "",
        name: "Cms",
        component: Cms,
    },
    {
        path: "/edit",
        name: "BrandGuide",
        component: BrandGuide,       
    },
    {
        path: "/view",
        name: "ViewBrandGuide",
        component: BrandGuide,
    },
    {
        path: '/:catchAll(.*)*',
        name: "PageNotFound",
        component: PageNotFound
    }
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router