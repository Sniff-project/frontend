import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "@contexts";
import { Header } from "@containers/Navbar";
import Footer from "@containers/Footer";
import { lightTheme } from "@core/Theme";
import AppRoutes from "./Routes";
import "./Styles/App.scss";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Router>
        <AuthProvider>
          <ScopedCssBaseline>
            <Box
              minHeight="100vh"
              display="flex"
              flexDirection="column"
              justifyContent="space-between">
              <Header />
              <AppRoutes />
              <Footer />
            </Box>
          </ScopedCssBaseline>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
