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


// Resources

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


export const fetchMessages = async () => {
  const response = await fetch(`${API_BASE_URL}/chat/messages`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }

  const data = await response.json();
  return data;
};

export const sendMessage = async (message) => {
  const response = await fetch(`${API_BASE_URL}/chat/messages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify({ message }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }

  const data = await response.json();
  return data;
};

// Tracking

export const fetchProgressData = async () => {
    const response = await fetch(`${API_BASE_URL}/progress`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
  
    const data = await response.json();
    return data;
  };
  
  export const saveProgressData = async (progress) => {
    const response = await fetch(`${API_BASE_URL}/progress`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({ progress }),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
  
    const data = await response.json();
    return data;
  };
  
  export const fetchMoodData = async () => {
    const response = await fetch(`${API_BASE_URL}/mood`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
  
    const data = await response.json();
    return data;
  };
  
  export const saveMoodData = async (mood) => {
    const response = await fetch(`${API_BASE_URL}/mood`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({ mood }),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
  
    const data = await response.json();
    return data;
  };


  // Notifications

export const fetchNotifications = async () => {
    const response = await fetch(`${API_BASE_URL}/notifications`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
  
    const data = await response.json();
    return data;
  };
  

// Profile
// Add this to your existing api.js

export const fetchUserProfile = async () => {
    const response = await fetch(`${API_BASE_URL}/profile`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
  
    const data = await response.json();
    return data;
  };
  
  export const updateProfile = async (userData) => {
    const response = await fetch(`${API_BASE_URL}/profile`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(userData),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
  
    const data = await response.json();
    return data;
  };
  


// Dashboard

export const fetchDashboardData = async () => {
  const response = await fetch(`${API_BASE_URL}/dashboard`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }

  const data = await response.json();
  return data;
};


// calendar and Booking Modals

export const fetchCalendarEvents = async () => {
  const response = await fetch(`${API_BASE_URL}/calendar/events`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }

  const data = await response.json();
  return data;
};

export const createCalendarEvent = async (eventDetails) => {
  const response = await fetch(`${API_BASE_URL}/calendar/events`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(eventDetails),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }

  const data = await response.json();
  return data;
};
