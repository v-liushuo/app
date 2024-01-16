import Vue from "vue";
import VueRouter from 'vue-router';
import FormEventExample from "@/components/FormEventExample.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import GsapExample from "@/components/GreenSockExample.vue";
import DynamicStateExample from "@/components/DynamicStateExample.vue";
import DirectiveExample from "@/components/DirectiveExample.vue";
import CSSExample from "@/components/CSSExample.vue";
import CSSLearnExample from "@/components/CSSLeranExample.vue";
import BoxLearnExample from "@/components/BoxLeranExample.vue"
import TableFormatterExample from "@/components/TableFormatterExample.vue"
import CanvasExample from "@/components/CanvasExample.vue";
import CanvasV2Example from "@/components/CanvasV2Example.vue";
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: HelloWorld
    },
    {
        path: '/form-event',
        name: 'FormEventExample',
        component: FormEventExample
    },

    {
        path: '/hello',
        name: 'HelloWorld',
        component: HelloWorld
    },

    {
        path: '/gsap',
        name: 'gsap',
        component: GsapExample
    },

    {
        path: '/dynamic',
        name: 'dynamic',
        component: DynamicStateExample
    },
    {
        path: '/directive',
        name: 'directive',
        component: DirectiveExample
    },
    {
        path: '/css',
        name: 'css',
        component: CSSExample
    },
    {
        path: '/css-learn',
        name: 'css-learn',
        component: CSSLearnExample
    },
    {
        path: '/box-learn',
        name: 'box-learn',
        component: BoxLearnExample
    },
    {
        path: '/table-formatter',
        name: 'table-formatter',
        component: TableFormatterExample
    },
    {
        path: '/canvas-example',
        name: 'canvas-example',
        component: CanvasExample
    },
    {
        path: '/canvas-v2-example',
        name: 'canvas-v2-example',
        component: CanvasV2Example
    }
];
const router = new VueRouter({
    routes: routes
});


export default router