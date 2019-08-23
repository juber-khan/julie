import Dashboard from '../components/dashboard/dashboard.vue'
import DashboardLayout from '../components/layouts/dashboard_layout.vue'
import Setup from '../components/setup/setup.vue'
import Login from '../components/login/login.vue'
import AuthLayout from '../components/layouts/auth_layout.vue'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    children: [
      { path: '', name: 'dashboard', component: Dashboard },
      {
        path: '/setup',
        name: 'setup',
        component: Setup,
        meta: { requiresAuth: true, is_admin: true }
      }
    ]
  },
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      {
        path: '', name: 'login', component: Login
      }
    ]
  }
  //{path: '*', component: NotFound}
]

export default routes
