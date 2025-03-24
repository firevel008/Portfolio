// Check if the user is authenticated
export const isAuthenticated = () => {
  const token = localStorage.getItem('authToken');
  return token ? true : false;
};

// Set authentication token in local storage
export const login = (token) => {
  localStorage.setItem('authToken', token);
  window.dispatchEvent(new Event("storage")); // Notify React about auth change
  console.log('auth-file', token);
};

// Clear authentication token from local storage
export const logout = () => {
  localStorage.removeItem('authToken');
  window.dispatchEvent(new Event("storage")); // Notify React about logout
};