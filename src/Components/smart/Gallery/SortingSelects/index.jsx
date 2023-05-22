import React from "react";
import { SelectComponent } from "@components/ui";

export default function SortingSelects() {
  return (
    <div>
      <SelectComponent valueArray={[1, 2, 3]} title={"Область"} />
      <SelectComponent valueArray={[4, 5, 6]} title={"Місто"} />
      <SelectComponent valueArray={[7, 8, 9]} title={"Тваринка"} />
    </div>
  );
}
