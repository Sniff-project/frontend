import React from "react";
import { Skeleton, Table, TableBody, TableRow } from "@mui/material";
import { STableCell } from "./styles";

const MemoSkel = React.memo(Skeleton);

const Skelet = () => {
  return (
    <Table>
      <TableBody>
        {[...Array(4)].map((_, i) => (
          <React.Fragment key={i}>
            <TableRow>
              <STableCell sx={{ padding: "0.75rem" }}>
                <MemoSkel variant="rounded" height="2rem" />
              </STableCell>
            </TableRow>
          </React.Fragment>
        ))}
      </TableBody>
    </Table>
  );
};

export default Skelet;
