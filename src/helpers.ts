import { getTenths, getOnes, getUnderTwenty } from "./number-string-converter";

export const getTensHelper = (digits: number[]) => {
  if (digits[0] === 1 || digits[0] === 0) {
    const fullNumber = Number(`${digits[0]}${digits[1]}`);
    return getUnderTwenty(fullNumber);
  } else {
    return `${getTenths(digits[0])}${digits[1] === 0 ? "" : "-"}${getOnes(
      digits[1]
    )}`;
  }
};

export const getHundredsHelper = (digits: number[]) => {
  if (digits[0] === 0 && digits[1] === 0) {
    return "";
  } else if (digits[0] === 0) {
    return " and " + getUnderTwenty(digits[1]);
  } else {
    return " and " + getTensHelper(digits);
  }
};

export const getThousandsHelper = (digits: number[]) => {
  if (digits.length === 1) {
    return getUnderTwenty(digits[0]) + " thousand";
  } else if (digits.length === 2) {
    return getTensHelper(digits) + " thousand";
  }
};
