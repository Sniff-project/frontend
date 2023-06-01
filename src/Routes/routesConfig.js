import {
  AboutUs,
  Home,
  SignIn,
  SignUp,
  NotFound,
  Profile,
  PetProfile,
  PetsGallery,
  CreatePetProfilePage,
  UserPage,
} from "@pages";

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
    path: "/users/:userId",
    component: UserPage,
    exact: true,
    isPrivate: false,
  },
  {
    path: "/pets",
    component: PetsGallery,
    exact: true,
    isPrivate: false,
  },
  {
    path: "/pets/create",
    component: CreatePetProfilePage,
    exact: true,
    isPrivate: false,
  },
  {
    path: "/pets/:petId",
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
