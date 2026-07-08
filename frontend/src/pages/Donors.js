import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Donors() {
  const [donors, setDonors] = useState([]);
  const [name, setName] = useState('');

  const fetchDonors = async () => {
    const res = await axios.get('http://localhost:5000/api/donors');
    setDonors(res.data);
  };

  const addDonor = async () => {
    if (name) {
      await axios.post('http://localhost:5000/api/donors', { name });
      setName('');
      fetchDonors();
    }
  };

  useEffect(() => {
    fetchDonors();
  }, []);

  return (
    <div>
      <h2>Donors</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <button onClick={addDonor}>Add</button>
      <ul>
        {donors.map(d => <li key={d._id}>{d.name}</li>)}
      </ul>
    </div>
  );
}