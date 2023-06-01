import Box from "@mui/material/Box";
import { styled } from "@mui/system";

export const MainBlock = styled(Box)(({ theme }) => ({
  margin: "0 auto",
  marginTop: "3.75rem",
  marginBottom: "3.75rem",
  maxWidth: "62.5rem",
  minHeight: "38.5rem",
  borderRadius: "0.9375rem",
  position: "relative",
  backgroundColor: theme.palette.background.default,
}));

export const ContainerBlock = styled(Box)(() => ({
  background: "rgba(151, 194, 245, 0.2)",
  padding: "3.125rem",
  borderRadius: "0.9375rem",
}));
