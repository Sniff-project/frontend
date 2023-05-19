import React from "react";
import { useEffect } from "react";
import { cities as getCities, regions as getRegions } from "@core/Services/users";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function UserLocation({ user, token, setCity, setRegion }) {
  const dispatch = useDispatch();
  const cities_Array = useSelector(({ cities }) => cities.cities.citiesArray);
  const regions_Array = useSelector(({ regions }) => regions.regions.regionsArray);

  useEffect(() => {
    if (user && token) {
      dispatch(getCities({ token }));
      dispatch(getRegions({ token }));
    }
  }, [dispatch, user, token]);

  return (
    <div className="editProfile-form__section">
      <div>
        <label>
          Місто
          <select
            onChange={(e) => setCity(e.target.value)}
            id="city"
            name="city"
          >
            <option value="0">Не вказано</option>
            {cities_Array && cities_Array.map(city => <option key={city.id} value={city.id}>{city.name}</option>)}
          </select>
        </label>
      </div>

      <div>
        <label>
          Область
          <select
            onChange={(e) => setRegion(e.target.value)}
            id="region"
            name="region"
          >
            <option value="0">Не вказано</option>
            {regions_Array && regions_Array.map(region => <option key={region.id} value={region.id}>{region.name}</option> )}
          </select>
        </label>
      </div>
    </div>
  );
}
