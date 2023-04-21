import { AboutUs, Home, Login, NotFound, Profile } from "@pages";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
    isPrivate: false,
  },
  {
    path: "/about",
    component: AboutUs,
    exact: true,
    isPrivate: false,
  },
  {
    path: "/login",
    component: Login,
    exact: true,
    isPrivate: false,
  },
  {
    path: "/profile",
    component: Profile,
    exact: true,
    isPrivate: true,
  },
  {
    path: "*",
    component: NotFound,
    exact: true,
    isPrivate: false,
  },
];

export default routes;
