/**
 * BirthdayCountdown Component
 * Shows days remaining until the next birthday, or a celebration if today is the birthday.
 * Demonstrates: Props, Conditional Rendering, JSX
 *
 * Props:
 *   - daysLeft (number)
 *   - nextBirthday (Date)
 *   - isBirthdayToday (boolean)
 */
function BirthdayCountdown({ daysLeft, nextBirthday, isBirthdayToday }) {
  const formatDate = (date) => {
    return date.toLocaleDateString("en-IN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="glass-card birthday-countdown">
      <h2 className="birthday-countdown__heading">Next Birthday</h2>

      {isBirthdayToday ? (
        <div className="birthday-countdown__today">
          <p className="birthday-countdown__today-text">
            🎉 Happy Birthday! 🎂
          </p>
        </div>
      ) : (
        <>
          <p className="birthday-countdown__days">{daysLeft}</p>
          <p className="birthday-countdown__label">days to go</p>
          <p className="birthday-countdown__date">
            📅 {formatDate(nextBirthday)}
          </p>
        </>
      )}
    </div>
  );
}

export default BirthdayCountdown;
