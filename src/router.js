import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
        path: '/',
        name: 'Home',
        component: () => import('./views/Home.vue')
        },
        {
            path: '/formtask',
            name: 'FormTask',
            component: () => import('./views/FormTask.vue')
        }
    ]
})
