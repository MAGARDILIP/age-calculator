import React from "react";

/**
 * AgeBreakdown Component
 * Shows detailed age breakdown in different units.
 * Demonstrates: Props, Lists & Keys, JSX
 *
 * Props:
 *   - breakdown (object): { totalMonths, totalWeeks, totalDays, totalHours, totalMinutes }
 */
function AgeBreakdown({ breakdown }) {
  const items = [
    { label: "Total Months", value: breakdown.totalMonths.toLocaleString() },
    { label: "Total Weeks", value: breakdown.totalWeeks.toLocaleString() },
    { label: "Total Days", value: breakdown.totalDays.toLocaleString() },
    { label: "Total Hours", value: breakdown.totalHours.toLocaleString() },
    { label: "Total Minutes", value: breakdown.totalMinutes.toLocaleString() },
  ];

  return (
    <div className="glass-card age-breakdown">
      <h2 className="age-breakdown__heading">Detailed Breakdown</h2>
      <div className="age-breakdown__list">
        {items.map((item) => (
          <div className="age-breakdown__item" key={item.label}>
            <span className="age-breakdown__item-label">{item.label}</span>
            <span className="age-breakdown__item-value">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default React.memo(AgeBreakdown);
