import { Box, Table, TableBody, TableCell, TableRow } from "@mui/material";
import { styled } from "@mui/system";

const AboutMeBlock = ({
  name,
  city,
  gender,
  foundOrLostDate,
  status,
  margin = 0,
}) => {
  const data = [
    { label: "Мене звати", value: name },
    { label: "Я з міста", value: city || "Невідомо" },
    { label: "Стать", value: gender },
    {
      label: status === "FOUND" ? "Мене знайшли" : "Мене загубили",
      value: foundOrLostDate,
    },
  ];

  return (
    <SBox className="pet-profile__aboutPet" margin={margin}>
      <h3>Про мене</h3>
      <Table sx={{ marginTop: "2.125rem" }}>
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
  h3 {
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.4375rem;
    text-align: center;
    color: #000000;
    margin: 0;
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
  font-size: 1.25rem;
  line-height: 1.5rem;

  color: #000000;
`;

export default AboutMeBlock;
