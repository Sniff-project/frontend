import { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useAuth } from "@core/Hooks/useAuth";
import { default as Button } from "@components/ui/Button/DefaultButton";

const PrivateRoute = ({ auth: { isAuthenticated }, children }) => {
  const { signInOpenHandler } = useAuth();
  useEffect(() => {
    !isAuthenticated && signInOpenHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return isAuthenticated ? (
    children
  ) : (
    <Box display="flex" justifyContent="center" margin="5rem 1rem">
      <Box display="flex" flexDirection="column" maxWidth="600px">
        <Typography
          variant="h2"
          textAlign="center"
          sx={{ width: "fit-content" }}>
          Увійдіть в аккаунт для перегляду цієї сторінки!
        </Typography>
        <Box display="flex" justifyContent="center" mt="1.5rem">
          <Button onClick={signInOpenHandler} sx={{ width: "fit-content" }}>
            Увійти
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PrivateRoute;
