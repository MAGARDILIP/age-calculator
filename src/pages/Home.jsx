import { useState, useCallback } from "react";
import DateInput from "../components/DateInput";
import AgeResult from "../components/AgeResult";
import AgeBreakdown from "../components/AgeBreakdown";
import BirthdayCountdown from "../components/BirthdayCountdown";
import FunFacts from "../components/FunFacts";

import {
  calculateAge,
  getDetailedBreakdown,
  getNextBirthday,
  getFunFacts,
} from "../utils/ageCalculator";

const Home = () => {
  const [result, setResult] = useState(null);
  const [breakdown, setBreakdown] = useState(null);
  const [birthday, setBirthday] = useState(null);
  const [funFacts, setFunFacts] = useState(null);
  const [birthYear, setBirthYear] = useState(null);

  const handleCalculate = useCallback((dateString) => {
    const dob = new Date(dateString);

    const ageResult = calculateAge(dob);
    const breakdownResult = getDetailedBreakdown(dob);
    const birthdayResult = getNextBirthday(dob);
    const factsResult = getFunFacts(dob);

    setResult(ageResult);
    setBreakdown(breakdownResult);
    setBirthday(birthdayResult);
    setFunFacts(factsResult);
    setBirthYear(dob.getFullYear());
  }, []);

  return (
    <>
      <DateInput onCalculate={handleCalculate} />

      {result && (
        <>
          <div className="results-grid">
            <AgeResult
              years={result.years}
              months={result.months}
              days={result.days}
            />
            {breakdown && <AgeBreakdown breakdown={breakdown} />}
          </div>

          <div className="results-grid">
            {birthday && (
              <BirthdayCountdown
                daysLeft={birthday.daysLeft}
                nextBirthday={birthday.date}
                isBirthdayToday={birthday.isBirthdayToday}
              />
            )}
            {/* We will pass birthYear to FunFacts later to fetch external API data */}
            {funFacts && <FunFacts facts={funFacts} birthYear={birthYear} />}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
