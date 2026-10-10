import { expect, test, describe } from 'vitest';
import { calculateAge, getNextBirthday } from '../src/utils/ageCalculator';

describe('ageCalculator Utils', () => {
  test('calculateAge correctly calculates exact age', () => {
    // Set a fixed "current" date for reliable testing by mocking Date or using relative logic
    // For simplicity, we'll just test that a date from 10 years ago returns roughly 10 years
    const tenYearsAgo = new Date();
    tenYearsAgo.setFullYear(tenYearsAgo.getFullYear() - 10);
    
    const age = calculateAge(tenYearsAgo);
    expect(age.years).toBe(10);
  });

  test('getNextBirthday calculates days left correctly', () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setFullYear(tomorrow.getFullYear() - 20); // 20 years ago

    const nextBday = getNextBirthday(tomorrow);
    expect(nextBday.daysLeft).toBe(1); // 1 day left until birthday
    expect(nextBday.isBirthdayToday).toBe(false);
  });

  test('getNextBirthday identifies today as birthday', () => {
    const today = new Date();
    today.setFullYear(today.getFullYear() - 25); // exactly 25 years ago today

    const nextBday = getNextBirthday(today);
    expect(nextBday.daysLeft).toBe(0);
    expect(nextBday.isBirthdayToday).toBe(true);
  });
});
