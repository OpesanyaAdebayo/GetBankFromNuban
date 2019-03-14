export const getDigit = (total: number): number => {
  const modulo = total % 10;

  let checkDigit: number;

  if (modulo === 0) {
    checkDigit = 0;
  } else {
    checkDigit = 10 - modulo;
  }

  return checkDigit;
};
