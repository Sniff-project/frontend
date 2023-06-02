import Box from "@mui/material/Box";
import { styled } from "@mui/system";

export const SignInBlock = styled(Box)(({ theme }) => ({
  marginBottom: "3.75rem",
  marginTop: "3.75rem",
  maxWidth: "37.5rem",
  width: "100%",
  backgroundColor: theme.palette.background.default,
  borderRadius: "0.9375rem",
}));

export const ContainerBlock = styled(Box)(() => ({
  position: "relative",
}));

export const ContentBlock = styled(Box)(() => ({
  background: "rgba(151, 194, 245, 0.2)",
  borderRadius: "0.9375rem",
  padding: "3.4375rem 3.125rem 4.9375rem 3.125rem",
}));

export const FormBlock = styled(Box)(() => ({
  position: "relative",
}));
