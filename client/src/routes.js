import VueRouter from 'vue-router'
import postComponent from "./components/postComponent";
import userComponent from "./components/userComponent";
import profileComponent from "./components/profileComponent"
import vue from 'vue'


vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [

        {path: '/postcomponent', component: postComponent},
        {path: '/usercomponent', component: userComponent},
        {path: '/profilecomponent', component: profileComponent}
    ]


});

