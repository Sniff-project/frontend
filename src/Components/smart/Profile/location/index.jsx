import React from "react";

export default function UserLocation({
  setCurrentCity,
  setCurrentRegion,
  cities_Array,
  regions_Array,
  currentCity,
  currentRegion
}) {

  return (
    <div className="editProfile-form__section">
      <div>
        <label>
          Місто
          <br></br>
          <select
            onChange={e => setCurrentCity(+e.target.value)}
            id="city"
            name="city"
            value={currentCity}
          >
            <option value="0">Не вказано</option>
            {cities_Array &&
              cities_Array.map((city) => (
                <option key={city.id} value={city.id}>
                  {city.name}
                </option>
              ))}
          </select>
        </label>
      </div>

      <div>
        <label>
          Область
          <br></br>
          <select
            onChange={e => setCurrentRegion(+e.target.value)}
            id="region"
            name="region"
            value={currentRegion}
          >
            <option value="0">Не вказано</option>
            {regions_Array &&
              regions_Array.map((region) => (
                <option key={region.id} value={region.id}>
                  {region.name}
                </option>
              ))}
          </select>
        </label>
      </div>
    </div>
  );
}
