import { useState, useEffect } from 'react';
import { Candidate } from '../interfaces/Candidate.interface';

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const candidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    setSavedCandidates(candidates);
  }, []);

  if (savedCandidates.length === 0) {
    return <h1>No saved candidates available.</h1>;
  }

  return (
    <div>
      <h1>Potential Candidates</h1>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Username</th>
            <th>Location</th>
            <th>Email</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {savedCandidates.map((candidate) => (
            <tr key={candidate.id}>
              <td><img src={candidate.avatar_url} alt={candidate.login} style={{ width: '50px' }} /></td>
              <td>{candidate.name || 'N/A'}</td>
              <td>{candidate.login}</td>
              <td>{candidate.location || 'N/A'}</td>
              <td>{candidate.email || 'N/A'}</td>
              <td>{candidate.company || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SavedCandidates;
