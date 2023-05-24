import React, { useEffect, useState } from "react";
import { Select, InputLabel, MenuItem, FormControl } from "@mui/material";
import "./styles.scss";

export default function SelectComponent({
  title,
  valueArray,
  handleChangeFilter,
  name,
  globalState
}) {
  const [currentValue, setCurrentValue] = useState("");
  const filterState = "filterState";

  const handleChange = (event) => {
    setCurrentValue(event.target.value);
    handleChangeFilter(event.target);
  };

  useEffect(() => {
    console.log(globalState)

    for(let key in globalState){
      if(key === name){
        setCurrentValue(globalState[key]);
        console.log(globalState[key]);
      }
    }
  
  }, [globalState]);

  return (
    <FormControl sx={{ minWidth: 200 }}>
      <InputLabel id="demo-simple-select-autowidth-label">{title}</InputLabel>
      <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        value={valueArray?.length > 0 ? currentValue : ''}
        onChange={handleChange}
        label={title}
        name={name}
      >
        <MenuItem value="">Усі варіанти</MenuItem>

        {valueArray.map((elem) => (
          <MenuItem key={elem.id} value={elem.id}>
            {elem.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
