import { useState } from "react";

/**
 * DateInput Component
 * Renders a date picker with calculate button and validation.
 *
 * Props:
 *   - onCalculate (function): Callback receiving the selected date string
 */
function DateInput({ onCalculate }) {
  const [inputDate, setInputDate] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputDate) {
      setError("Please select your date of birth.");
      return;
    }

    const selectedDate = new Date(inputDate);
    const today = new Date();

    if (selectedDate > today) {
      setError("Date of birth cannot be in the future.");
      return;
    }

    const minDate = new Date("1900-01-01");
    if (selectedDate < minDate) {
      setError("Date must be after January 1, 1900.");
      return;
    }

    setError("");
    onCalculate(inputDate);
  };

  const handleChange = (e) => {
    setInputDate(e.target.value);
    if (error) setError(""); // Clear error on new input
  };

  // Get today's date in YYYY-MM-DD format for max attribute
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="glass-card date-input-card">
      <p className="date-input-card__label">When were you born?</p>
      <p className="date-input-card__hint">
        Select your date of birth to calculate your exact age
      </p>
      <form onSubmit={handleSubmit}>
        <div className="date-input-card__row">
          <input
            type="date"
            className="date-input-card__input"
            value={inputDate}
            onChange={handleChange}
            max={today}
            min="1900-01-01"
            id="dob-input"
            aria-label="Date of birth"
          />
          <button type="submit" className="btn-calculate" id="calculate-btn">
            Calculate Age
          </button>
        </div>
      </form>
      {error && <p className="error-message" role="alert">{error}</p>}
    </div>
  );
}

export default DateInput;
