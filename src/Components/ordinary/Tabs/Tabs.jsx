import { memo } from "react";
import { styled } from "@mui/system";
import { default as MTabs } from "@mui/material/Tabs";

const Tabs = memo(({ children, ...rest }) => {
  return <CustomTabs {...rest}>{children}</CustomTabs>;
});

const CustomTabs = styled(MTabs)(
  ({ theme }) => `

  & {
    overflow: inherit;
    height: fit-content;
    min-height: fit-content;
  }

  .MuiTabs {

    &-scroller {
      max-width: fit-content;
      height: fit-content;
      overflow: inherit!important;
  
      &:after {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 1px;
        bottom: 0;
        left: -85px;
        background-color: rgba(0, 0, 0, 0.3);
      }
    }

    &-flexContainer {
      display: flex;
      gap: 10px 50px;
      list-style-type: none;
      padding: 0;
      margin: 0;
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
    font-size: 20px;
    line-height: 24px;
    text-transform: none;
    min-height: fit-content;

    color: ${theme.palette.black.secondary};

    height: fit-content;
    padding: 7px 10px;

    &.Mui-selected {
      color: ${theme.palette.black.main};
    }
  }
`
);

export default Tabs;
