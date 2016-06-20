import Vue from 'Vue';
import VueRouter from 'vue-router';
import login from '../components/login';
import Hello from '../components/Hello';

Vue.use(VueRouter);

const router = new VueRouter();
const App = Vue.extend({});

router.map({
    '/login': {
        name: 'login',
        component: login
    },
    '/Hello': {
        name: 'Hello',
        component: Hello
    }
});

router.start(App, '#app');

export default router;