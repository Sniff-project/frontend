import React from "react";
import MenuItem from "@mui/material/MenuItem";
import { DatePicker, DefaultInput, SelectInput } from "@components/ui";
import dayjs from "dayjs";

const getValueByLabel = (label, options) =>
  options.find((option) => option.label === label)?.value || null;

const genderSelect = [
  {
    value: "Чоловіча",
    label: "Чоловіча",
  },
  {
    value: "Жіноча",
    label: "Жіноча",
  },
  {
    value: "Невідомо",
    label: "Невідомо",
  },
];

const statusSelect = [
  {
    value: "Загублено",
    label: "Загублено",
  },
  {
    value: "Знайдено",
    label: "Знайдено",
  },
];

const minDate = new Date("2022-02-23");
const maxDate = new Date();

const EditBlock = ({ name, gender, foundOrLostDate, status }) => {
  return (
    <>
      <DefaultInput
        type="text"
        name="name"
        label="Ім'я"
        defaultValue={name}
        tabIndex={1}
        validation={{
          required: true,
          minLength: {
            value: 3,
            message: "Мінімальна довжина імені 3 символи!",
          },
          maxLength: {
            value: 25,
            message: "Максимальна довжина імені 25 символів!",
          },
        }}
      />
      <SelectInput
        name="gender"
        label="Стать"
        defaultValue={getValueByLabel(gender, genderSelect)}
        tabIndex={2}
        validation={{
          required: true,
        }}
        sx={{ marginTop: "16px" }}>
        {genderSelect.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </SelectInput>
      <SelectInput
        name="status"
        label="Статус"
        defaultValue={getValueByLabel(status, statusSelect)}
        tabIndex={3}
        validation={{
          required: true,
        }}
        sx={{ marginTop: "16px" }}>
        {statusSelect.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </SelectInput>
      <DatePicker
        name="foundOrLostDate"
        label={`Коли ${status}`}
        defaultValue={dayjs(foundOrLostDate)}
        maxDate={dayjs(maxDate)}
        minDate={dayjs(minDate)}
        validation={{
          required: true,
          validate: {
            futureDate: (value) =>
              dayjs(value).isBefore(dayjs(maxDate)) ||
              "Дата не може будти пізніша за сьогоднішню",
            pastDate: (value) =>
              dayjs(value).isAfter(dayjs(minDate)) ||
              `Дата повинна бути після ${dayjs(minDate).format("DD.MM.YYYY")}`,
          },
        }}
        sx={{ marginTop: "16px" }}
      />
    </>
  );
};

export default EditBlock;
