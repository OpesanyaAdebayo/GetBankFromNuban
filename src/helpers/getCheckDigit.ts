import { getDigit } from "./getDigit";
export const getCheckDigit = (bankCode: string[], accountNumber: string[]) => {
  const bankCodeNumbers = bankCode.map(num => Number(num));

  const accountNumbers = accountNumber.map(num => Number(num));

  const [first, second, third] = bankCodeNumbers;

  const totalForBankCode = first * 3 + second * 7 + third * 3;

  const multipliers = [3, 7, 3, 3, 7, 3, 3, 7, 3];

  let totalForAccountNumbers: number = 0;

  for (let i = 0; i < 9; i++) {
    totalForAccountNumbers += accountNumbers[i] * multipliers[i];
  }

  const checkDigit = getDigit(totalForAccountNumbers + totalForBankCode);

  if (checkDigit === accountNumbers[9]) {
    return true;
  } else {
    return false;
  }
};
