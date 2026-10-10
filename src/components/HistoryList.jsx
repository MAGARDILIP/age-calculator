import HistoryItem from "./HistoryItem";

/**
 * HistoryList Component
 * Displays a list of past calculations with a clear button.
 * Demonstrates: Props, Lists & Keys, Conditional Rendering, Event Handling
 *
 * Props:
 *   - history (Array<{ id, dob, years, months, days, timestamp }>)
 *   - onClear (function): Callback to clear all history
 */
function HistoryList({ history, onClear }) {
  return (
    <div className="glass-card history">
      <div className="history__header">
        <h2 className="history__heading">
          Calculation History ({history.length})
        </h2>
        {history.length > 0 && (
          <button
            className="history__clear-btn"
            onClick={onClear}
            id="clear-history-btn"
          >
            Clear All
          </button>
        )}
      </div>

      {history.length === 0 ? (
        <p className="history__empty">
          No calculations yet. Enter a date above to get started!
        </p>
      ) : (
        <div className="history__list">
          {history.map((entry) => (
            <HistoryItem key={entry.id} entry={entry} />
          ))}
        </div>
      )}
    </div>
  );
}

export default HistoryList;
