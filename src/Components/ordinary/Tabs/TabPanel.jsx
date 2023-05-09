import { memo } from "react";
import Box from "@mui/material/Box";

const TabPanel = memo((props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box component="div" sx={{ px: 2, py: 14, position: "relative" }}>
          {children}
        </Box>
      )}
    </div>
  );
});

export default TabPanel;
