import React from "react";
import { Table, TableBody } from "@mui/material";
import { STableRow, STableCell } from "./styles";

const ViewBlock = ({ name, gender, foundOrLostDate, status }) => {
  const data = [
    { label: "Мене звати", value: name },
    { label: "Стать", value: gender },
    {
      label: status === "FOUND" ? "Мене знайшли" : "Мене загубили",
      value: foundOrLostDate,
    },
  ];
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
