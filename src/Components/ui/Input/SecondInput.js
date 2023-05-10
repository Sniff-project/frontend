import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import Input from "./Input";

const SecondInput = (props) => {
  const theme = useTheme();
  return (<SInput theme={theme} {...props} />);
};

const SInput = styled(Input)(
  ({ theme }) => `
  & {
    width: 100%;
  }
  label,
  input {
    color: rgba(0, 0, 0, 0.5);
    pointer-events: none;
    padding-left: 10px;
    height: auto;
    text-align: center;
    transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
      max-width 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, padding 200ms cubic-bezier(0, 0, 0.2, 1);
  }

  input {
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    pointer-events: auto;

    &:placeholder {
      display: block;
      opacity: 1;
      color: ${theme.palette.black.main};
    }
  }

  label {

    color: rgba(0, 0, 0, 0.5);
    font-family: 'Montserrat',sans-serif;
    font-style: normal;
    font-weight: 200;
    font-size: 14px;
    line-height: 17px;
    padding: 0;
    display: block;
    transform-origin: top center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(0, -1.5px) scale(1);
    transition: color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,max-width 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;

    &.Mui-focused {
      padding-left: 0;
      color: #000;
    }
  }
  .MuiInput-root {
    margin-top: 18px;

    &:before {
      border-bottom: 1px solid ${theme.palette.black.opacity05};
    }

    &.Mui-error {
      &:before {
        border-bottom: 1px solid ${theme.palette.error.main};
      }
    }
  }
`
);

export default SecondInput;
