import React, { useMemo } from "react";
import { Table, TableBody } from "@mui/material";
import { STableRow, STableCell } from "./styles";
import dayjs from "dayjs";

const ViewBlock = ({ name, gender, foundOrLostDate, status }) => {
  const data = useMemo(
    () => [
      { label: "Мене звати", value: name },
      { label: "Стать", value: gender },
      {
        label: status === "Знайдено" ? "Мене знайшли" : "Мене загубили",
        value: dayjs(foundOrLostDate).format("DD.MM.YYYY"),
      },
    ],
    [foundOrLostDate, gender, name, status]
  );
  return (
    <Table>
      <TableBody>
        {data.map((item) => (
          <React.Fragment key={item.label}>
            <STableRow>
              <STableCell>{item.label}</STableCell>
              <STableCell>{item.value}</STableCell>
            </STableRow>
          </React.Fragment>
        ))}
      </TableBody>
    </Table>
  );
};

export default ViewBlock;
