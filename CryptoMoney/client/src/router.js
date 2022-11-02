import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import Aboutus from "./components/Aboutus.vue";
import CryptoInfo from "./components/CryptoInfo.vue";

const Profile = () => import("./components/Profile.vue")
const BoardAdmin = () => import("./components/BoardAdmin.vue")
const BoardModerator = () => import("./components/BoardModerator.vue")
const BoardUser = () => import("./components/BoardUser.vue")
/* router: il associe un chemin à un components */
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/home",
    component: Home,
  },
   {
    path: "/Aboutus",
    component: Aboutus,
  },
  {
    path: "/CryptoInfo",
    component: CryptoInfo,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
  },
  {
    path: "/admin",
    name: "admin",
    component: BoardAdmin,
  },
  {
    path: "/mod",
    name: "moderator",
    component: BoardModerator,
  },
  {
    path: "/user",
    name: "user",
    component: BoardUser,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

/* it checks if we have access to the page otherwise it redirects us to /login */
router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/home','/Aboutus','/CryptoInfo'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  /*trying to access a restricted page + not logged in
  redirect to login page*/
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router;