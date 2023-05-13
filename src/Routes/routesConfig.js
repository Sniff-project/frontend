import { AboutUs, Home, SignIn, NotFound, Profile, PetProfile, SignUp } from "@pages";

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
    path: "/pet",
    component: PetProfile,
    exact: true,
    isPrivate: false,
  },
  {
    path: "*",
    component: NotFound,
    exact: true,
    isPrivate: false,
  },
];

export default routes;
