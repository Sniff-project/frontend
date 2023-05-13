import { Box } from "@mui/material";
import { styled } from "@mui/system";

const SBox = styled(Box)`
  & {
    background: #ffffff;
    border-radius: 10px;
    transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;

    &:hover,
    &:active,
    &:focus {
      box-shadow: 0px 0px 20px #ffffff;
    }

    .pet-profile {
      &__image {
        width: 100%;
        height: 38.5vw;
        max-width: 534px;
        max-height: 616px;
        object-fit: cover;
        border-radius: 10px;
      }
    }
  }
`;

export default SBox;
