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
const EditBlock = ({
  name = "",
  gender = genderSelect[2].value,
  foundOrLostDate = new Date(),
  status = statusSelect[0].value,
}) => {
  return (
    <React.Fragment>
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
          pattern: {
            value: /^([а-яіїє'\s-]{3,25})$/i,
            message: "Ім'я може містити тільки українські літери!",
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
        label={`Коли знайшли/загубили`}
        defaultValue={dayjs(foundOrLostDate)}
        maxDate={dayjs()}
        minDate={dayjs(minDate)}
        validation={{
          required: true,
          validate: {
            futureDate: (value) =>
              dayjs(value).isBefore(dayjs()) ||
              "Дата не може будти пізніша за сьогоднішню",
            pastDate: (value) =>
              dayjs(value).isAfter(dayjs(minDate)) ||
              `Дата повинна бути після ${dayjs(minDate).format("DD.MM.YYYY")}`,
          },
        }}
        sx={{ marginTop: "16px" }}
      />
    </React.Fragment>
  );
};

export default EditBlock;
