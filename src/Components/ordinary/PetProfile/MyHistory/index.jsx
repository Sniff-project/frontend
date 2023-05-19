import { Box, Grid, IconButton, Skeleton, Typography } from "@mui/material";
import { styled } from "@mui/system";

import EditRoundedIcon from "@mui/icons-material/EditRounded";

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

const MyHistoryBlock = ({ description, isLoading, isPetOwner, margin = 0 }) => {
  return (
    <SBox className="pet-profile__petHistory" margin={margin}>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item>
          <h3>Моя історія</h3>
        </Grid>
        {isPetOwner && (
          <Grid item>
            <IconButton aria-label="Редагувати" sx={{ marginTop: "0.25rem" }}>
              <EditRoundedIcon fontSize="small" />
            </IconButton>
          </Grid>
        )}
      </Grid>
      <Typography
        fontSize="1.25rem"
        lineHeight="180%"
        mt={4}
        sx={{ textAlign: "justify" }}>
        {!isLoading ? <>{description}</> : <Skelet />}
      </Typography>
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
