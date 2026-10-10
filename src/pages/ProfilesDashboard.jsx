import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProfiles, deleteProfile } from "../services/profileService";
import { calculateAge, getFunFacts } from "../utils/ageCalculator";

const ProfilesDashboard = () => {
  const [profiles, setProfiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [zodiacFilter, setZodiacFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await getProfiles();
      setProfiles(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this profile?")) {
      try {
        await deleteProfile(id);
        setProfiles(profiles.filter(p => p.id !== id));
      } catch (err) {
        alert("Failed to delete profile");
      }
    }
  };

  const filteredProfiles = profiles.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Calculate zodiac sign dynamically
    const facts = getFunFacts(new Date(p.dob));
    const zodiacFact = facts.find(f => f.label === "Zodiac Sign");
    const zodiac = zodiacFact ? zodiacFact.value.split(" ")[0] : "";
    
    const matchesZodiac = zodiacFilter ? zodiac === zodiacFilter : true;
    return matchesSearch && matchesZodiac;
  });

  const zodiacSigns = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];

  return (
    <div className="card glass-card" style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>Saved Profiles</h2>
        <Link to="/profiles/new" className="btn btn-primary" style={{ textDecoration: 'none' }}>+ Add Profile</Link>
      </div>

      <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', flexWrap: 'wrap' }}>
        <input 
          type="text" 
          placeholder="Search by name..." 
          className="input-field" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ flex: 1, minWidth: '200px' }}
        />
        <select 
          className="input-field" 
          value={zodiacFilter} 
          onChange={(e) => setZodiacFilter(e.target.value)}
          style={{ width: 'auto', backgroundColor: 'var(--card-bg)', color: 'var(--text-color)' }}
        >
          <option value="" style={{ color: '#000' }}>All Zodiac Signs</option>
          {zodiacSigns.map(sign => <option key={sign} value={sign} style={{ color: '#000' }}>{sign}</option>)}
        </select>
      </div>

      {loading && <p>Loading profiles...</p>}
      {error && <p style={{ color: '#ff6b6b' }}>Error: {error}</p>}
      
      {!loading && !error && filteredProfiles.length === 0 && (
        <div style={{ textAlign: 'center', padding: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
          <p>No profiles found.</p>
        </div>
      )}

      <div style={{ display: 'grid', gap: '15px' }}>
        {filteredProfiles.map(profile => {
          const age = calculateAge(new Date(profile.dob));
          return (
            <div key={profile.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
              <div>
                <h3 style={{ margin: '0 0 5px 0' }}>{profile.name}</h3>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  {profile.dob} • {age.years} Years Old
                </p>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Link to={`/profiles/edit/${profile.id}`} className="btn" style={{ padding: '8px 12px', fontSize: '0.9rem', textDecoration: 'none', background: 'rgba(255,255,255,0.1)' }}>Edit</Link>
                <button className="btn" onClick={() => handleDelete(profile.id)} style={{ padding: '8px 12px', fontSize: '0.9rem', background: 'rgba(255, 107, 107, 0.2)', color: '#ff6b6b' }}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfilesDashboard;
