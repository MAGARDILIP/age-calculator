/**
 * AgeResult Component
 * Displays calculated age in Years, Months, and Days.
 *
 * Props:
 *   - years (number)
 *   - months (number)
 *   - days (number)
 */
function AgeResult({ years, months, days }) {
  return (
    <div className="glass-card age-result">
      <h2 className="age-result__heading">Your Age</h2>
      <div className="age-result__values">
        <div className="age-result__unit">
          <span className="age-result__number">{years}</span>
          <span className="age-result__label">Years</span>
        </div>
        <span className="age-result__separator">:</span>
        <div className="age-result__unit">
          <span className="age-result__number">{months}</span>
          <span className="age-result__label">Months</span>
        </div>
        <span className="age-result__separator">:</span>
        <div className="age-result__unit">
          <span className="age-result__number">{days}</span>
          <span className="age-result__label">Days</span>
        </div>
      </div>
    </div>
  );
}

export default AgeResult;
