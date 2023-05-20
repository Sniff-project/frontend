import React, { useMemo } from "react";
import MenuItem from "@mui/material/MenuItem";
import { DefaultInput, SelectInput } from "@components/ui";

const getValueByLabel = (label, options) =>
  options.find((option) => option.label === label)?.value || null;

const genderSelect = [
  {
    value: "MALE",
    label: "Чоловіча",
  },
  {
    value: "FEMALE",
    label: "Жіноча",
  },
  {
    value: "UNKNOWN",
    label: "Невідомо",
  },
];

const statusSelect = [
  {
    value: "LOST",
    label: "Загублено",
  },
  {
    value: "FOUND",
    label: "Знайдено",
  },
];

const EditBlock = ({ name, gender, foundOrLostDate, status }) => {
  const data = useMemo(
    () => [
      {
        name: "name",
        label: "Ім'я",
        value: name,
        validation: {
          required: true,
          minLength: {
            value: 3,
            message: "Мінімальна довжина імені 3 символи!",
          },
          maxLength: {
            value: 25,
            message: "Максимальна довжина імені 25 символів!",
          },
        },
      },
      {
        name: "gender",
        label: "Стать",
        select: genderSelect,
        value: getValueByLabel(gender, genderSelect),
        validation: {
          required: true,
        },
        sx: { marginTop: "16px" },
      },
      {
        name: "status",
        label: "Статус",
        select: statusSelect,
        value: getValueByLabel(status, statusSelect),
        validation: {
          required: true,
        },
        sx: { marginTop: "16px" },
      },
      {
        name: "foundOrLostDate",
        label: `Коли ${status}`,
        value: foundOrLostDate,
        validation: {
          required: true,
        },
        sx: { marginTop: "16px" },
      },
    ],
    [foundOrLostDate, gender, name, status]
  );
  return (
    <>
      {data.map((item, index) => (
        <React.Fragment key={item.name}>
          {!item.select?.length > 0 ? (
            <DefaultInput
              type="text"
              name={item.name}
              label={item.label}
              defaultValue={item.value}
              tabIndex={index + 1}
              validation={item.validation}
              sx={item.sx}
            />
          ) : (
            <SelectInput
              name={item.name}
              label={item.label}
              defaultValue={item.value}
              tabIndex={index + 1}
              validation={item.validation}
              sx={item.sx}>
              {item.select.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </SelectInput>
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export default EditBlock;
