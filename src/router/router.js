import {createRouter, createWebHistory} from "vue-router";
import DashboardLayout from "../components/layouts/DashboardLayout.vue";
import Dashboard from "../views/Dashboard.vue";
import store from "../store/index.js";
import AuthLayout from "../components/layouts/AuthLayout.vue";
import Login from "../views/auth/Login.vue";
import Register from "../views/auth/Register.vue";
import Assets from "../views/assets/Assets.vue";
import Show from "../views/assets/Show.vue"
import Incidents from "../views/Incidents.vue";
import Settings from '../views/configurations/Settings.vue'
// import Category from "../views/configurations/Category.vue"

const routes = [
	{
		path: '/',
		redirect: '/dashboard',
		component: DashboardLayout,
		meta: {requiresAuth: true},
		children: [
			{path: '/dashboard', name: 'Dashboard', component: Dashboard},
			{path: '/assets', name: 'Assets', component: Assets},
      {path: '/assets/view/:assetId', props: true, name: 'viewAsset', component: Show},
      {path: '/incidents', name: 'Incidents', component: Incidents},
      {path: '/settings', name: 'Setting', component: Settings}
		]
	},

	{
		path: '/auth',
		redirect: '/login',
		name: 'AuthLayout',
		component: AuthLayout,
		meta: {isGuest: true},
		children: [
			{path: '/login', name: 'Login', component: Login},
			{path: '/login', name: 'Register', component: Register}
		]
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

// router.beforeEach((to, from, next) => {
// 	Promise.all([store.dispatch()])
// 	// if(to.meta.requiresAuth && !store.state.initialState.user.status.loggedIn){
// 	// 	next({name: 'Login'})
// 	// }else if(to.meta.isGuest && store.state.initialState.user.status.loggedIn){
// 	// 	next({name: 'Dashboard'})
// 	// }else{
// 	// 	next()
// 	// }
// })

router.beforeEach((to, from, next) => {
	if(to.meta.requiresAuth && !store.getters['auth/isLoggedIn']){
		next({name: 'Login'})

	}else if(to.meta.isGuest && store.getters['auth/isLoggedIn']){
		next({name: 'Dashboard'})
	}else{
		next()
	}
})

export default router