import { bankCodeToName } from './helpers/bankCodes';
import { getCheckDigit } from './helpers/getCheckDigit';

export const getPossibleBanks = (accountNumber: string): Array<{ bankCode: string; bankName: string }> => {

  let possibleBanks: Array<{ bankCode: string; bankName: string }> = [];

  const numbers = accountNumber.split('');

  for (const bankCode in bankCodeToName) {
    if (bankCodeToName.hasOwnProperty(bankCode)) {
      const isMatch = getCheckDigit([...bankCode], numbers);
      if (isMatch) {
        possibleBanks.push({ bankCode, bankName: bankCodeToName[bankCode] });
      }
    }
  }

  return possibleBanks;
};

// console.log(getPossibleBanks('3046778959'))