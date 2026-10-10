const API_URL = "http://localhost:5000/profiles";

export const getProfiles = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Failed to fetch profiles");
  return response.json();
};

export const getProfileById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) throw new Error("Failed to fetch profile");
  return response.json();
};

export const createProfile = async (profileData) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(profileData),
  });
  if (!response.ok) throw new Error("Failed to create profile");
  return response.json();
};

export const updateProfile = async (id, profileData) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(profileData),
  });
  if (!response.ok) throw new Error("Failed to update profile");
  return response.json();
};

export const deleteProfile = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete profile");
  return response.json();
};
