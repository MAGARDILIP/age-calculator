import { useState, useEffect } from "react";
import { fetchYearFact } from "../services/api";

/**
 * FunFacts Component
 * Renders a list of fun facts about the user's birth date.
 * Integrates an external API to fetch a historical fact.
 */
function FunFacts({ facts, birthYear }) {
  const [historicalFact, setHistoricalFact] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!birthYear) return;

    const getFact = async () => {
      setLoading(true);
      setError(null);
      const fact = await fetchYearFact(birthYear);
      if (fact) {
        setHistoricalFact(fact);
      } else {
        setError(`Could not fetch a fact for ${birthYear}.`);
      }
      setLoading(false);
    };

    getFact();
  }, [birthYear]);

  return (
    <div className="glass-card fun-facts">
      <h2 className="fun-facts__heading">Fun Facts</h2>
      
      <div className="fun-facts__list">
        {facts.map((fact) => (
          <div className="fun-facts__item" key={fact.label}>
            <span className="fun-facts__icon">{fact.icon}</span>
            <div>
              <p className="fun-facts__label">{fact.label}</p>
              <p className="fun-facts__value">{fact.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* API Integration Section */}
      <div className="fun-facts__api-section" style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid var(--border-color)' }}>
        <h3 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>Historical Fact ({birthYear})</h3>
        {loading && <p style={{ fontSize: '0.9rem', color: '#888' }}>Loading historical fact...</p>}
        {error && <p style={{ fontSize: '0.9rem', color: '#ff6b6b' }}>{error}</p>}
        {!loading && !error && historicalFact && (
          <p style={{ fontSize: '0.95rem', lineHeight: '1.5', fontStyle: 'italic' }}>
            "{historicalFact}"
          </p>
        )}
      </div>
    </div>
  );
}

export default FunFacts;
