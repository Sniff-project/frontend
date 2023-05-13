import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const MyHistoryBlock = ({ margin = 0 }) => {
  const history =
    "Я Максим, мені 2 роки. Мене знайшли 14.04.2023 на вулиці Пушкінська біля закладу Буфет. В мене гарна м’яка шерсть та я дуже люблю гратись.";

  return (
    <SBox className="pet-profile__petHistory" margin={margin}>
      <h3>Моя історія</h3>
      <Typography fontSize="1.25rem" lineHeight="180%" mt={4}>
        {history}
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
