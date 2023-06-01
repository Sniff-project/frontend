import Box from "@mui/material/Box";
import { styled } from "@mui/system";

export const SignInBlock = styled(Box)(({ theme }) => ({
  marginBottom: "240px",
  marginTop: "60px",
  maxWidth: "600px",
  width: "100%",
  backgroundColor: theme.palette.background.default,
  borderRadius: "15px",
}));

export const ContainerBlock = styled(Box)(() => ({
  position: "relative",
}));

export const ContentBlock = styled(Box)(() => ({
  background: "rgba(151, 194, 245, 0.2)",
  borderRadius: "15px",
  padding: "55px 50px 79px 50px",
}));

export const FormBlock = styled(Box)(() => ({
  position: "relative",
}));
