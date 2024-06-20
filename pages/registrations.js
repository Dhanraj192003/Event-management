// pages/registrations.js
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function RegistrationsPage() {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    async function fetchRegistrations() {
      try {
        const response = await axios.get('/api/registrations');
        setRegistrations(response.data.data);
      } catch (error) {
        console.error('Error fetching registrations:', error);
      }
    }

    fetchRegistrations();
  }, []);

  return (
    <div>
      <h1>Registrations</h1>
      <ul>
        {registrations.map(registration => (
          <li key={registration._id}>
            {registration.name} - {registration.email}
            {/* Add buttons for Update and Delete */}
          </li>
        ))}
      </ul>
      {/* Add form for adding new registrations */}
    </div>
  );
}
