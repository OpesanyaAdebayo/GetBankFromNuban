import { getPossibleBanks } from './getBanks';
import { getCheckDigit } from "./helpers/getCheckDigit";

test('should return at least one correct bank code and account number.', () => {
    const possibleBanks = getPossibleBanks('3046778959').find(bank => bank.bankName === 'First Bank of Nigeria' )
    expect(possibleBanks).toMatchObject({ bankCode: '011', bankName: 'First Bank of Nigeria' });
});

test('getCheckDigit should return true if account number and bank code match', () => {
    const result = getCheckDigit('011'.split(''), '3046778959'.split(''));
    expect(result).toBe(true);
});

test('getCheckDigit should return false if account number and bank code do not match', () => {
    const result = getCheckDigit('011'.split('058'), '3046778959'.split(''));
    expect(result).toBe(false);
});