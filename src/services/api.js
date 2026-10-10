/**
 * Fetch a historical fact about a specific year from Numbers API.
 * Uses CORS proxy or direct fetch depending on the API's CORS policy.
 */
export const fetchYearFact = async (year) => {
  try {
    // Wikipedia API is highly reliable, supports HTTPS natively, and avoids CORS proxies completely
    const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${year}`);
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data.extract;
  } catch (error) {
    console.error("Failed to fetch year fact:", error);
    // Provide a proper fallback message instead of throwing an error
    const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    return `The year ${year} is a ${isLeap ? 'leap' : 'common'} year in the Gregorian calendar. It holds its own unique place in world history, full of fascinating cultural and scientific milestones!`;
  }
};
