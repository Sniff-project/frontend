import React, { useEffect, useState } from "react";
import { Select, InputLabel, MenuItem, FormControl } from "@mui/material";
import "./styles.scss";

export default function SelectComponent({
  title,
  valueArray,
  handleChangeFilter,
  name,
  setGlobalState,
  globalState,
}) {
  const [currentValue, setCurrentValue] = useState("");
  const filterState = "filterState";

  useEffect(() => {
    if (typeof globalState === "object") {

      if (globalState.filter === name) {
        setCurrentValue(globalState.value);
      } else {
        setCurrentValue('');
      }

      setCurrentValue((prev) =>
        prev === globalState.value ? globalState.value : ""
      );

    }
  }, [globalState, name]);

  const handleChange = (event) => {
    setCurrentValue(event.target.value);
    handleChangeFilter(event.target);
    setGlobalState({ value: event.target.value, filter: name });
    const storeData = { value: event.target.value, filter: name };
    localStorage.setItem(filterState, JSON.stringify(storeData));
  };

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
