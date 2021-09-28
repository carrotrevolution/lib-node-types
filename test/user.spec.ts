import {UserValidators} from '../src/user';

describe('UserValidators', () => {
  const CORRECT_EMAIL = 'email@gmail.com';
  const NOT_EMAIL = 'not email';

  const CORRECT_PW = 'Test1!@🥕';
  const TOO_LONG_PW =
    'PPPPPpppp1PPPPPpppp1PPPPPpppp1PPPPPpppp1PPPPPpppp1PPPPPpppp1PPPPPpppp1PPPPPpppp1PPPPPpppp1PPPPPpppp11PPPPPpppp1PPPPPpppp1PPPPPpppp1PPPPPpppp1PPPPPpppp1PPPPPpppp1PPPPPpppp1PPPPPpppp1PPPPPpppp1PPPPPpppp11PPPPPpppp1PPPPPpppp1PPPPPpppp1PPPPPpppp1PPPPPpppp1PPPPPpppp1PPPPPpppp1PPPPPpppp1PPPPPpppp1PPPPPpppp11';
  const TOO_SHORT_PW = 'Passwo2';

  /* const NO_LOWER_PW = 'PPPPP211';
  const NO_UPPER_PW = 'passwo211';
  const NO_NUM_PW = 'PPPPpppp'; */

  describe('Password', () => {
    it('should return true when passing in proper password', () => {
      expect(UserValidators.validPassword(CORRECT_PW)).toEqual(true);
    });

    it('should return false when passing in too long password', () => {
      expect(UserValidators.validPassword(TOO_LONG_PW)).toEqual(false);
    });

    it('should return false when passing in too short password', () => {
      expect(UserValidators.validPassword(TOO_SHORT_PW)).toEqual(false);
    });

    /* it('should return false when passing in no lowercase letters', () => {
      expect(UserValidators.validPassword(NO_LOWER_PW)).toEqual(false);
    });

    it('should return false when passing in no uppercase letters', () => {
      expect(UserValidators.validPassword(NO_UPPER_PW)).toEqual(false);
    });

    it('should return false when passing in no numbers', () => {
      expect(UserValidators.validPassword(NO_NUM_PW)).toEqual(false);
    }); */
  });

  describe('Email', () => {
    it('should return true when passing in proper email', () => {
      expect(UserValidators.validEmail(CORRECT_EMAIL)).toEqual(true);
    });

    it('should return false when passing in bad email', () => {
      expect(UserValidators.validEmail(NOT_EMAIL)).toEqual(false);
    });
  });
});
