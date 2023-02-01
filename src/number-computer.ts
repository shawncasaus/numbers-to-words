import {
  getTensHelper,
  getHundredsHelper,
  getThousandsHelper,
} from "./helpers";
import { getUnderTwenty, getHundreds } from "./number-string-converter";

const getNumberString = (digits: number[]) => {
  let returnString = "";

  if (digits.length === 1) {
    returnString = getUnderTwenty(digits[0]);
  } else if (digits.length === 2) {
    returnString = getTensHelper(digits);
  } else if (digits.length === 3) {
    returnString = `${getHundreds(digits[0])}${getHundredsHelper([
      digits[1],
      digits[2],
    ])}`;
  } else if (digits.length === 4) {
    returnString = getThousandsHelper([digits[0]]);
    if (digits[1] !== 0 || digits[2] !== 0 || digits[3] !== 0) {
      returnString +=
        digits[1] === 0
          ? `, ${getTensHelper([digits[2], digits[3]])}`
          : `, ${getHundreds(digits[1])}${getHundredsHelper([
              digits[2],
              digits[3],
            ])}`;
    }
  } else if (digits.length === 5) {
    returnString = getThousandsHelper([digits[0], digits[1]]);
    if (digits[2] !== 0 || digits[3] !== 0 || digits[4] != 0) {
      returnString +=
        digits[2] === 0
          ? `, ${getTensHelper([digits[3], digits[4]])}`
          : `, ${getHundreds(digits[2])}${getHundredsHelper([
              digits[3],
              digits[4],
            ])}`;
    }
  } else if (digits.length === 6) {
    returnString = "one hundred thousand";
  }

  return returnString;
};

export default getNumberString;
