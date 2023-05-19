import { FormProvider } from "react-hook-form";
import { Box, Grid, Skeleton, Typography } from "@mui/material";
import { styled } from "@mui/system";
import withEditState from "./withEditState";
import { DefaultInput } from "@components/ui";

const Skelet = () => {
  return (
    <>
      {[...Array(3)].map((_, i) => (
        <Skeleton
          key={i}
          variant="rounded"
          height="2rem"
          sx={{ marginBottom: "0.625rem" }}
        />
      ))}
    </>
  );
};

const MyHistoryBlock = withEditState(
  ({
    button,
    description,
    isLoading,
    isPetOwner,
    margin = 0,
    isEdit,
    methods,
    onSubmitHandler,
    formRef,
  }) => {
    return (
      <SBox className="pet-profile__petHistory" margin={margin}>
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
            <>
              {!isEdit ? (
                <>{description}</>
              ) : (
                <FormProvider {...methods}>
                  <form
                    onSubmit={methods.handleSubmit(onSubmitHandler)}
                    ref={formRef}>
                    <DefaultInput
                      type="text"
                      name="description"
                      label="Опис"
                      multiline
                      defaultValue={description}
                      tabIndex={1}
                      validation={{
                        required: true,
                        minLength: {
                          value: 20,
                          message: "Мінімальна довжина опису 20 символів!",
                        },
                        maxLength: {
                          value: 250,
                          message: "Максимальна довжина опису 250 символів!",
                        },
                      }}
                    />
                  </form>
                </FormProvider>
              )}
            </>
          ) : (
            <Skelet />
          )}
        </Typography>
      </SBox>
    );
  }
);

// validation={{
//   required: true,
//   minLength: { value: 20, message: "Дуже коротка історія!" },
//   maxLength: { value: 250, message: "Дуже довга історія!" },
// }}

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
