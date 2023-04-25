import { AboutUs, Home, SignIn, SignUp, NotFound, Profile } from "@pages";

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
    path: "/signin",
    component: SignIn,
    exact: true,
    isPrivate: false,
  },
  {
    path: "/signup",
    component: SignUp,
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
