import { useCallback } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Grid from "@mui/material/Grid";
import ViewBlock from "./ViewBlock";
import EditBlock from "./EditBlock";
import Skelet from "./Skelet";
import { SBox } from "./styles";

const AboutMeBlock = ({
  name,
  gender,
  foundOrLostDate,
  status,
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
    <SBox className="pet-profile__aboutPet" margin={margin}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSaveHandler)}>
          <Grid container alignItems="center" justifyContent="center">
            <Grid item>
              <h3>Про мене</h3>
            </Grid>
            {isPetOwner && <Grid item>{button}</Grid>}
          </Grid>
          <Grid container sx={{ marginTop: "2.125rem" }}>
            {!isLoading && name ? (
              <>
                {!isEdit ? (
                  <ViewBlock
                    name={name}
                    gender={gender}
                    foundOrLostDate={foundOrLostDate}
                    status={status}
                  />
                ) : (
                  <EditBlock
                    name={name}
                    gender={gender}
                    foundOrLostDate={foundOrLostDate}
                    status={status}
                  />
                )}
              </>
            ) : (
              <Skelet />
            )}
          </Grid>
        </form>
      </FormProvider>
    </SBox>
  );
};

export default AboutMeBlock;
