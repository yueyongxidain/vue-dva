import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
Vue.use(Router)
Vue.use(Vuex)
let routes = []
let modules = {}
function LoopRouter(config) {
    if (config instanceof Array) {
        return config.map((ele) => {
            if (ele.module&&ele.moduleName)
                modules[ele.moduleName] = ele.module
            //如果有子元素就递归
            if (ele.children) {
                return {
                    path: ele.path,
                    name: ele.name,
                    component: ele.component,
                    children: LoopRouter(ele.children)
                }
            }
            //没有子元素
            else {
                return {
                    path: ele.path,
                    name: ele.name,
                    component: ele.component,
                }
            }
        })
    }
}

function Create(config) {
    routes = LoopRouter(config)
    return {
        router: new Router({
            routes: routes
        }),
        store: new Vuex.Store({
            modules: modules
        }),
        menu: routes

    }
}

const routerConfig = [
    {
        path: '/',
        moduleName:'Home',
        name: '根菜单',
        module: require('../modules/home.js').default,   //vuex模块
        component: resolve => require(['../views/Home.vue'], resolve), //组件
        children: [
            {
                path: '/test',
                name: '测试菜单',
                moduleName:'test',
                module: require('../modules/test1.js').default,   //vuex模块
                component: resolve => require(['@/components/test.vue'], resolve) //组件
            }
        ]
    }
]

export default Create(routerConfig)
