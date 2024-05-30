import { STATUS_TRANSLATIONS } from "../constants";

export const translateToHebrew = (status) => {
  return STATUS_TRANSLATIONS[status];
};

export const translateToEnglish = (status) => {
  return (
    Object.keys(STATUS_TRANSLATIONS).find(
      (key) => STATUS_TRANSLATIONS[key] === status
    ) ?? ""
  );
};
