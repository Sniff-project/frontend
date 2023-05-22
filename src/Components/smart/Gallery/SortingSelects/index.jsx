import React, { useContext, useEffect, useState } from "react";
import { SelectComponent } from "@components/ui";
import { useDispatch, useSelector } from "react-redux";
import { petsGallery } from "@core/Services/pets";
import { AuthContext } from "@contexts";
import {
  cities as getCities,
  regions as getRegions,
} from "@core/Services/users";
import "./styles.scss";

const STATUS = "status";
const CITY = "city";
const REGION = "region";
const FOUND = "Знайдено";
const LOST = "Загублено";

export default function SortingSelects() {
  const { user, token } = useContext(AuthContext);
  const dispatch = useDispatch();
  const cities_Array = useSelector(({ cities }) => cities.cities.citiesArray);
  const regions_Array = useSelector(
    ({ regions }) => regions.regions.regionsArray
  );

  useEffect(() => {
    if (user && token && !cities_Array && !regions_Array) {
      dispatch(getCities({ token }));
      dispatch(getRegions({ token }));
    }
  }, [dispatch, user, token]);

  const handleChangeFilter = (choice) => {
    switch (choice.name) {
      case STATUS:
        if (choice.value === FOUND)
          dispatch(petsGallery(token, "FOUND", choice.name));
        else if (choice.value === LOST)
          dispatch(petsGallery(token, "LOST", choice.name));
        else dispatch(petsGallery(token));
        return;
      default:
        return;
    }
  };

  return (
    <div className="gallery-selectors">
      <div className="gallery-selectors__item">
        <SelectComponent
          handleChangeFilter={handleChangeFilter}
          valueArray={regions_Array?.length ? regions_Array : []}
          name={REGION}
          title={"Область"}
        />
      </div>
      <div className="gallery-selectors__item">
        <SelectComponent
          handleChangeFilter={handleChangeFilter}
          valueArray={cities_Array?.length ? cities_Array : []}
          name={CITY}
          title={"Місто"}
        />
      </div>
      <div className="gallery-selectors__item">
        <SelectComponent
          handleChangeFilter={handleChangeFilter}
          name={STATUS}
          valueArray={[
            { name: "Знайдено", id: 1 },
            { name: "Загублено", id: 2 },
          ]}
          title={"Статус"}
        />
      </div>
    </div>
  );
}
