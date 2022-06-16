import {createWebHistory, createRouter} from "vue-router";
import LandingPage from '../views/LandingPage';
import MyInfo from "@/views/MyInfo";

const routes = [
    {
        path: '/',
        component: LandingPage,
    },
    {
        path: '/myinfo',
        component: MyInfo,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;