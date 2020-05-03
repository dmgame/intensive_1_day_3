import router from '@/router';

export default function authGuard() {
  const isAuth = false;
  const authRoutes = ['Login'];

  router.beforeEach((to, from, next) => {
    if (authRoutes.includes(to.name) && isAuth) {
      return next({ name: 'Home' });
    }

    if (!authRoutes.includes(to.name) && !isAuth) {
      return next({ name: 'Login' });
    }

    return next();
  });
}
