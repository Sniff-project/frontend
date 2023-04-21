import React, { useState } from "react";
import AppRouter from "./Routes";
import "./Styles/App.scss";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return <AppRouter isAuthenticated={isAuthenticated} />;
}

export default App;
