import React from "react";
import { Select, InputLabel, MenuItem, FormControl } from "@mui/material";
import './styles.scss';

export default function SelectComponent({title, valueArray, handleChangeFilter, name}) {
  const [value, setValue] = React.useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
    handleChangeFilter(event.target);
  };

  return (
    <FormControl sx={{ minWidth: 180 }}>
      <InputLabel id="demo-simple-select-autowidth-label">{title}</InputLabel>
      <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        value={value}
        onChange={handleChange}
        label={title}
        name={name}
      >
        <MenuItem value="empty">
          Усі варіанти
        </MenuItem>


        {valueArray.map(elem => <MenuItem key={elem.id} value={elem.name}>{elem.name}</MenuItem>)}
        
      </Select>
    </FormControl>
  );
}
