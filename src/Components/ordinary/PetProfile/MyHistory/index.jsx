import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const MyHistoryBlock = ({ description, margin = 0 }) => {
  return (
    <SBox className="pet-profile__petHistory" margin={margin}>
      <h3>Моя історія</h3>
      <Typography fontSize="1.25rem" lineHeight="180%" mt={4}>
        {description}
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
