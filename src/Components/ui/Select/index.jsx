import React, { useState } from "react";
import { Select, InputLabel, MenuItem, FormControl } from "@mui/material";
import "./styles.scss";


export default function SelectComponent({
  title,
  valueArray,
  handleChangeFilter,
  name,
}) {

  const [currentValue, setCurrentValue] = useState('');

  const handleChange = (event) => {
    setCurrentValue(event.target.value);
    handleChangeFilter(event.target);

    // localStorage.removeItem(filterState);
    // const objData = {value: event.target.value, filter: event.target.name};
    // localStorage.setItem(filterState, JSON.stringify(objData));

  };

  // useEffect(() => {
  //   const storedGalleryArray = localStorage.getItem(filterState);
  //   if (storedGalleryArray) {
  //     setCurrentValue(JSON.parse(storedGalleryArray));
  //   }
  // }, []);


  return (
    <FormControl sx={{ minWidth: 200 }}>
      <InputLabel id="demo-simple-select-autowidth-label">{title}</InputLabel>
      <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        value={currentValue}
        onChange={handleChange}
        label={title}
        name={name}
      >
        <MenuItem value="empty">Усі варіанти</MenuItem>

        {valueArray.map((elem) => (
          <MenuItem key={elem.id} value={elem.name}>
            {elem.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
