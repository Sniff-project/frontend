import React from "react";
import { Select, InputLabel, MenuItem, FormControl } from "@mui/material";

export default function SelectComponent({title, valueArray}) {
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ minWidth: 180 }}>
      <InputLabel id="demo-simple-select-autowidth-label">{title}</InputLabel>
      <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        value={age}
        onChange={handleChange}
        label={title}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>

        {valueArray.map((elem, index) => <MenuItem value={index}>{elem}</MenuItem>)}
        
      </Select>
    </FormControl>
  );
}
