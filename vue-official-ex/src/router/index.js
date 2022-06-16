import  {createWebHistor, createRouter} from "vue-router";
import Main from '../views/Main';

const routes = [
    {
        path: "/",
        component: import(Main),
    }
];

const router = createRouter({
    history:createWevHistory(),
    routes,
});

export default router;