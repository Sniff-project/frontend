import { memo } from "react";
import { Skeleton } from "@mui/material";

const MemoSkel = memo(Skeleton);

const Skelet = () => {
  return (
    <>
      {[...Array(3)].map((_, i) => (
        <MemoSkel
          key={i}
          variant="rounded"
          height="2rem"
          sx={{ marginBottom: "0.625rem" }}
        />
      ))}
    </>
  );
};

export default Skelet;
