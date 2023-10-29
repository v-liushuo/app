import Vue from "vue";
import VueRouter from 'vue-router';
import FormEventExample from "@/components/FormEventExample.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import GsapExample from "@/components/GreenSockExample.vue";

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
    }
];
const router = new VueRouter({
    routes: routes
});


export default router