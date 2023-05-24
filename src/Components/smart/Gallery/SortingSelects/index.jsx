import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { petsGallery } from "@core/Services/pets";
import {
  cities as getCities,
  regions as getRegions,
} from "@core/Services/users";
import "./styles.scss";
import { SelectComponent } from "@components/ui";

const STATUS = "status";
const CITY = "city";
const REGION = "region";
const FOUND = "Знайдено";
const LOST = "Загублено";
const filterState = "filterState";

export default function SortingSelects({ setIsChanged }) {
  const dispatch = useDispatch();
  const cities_Array = useSelector(({ cities }) => cities.cities.citiesArray);
  const regions_Array = useSelector(
    ({ regions }) => regions.regions.regionsArray
  );
  const [globalState, setGlobalState] = useState("");

  useEffect(() => {
    const storedGalleryArray = localStorage.getItem(filterState);
    if (storedGalleryArray) {
      setGlobalState(JSON.parse(storedGalleryArray));
    }
  }, []);

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
        if (choice.value === FOUND) dispatch(petsGallery("FOUND", choice.name));
        else if (choice.value === LOST)
          dispatch(petsGallery("LOST", choice.name));
        else dispatch(petsGallery());
        return;
      case CITY:
        if(choice.value === 'empty') {
          dispatch(petsGallery());
          return;
        }
        const cityId = cities_Array.find(city => city.name === choice.value).id;
        dispatch(petsGallery(cityId, choice.name));
        return;
      case REGION:
        if(choice.value === 'empty') {
          dispatch(petsGallery());
          return;
        }
        const regionId = regions_Array.find(region => region.name === choice.value).id;
        dispatch(petsGallery(regionId, choice.name));
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
          setGlobalState={setGlobalState}
          globalState={globalState}
        />
      </div>
      <div className="gallery-selectors__item">
        <SelectComponent
          handleChangeFilter={handleChangeFilter}
          valueArray={cities_Array?.length ? cities_Array : []}
          name={CITY}
          title={"Місто"}
          setGlobalState={setGlobalState}
          globalState={globalState}
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
          setGlobalState={setGlobalState}
          globalState={globalState}
        />
      </div>
    </div>
  );
}
