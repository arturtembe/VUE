import { createRouter, createWebHistory } from 'vue-router'
import LoginRegisterView from '@/views/LoginRegisterView.vue';
import VerifyView from '@/views/VerifyView.vue';
import VerifyOTP from '@/views/VerifyOTP.vue';
import DashboardView from '@/views/DashboardView.vue';
import VerifyUsuarioController from '@/modules/controllers/usuario/verify.usuario.controller';

const routes = [
  {
    path: '/',
    name: 'homeView',
    async beforeEnter(){
      // VERIFY TOKEN
      await new VerifyUsuarioController().verifyTokenPageHome();
    }
  },
  {
    path: '/login',
    name: 'loginregister',
    component: LoginRegisterView,
    async beforeEnter(){
      // VERIFY TOKEN
      await new VerifyUsuarioController().verifyTokenLogin();
    }
  },
  {
    path: '/:slug',
    name: 'dashboardView',
    component: DashboardView,
    async beforeEnter(){
      // VERIFY TOKEN
      await new VerifyUsuarioController().verifyTokenDashboard();
    }
  },
  {
    path: '/:slug/verify',
    name: 'verifyOTPView',
    component: VerifyOTP,
    async beforeEnter(){
      // VERIFY TOKEN
      await new VerifyUsuarioController().verifyTokenPageHome();
    }
  },
  {
    path: '/:slug/verify/:otp',
    name: 'verifyViewLogin',
    component: VerifyView,
    async beforeEnter(){
      // VERIFY TOKEN
      await new VerifyUsuarioController().verifyTokenPageHome();
    }
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
