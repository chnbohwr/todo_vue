import Vue from 'Vue';
import VueRouter from 'vue-router';
import login from '../components/login';
import Hello from '../components/Hello';
import Index from '../components/Index';
import Todo from '../components/Todo';

Vue.use(VueRouter);

const router = new VueRouter();
const App = Vue.extend({});

router.map({
    '/login': {
        name: 'login',
        component: login
    },
    '/': {
        name: 'Index',
        component: Index,
        subRoutes: {
            '/hello': {
                name: 'Hello',
                component: Hello
            },
            '/todo': {
                name: 'Todo',
                component: Todo
            }
        }
    }
});

router.start(App, '#app');

export default router;
