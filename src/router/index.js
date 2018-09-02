import Vue from "vue";
import Router from "vue-router";

const Task1 = () =>
    import ("../components/task1.vue");
const Task2 = () =>
    import ("../components/task2.vue");

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [{
        path: "/",

        component: Task1
    }, {
        path: "/task2",

        component: Task2
    }],
    scrollBehavior() {
        return {
            x: 0,
            y: 0
        };
    }
});