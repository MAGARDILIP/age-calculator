/**
 * Fetch a historical fact about a specific year from Numbers API.
 * Uses CORS proxy or direct fetch depending on the API's CORS policy.
 */
export const fetchYearFact = async (year) => {
  try {
    // Using an HTTPS proxy to avoid mixed-content blocks on Vercel
    const response = await fetch(`https://corsproxy.io/?http://numbersapi.com/${year}/year`);
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const text = await response.text();
    return text;
  } catch (error) {
    console.error("Failed to fetch year fact:", error);
    // Return null so the component can handle the error state fallback
    return null; 
  }
};
