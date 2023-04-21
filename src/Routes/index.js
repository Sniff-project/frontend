import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { AboutUs, Home, Login, Profile } from "@pages";
import { AuthContext } from "@contexts";
import routes from "./routesConfig";
import PrivateRoute from "./PrivateRoute";

export default function AppRoutes() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Routes>
      {routes.map(({ path, component: Component, exact, isPrivate }) =>
        isPrivate ? (
          <Route
            key={path}
            path={path}
            element={
              <PrivateRoute auth={{ isAuthenticated: isAuthenticated }}>
                <Component />
              </PrivateRoute>
            }
          />
        ) : (
          <Route key={path} path={path} element={<Component />} exact={exact} />
        )
      )}
    </Routes>
  );
}
