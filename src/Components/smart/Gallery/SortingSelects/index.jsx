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
const filterState = "filterState";

export default function SortingSelects({ handleIsChanged, currentSlideIndex }) {
  const dispatch = useDispatch();
  const cities_Array = useSelector(({ cities }) => cities.cities.citiesArray);
  const regions_Array = useSelector(
    ({ regions }) => regions.regions.regionsArray
  );

  const [globalState, setGlobalState] = useState(() => {
    const storedState = localStorage.getItem(filterState);
    return storedState
      ? JSON.parse(storedState)
      : {
          region: "",
          city: "",
          status: "",
          page: 0,
        };
  });

  useEffect(() => {
    setGlobalState((prev) => {
      return {
        ...prev,
        page: currentSlideIndex,
      };
    });
  }, [currentSlideIndex]);

  useEffect(() => {
    if (!cities_Array?.length || !regions_Array?.length) {
      dispatch(getCities());
      dispatch(getRegions());
    }
  }, [dispatch, cities_Array?.length, regions_Array?.length]);

  useEffect(() => {
    localStorage.setItem(filterState, JSON.stringify(globalState));
    const url = `page=${globalState.page}&status=${globalState.status}&regionId=${globalState.region}&cityId=${globalState.city}`;
    dispatch(petsGallery(url, true));
  }, [globalState, dispatch]);

  const handleChangeFilter = (choice) => {
    switch (choice.name) {
      case "status":
        setGlobalState({ ...globalState, status: choice.value });
        break;
      case "city":
        setGlobalState({ ...globalState, city: choice.value });
        break;
      case "region":
        setGlobalState({ ...globalState, region: choice.value });
        break;
      default:
        return;
    }
    handleIsChanged();
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
            { name: "Знайдено", id: "FOUND" },
            { name: "Загублено", id: "LOST" },
          ]}
          title={"Статус"}
          setGlobalState={setGlobalState}
          globalState={globalState}
        />
      </div>
    </div>
  );
}
