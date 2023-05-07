import { styled } from "@mui/system";
import Input from "./Input";

const DefaultInput = styled(Input)(
  ({ theme }) => `
  & {
    width: 100%;
  }
  label,
  input {
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    color: rgba(0, 0, 0, 0.5);
    pointer-events: none;
    padding-left: 10px;
    height: auto;
    transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
      max-width 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, padding 200ms cubic-bezier(0, 0, 0.2, 1);
  }
  label {
    &.Mui-focused {
      padding-left: 0;
    }
  }  
`
);

export default DefaultInput;
