/**
 * HistoryItem Component
 * Renders a single calculation history entry.
 * Demonstrates: Props, JSX
 *
 * Props:
 *   - entry (object): { id, dob, years, months, days, timestamp }
 */
function HistoryItem({ entry }) {
  const formatDOB = (dobString) => {
    const date = new Date(dobString);
    return date.toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="history-item">
      <div>
        <p className="history-item__dob">📅 {formatDOB(entry.dob)}</p>
        <p className="history-item__time">Calculated at {formatTime(entry.timestamp)}</p>
      </div>
      <p className="history-item__age">
        {entry.years}y {entry.months}m {entry.days}d
      </p>
    </div>
  );
}

export default HistoryItem;
