import About from './components/About'
import Home from './components/Home'
import Projects from './components/Projects'
import Router from 'vue-router';
import Vue from 'vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/project',
            name: 'menu',
            component: Projects
        }
    ]
});