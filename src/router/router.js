import Vue from 'Vue';
import VueRouter from 'vue-router';
import login from '../components/login';
import Hello from '../components/Hello';
import Index from '../components/Index';
import Todo from '../components/Todo';
import About from '../components/About';

Vue.use(VueRouter);

const router = new VueRouter({
    linkActiveClass: 'active'
});

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
                component: Hello,
                need_auth: true
            },
            '/todo': {
                name: 'Todo',
                component: Todo,
                need_auth: true
            },
            '/about':{
                name: 'About',
                component: About
            }
        }
    }
});

router.redirect({
    '/': '/hello'
});

// auth condition
router.beforeEach(function (transition) {
    if (transition.to.need_auth === true && !window.isAuth) {
        //transition.redirect('login');
        transition.next();
    } else {
        transition.next();
    }
});

router.start(App, '#app');

export default router;
