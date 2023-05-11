import { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "@contexts";
import { Header } from "@containers/Navbar";
import Footer from "@containers/Footer";
import { Spinner } from "@components/simple";
import { lightTheme } from "@core/Theme";
import AppRoutes from "./Routes";
import "./Styles/App.scss";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <ThemeProvider theme={lightTheme}>
          <Router>
            <AuthProvider>
              <Header />
              <AppRoutes />
              <Footer />
            </AuthProvider>
          </Router>
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
