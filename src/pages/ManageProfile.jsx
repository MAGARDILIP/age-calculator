import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { createProfile, getProfileById, updateProfile } from "../services/profileService";

const ManageProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(id);

  const [formData, setFormData] = useState({ name: "", dob: "", relation: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(isEditing);

  useEffect(() => {
    if (isEditing) {
      getProfileById(id)
        .then(data => {
          setFormData(data);
          setLoading(false);
        })
        .catch(() => {
          alert("Profile not found");
          navigate("/profiles");
        });
    }
  }, [id, isEditing, navigate]);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.dob) {
      newErrors.dob = "Date of Birth is required.";
    } else {
      const selectedDate = new Date(formData.dob);
      if (selectedDate > new Date()) {
        newErrors.dob = "Date of Birth cannot be in the future.";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      if (isEditing) {
        await updateProfile(id, formData);
      } else {
        await createProfile({ ...formData, id: Date.now().toString() });
      }
      navigate("/profiles");
    } catch (err) {
      alert("Failed to save profile. Is json-server running?");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  if (loading) return <div className="card glass-card">Loading...</div>;

  return (
    <div className="card glass-card" style={{ maxWidth: '500px', margin: '0 auto', width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>{isEditing ? "Edit Profile" : "Add New Profile"}</h2>
        <Link to="/profiles" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Cancel</Link>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Name *</label>
          <input 
            type="text" 
            name="name" 
            className={`input-field ${errors.name ? 'error' : ''}`} 
            value={formData.name} 
            onChange={handleChange}
            placeholder="e.g. John Doe"
            style={{ width: '100%', borderColor: errors.name ? '#ff6b6b' : '' }}
          />
          {errors.name && <span style={{ color: '#ff6b6b', fontSize: '0.85rem' }}>{errors.name}</span>}
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Date of Birth *</label>
          <input 
            type="date" 
            name="dob" 
            className={`input-field ${errors.dob ? 'error' : ''}`} 
            value={formData.dob} 
            onChange={handleChange}
            style={{ width: '100%', borderColor: errors.dob ? '#ff6b6b' : '' }}
          />
          {errors.dob && <span style={{ color: '#ff6b6b', fontSize: '0.85rem' }}>{errors.dob}</span>}
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Relation (Optional)</label>
          <input 
            type="text" 
            name="relation" 
            className="input-field" 
            value={formData.relation || ""} 
            onChange={handleChange}
            placeholder="e.g. Brother, Friend"
            style={{ width: '100%' }}
          />
        </div>

        <button type="submit" className="btn btn-primary" style={{ marginTop: '10px' }}>
          {isEditing ? "Save Changes" : "Create Profile"}
        </button>
      </form>
    </div>
  );
};

export default ManageProfile;
