import Vue from "vue";
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [];
require
    .context("../components", true, /\.vue$/)
    .keys()
    .map((item) => {
        let path = item.slice(1).replace(".vue", "");
        routes.push({
            path,
            name: path.slice(1),
            component: () => import(`../components${item.slice(1)}`),
        });
    });

console.log(routes)
const router = new VueRouter({
    routes: routes
});


export default router