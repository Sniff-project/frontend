import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routesConfig";
import { AboutUs, Home, Login, Profile } from "@pages";
import PrivateRoute from "./PrivateRoute";

export default function AppRouter({ isAuthenticated }) {
  return (
    <Router>
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
            <Route
              key={path}
              path={path}
              element={<Component />}
              exact={exact}
            />
          )
        )}
      </Routes>
    </Router>
  );
}
