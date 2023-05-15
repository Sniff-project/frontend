import { Box, Skeleton, Typography } from "@mui/material";
import { styled } from "@mui/system";

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

const MyHistoryBlock = ({ description, isLoading, margin = 0 }) => {
  return (
    <SBox className="pet-profile__petHistory" margin={margin}>
      <h3>Моя історія</h3>

      <Typography fontSize="1.25rem" lineHeight="180%" mt={4}>
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
