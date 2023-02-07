import { createApp } from 'vue'
import App from './App.vue'
import Inscription from './components/Inscription.vue'
import Accueil from './components/Accueil.vue'
import Creation_entreprise from './components/Creation_entreprise.vue'
import Dashboard from './components/Dashboard.vue'
import Connexion from './components/Connexion.vue'
import Entreprises from './components/Entreprises.vue'
import store from './store'

// import Vue from 'vue'
import * as VueRouter from 'vue-router'

// Vue.use(VueRouter)

// 1. Define route components.
// These can be imported from other files
// const Inscription = { template: '<div>INSCRI</div>' }

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Accueil },
  { path: '/inscription', component: Inscription },
  { path: '/creation_entreprise', component: Creation_entreprise },
  { path: '/dashboard', component: Dashboard },
  { path: '/connexion', component: Connexion },
  { path: '/entreprises', component: Entreprises },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
})



createApp(App).use(store).use(router).mount('#app')
