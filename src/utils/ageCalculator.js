/**
 * Age Calculator Utility Functions
 * Pure functions for date calculations — no side effects.
 */

/**
 * Calculates exact age in years, months, and days.
 * @param {Date} dob - Date of birth
 * @returns {{ years: number, months: number, days: number }}
 */
export function calculateAge(dob) {
  const today = new Date();
  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return { years, months, days };
}

/**
 * Returns detailed breakdown of age in various units.
 * @param {Date} dob - Date of birth
 * @returns {{ totalMonths: number, totalWeeks: number, totalDays: number, totalHours: number, totalMinutes: number }}
 */
export function getDetailedBreakdown(dob) {
  const today = new Date();
  const diffMs = today.getTime() - dob.getTime();

  const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const totalWeeks = Math.floor(totalDays / 7);
  const totalMonths =
    (today.getFullYear() - dob.getFullYear()) * 12 +
    (today.getMonth() - dob.getMonth());
  const totalHours = Math.floor(diffMs / (1000 * 60 * 60));
  const totalMinutes = Math.floor(diffMs / (1000 * 60));

  return { totalMonths, totalWeeks, totalDays, totalHours, totalMinutes };
}

/**
 * Calculates next birthday date and days remaining.
 * @param {Date} dob - Date of birth
 * @returns {{ date: Date, daysLeft: number, isBirthdayToday: boolean }}
 */
export function getNextBirthday(dob) {
  const today = new Date();
  let nextBirthday = new Date(
    today.getFullYear(),
    dob.getMonth(),
    dob.getDate()
  );

  // If birthday has already passed this year, move to next year
  if (nextBirthday <= today) {
    // Check if it's today
    if (
      nextBirthday.getDate() === today.getDate() &&
      nextBirthday.getMonth() === today.getMonth() &&
      nextBirthday.getFullYear() === today.getFullYear()
    ) {
      return { date: nextBirthday, daysLeft: 0, isBirthdayToday: true };
    }
    nextBirthday.setFullYear(today.getFullYear() + 1);
  }

  const diffMs = nextBirthday.getTime() - today.getTime();
  const daysLeft = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

  return { date: nextBirthday, daysLeft, isBirthdayToday: false };
}

/**
 * Returns fun facts about the birth date.
 * @param {Date} dob - Date of birth
 * @returns {Array<{label: string, value: string, icon: string}>}
 */
export function getFunFacts(dob) {
  const facts = [];

  // Day of the week born
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  facts.push({
    label: "Born On",
    value: dayNames[dob.getDay()],
    icon: "📅",
  });

  // Zodiac sign
  facts.push({
    label: "Zodiac Sign",
    value: getZodiacSign(dob.getMonth(), dob.getDate()),
    icon: "⭐",
  });

  // Season
  facts.push({
    label: "Birth Season",
    value: getSeason(dob.getMonth()),
    icon: "🌤️",
  });

  // Leap year
  const year = dob.getFullYear();
  const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  facts.push({
    label: "Leap Year Baby",
    value: isLeap ? "Yes! 🎉" : "No",
    icon: "🗓️",
  });

  // Generation
  facts.push({
    label: "Generation",
    value: getGeneration(year),
    icon: "👥",
  });

  return facts;
}

/**
 * Determines zodiac sign from month and day.
 */
function getZodiacSign(month, day) {
  const signs = [
    { name: "Capricorn ♑", end: { month: 0, day: 19 } },
    { name: "Aquarius ♒", end: { month: 1, day: 18 } },
    { name: "Pisces ♓", end: { month: 2, day: 20 } },
    { name: "Aries ♈", end: { month: 3, day: 19 } },
    { name: "Taurus ♉", end: { month: 4, day: 20 } },
    { name: "Gemini ♊", end: { month: 5, day: 20 } },
    { name: "Cancer ♋", end: { month: 6, day: 22 } },
    { name: "Leo ♌", end: { month: 7, day: 22 } },
    { name: "Virgo ♍", end: { month: 8, day: 22 } },
    { name: "Libra ♎", end: { month: 9, day: 22 } },
    { name: "Scorpio ♏", end: { month: 10, day: 21 } },
    { name: "Sagittarius ♐", end: { month: 11, day: 21 } },
  ];

  for (const sign of signs) {
    if (month <= sign.end.month) {
      if (month < sign.end.month || day <= sign.end.day) {
        return sign.name;
      }
    }
  }
  return "Capricorn ♑";
}

/**
 * Determines season from month (Northern Hemisphere / India).
 */
function getSeason(month) {
  if (month >= 2 && month <= 4) return "🌸 Spring";
  if (month >= 5 && month <= 7) return "☀️ Summer";
  if (month >= 8 && month <= 10) return "🍂 Autumn";
  return "❄️ Winter";
}

/**
 * Determines generation from birth year.
 */
function getGeneration(year) {
  if (year >= 2013) return "Gen Alpha";
  if (year >= 1997) return "Gen Z";
  if (year >= 1981) return "Millennial";
  if (year >= 1965) return "Gen X";
  if (year >= 1946) return "Baby Boomer";
  return "Silent Generation";
}

/**
 * Validates a date of birth input.
 * @param {string} dateString - Date string to validate
 * @returns {{ valid: boolean, error: string | null, date: Date | null }}
 */
export function validateDOB(dateString) {
  if (!dateString) {
    return { valid: false, error: "Please select your date of birth.", date: null };
  }

  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return { valid: false, error: "Invalid date format.", date: null };
  }

  const today = new Date();
  if (date > today) {
    return { valid: false, error: "Date of birth cannot be in the future.", date: null };
  }

  const minDate = new Date("1900-01-01");
  if (date < minDate) {
    return { valid: false, error: "Date of birth must be after January 1, 1900.", date: null };
  }

  return { valid: true, error: null, date };
}
