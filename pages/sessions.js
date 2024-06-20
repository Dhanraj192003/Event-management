// pages/sessions.js
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function SessionsPage() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    async function fetchSessions() {
      try {
        const response = await axios.get('/api/sessions');
        setSessions(response.data.data);
      } catch (error) {
        console.error('Error fetching sessions:', error);
      }
    }

    fetchSessions();
  }, []);

  return (
    <div>
      <h1>Sessions</h1>
      <ul>
        {sessions.map(session => (
          <li key={session._id}>
            {session.title} - {session.date}
            {/* Add buttons for Update and Delete */}
          </li>
        ))}
      </ul>
      {/* Add form for adding new sessions */}
    </div>
  );
}
