import React from "react";
import { useCallback } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

import EditDescription from "./EditDescription";
import Skelet from "./Skelet";

const MyHistoryBlock = ({
  description,
  isLoading,
  isPetOwner,
  button,
  isEdit,
  onSave,
  margin = 0,
}) => {
  const methods = useForm({ mode: "all" });

  const onSaveHandler = useCallback(
    (formData) => {
      return onSave(formData);
    },
    [onSave]
  );

  return (
    <SBox className="pet-profile__petHistory" margin={margin}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSaveHandler)}>
          <Grid container alignItems="center" justifyContent="center">
            <Grid item>
              <h3>Моя історія</h3>
            </Grid>
            {isPetOwner && <Grid item>{button}</Grid>}
          </Grid>
          <Typography
            fontSize="1.25rem"
            lineHeight="180%"
            mt={4}
            sx={{ textAlign: "justify" }}
            component="div">
            {!isLoading ? (
              <React.Fragment>
                {!isEdit ? (
                  <>{description}</>
                ) : (
                  <EditDescription description={description} />
                )}
              </React.Fragment>
            ) : (
              <Skelet />
            )}
          </Typography>
        </form>
      </FormProvider>
    </SBox>
  );
};

const SBox = styled(Box)`
  h3 {
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.4375rem;
    text-align: center;
    color: #000000;
    margin: 0;
  }
`;

export default MyHistoryBlock;
