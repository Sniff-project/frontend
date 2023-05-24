import dayjs from "dayjs";

export const toTitleCase = (str) => {
  return str
    .replace(/\b\w+/g, function (txt) {
      return (
        txt.charAt(0).toLocaleUpperCase() + txt.substr(1).toLocaleLowerCase()
      );
    })
    .trim();
};

export const dateToString = (date) => {
  return dayjs(date.$d).format("YYYY-MM-DD");
};
