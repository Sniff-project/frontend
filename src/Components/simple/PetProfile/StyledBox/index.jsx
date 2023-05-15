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

    @media (max-width: 899px) {
      max-width: 500px;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

export default SBox;
