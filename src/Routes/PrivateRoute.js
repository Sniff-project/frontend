import { Navigate } from "react-router-dom";

const PrivateRoute = ({ auth: { isAuthenticated }, children }) => {
  return isAuthenticated ? children : <Navigate to="/signin" />;
};

export default PrivateRoute;
