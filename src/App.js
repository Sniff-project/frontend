import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "@contexts";
import { Header } from "@containers/Navbar";
import Footer from "@containers/Footer";
import AppRoutes from "./Routes";
import "./Styles/App.scss";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="main-page">
          <Header />
          <AppRoutes />
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
