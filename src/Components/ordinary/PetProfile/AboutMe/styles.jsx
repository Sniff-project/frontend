import { Box, TableCell, TableRow } from "@mui/material";
import { styled } from "@mui/system";

export const SBox = styled(Box)`
  h3 {
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.4375rem;
    text-align: center;
    color: #000000;
    margin: 0;
  }
`;

export const STableRow = styled(TableRow)`
  position: relative;

  &:after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.3) -0.71%,
      rgba(0, 0, 0, 0) 84.44%
    );
  }
`;

export const STableCell = styled(TableCell)`
  border-bottom: none;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.5rem;

  color: #000000;
`;
