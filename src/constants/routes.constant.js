import Dashboard from '../components/dashboard/dashboard.vue'
import Setup from '../components/setup/setup.vue'
import Login from '../components/login/login.vue'

const routes = [
  { path: '/', component: Dashboard },
  { path: '/setup', component: Setup, meta: { requiresAuth: true, is_admin: true } },
  { path: '/login', component: Login, meta: { guest: true } }
]

export default routes
