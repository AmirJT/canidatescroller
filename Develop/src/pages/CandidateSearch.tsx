import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCandidate = async () => {
    setLoading(true);
    setError(null);
    try {
      const candidates = await searchGithub();
      if (candidates.length > 0) {
        const userDetails = await searchGithubUser(candidates[0].login);
        setCandidate(userDetails);
      } else {
        setCandidate(null);
      }
    } catch (err) {
      setError('Failed to fetch candidate data.');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = () => {
    if (candidate) {
      const savedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
      localStorage.setItem('savedCandidates', JSON.stringify([...savedCandidates, candidate]));
      fetchCandidate();
    }
  };

  const handleReject = () => {
    fetchCandidate();
  };

  useEffect(() => {
    fetchCandidate();
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;
  if (!candidate) return <h1>No more candidates to review!</h1>;

  return (
    <div>
    <h1>Candidate Search</h1>
    <div>
      <img src={candidate.avatar_url} alt={candidate.login} style={{ width: '150px' }} />
      <h2>{candidate.name || 'Anonymous'} ({candidate.login})</h2>
      {candidate.location && <p>Location: {candidate.location}</p>}
      {candidate.email && <p>Email: {candidate.email}</p>}
      {candidate.company && <p>Company: {candidate.company}</p>}
      <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">GitHub Profile</a>
      <div>
        <button onClick={handleSave}>+</button>
        <button onClick={handleReject}>-</button>
      </div>
    </div>
  </div>
  
  );
};

export default CandidateSearch;
