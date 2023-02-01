#!/usr/bin/env node
import * as readline from "readline";
import * as minimist from "minimist";
import getNumberString from "./number-computer";

const argv = minimist(process.argv.slice(2));

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getValidNumberArray = (args: any) => {
  const argsArray = args?._;
  const validNumbers: string[] = [];

  for (var i = 0; i < argsArray.length; i++) {
    if (typeof argsArray[i] === "number") {
      if (argsArray[i] >= 0 && argsArray[i] <= 100000) {
        validNumbers.push(argsArray[i]);
      }
    }
  }

  if (validNumbers.length === 0 || validNumbers.length > 1) {
    return [];
  }

  return validNumbers;
};

const getDigits = (number: string) => {
  const digits = number.toString().split("");
  return digits.map(Number);
};

const getValidNumbers = getValidNumberArray(argv);

if (getValidNumbers.length === 0) {
  process.stderr.write(
    "Sorry invalid input, please enter one number between 0 and 100,000.\n"
  );
  process.exit(1);
} else {
  const inputNumber = getValidNumbers[0];
  const digits = getDigits(inputNumber);
  const output = getNumberString(digits);
  console.log(output);
  rl.close();
}
