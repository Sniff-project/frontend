import { Routes, Route } from "react-router-dom";
import { useAuth } from "@core/Hooks";
import routes from "./routesConfig";
import PrivateRoute from "./PrivateRoute";

export default function AppRoutes() {
  const { isAuthenticated } = useAuth();

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
