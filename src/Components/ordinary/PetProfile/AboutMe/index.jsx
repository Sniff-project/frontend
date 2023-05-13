import { Box, Table, TableBody, TableCell, TableRow } from "@mui/material";
import { styled } from "@mui/system";

const AboutMeBlock = ({ name, city, breed, dataOfFound, margin = 0 }) => {
  const data = [
    { label: "Мене звати", value: "Максим" },
    { label: "Я з міста", value: "Харків, Харківська обл." },
    { label: "Стать", value: "Хлопчик/Дівчинка/Невідомо" },
    { label: "Мене знайшли", value: "14.04.2022" },
  ];

  return (
    <SBox className="pet-profile__aboutPet" margin={margin}>
      <h3>Про мене</h3>
      <Table sx={{ marginTop: 10 }}>
        <TableBody>
          {data.map((item) => (
            <STableRow key={item.label}>
              <STableCell>{item.label}</STableCell>
              <STableCell>{item.value}</STableCell>
            </STableRow>
          ))}
        </TableBody>
      </Table>
    </SBox>
  );
};

const SBox = styled(Box)`
  & {
    h3 {
      font-weight: 400;
      font-size: 32px;
      line-height: 39px;
      text-align: center;
      color: #000000;
    }
  }
`;

const STableRow = styled(TableRow)`
  position: relative;

  &:after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.3) -0.71%,
      rgba(0, 0, 0, 0) 84.44%
    );
  }
`;

const STableCell = styled(TableCell)`
  border-bottom: none;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  color: #000000;
`;

export default AboutMeBlock;
