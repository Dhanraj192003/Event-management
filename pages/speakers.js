import { useState, useEffect } from 'react';

export default function Speakers() {
  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    async function fetchSpeakers() {
      const res = await fetch('/api/speakers');
      const data = await res.json();
      setSpeakers(data.data);
    }

    fetchSpeakers();
  }, []);

  return (
    <div>
      <h1>Speakers</h1>
      <ul>
        {speakers.map((speaker) => (
          <li key={speaker._id}>
            <h2>{speaker.name}</h2>
            <p>{speaker.bio}</p>
            {speaker.profilePicture && <img src={speaker.profilePicture} alt={speaker.name} />}
          </li>
        ))}
      </ul>
    </div>
  );
}
