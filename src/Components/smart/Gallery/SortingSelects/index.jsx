import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { petsGallery } from "@core/Services/pets";
import {
  cities as getCities,
  regions as getRegions,
} from "@core/Services/users";
import "./styles.scss";
import {SelectComponent} from "@components/ui";

const STATUS = "status";
const CITY = "city";
const REGION = "region";
const FOUND = "Знайдено";
const LOST = "Загублено";

export default function SortingSelects({setIsChanged}) {
  const dispatch = useDispatch();
  const cities_Array = useSelector(({ cities }) => cities.cities.citiesArray);
  const regions_Array = useSelector(
    ({ regions }) => regions.regions.regionsArray
  );

  useEffect(() => {
    if (!cities_Array?.length || !regions_Array?.length) {
      dispatch(getCities());
      dispatch(getRegions());
    }
  }, [dispatch]);

  const handleChangeFilter = (choice) => {
    setIsChanged(true);

    switch (choice.name) {
      case STATUS:
        if (choice.value === FOUND)
          dispatch(petsGallery("FOUND", choice.name));
        else if (choice.value === LOST)
          dispatch(petsGallery("LOST", choice.name));
        else dispatch(petsGallery());
        return;
      case CITY:

        return
      case REGION:
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
