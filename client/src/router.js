import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";

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

/* ca vérifie si on a bien accès à la page sinon ca nous redirige vers /login */
router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/home'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  // tentative d'accès à une page à accès restreint + non connecté
  // redirige vers la page de connexion
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router;