import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="nav">
      <NavLink to="/" className="nav-link" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/SavedCandidates" className="nav-link" activeClassName="active">
        Potential Candidates
      </NavLink>
    </nav>
  );
};

export default Nav;
