import { Grid } from "@mui/material";
import { styled } from "@mui/system";

export const ImageBlock = styled(Grid)`
  width: 20rem;
  height: 20rem;

  @media screen and (min-width: 480px) {
    width: 28.125rem;
    height: 28.125rem;
  }
  @media screen and (min-width: 600px) {
    width: 31.25rem;
    height: 31.25rem;
  }
  @media screen and (min-width: 1600px) {
    width: 33.375rem;
    height: 38.5rem;
  }
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;
