import { memo } from "react";
import { styled } from "@mui/system";
import { default as MTabs } from "@mui/material/Tabs";

const Tabs = memo(({ children, ...rest }) => {
  return <CustomTabs {...rest}>{children}</CustomTabs>;
});

const CustomTabs = styled(MTabs)(
  ({ theme }) => `
  overflow: inherit;
  height: fit-content;
  min-height: fit-content;
 
  .MuiTabs {

    &-scroller {
      max-width: fit-content;
      height: fit-content;
  
      &:after {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 1px;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.3);
      }
    }

    &-flexContainer {
      display: flex;
      gap: 0.625rem 3.125rem;
      list-style-type: none;
      padding: 0;
      margin: 0;
    }

    @media (max-width: 600px) {
      &-flexContainer {
        gap: 0;
      }
    }

    &-indicator {
      min-height: 1px;
      height: 1px;
      background-color: ${theme.palette.black.main};
    }
  }

  button {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-size: 1.25rem;
    line-height: 1.5rem;
    text-transform: none;
    min-height: fit-content;

    color: ${theme.palette.black.secondary};

    height: fit-content;
    padding: 0.4375rem 0.625rem;

    &.Mui-selected {
      color: ${theme.palette.black.main};
    }
  }
`
);

export default Tabs;
