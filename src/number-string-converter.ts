// Used for digits under 20 to simplify exception with teen numbers
export const getUnderTwenty = (number: number) => {
  switch (number) {
    case 0: {
      return "zero";
    }
    case 1: {
      return "one";
    }
    case 2: {
      return "two";
    }
    case 3: {
      return "three";
    }
    case 4: {
      return "four";
    }
    case 5: {
      return "five";
    }
    case 6: {
      return "six";
    }
    case 7: {
      return "seven";
    }
    case 8: {
      return "eight";
    }
    case 9: {
      return "nine";
    }
    case 10: {
      return "ten";
    }
    case 11: {
      return "eleven";
    }
    case 12: {
      return "twelve";
    }
    case 13: {
      return "thirteen";
    }
    case 14: {
      return "fourteen";
    }
    case 15: {
      return "fifteen";
    }
    case 16: {
      return "sixteen";
    }
    case 17: {
      return "seventeen";
    }
    case 18: {
      return "eightteen";
    }
    case 19: {
      return "nineteen";
    }
  }
};

//used to build out numbers twenty and up
export const getOnes = (digit: number) => {
  switch (digit) {
    case 0: {
      return "";
    }
    case 1: {
      return "one";
    }
    case 2: {
      return "two";
    }
    case 3: {
      return "three";
    }
    case 4: {
      return "four";
    }
    case 5: {
      return "five";
    }
    case 6: {
      return "six";
    }
    case 7: {
      return "seven";
    }
    case 8: {
      return "eight";
    }
    case 9: {
      return "nine";
    }
  }
};

//used to build out numbers twenty and up
export const getTenths = (digit: number) => {
  switch (digit) {
    case 2: {
      return "twenty";
    }
    case 3: {
      return "thirty";
    }
    case 4: {
      return "forty";
    }
    case 5: {
      return "fifty";
    }
    case 6: {
      return "sixty";
    }
    case 7: {
      return "seventy";
    }
    case 8: {
      return "eighty";
    }
    case 9: {
      return "ninety";
    }
  }
};

//used to build out numbers twenty and up
export const getHundreds = (digit: number) => {
  switch (digit) {
    case 0: {
      return "";
    }
    case 1: {
      return "one hundred";
    }
    case 2: {
      return "two hundred";
    }
    case 3: {
      return "three hundred";
    }
    case 4: {
      return "four hundred";
    }
    case 5: {
      return "five hundred";
    }
    case 6: {
      return "six hundred";
    }
    case 7: {
      return "seven hundred";
    }
    case 8: {
      return "eight hundred";
    }
    case 9: {
      return "nine hundred";
    }
  }
};

export const getThousands = (digit: number) => {};
