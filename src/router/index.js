import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import * as allRoutes from '@/constants/routes';
import * as layoutNames from '@/constants/layouts';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: allRoutes.HOME_ROUTE,
      name: allRoutes.HOME_ROUTE_NAME,
      component: () => import('@/pages/plp/PLP.vue'),
    },
    {
      path: allRoutes.LOGIN_ROUTE,
      name: allRoutes.LOGIN_ROUTE_NAME,
      component: () => import('@/pages/login/LoginView.vue'),
      meta: {
        layout: layoutNames.LOGIN_LAYOUT,
        // Set public to true for the pages that doesnt need user to be logged in
        public: true,
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/pages/NotFound.vue'),
    },
  ],
});

router.beforeEach(async to => {
  // Set default layout if layout is not mentioned in route meta
  to.meta.layout = to.meta.layout || layoutNames.DEFAULT_LAYOUT;
  // redirect to login page if not logged in and trying to access a restricted page
  const auth = useAuthStore();
  const isPublic = to.meta?.public;
  if (!auth.loggedIn && !isPublic) {
    auth.returnUrl = to.fullPath;
    return allRoutes.LOGIN_ROUTE;
  } else if (auth.loggedIn && to.name === allRoutes.LOGIN_ROUTE_NAME) {
    return allRoutes.HOME_ROUTE;
  }
});

export default router;
