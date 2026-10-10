const STORAGE_KEY = "age_calculator_profiles";

const getStorageProfiles = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

const saveStorageProfiles = (profiles) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(profiles));
};

export const getProfiles = async () => {
  return Promise.resolve(getStorageProfiles());
};

export const getProfileById = async (id) => {
  const profiles = getStorageProfiles();
  const profile = profiles.find(p => p.id === id || p.id === String(id));
  if (!profile) throw new Error("Failed to fetch profile");
  return Promise.resolve(profile);
};

export const createProfile = async (profileData) => {
  const profiles = getStorageProfiles();
  const newProfile = { ...profileData, id: Date.now().toString() };
  profiles.push(newProfile);
  saveStorageProfiles(profiles);
  return Promise.resolve(newProfile);
};

export const updateProfile = async (id, profileData) => {
  const profiles = getStorageProfiles();
  const index = profiles.findIndex(p => p.id === id || p.id === String(id));
  if (index === -1) throw new Error("Failed to update profile");
  
  profiles[index] = { ...profileData, id };
  saveStorageProfiles(profiles);
  return Promise.resolve(profiles[index]);
};

export const deleteProfile = async (id) => {
  let profiles = getStorageProfiles();
  profiles = profiles.filter(p => p.id !== id && p.id !== String(id));
  saveStorageProfiles(profiles);
  return Promise.resolve({ success: true });
};
