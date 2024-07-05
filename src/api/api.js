// api/api.js

const API_BASE_URL = 'http://localhost:5000/api'; // Change to your API base URL

export const login = async (email, password) => {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }

  const data = await response.json();
  // Save the token to local storage or state management
  localStorage.setItem('token', data.token);
  return data;
};

export const register = async (email, password) => {
  const response = await fetch(`${API_BASE_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }

  const data = await response.json();
  // Save the token to local storage or state management
  localStorage.setItem('token', data.token);
  return data;
};

export const fetchResources = async () => {
  const response = await fetch(`${API_BASE_URL}/resources`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }

  const data = await response.json();
  return data;
};

// Add more API methods as needed
